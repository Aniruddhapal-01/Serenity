/**
 * SERENITY - Mental Wellness App
 * Questions Data & Configuration
 */

// ============================================================
// MENTAL HEALTH ASSESSMENT QUESTIONS
// Inspired by GAD-7 (Anxiety) and PHQ-9 (Depression) scales
// Scale: 0 = Not at all, 1 = Several days, 2 = More than half, 3 = Nearly every day
// ============================================================

const ASSESSMENT_OPTIONS = [
  { label: "Not at all", value: 0 },
  { label: "Several days", value: 1 },
  { label: "More than half the days", value: 2 },
  { label: "Nearly every day", value: 3 },
];

const ANXIETY_QUESTIONS = [
  {
    id: "a1",
    text: "Over the past two weeks, how often have you felt nervous, anxious, or on edge?",
    category: "anxiety",
  },
  {
    id: "a2",
    text: "How often have you been unable to stop or control worrying?",
    category: "anxiety",
  },
  {
    id: "a3",
    text: "How often have you worried too much about different things?",
    category: "anxiety",
  },
  {
    id: "a4",
    text: "How often have you had trouble relaxing?",
    category: "anxiety",
  },
  {
    id: "a5",
    text: "How often have you been so restless that it's hard to sit still?",
    category: "anxiety",
  },
  {
    id: "a6",
    text: "How often have you become easily annoyed or irritable?",
    category: "anxiety",
  },
  {
    id: "a7",
    text: "How often have you felt afraid as if something awful might happen?",
    category: "anxiety",
  },
];

const DEPRESSION_QUESTIONS = [
  {
    id: "d1",
    text: "Over the past two weeks, how often have you felt little interest or pleasure in doing things?",
    category: "depression",
  },
  {
    id: "d2",
    text: "How often have you felt down, depressed, or hopeless?",
    category: "depression",
  },
  {
    id: "d3",
    text: "How often have you had trouble falling or staying asleep, or sleeping too much?",
    category: "depression",
  },
  {
    id: "d4",
    text: "How often have you felt tired or had little energy?",
    category: "depression",
  },
  {
    id: "d5",
    text: "How often have you had poor appetite or been overeating?",
    category: "depression",
  },
  {
    id: "d6",
    text: "How often have you felt bad about yourself, or that you are a failure or have let yourself down?",
    category: "depression",
  },
  {
    id: "d7",
    text: "How often have you had trouble concentrating on things like reading or watching TV?",
    category: "depression",
  },
  {
    id: "d8",
    text: "How often have you moved or spoken so slowly (or been restless/fidgety) that others may have noticed?",
    category: "depression",
  },
  {
    id: "d9",
    text: "How often have you had thoughts that you would be better off not trying, or of hurting yourself?",
    category: "depression",
  },
];

// ============================================================
// ASSESSMENT RESULT THRESHOLDS & SUGGESTIONS
// ============================================================

const ANXIETY_LEVELS = {
  low: { min: 0, max: 7, label: "Low Anxiety", emoji: "🌿", color: "#388E3C" },
  moderate: { min: 8, max: 14, label: "Moderate Anxiety", emoji: "🌤", color: "#E65100" },
  high: { min: 15, max: 21, label: "High Anxiety", emoji: "⛈", color: "#C62828" },
};

const DEPRESSION_LEVELS = {
  low: { min: 0, max: 9, label: "Low Depressive Symptoms", emoji: "☀️", color: "#388E3C" },
  moderate: { min: 10, max: 18, label: "Moderate Depressive Symptoms", emoji: "🌥", color: "#E65100" },
  high: { min: 19, max: 27, label: "High Depressive Symptoms", emoji: "🌧", color: "#C62828" },
};

const SUGGESTIONS = {
  anxiety: {
    low: {
      title: "You're doing well!",
      description:
        "Your anxiety levels appear to be low. These general wellness practices can help you maintain your wellbeing.",
      suggestions: [
        {
          icon: "🌬️",
          title: "Box Breathing",
          text: "Try 4-7-8 breathing: inhale for 4 sec, hold for 7, exhale for 8. Activates the parasympathetic system.",
        },
        {
          icon: "🧘",
          title: "Mindfulness",
          text: "Spend 10 minutes daily in mindful awareness. Apps like Headspace or Calm offer great guided sessions.",
        },
        {
          icon: "🚶",
          title: "Nature Walks",
          text: "A 20-minute walk in a green space can reduce stress hormones and boost mood significantly.",
        },
        {
          icon: "📝",
          title: "Gratitude Journal",
          text: "Write 3 things you're grateful for each morning. Rewires your brain toward positivity.",
        },
      ],
    },
    moderate: {
      title: "Some areas need attention",
      description:
        "You may be experiencing moderate anxiety. These lifestyle strategies can help manage your stress and worry.",
      suggestions: [
        {
          icon: "⏰",
          title: "Worry Time",
          text: "Schedule 20 min daily as 'worry time'. Outside this window, postpone anxious thoughts.",
        },
        {
          icon: "🏃",
          title: "Regular Exercise",
          text: "30 min of moderate exercise 5x per week reduces anxiety as effectively as some medications.",
        },
        {
          icon: "😴",
          title: "Sleep Hygiene",
          text: "Consistent bedtime, no screens 1hr before sleep, and a cool dark room improve sleep quality dramatically.",
        },
        {
          icon: "🫖",
          title: "Reduce Stimulants",
          text: "Limit caffeine after noon and alcohol altogether—both worsen anxiety symptoms significantly.",
        },
        {
          icon: "🤝",
          title: "Social Connection",
          text: "Share your feelings with a trusted friend. Social support is a powerful buffer against anxiety.",
        },
        {
          icon: "📱",
          title: "Digital Detox",
          text: "Take a 1-hour break from screens each day, especially social media. Reduces cognitive overload.",
        },
      ],
    },
    high: {
      title: "Professional support is recommended",
      description:
        "Your responses suggest high anxiety. This tool is not a diagnosis. Please consider speaking with a mental health professional.",
      suggestions: [
        {
          icon: "👨‍⚕️",
          title: "Seek Professional Help",
          text: "A licensed therapist or counselor can provide evidence-based treatments like CBT that are highly effective.",
        },
        {
          icon: "🫁",
          title: "Grounding Techniques",
          text: "During panic: name 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste.",
        },
        {
          icon: "🛁",
          title: "Self-Care Rituals",
          text: "Warm baths, gentle stretching, and soothing music can activate your body's relaxation response.",
        },
        {
          icon: "📵",
          title: "Limit News Exposure",
          text: "Set strict limits on news consumption. Constant exposure amplifies anxiety in already anxious minds.",
        },
      ],
    },
  },

  depression: {
    low: {
      title: "Your mood looks balanced",
      description:
        "Great news! Your responses suggest low depressive symptoms. Here are some practices to keep your mood thriving.",
      suggestions: [
        {
          icon: "☀️",
          title: "Morning Sunlight",
          text: "Get 10-20 minutes of morning sunlight. Regulates circadian rhythm and boosts serotonin production.",
        },
        {
          icon: "🎵",
          title: "Music & Creativity",
          text: "Engage with music, art, or creative hobbies. Creative expression supports emotional processing.",
        },
        {
          icon: "🥗",
          title: "Nutrition",
          text: "A diet rich in omega-3s, leafy greens, and fermented foods supports brain health and mood stability.",
        },
        {
          icon: "🙏",
          title: "Mindfulness Practice",
          text: "Regular meditation builds mental resilience and emotional regulation over time.",
        },
      ],
    },
    moderate: {
      title: "Consider some lifestyle changes",
      description:
        "You may be experiencing moderate depressive symptoms. Small, consistent lifestyle changes can make a meaningful difference.",
      suggestions: [
        {
          icon: "🏋️",
          title: "Exercise Regularly",
          text: "Exercise is one of the most powerful natural antidepressants. Even a 20-min walk helps.",
        },
        {
          icon: "👥",
          title: "Fight Isolation",
          text: "Depression pulls us toward isolation, which worsens it. Reach out to one person each day.",
        },
        {
          icon: "📖",
          title: "Behavioral Activation",
          text: "Schedule small pleasant activities even when unmotivated. Action often precedes motivation.",
        },
        {
          icon: "🌿",
          title: "Nature Therapy",
          text: "Spending time in nature reduces rumination and activates brain regions linked to wellbeing.",
        },
        {
          icon: "💧",
          title: "Hydration & Sleep",
          text: "Dehydration and poor sleep amplify depressive symptoms. Prioritize both consistently.",
        },
        {
          icon: "✍️",
          title: "Expressive Writing",
          text: "Write about your thoughts and feelings for 20 minutes a day. Journaling can reduce depression symptoms.",
        },
      ],
    },
    high: {
      title: "Please reach out for support",
      description:
        "Your responses suggest significant depressive symptoms. This is not a diagnosis, but we strongly encourage you to speak with a mental health professional.",
      suggestions: [
        {
          icon: "👩‍⚕️",
          title: "Professional Help",
          text: "Therapy (especially CBT) and/or medication can be highly effective. You don't have to face this alone.",
        },
        {
          icon: "💙",
          title: "Be Kind to Yourself",
          text: "You're dealing with a health challenge. Self-compassion—treating yourself like a good friend—is essential.",
        },
        {
          icon: "🏠",
          title: "Safe Environment",
          text: "Create small comforts in your space: soft lighting, plants, familiar scents. Your environment matters.",
        },
        {
          icon: "📞",
          title: "Crisis Support",
          text: "If you're in distress, please contact a crisis helpline. There are people who want to help you.",
        },
      ],
    },
  },
};

// ============================================================
// RELATIONSHIP QUESTIONS
// ============================================================

const RELATIONSHIP_QUESTIONS = {
  communication: {
    title: "Communication",
    icon: "💬",
    description: "How openly do you communicate with your partner?",
    questions: [
      {
        id: "c1",
        text: "We can talk openly about our feelings without fear of judgment.",
        positiveDirection: true,
      },
      {
        id: "c2",
        text: "My partner listens attentively when I express concerns.",
        positiveDirection: true,
      },
      {
        id: "c3",
        text: "I feel heard and understood in our conversations.",
        positiveDirection: true,
      },
      {
        id: "c4",
        text: "We avoid important topics to prevent arguments.",
        positiveDirection: false,
      },
    ],
  },
  trust: {
    title: "Trust & Respect",
    icon: "🤝",
    description: "How safe and respected do you feel?",
    questions: [
      {
        id: "t1",
        text: "I trust my partner completely with my feelings and vulnerabilities.",
        positiveDirection: true,
      },
      {
        id: "t2",
        text: "My partner respects my boundaries and personal space.",
        positiveDirection: true,
      },
      {
        id: "t3",
        text: "I feel safe expressing my true self in this relationship.",
        positiveDirection: true,
      },
      {
        id: "t4",
        text: "My partner sometimes makes me feel guilty or ashamed.",
        positiveDirection: false,
      },
    ],
  },
  conflict: {
    title: "Conflict & Growth",
    icon: "⚖️",
    description: "How do you navigate disagreements together?",
    questions: [
      {
        id: "f1",
        text: "When we disagree, we focus on the issue—not attacking each other.",
        positiveDirection: true,
      },
      {
        id: "f2",
        text: "After conflicts, we usually reach a compromise or understanding.",
        positiveDirection: true,
      },
      {
        id: "f3",
        text: "We both take responsibility for our part in problems.",
        positiveDirection: true,
      },
      {
        id: "f4",
        text: "Arguments often escalate to yelling, criticism, or stonewalling.",
        positiveDirection: false,
      },
    ],
  },
};

const RELATIONSHIP_SCALE = [
  { label: "Never", value: 0 },
  { label: "Rarely", value: 1 },
  { label: "Sometimes", value: 2 },
  { label: "Often", value: 3 },
  { label: "Always", value: 4 },
];

const RELATIONSHIP_RESULTS = {
  healthy: {
    min: 70,
    label: "Healthy Relationship",
    icon: "💚",
    color: "#388E3C",
    description: "Your relationship shows strong foundations of trust, communication, and mutual respect. Keep nurturing these qualities.",
    tips: [
      "Continue having regular check-ins about each other's needs",
      "Celebrate each other's individuality and growth",
      "Express appreciation daily—small gestures matter enormously",
      "Keep growing together through shared experiences",
    ],
    showRedFlags: false,
  },
  attention: {
    min: 40,
    label: "Needs Attention",
    icon: "💛",
    color: "#E65100",
    description: "Your relationship has strengths, but some areas could use intentional work. Growth is possible with effort from both partners.",
    tips: [
      "Consider couples counseling—it's a sign of strength, not weakness",
      "Practice active listening: repeat back what you heard before responding",
      "Set aside 30 minutes weekly for an uninterrupted 'state of us' talk",
      "Work on one specific area of improvement at a time",
    ],
    showRedFlags: false,
  },
  toxic: {
    min: 0,
    label: "Potentially Concerning",
    icon: "🔴",
    color: "#C62828",
    description: "Your responses suggest this relationship may have some unhealthy patterns. Your wellbeing is the top priority.",
    tips: [
      "Speak with a therapist or counselor—individually or together",
      "Connect with trusted friends and family for support",
      "Reflect honestly on whether you feel safe and valued",
      "Know that healthy relationships are possible, and you deserve one",
    ],
    showRedFlags: true,
  },
};

const RED_FLAGS = [
  "Consistent patterns of disrespect, criticism, or contempt",
  "Feeling afraid of your partner's reactions or moods",
  "Isolation from friends, family, or support systems",
  "Control over finances, appearance, or social life",
  "Emotional manipulation such as gaslighting or guilt-tripping",
  "Dismissal of your feelings or experiences",
];

// ============================================================
// CHATBOT RESPONSES
// ============================================================

const CHAT_RESPONSES = {
  greetings: [
    "Hello! I'm Sage, your wellness companion 🌿 How are you feeling today?",
    "Hi there! I'm here to support your wellness journey. What's on your mind?",
  ],
  anxiety: [
    "Anxiety can feel overwhelming, but you're not alone. Have you tried the 4-7-8 breathing technique? Inhale for 4 seconds, hold for 7, exhale for 8. It activates your body's relaxation response. 🌬️",
    "When anxiety hits, grounding can help. Try naming: 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste. It brings you back to the present moment. 🌿",
    "Anxiety often stems from our thoughts about the future. Try asking yourself: 'Is this thought a fact or a story I'm telling myself?' This small shift can create breathing room. 💙",
  ],
  depression: [
    "Feeling down is hard. One small thing that can help is behavioral activation—doing something you usually enjoy, even when you don't feel like it. Action can come before motivation. 🌱",
    "Depression often lies to us, telling us nothing will help. But small steps do add up. Could you try one tiny thing today—a short walk, a glass of water in sunlight? 🌤",
    "You're reaching out, and that takes courage. Social connection, even brief, can interrupt the isolation spiral. Is there one person you could send a quick message to today? 💙",
  ],
  stress: [
    "Stress is your body's signal that something needs attention. Try to identify what's most urgent vs. important—often we stress most about the urgent but not truly important things. 🎯",
    "When stressed, our breathing becomes shallow, which amplifies the feeling. Try slow, deep belly breaths for just 2 minutes. It genuinely works on the nervous system. 🫁",
    "Progressive muscle relaxation can help with stress—tense each muscle group for 5 seconds, then release. Start from your feet and work upward. 🧘",
  ],
  sleep: [
    "Sleep is foundational for mental health. A consistent sleep-wake schedule, even on weekends, is the single most powerful sleep habit you can build. 😴",
    "Try the 'worry dump' before bed—write down everything on your mind, then close the journal. This externalizes the mental loop, making it easier to let go. 📝",
    "Keep your bedroom for sleep only. No phones, no laptops. The association between your bed and sleep strengthens over time. 🛏️",
  ],
  relationships: [
    "Healthy relationships thrive on what Dr. John Gottman calls 'bids for connection'—small gestures where we seek attention or affection. Responding warmly to these builds intimacy. 💚",
    "Good communication often starts with curiosity, not defensiveness. Try replacing 'You always...' with 'I feel... when...' — it transforms conflict into connection. 🗣️",
  ],
  default: [
    "That's something worth reflecting on. Would you like to share more, or explore any specific aspect of your wellbeing? 🌿",
    "I hear you. Mental wellness is a journey, not a destination. What area would you most like support with—anxiety, mood, sleep, or relationships? 💙",
    "Thank you for sharing. Have you tried logging your mood in the Dashboard? Tracking patterns can reveal a lot about your wellbeing triggers. 📊",
  ],
  assessment: [
    "The assessment helps you understand your current mental wellness baseline. It's inspired by validated scales, but remember—it's a self-reflection tool, not a diagnosis. Want to give it a try? 📋",
  ],
  help: [
    "I can chat about: anxiety, depression, stress, sleep, relationships, and general wellness. I can also guide you to our Assessment, Relationship Checker, or Mood Dashboard. What would you like? 🌱",
  ],
};

const QUICK_REPLIES = [
  "I feel anxious",
  "I'm feeling low",
  "Can't sleep",
  "Stressed out",
  "Relationship advice",
  "Take the assessment",
];

// ============================================================
// MOOD EMOJIS
// ============================================================

const MOOD_MAP = {
  happy: { emoji: "😊", label: "Happy", color: "#FFC107" },
  content: { emoji: "😌", label: "Content", color: "#7C9E8B" },
  neutral: { emoji: "😐", label: "Neutral", color: "#7BB3D4" },
  stressed: { emoji: "😰", label: "Stressed", color: "#E8A598" },
  sad: { emoji: "😢", label: "Sad", color: "#9B8BB4" },
  angry: { emoji: "😠", label: "Angry", color: "#EF5350" },
  anxious: { emoji: "😟", label: "Anxious", color: "#FF7043" },
  tired: { emoji: "😴", label: "Tired", color: "#78909C" },
};
