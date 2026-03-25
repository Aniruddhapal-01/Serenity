/**
 * SERENITY - Mental Wellness App
 * Main JavaScript (Shared Utilities + Dark Mode + Chatbot)
 */

// ============================================================
// DARK MODE
// ============================================================

const darkToggle = document.getElementById("darkToggle");
const savedTheme = localStorage.getItem("serenity_theme") || "light";
document.documentElement.setAttribute("data-theme", savedTheme);
if (darkToggle) darkToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";

if (darkToggle) {
  darkToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("serenity_theme", next);
    darkToggle.textContent = next === "dark" ? "☀️" : "🌙";
  });
}

// ============================================================
// HAMBURGER MENU
// ============================================================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("open");
    }
  });
}

// ============================================================
// ACTIVE NAV LINK
// ============================================================

const currentPath = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach((link) => {
  const href = link.getAttribute("href");
  if (href === currentPath || (currentPath === "" && href === "index.html")) {
    link.classList.add("active");
  }
});

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================

function showToast(message, type = "success", duration = 3000) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const icons = { success: "✓", warning: "⚠", error: "✕" };
  toast.innerHTML = `<span>${icons[type] || "ℹ"}</span> ${message}`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ============================================================
// CHATBOT
// ============================================================

const chatToggleBtn = document.getElementById("chatToggle");
const chatWindow = document.getElementById("chatWindow");
const chatCloseBtn = document.getElementById("chatClose");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const chatSendBtn = document.getElementById("chatSend");
const quickRepliesContainer = document.getElementById("quickReplies");

let chatOpened = false;

function toggleChat() {
  if (!chatWindow) return;
  chatWindow.classList.toggle("open");

  if (!chatOpened && chatWindow.classList.contains("open")) {
    chatOpened = true;
    setTimeout(() => addBotMessage(CHAT_RESPONSES.greetings[0]), 400);
    setTimeout(() => renderQuickReplies(), 1200);
  }
}

if (chatToggleBtn) chatToggleBtn.addEventListener("click", toggleChat);
if (chatCloseBtn) chatCloseBtn.addEventListener("click", () => chatWindow.classList.remove("open"));

function addBotMessage(text) {
  if (!chatMessages) return;
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble bot";
  bubble.textContent = text;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addUserMessage(text) {
  if (!chatMessages) return;
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble user";
  bubble.textContent = text;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function renderQuickReplies() {
  if (!quickRepliesContainer) return;
  quickRepliesContainer.innerHTML = "";
  QUICK_REPLIES.forEach((reply) => {
    const btn = document.createElement("button");
    btn.className = "quick-reply";
    btn.textContent = reply;
    btn.addEventListener("click", () => {
      handleUserInput(reply);
      quickRepliesContainer.innerHTML = "";
    });
    quickRepliesContainer.appendChild(btn);
  });
}

function handleUserInput(text) {
  const normalized = text.toLowerCase();
  addUserMessage(text);

  // Show typing indicator
  const typing = document.createElement("div");
  typing.className = "chat-bubble bot";
  typing.innerHTML = '<span style="opacity:0.5">•••</span>';
  typing.id = "typing";
  if (chatMessages) {
    chatMessages.appendChild(typing);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  setTimeout(() => {
    document.getElementById("typing")?.remove();

    let response;
    if (/(hello|hi|hey|good morning|good evening)/i.test(normalized)) {
      response = CHAT_RESPONSES.greetings[1];
    } else if (/(anxious|anxiety|panic|worry|worried|nervous)/i.test(normalized)) {
      response = getRandom(CHAT_RESPONSES.anxiety);
    } else if (/(sad|depress|low|hopeless|empty|numb)/i.test(normalized)) {
      response = getRandom(CHAT_RESPONSES.depression);
    } else if (/(stress|overwhelm|pressure|burnout)/i.test(normalized)) {
      response = getRandom(CHAT_RESPONSES.stress);
    } else if (/(sleep|insomnia|tired|exhausted|rest)/i.test(normalized)) {
      response = getRandom(CHAT_RESPONSES.sleep);
    } else if (/(relationship|partner|love|boyfriend|girlfriend|spouse|marriage)/i.test(normalized)) {
      response = getRandom(CHAT_RESPONSES.relationships);
    } else if (/(assessment|quiz|test|score)/i.test(normalized)) {
      response = CHAT_RESPONSES.assessment[0];
    } else if (/(help|what can|features|options)/i.test(normalized)) {
      response = CHAT_RESPONSES.help[0];
    } else {
      response = getRandom(CHAT_RESPONSES.default);
    }

    addBotMessage(response);
  }, 800 + Math.random() * 500);
}

if (chatSendBtn) {
  chatSendBtn.addEventListener("click", () => {
    const text = chatInput?.value.trim();
    if (text) {
      handleUserInput(text);
      chatInput.value = "";
    }
  });
}

if (chatInput) {
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const text = chatInput.value.trim();
      if (text) {
        handleUserInput(text);
        chatInput.value = "";
      }
    }
  });
}

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getFromStorage(key, fallback = null) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatDateTime(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now - date;
  const diffHrs = diffMs / (1000 * 60 * 60);

  if (diffHrs < 1) return "Just now";
  if (diffHrs < 24) return `${Math.floor(diffHrs)}h ago`;
  if (diffHrs < 48) return "Yesterday";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// ============================================================
// SMOOTH SCROLL ANIMATIONS (Intersection Observer)
// ============================================================

const observeEls = document.querySelectorAll(".fade-in");
if (observeEls.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observeEls.forEach((el) => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
}
