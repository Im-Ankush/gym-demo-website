import { SiteConfig } from "@/types/site-config";
export * from "@/types/site-config";

export const siteConfig: SiteConfig = {
  brand: {
    name: "FITZONE FITNESS",
    shortName: "FITZONE",
    highlightWord: "FITNESS",
    tagline: "FORGE YOUR ULTIMATE PHYSIQUE",
    eyebrow: "PREMIUM FITNESS STUDIO",
    shortDescription:
      "A premium strength & conditioning sanctuary built for serious athletes, bodybuilders, and fitness purists. State-of-the-art equipment, science-driven coaching, and an uncompromising atmosphere.",
    establishedYear: 2018,
    badgeText: "ELITE PERFORMANCE CLUB",
    logo: {
      type: "text",
    },
  },
  seo: {
    title: "FITZONE FITNESS | Premium Gym in Patna",
    description:
      "Train stronger at FITZONE FITNESS, Patna. Premium equipment, expert trainers, personalized programs and flexible memberships.",
    keywords: [
      "gym in patna",
      "premium gym patna",
      "fitness club saguna more",
      "strength training patna",
      "bodybuilding gym bihar",
      "personal training patna",
    ],
    ogImage: "/images/hero-athlete.jpg",
    locale: "en_IN",
  },
  contact: {
    phone: "+91 98765 43210",
    phoneFormatted: "+91 98765 43210",
    email: "join@fitzonefitness.com",
    whatsapp: "919876543210",
    whatsappMessage:
      "Hi FITZONE FITNESS, I would like to enquire about starting a free trial.",
    locationLabel: "PATNA, BIHAR",
    address: {
      street: "Plot 42, Bailey Road, Saguna More",
      city: "Patna",
      state: "Bihar",
      zip: "801503",
      mapUrl: "https://maps.google.com",
    },
    mapEmbedUrl:
      "https://maps.google.com/maps?q=Saguna+More,+Bailey+Road,+Patna,+Bihar&t=&z=14&ie=UTF8&iwloc=&output=embed",
    goals: [
      "Muscle Building",
      "Weight Loss & Tone",
      "Strength & Powerlifting",
      "General Fitness & Health",
      "1-on-1 Personal Training",
      "Other",
    ],
    contactPreferences: ["WhatsApp", "Phone Call", "Email"],
  },
  contactSection: {
    overline: "GET IN TOUCH",
    headline: "LET'S START YOUR JOURNEY.",
    highlightText: "YOUR JOURNEY.",
    supportingText:
      "Have questions about memberships, personal training or our programs? Get in touch with the FITZONE team.",
  },
  hero: {
    eyebrow: "PREMIUM FITNESS STUDIO",
    headlinePart1: "BUILD YOUR",
    headlineHighlight: "STRONGEST",
    headlinePart2: "SELF.",
    supportingText:
      "Expert trainers. World-class equipment. A community built to help you become stronger, healthier and more confident.",
    location: "PATNA, BIHAR",
    primaryCta: {
      label: "START FREE TRIAL",
      href: "#contact",
    },
    secondaryCta: {
      label: "EXPLORE THE GYM",
      href: "#facilities",
    },
    trustStatement: "NO JOINING FEE • FLEXIBLE PLANS • EXPERT TRAINERS",
    imageSrc: "/images/hero-athlete.jpg",
    imageAlt: "Elite athletic bodybuilder performing barbell deadlift at FITZONE FITNESS",
  },
  stats: [
    {
      value: "5000+",
      label: "HAPPY MEMBERS",
      iconName: "users",
    },
    {
      value: "10+",
      label: "EXPERT TRAINERS",
      iconName: "award",
    },
    {
      value: "50+",
      label: "MODERN EQUIPMENT",
      iconName: "dumbbell",
    },
    {
      value: "8+",
      label: "YEARS OF TRUST",
      iconName: "shield",
    },
  ],
  whyChooseUs: {
    overline: "WHY CHOOSE US",
    headline: "EVERYTHING YOU NEED TO ACHIEVE MORE",
    highlightText: "ACHIEVE MORE",
    supportingText:
      "We provide the perfect environment, equipment and expert guidance to help you crush your goals.",
    benefits: [
      {
        id: "modern-equipment",
        title: "MODERN EQUIPMENT",
        description: "Latest international-standard machines and free weights.",
        iconName: "dumbbell",
      },
      {
        id: "expert-trainers",
        title: "EXPERT TRAINERS",
        description: "Certified and experienced fitness professionals.",
        iconName: "award",
      },
      {
        id: "nutrition-guidance",
        title: "NUTRITION GUIDANCE",
        description: "Personalized guidance to support your fitness journey.",
        iconName: "apple",
      },
      {
        id: "diverse-workouts",
        title: "DIVERSE WORKOUTS",
        description: "Strength, cardio, HIIT, functional training and more.",
        iconName: "activity",
      },
      {
        id: "hygiene-safety",
        title: "HYGIENE & SAFETY",
        description: "Clean, sanitized and comfortable training environment.",
        iconName: "shield",
      },
      {
        id: "flexible-timings",
        title: "FLEXIBLE TIMINGS",
        description: "Training schedules designed around your routine.",
        iconName: "clock",
      },
    ],
    tourCard: {
      imageSrc: "/images/why-choose-tour.jpg",
      imageAlt: "FITZONE FITNESS high-end bodybuilding floor and dumbbell arena",
      badgeText: "VIRTUAL WALKTHROUGH",
      title: "TAKE A TOUR",
      subtitle: "Explore our world-class training environment",
      ctaLabel: "WATCH TOUR",
    },
  },
  facilities: {
    overline: "OUR FACILITIES",
    headline: "BUILT FOR YOUR BEST PERFORMANCE.",
    highlightText: "BEST PERFORMANCE",
    supportingText:
      "Everything you need to train harder, recover better and reach your goals.",
    items: [
      {
        id: "strength-zone",
        name: "STRENGTH ZONE",
        description:
          "Power racks, Olympic platforms and premium strength equipment.",
        tag: "FLAGSHIP ZONE",
        imageSrc: "/images/facilities/strength-zone.jpg",
        imageAlt: "Heavy-duty power racks and Olympic lifting platforms",
        featured: true,
      },
      {
        id: "cardio-zone",
        name: "CARDIO ZONE",
        description:
          "Treadmills, bikes, ellipticals and conditioning equipment.",
        tag: "ENDURANCE",
        imageSrc: "/images/facilities/cardio-zone.jpg",
        imageAlt: "Modern commercial treadmills and rowing machines with red ambient glow",
      },
      {
        id: "functional-training",
        name: "FUNCTIONAL TRAINING",
        description:
          "Open space for movement, mobility and functional workouts.",
        tag: "TURF & AGILITY",
        imageSrc: "/images/facilities/functional-training.jpg",
        imageAlt: "Green sprint turf track with battle ropes and sleds",
      },
      {
        id: "free-weights",
        name: "FREE WEIGHTS",
        description:
          "Dumbbells, barbells, kettlebells and specialized equipment.",
        tag: "HEAVY IRON",
        imageSrc: "/images/facilities/free-weights.jpg",
        imageAlt: "Endless rows of black urethane dumbbells and Olympic benches",
      },
      {
        id: "personal-training",
        name: "PERSONAL TRAINING",
        description: "Dedicated coaching and one-on-one training.",
        tag: "1-ON-1 COACHING",
        imageSrc: "/images/facilities/personal-training.jpg",
        imageAlt: "Certified fitness coach guiding an athlete through squat technique",
      },
      {
        id: "recovery-area",
        name: "RECOVERY AREA",
        description:
          "Space designed to help you recover and stay consistent.",
        tag: "WELLNESS & SAUNA",
        imageSrc: "/images/facilities/recovery-area.jpg",
        imageAlt: "Luxury recovery suite with infrared sauna, cold plunge, and massage tables",
      },
    ],
  },
  trainers: {
    overline: "OUR EXPERTS",
    headline: "TRAIN WITH THE BEST.",
    highlightText: "THE BEST",
    supportingText:
      "Experienced coaches. Proven methods. Personal attention.",
    items: [
      {
        id: "rahul-singh",
        name: "Rahul Singh",
        role: "Strength & Conditioning Coach",
        specialtyTag: "HEAD COACH",
        imageSrc: "/images/trainers/rahul-singh.jpg",
        imageAlt: "Head Coach Rahul Singh posing in dark gym",
        featured: true,
        socials: {
          instagram: "https://instagram.com",
          twitter: "https://twitter.com",
        },
      },
      {
        id: "vikram-yadav",
        name: "Vikram Yadav",
        role: "Bodybuilding Coach",
        specialtyTag: "HYPERTROPHY",
        imageSrc: "/images/trainers/vikram-yadav.jpg",
        imageAlt: "Bodybuilding coach Vikram Yadav standing near power rack",
        socials: {
          instagram: "https://instagram.com",
        },
      },
      {
        id: "anjali-verma",
        name: "Anjali Verma",
        role: "Fitness & Yoga Coach",
        specialtyTag: "MOBILITY & RECOVERY",
        imageSrc: "/images/trainers/anjali-verma.jpg",
        imageAlt: "Fitness and yoga coach Anjali Verma in studio",
        socials: {
          instagram: "https://instagram.com",
        },
      },
      {
        id: "prateek-kumar",
        name: "Prateek Kumar",
        role: "CrossFit & Functional Coach",
        specialtyTag: "FUNCTIONAL & HIIT",
        imageSrc: "/images/trainers/prateek-kumar.jpg",
        imageAlt: "CrossFit coach Prateek Kumar with battle ropes",
        socials: {
          instagram: "https://instagram.com",
        },
      },
      {
        id: "neha-sharma",
        name: "Neha Sharma",
        role: "Nutrition & Wellness Coach",
        specialtyTag: "NUTRITION",
        imageSrc: "/images/trainers/neha-sharma.jpg",
        imageAlt: "Nutrition coach Neha Sharma in wellness lounge",
        socials: {
          instagram: "https://instagram.com",
        },
      },
      {
        id: "amit-rai",
        name: "Amit Rai",
        role: "Cardio & HIIT Coach",
        specialtyTag: "CONDITIONING",
        imageSrc: "/images/trainers/amit-rai.jpg",
        imageAlt: "Cardio coach Amit Rai guiding an athlete",
        socials: {
          instagram: "https://instagram.com",
        },
      },
    ],
  },
  programs: {
    overline: "TRAIN WITH PURPOSE",
    headline: "PROGRAMS BUILT FOR RESULTS.",
    highlightText: "FOR RESULTS",
    supportingText:
      "Whether you're building strength, losing weight or improving performance, train with a plan designed around your goals.",
    items: [
      {
        id: "strength-training",
        title: "STRENGTH TRAINING",
        description:
          "Build foundational strength with progressive resistance training.",
        tag: "FOUNDATIONAL",
        imageSrc: "/images/programs/strength-training.jpg",
        imageAlt: "Heavy barbell strength training platform",
        featured: true,
      },
      {
        id: "muscle-building",
        title: "MUSCLE BUILDING",
        description:
          "Structured hypertrophy training designed for sustainable muscle growth.",
        tag: "HYPERTROPHY",
        imageSrc: "/images/programs/muscle-building.jpg",
        imageAlt: "Dumbbell free weight hypertrophy arena",
      },
      {
        id: "weight-loss",
        title: "WEIGHT LOSS",
        description:
          "Combination of strength, conditioning and sustainable fitness habits.",
        tag: "FAT LOSS & TONE",
        imageSrc: "/images/programs/weight-loss.jpg",
        imageAlt: "Athletic conditioning workout for fat loss",
      },
      {
        id: "personal-training",
        title: "PERSONAL TRAINING",
        description:
          "One-on-one coaching tailored to your goals, experience and schedule.",
        tag: "1-ON-1 ELITE",
        imageSrc: "/images/programs/personal-training.jpg",
        imageAlt: "Private 1-on-1 coaching session",
      },
      {
        id: "functional-training",
        title: "FUNCTIONAL TRAINING",
        description:
          "Improve movement, mobility, stability and athletic performance.",
        tag: "MOBILITY & SPEED",
        imageSrc: "/images/programs/functional-training.jpg",
        imageAlt: "Turf sprint track and functional rig",
      },
      {
        id: "hiit-conditioning",
        title: "HIIT & CONDITIONING",
        description:
          "High-intensity sessions designed to improve cardiovascular fitness and conditioning.",
        tag: "ENDURANCE",
        imageSrc: "/images/programs/hiit-conditioning.jpg",
        imageAlt: "High-intensity cardio conditioning area",
      },
    ],
  },
  testimonials: {
    overline: "MEMBER STORIES",
    headline: "REAL PEOPLE. REAL PROGRESS.",
    highlightText: "REAL PROGRESS",
    supportingText:
      "Consistency becomes easier when you have the right environment, coaching and community.",
    items: [
      {
        id: "arjun-k",
        quote:
          "FitZone gave me the structure I was missing. The trainers helped me stay consistent and actually enjoy training.",
        author: "ARJUN K.",
        role: "Strength Training Member",
        categoryTag: "STRENGTH TRAINING",
        featured: true,
      },
      {
        id: "rohan-m",
        quote:
          "I finally found a training environment where I feel challenged without feeling lost.",
        author: "ROHAN M.",
        role: "Fitness Member",
        categoryTag: "FITNESS MEMBER",
      },
      {
        id: "priya-s",
        quote:
          "The combination of coaching and equipment completely changed my approach to fitness.",
        author: "PRIYA S.",
        role: "Weight Loss Member",
        categoryTag: "WEIGHT LOSS",
      },
      {
        id: "sneha-p",
        quote:
          "The community and energy here push you to show up every single day. Best decision I made for my health.",
        author: "SNEHA P.",
        role: "Athletic Conditioning Member",
        categoryTag: "CONDITIONING",
      },
    ],
  },
  pricing: {
    overline: "MEMBERSHIP",
    headline: "CHOOSE YOUR COMMITMENT.",
    highlightText: "COMMITMENT.",
    supportingText:
      "Simple plans. Serious results. Choose the membership that fits your goals.",
    plans: [
      {
        id: "monthly",
        name: "MONTHLY",
        price: "₹999",
        period: "/month",
        description: "Flexible month-to-month access with no long-term contract.",
        features: [
          "Full Gym Floor Access",
          "Basic Workout Program",
          "Locker & Shower Facility",
        ],
        ctaText: "CHOOSE PLAN",
        ctaHref: "#contact",
      },
      {
        id: "quarterly",
        name: "QUARTERLY",
        price: "₹2,499",
        period: "/3 months",
        description: "Our most popular commitment for dedicated muscle growth and conditioning.",
        features: [
          "Full Gym Floor Access",
          "Personalized Workout Program",
          "Custom Diet & Nutrition Guidance",
          "Locker & Shower Facility",
          "2 Personal Training Sessions",
        ],
        featured: true,
        badge: "MOST POPULAR",
        ctaText: "CHOOSE PLAN",
        ctaHref: "#contact",
      },
      {
        id: "yearly",
        name: "YEARLY",
        price: "₹7,999",
        period: "/year",
        description: "Maximum commitment and best value for serious transformation.",
        features: [
          "Full Gym Floor Access",
          "Personalized Workout Program",
          "Custom Diet & Nutrition Guidance",
          "Locker & Shower Facility",
          "4 Personal Training Sessions",
          "Priority Coach & Facility Support",
        ],
        badge: "BEST VALUE",
        ctaText: "CHOOSE PLAN",
        ctaHref: "#contact",
      },
    ],
    trustStrip: [
      "NO HIDDEN FEES",
      "FLEXIBLE MEMBERSHIPS",
      "EXPERT COACHING",
      "CANCEL ANYTIME*",
    ],
  },
  gallery: {
    overline: "INSIDE FITZONE",
    headline: "SEE WHERE YOU TRAIN.",
    highlightText: "WHERE YOU TRAIN.",
    supportingText:
      "A focused training environment built for people who take their goals seriously.",
    items: [
      {
        id: "strength-arena",
        title: "OLYMPIC STRENGTH ARENA",
        category: "STRENGTH",
        imageSrc: "/images/facilities/strength-zone.jpg",
        imageAlt: "Olympic strength arena with power cages and barbells",
        featured: true,
      },
      {
        id: "free-weight-section",
        title: "URETHANE DUMBBELL ARENA",
        category: "GYM FLOOR",
        imageSrc: "/images/facilities/free-weights.jpg",
        imageAlt: "Endless rows of black dumbbells and benches",
      },
      {
        id: "gym-floor-community",
        title: "MAIN TRAINING FLOOR",
        category: "COMMUNITY",
        imageSrc: "/images/why-choose-tour.jpg",
        imageAlt: "Athletes training in dark bodybuilding gym",
      },
      {
        id: "functional-sprint-turf",
        title: "FUNCTIONAL SPRINT TURF",
        category: "FUNCTIONAL",
        imageSrc: "/images/facilities/functional-training.jpg",
        imageAlt: "Green sprint turf with battle ropes and sleds",
      },
      {
        id: "cardio-suite",
        title: "HIGH-INTENSITY CARDIO SUITE",
        category: "CARDIO",
        imageSrc: "/images/facilities/cardio-zone.jpg",
        imageAlt: "Modern black treadmills and rowing machines with red ambient glow",
      },
      {
        id: "recovery-suite",
        title: "INFRARED SAUNA & RECOVERY LOUNGE",
        category: "WELLNESS",
        imageSrc: "/images/facilities/recovery-area.jpg",
        imageAlt: "Luxury recovery suite with infrared sauna, cold plunge, and massage tables",
      },
    ],
  },
  finalCta: {
    overline: "START TODAY",
    headlinePart1: "READY TO",
    headlineHighlight: "TRANSFORM?",
    supportingText:
      "Start your journey today and train in an environment built for serious results.",
    primaryCta: {
      label: "START FREE TRIAL",
      href: "#contact",
    },
    secondaryCta: {
      label: "CHAT ON WHATSAPP",
    },
    trustStatement: "NO JOINING FEE • FLEXIBLE PLANS • EXPERT TRAINERS",
    imageSrc: "/images/hero-athlete.jpg",
    imageAlt: "FITZONE FITNESS elite gym environment",
  },
  hours: [
    { days: "Monday – Saturday", hours: "05:30 AM – 10:30 PM" },
    { days: "Sunday", hours: "07:00 AM – 08:00 PM" },
  ],
  navigation: {
    mainNav: [
      { label: "HOME", href: "#hero" },
      { label: "ABOUT", href: "#about" },
      { label: "FACILITIES", href: "#facilities" },
      { label: "TRAINERS", href: "#trainers" },
      { label: "PROGRAMS", href: "#programs" },
      { label: "PRICING", href: "#pricing" },
      { label: "GALLERY", href: "#gallery" },
      { label: "CONTACT", href: "#contact" },
    ],
    ctaNav: {
      label: "JOIN NOW",
      href: "#contact",
    },
    footerNav: {
      programs: [
        { label: "Hypertrophy & Bodybuilding", href: "#programs" },
        { label: "Powerlifting & Strength", href: "#programs" },
        { label: "Athletic Conditioning", href: "#programs" },
        { label: "1-on-1 Elite Coaching", href: "#programs" },
        { label: "Nutrition Optimization", href: "#programs" },
      ],
      gym: [
        { label: "About FITZONE", href: "#about" },
        { label: "Equipment Spec Sheet", href: "#facilities" },
        { label: "Certified Coaches", href: "#trainers" },
        { label: "Day Pass & Tours", href: "#contact" },
        { label: "Free Trial Booking", href: "#contact" },
      ],
      legal: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Membership", href: "#terms" },
        { label: "Facility Rules", href: "#rules" },
      ],
    },
  },
  socials: [
    { platform: "instagram", url: "https://instagram.com", label: "Instagram" },
    { platform: "facebook", url: "https://facebook.com", label: "Facebook" },
    { platform: "youtube", url: "https://youtube.com", label: "YouTube" },
    { platform: "twitter", url: "https://twitter.com", label: "Twitter / X" },
  ],
};
