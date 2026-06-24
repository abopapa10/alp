export const englishPsychologistFaqs = [
  {
    question: "Can foreigners receive therapy in Turkey?",
    answer:
      "Yes. Foreign residents, expats, international students, and visitors staying in Istanbul can access psychological counseling and psychotherapy services. Sessions are conducted in English, and appointments can be arranged for in-person meetings in Beşiktaş or secure online sessions.",
  },
  {
    question: "Do you provide therapy in English?",
    answer:
      "Yes. All intake, assessment, and therapy sessions can be provided fully in English. This makes the process accessible for expats, international professionals, and English-speaking clients who prefer not to use Turkish during emotional work.",
  },
  {
    question: "Do you offer online therapy sessions?",
    answer:
      "Yes. Online therapy is available for clients in Istanbul, elsewhere in Turkey, and internationally. Online sessions follow the same confidentiality standards as in-person therapy and are suitable for anxiety, depression, relationship concerns, expat adjustment, and personal growth.",
  },
  {
    question: "How much does therapy cost?",
    answer:
      "The session fee is 3,000 Turkish Lira per session. Fees are communicated clearly before booking so you can plan with transparency. If you need brief information before scheduling, you can contact the practice via WhatsApp or phone.",
  },
  {
    question: "How long does therapy usually take?",
    answer:
      "Session length is typically 50 minutes. The overall duration of therapy depends on your goals, the complexity of your concerns, and the pace that feels sustainable for you. Some clients benefit from short-term focused work; others prefer longer supportive therapy.",
  },
  {
    question: "How can I schedule an appointment?",
    answer:
      "You can schedule an appointment by phone or WhatsApp. Share a brief note about your request and preferred format (in-person or online). Available times are confirmed quickly so you can begin without unnecessary delay.",
  },
  {
    question: "Is therapy confidential?",
    answer:
      "Yes. Therapy is confidential within professional and ethical boundaries. Information shared in sessions is protected according to clinical ethics. Exceptions apply only where safety or legal obligations require disclosure, and this is explained clearly at the start.",
  },
  {
    question: "Is online therapy as effective as in-person therapy?",
    answer:
      "For many concerns — including anxiety, stress, depression, relationship issues, and expat adjustment — online therapy can be highly effective when sessions are conducted in a private setting with a secure connection. Some clients prefer in-person work; others prefer online flexibility. Format can be chosen based on your needs.",
  },
  {
    question: "Can international students benefit from therapy?",
    answer:
      "Absolutely. International students often face academic pressure, cultural adjustment, loneliness, and identity transitions. English-speaking therapy can provide structured support for stress management, self-esteem, relationships, and emotional wellbeing during study abroad.",
  },
  {
    question: "Do I need to speak Turkish to begin therapy?",
    answer:
      "No. Therapy can be provided entirely in English. This is especially helpful for expats, foreign residents, and international professionals who want to discuss emotional topics with precision in their preferred language.",
  },
  {
    question: "What is the difference between counseling and psychotherapy?",
    answer:
      "Counseling often focuses on specific current concerns and practical coping, while psychotherapy may explore deeper patterns over time. In practice, sessions are tailored to your goals — whether you need focused support for stress or longer-term work on recurring themes.",
  },
  {
    question: "Can couples attend therapy if only one partner speaks English fluently?",
    answer:
      "Yes, in many cases couples therapy can be conducted in English when both partners are comfortable with it. If language differences are central to conflict, this can be discussed during intake to ensure sessions remain effective and respectful for both partners.",
  },
  {
    question: "How do I know if I need an anxiety therapist?",
    answer:
      "Consider anxiety therapy if worry, panic symptoms, sleep disruption, avoidance, or physical tension are affecting daily life, work, or relationships. You do not need a formal diagnosis to begin — a structured assessment in the first sessions helps clarify next steps.",
  },
  {
    question: "Do you offer depression therapy in English?",
    answer:
      "Yes. Depression-related concerns such as low mood, loss of motivation, fatigue, hopelessness, and withdrawal can be addressed in English through evidence-informed psychotherapy tailored to your situation.",
  },
  {
    question: "What should I bring to the first session?",
    answer:
      "You do not need to prepare a formal document. It can help to note your main concerns, relevant history, and goals. The first session focuses on understanding your situation, explaining confidentiality, and agreeing on a practical plan.",
  },
  {
    question: "How often are sessions scheduled?",
    answer:
      "Weekly sessions are common at the beginning, especially when symptoms are active or during major transitions. Frequency may later shift to biweekly or maintenance intervals depending on progress and goals.",
  },
  {
    question: "Can I switch between online and in-person sessions?",
    answer:
      "Yes. Many international clients combine formats depending on travel, work, and preference. Format changes can be discussed in advance to maintain continuity and privacy.",
  },
  {
    question: "Is therapy suitable for short-term goals?",
    answer:
      "Yes. Some clients seek short-term support for a specific decision, relocation adjustment, or acute stress period. Others choose longer-term therapy for deeper patterns. Duration is discussed collaboratively.",
  },
  {
    question: "What if I do not feel comfortable after the first session?",
    answer:
      "Therapeutic fit matters. If you feel unsure, you can discuss it openly. Ethical practice includes respecting your choice to pause, adjust goals, or seek a different clinician if needed.",
  },
  {
    question: "Do you work with trauma-related concerns?",
    answer:
      "Trauma-related symptoms can be discussed during intake to determine appropriate support within psychotherapy scope. If specialized trauma treatment or psychiatric care is needed, referrals and safety planning are considered responsibly.",
  },
  {
    question: "Can I contact you between sessions?",
    answer:
      "Therapy primarily takes place during scheduled sessions. Brief administrative contact for scheduling is normal; clinical support between sessions is handled within professional boundaries discussed at the start of therapy.",
  },
  {
    question: "Are sessions available on weekends?",
    answer:
      "Availability varies. When you contact the practice, current appointment options — including selected weekend hours when offered — are shared so you can choose a suitable time.",
  },
] as const;

export function buildEnglishPsychologistFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: englishPsychologistFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
