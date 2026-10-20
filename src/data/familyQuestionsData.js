// Family Decision Support Prompts and Guidance Data
export const FAMILY_DISCUSSION_GUIDE = {
  corePrinciples: [
    {
      title: "Shared Curiosity Over Pressure",
      description: "Treat this conversation as an open discovery session rather than a final binding contract. Great careers evolve with practical experiments."
    },
    {
      title: "Skills Count More Than Labels",
      description: "Modern high-paying industries hire for demonstrated capabilities and portfolio projects, not just traditional degrees."
    },
    {
      title: "Financial Transparency",
      description: "Discuss program fees, potential scholarships, and duration openly so both student and parents feel secure."
    }
  ],

  studentToParentsQuestions: [
    {
      id: "sp_1",
      question: "What are your biggest worries or concerns regarding modern career paths like software, UI design, or green tech?",
      contextTip: "Understanding parental worry helps you address their underlying desire for your long-term security and happiness."
    },
    {
      id: "sp_2",
      question: "If I choose a focused 6 to 12 month vocational diploma with portfolio projects, how would you feel compared to a standard 4-year degree?",
      contextTip: "Frames the conversation around early practical skills and faster economic self-reliance."
    },
    {
      id: "sp_3",
      question: "What family budget or timeframe feels comfortable for our household for my skill training?",
      contextTip: "Prevents unspoken financial tension and allows evaluating installment or scholarship options."
    },
    {
      id: "sp_4",
      question: "Can we agree on a 6-month checkpoint to evaluate my project progress and internships together?",
      contextTip: "Demonstrates maturity and accountability, showing you are committed to delivering results."
    }
  ],

  parentToStudentQuestions: [
    {
      id: "ps_1",
      question: "What specific daily tasks in this career make you feel truly excited to wake up and learn?",
      contextTip: "Helps you see whether your child has researched the actual day-to-day reality or just a trendy title."
    },
    {
      id: "ps_2",
      question: "How do you plan to handle the steep parts of learning—like fixing tough bugs or mastering complex tools?",
      contextTip: "Encourages resilience and checks their readiness for disciplined independent practice."
    },
    {
      id: "ps_3",
      question: "What kind of entry-level employers or clients hire graduates from this specific training program?",
      contextTip: "Helps the student demonstrate market awareness and practical career outcomes."
    },
    {
      id: "ps_4",
      question: "How can we as parents best support your study environment and weekly focus at home?",
      contextTip: "Signals encouragement and reinforces family solidarity rather than criticism."
    }
  ],

  commonCareerTradeoffs: [
    {
      title: "Vocational Diploma vs 4-Year Academic Degree",
      benefit: "Enters workforce 2-3 years earlier with minimal educational debt; learns modern tools directly applied in jobs.",
      tradeoff: "May require later degree completion if seeking specific corporate enterprise or government PSU roles."
    },
    {
      title: "High-Growth Tech vs Traditional Core Sectors",
      benefit: "Significantly higher starting stipends, global remote flexibility, rapid year-on-year pay increases.",
      tradeoff: "Fast-evolving tools require lifetime continuous learning; project sprints can be fast-paced."
    },
    {
      title: "Hands-on Clean Energy / EV vs Office Desk Role",
      benefit: "Tangible physical contribution to green infrastructure; strong government subsidies and self-employment scope.",
      tradeoff: "Involves on-site physical work, outdoor installations, and strict field safety compliance."
    }
  ]
};
