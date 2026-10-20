// Career Assessment Questions with Plain English Explanations
export const ASSESSMENT_STEPS = [
  {
    stepNumber: 1,
    title: "Core Interests & Curiosity",
    shortTitle: "Interests",
    subtitle: "What kind of activities naturally pull your attention when you have free time?",
    whyItMatters: "Career satisfaction strongly correlates with working in areas that spark genuine curiosity. When your everyday tasks feel naturally interesting, learning new concepts feels exciting rather than exhausting.",
    questions: [
      {
        id: "q_interest_main",
        prompt: "Which of these activities sounds most engaging to you for an afternoon project?",
        whyNote: "Helps pinpoint whether you are drawn to visual creation, analytical problem solving, hands-on building, or working with people.",
        options: [
          {
            id: "tech_software",
            label: "Building an interactive app or web tool",
            sublabel: "Coding functions, seeing instant results on screen, solving logic puzzles.",
            icon: "Code",
            archetype: "Technical Builder",
            targetCareerId: "fullstack-dev"
          },
          {
            id: "creative_design",
            label: "Designing a visual brand or mobile app interface",
            sublabel: "Choosing color palettes, laying out clean screens, making things look modern.",
            icon: "Palette",
            archetype: "Creative Problem Solver",
            targetCareerId: "uiux-designer"
          },
          {
            id: "hands_on_green",
            label: "Assembling green energy circuits or testing EV motors",
            sublabel: "Working with physical tools, solar panels, batteries, and mechanical parts.",
            icon: "Zap",
            archetype: "Hands-on Specialist",
            targetCareerId: "solar-energy-tech"
          },
          {
            id: "data_investigation",
            label: "Uncovering trends in charts and answering 'Why?'",
            sublabel: "Digging through numbers, finding patterns, creating insightful visual graphs.",
            icon: "BarChart3",
            archetype: "Analytical Investigator",
            targetCareerId: "data-analyst"
          },
          {
            id: "health_helping",
            label: "Helping people stay healthy or running diagnostic tests",
            sublabel: "Understanding medical science, human well-being, and clinical precision.",
            icon: "HeartPulse",
            archetype: "Empathetic Caregiver",
            targetCareerId: "healthcare-lab-tech"
          }
        ]
      }
    ]
  },
  {
    stepNumber: 2,
    title: "Natural Strengths & Talents",
    shortTitle: "Strengths",
    subtitle: "What comes naturally to you when tackling a challenging obstacle?",
    whyItMatters: "Building on your existing strengths accelerates your growth much faster than trying to force skills that go against your natural grain. We match roles where your strengths become immediate advantages.",
    questions: [
      {
        id: "q_strength_type",
        prompt: "When friends or classmates ask you for assistance, what is it usually for?",
        whyNote: "Reflects how others view your capabilities and where you effortlessly deliver value.",
        options: [
          {
            id: "logic_troubleshooting",
            label: "Debugging a tricky glitch, computer setup, or logical problem",
            sublabel: "You don't give up until you figure out what went wrong and fix it.",
            icon: "CheckCircle",
            archetype: "Technical Builder",
            targetCareerId: "fullstack-dev"
          },
          {
            id: "visual_aesthetic",
            label: "Making presentations look stunning or choosing design aesthetics",
            sublabel: "You notice bad fonts, misaligned spacing, and have an eye for balance.",
            icon: "Sparkles",
            archetype: "Creative Problem Solver",
            targetCareerId: "uiux-designer"
          },
          {
            id: "mechanical_practical",
            label: "Fixing physical gadgets, electrical connections, or hardware",
            sublabel: "You understand how real-world physical machines operate and come together.",
            icon: "Wrench",
            archetype: "Hands-on Specialist",
            targetCareerId: "ev-maintenance-spec"
          },
          {
            id: "organized_accuracy",
            label: "Spotting tiny errors, organizing data, and keeping meticulous records",
            sublabel: "You care about precision and don't miss details others overlook.",
            icon: "FileCheck",
            archetype: "Analytical Investigator",
            targetCareerId: "healthcare-lab-tech"
          }
        ]
      }
    ]
  },
  {
    stepNumber: 3,
    title: "Preferred Work Environment",
    shortTitle: "Work Style",
    subtitle: "Where and how do you feel most productive and energized?",
    whyItMatters: "A role can sound great on paper, but if the physical work style clashes with your personality—like sitting at a desk all day versus active mobility—it quickly leads to burnout.",
    questions: [
      {
        id: "q_environment_style",
        prompt: "What kind of daily workplace atmosphere appeals to you most?",
        whyNote: "Clarifies whether you thrive in flexible remote spaces, specialized labs, or on-site field environments.",
        options: [
          {
            id: "remote_digital",
            label: "Modern tech setup with flexible remote or hybrid options",
            sublabel: "Working on a laptop with headphones, collaborative Slack/Figma chats.",
            icon: "Laptop",
            archetype: "Technical Builder",
            targetCareerId: "fullstack-dev"
          },
          {
            id: "collaborative_studio",
            label: "Creative studio or agile team brainstorming area",
            sublabel: "Whiteboards, interactive feedback sessions, and user discussions.",
            icon: "Users",
            archetype: "Creative Problem Solver",
            targetCareerId: "uiux-designer"
          },
          {
            id: "field_workshop",
            label: "Active field site, workshop, or clean-energy installation ground",
            sublabel: "On your feet, using diagnostic gear, tangible progress every single day.",
            icon: "Sun",
            archetype: "Hands-on Specialist",
            targetCareerId: "solar-energy-tech"
          },
          {
            id: "clinical_lab",
            label: "Structured laboratory, healthcare clinic, or security control room",
            sublabel: "Professional, sanitized, mission-critical environment with clear standard operating procedures.",
            icon: "ShieldAlert",
            archetype: "Analytical Investigator",
            targetCareerId: "cybersecurity-analyst"
          }
        ]
      }
    ]
  },
  {
    stepNumber: 4,
    title: "Education Stage & Learning Timeline",
    shortTitle: "Timeline",
    subtitle: "What is your current education level and preferred time commitment?",
    whyItMatters: "Practical vocational diplomas can launch you into the workforce in 4 to 12 months, whereas specialized degrees take longer. Aligning your timeline prevents unrealistic planning and family stress.",
    questions: [
      {
        id: "q_education_timeline",
        prompt: "What is your preferred educational timeline before entering the workforce?",
        whyNote: "Ensures we recommend courses and career paths that match your immediate life stage.",
        options: [
          {
            id: "fast_track_6m",
            label: "Fast-Track Bootcamp / Certificate (4 - 6 Months)",
            sublabel: "Intensive skill acquisition to enter entry-level work or freelance as soon as possible.",
            icon: "Zap",
            archetype: "Fast Tracker",
            targetCareerId: "uiux-designer"
          },
          {
            id: "diploma_1year",
            label: "Comprehensive Vocational Diploma (6 - 12 Months)",
            sublabel: "Solid blend of classroom theory and practical capstone projects / apprenticeships.",
            icon: "GraduationCap",
            archetype: "Vocational Achiever",
            targetCareerId: "fullstack-dev"
          },
          {
            id: "deep_specialist_2year",
            label: "In-Depth Specialized Program (1 - 2 Years)",
            sublabel: "Willing to invest 18-24 months for clinical certifications or advanced engineering roles.",
            icon: "BookOpen",
            archetype: "Deep Specialist",
            targetCareerId: "healthcare-lab-tech"
          }
        ]
      }
    ]
  },
  {
    stepNumber: 5,
    title: "Future Aspirations & Core Values",
    shortTitle: "Aspirations",
    subtitle: "What outcome matters most to you and your family over the next 3 to 5 years?",
    whyItMatters: "Different careers excel at different rewards: some offer rapid compensation growth, others deliver high stability, and others offer creative fulfillment or green impact.",
    questions: [
      {
        id: "q_primary_value",
        prompt: "What is your top priority when choosing your career pathway?",
        whyNote: "Weights our recommendation logic toward the rewards that matter most to your family and future.",
        options: [
          {
            id: "val_growth_earning",
            label: "High salary potential & global remote career mobility",
            sublabel: "Maximize earnings, work with international clients or funded startups.",
            icon: "TrendingUp",
            archetype: "Technical Builder",
            targetCareerId: "fullstack-dev"
          },
          {
            id: "val_green_impact",
            label: "Societal impact, green economy, and clean future",
            sublabel: "Work that feels purposeful and actively improves the planet or community.",
            icon: "Sun",
            archetype: "Hands-on Specialist",
            targetCareerId: "solar-energy-tech"
          },
          {
            id: "val_stability_safety",
            label: "Job security, stable demand, and clear career ladder",
            sublabel: "Recession-proof fields with reliable permanent institutional openings.",
            icon: "ShieldCheck",
            archetype: "Analytical Investigator",
            targetCareerId: "healthcare-lab-tech"
          },
          {
            id: "val_creative_expression",
            label: "Creative freedom and visual problem solving",
            sublabel: "Avoiding repetitive tasks; creating fresh designs that influence people.",
            icon: "Sparkles",
            archetype: "Creative Problem Solver",
            targetCareerId: "uiux-designer"
          }
        ]
      }
    ]
  }
];
