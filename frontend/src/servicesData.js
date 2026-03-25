const servicesData = [
  {
    title: "Solar Farm Security",
    image: "/solar_1.jpeg",
    description: "Comprehensive security solutions for solar energy installations",
    detailedContent: {
      intro: "Securing the future of renewable energy with advanced surveillance and rapid response across the UK.",
      longIntro: "Solar farms are increasingly targeted for precious metals and high-value equipment. Observant Security provides specialized protection for renewable energy assets, ensuring uninterrupted power generation and asset longevity.",
      stats: [
        { label: "Asset Protection", value: "100%" },
        { label: "Deterrence Rate", value: "98%" },
        { label: "Response Time", value: "<15m" }
      ],
      whyTitle: "Why is Solar Farm Security Essential?",
      whyText: "The remote nature of solar installations makes them prime targets for organized theft. Without professional security, a single incident can lead to weeks of downtime and millions in losses. We stop threats before they reach your perimeter.",
      features: [
        { title: "Thermal Surveillance", description: "Advanced thermal cameras to detect intruders in complete darkness across vast open spaces.", icon: "fa-eye" },
        { title: "Perimeter Alarms", description: "Smart fencing and ground sensors that provide instant alerts to our monitoring center.", icon: "fa-shield-alt" },
        { title: "Drone Patrols", description: "Regular aerial reconnaissance to inspect fence lines and identify vulnerabilities in real-time.", icon: "fa-helicopter" }
      ]
    }
  },
  {
    title: "CCTV Security",
    image: "/8.CCTV.png",
    description: "Even secure premises should be supervised...",
    detailedContent: {
      intro: "State-of-the-art visual surveillance and remote monitoring for total peace of mind.",
      longIntro: "Our CCTV solutions go beyond simple recording. We provide active, monitored surveillance that detects, deters, and documents every incident with precision and clarity.",
      stats: [
        { label: "Live Monitoring", value: "24/7" },
        { label: "Recording Quality", value: "4K/HD" },
        { label: "Audio Warning", value: "Instant" }
      ],
      whyTitle: "Why invest in Monitored CCTV?",
      whyText: "Passive cameras only record a crime; monitored systems prevent it. Our expert operators intervene via live audio to warn trespassers, often stopping criminal activity before it starts.",
      features: [
        { title: "Remote Monitoring", description: "Off-site surveillance by SIA-licensed professionals ready to escalate to police instantly.", icon: "fa-desktop" },
        { title: "Cloud Storage", description: "Secure, tamper-proof video storage ensuring evidence is always accessible when needed.", icon: "fa-cloud" },
        { title: "Smart Analytics", description: "AI-driven detection for line-crossing, loitering, and suspicious vehicle patterns.", icon: "fa-brain" }
      ]
    }
  },
  {
    title: "Construction Security",
    image: "/original_site_security_image_1.jpeg",
    description: "Protecting West Midlands construction sites from theft and vandalism.",
    detailedContent: {
      intro: "Expert construction site security guarding to prevent theft, vandalism, and project delays.",
      longIntro: "Observant Security is a Birmingham-based firm providing elite security services across the West Midlands. Since 2012, we have supported builders and developers in Birmingham, Coventry, and Wolverhampton with reliable, SIA-licensed staff.",
      stats: [
        { label: "Lost Annually", value: "£800m" },
        { label: "Sites Affected", value: "92%" },
        { label: "Robbed Weekly", value: "21%" }
      ],
      whyTitle: "Why is construction site security important?",
      whyText: "The question isn't 'if', but 'when'. Site theft and vandalism cost the UK sector millions every year. Professional guarding saves you thousands in the long run by preventing delays and high insurance premiums.",
      features: [
        { title: "Mobile Security Patrols", description: "Visible vehicle patrols that act as a powerful deterrent. All guards are SIA-vetted and trained.", icon: "fa-car" },
        { title: "Manned Guarding", description: "Expert static guards for full-time protection of your plant machinery, tools, and materials.", icon: "fa-user-shield" },
        { title: "Access Control", description: "Strict monitoring of all personnel and vehicles at site entry points to ensure safety and compliance.", icon: "fa-door-open" }
      ]
    }
  },
  {
    title: "Corporate Security",
    image: "/4.CorporateSecurity.png",
    description: "Professional security for your business environment.",
    detailedContent: {
      intro: "Elite protection for your high-profile assets, staff, and visitors.",
      longIntro: "In a corporate setting, security is about more than just protection—it's about professionalism. Our guards provide a concierge-level experience while maintaining tight control.",
      stats: [
        { label: "Visitor Tracking", value: "100%" },
        { label: "Staff Satisfaction", value: "95%" },
        { label: "Incident Rate", value: "<1%" }
      ],
      whyTitle: "The Corporate Security Advantage",
      whyText: "Protecting your brand identity is as important as protecting your physical office. We provide a seamless, secure environment that allows your business to thrive without disruption.",
      features: [
        { title: "Front of House", description: "Professional concierges who combine hospitality with rigorous security protocols.", icon: "fa-concierge-bell" },
        { title: "Floor Management", description: "Discrete monitoring of private office spaces and sensitive data rooms.", icon: "fa-building" },
        { title: "Evacuation Leads", description: "Expertly trained officers to manage safe and orderly building evacuations.", icon: "fa-running" }
      ]
    }
  },
  {
    title: "Event Security",
    image: "/3.MannedGuarding.png",
    description: "Leading crowd control and venue management security services.",
    detailedContent: {
      intro: "Safe, secure, and successful events delivered by crowd management experts.",
      longIntro: "From small corporate gatherings to large-scale public festivals, our event security teams ensure that safety is never compromised while the show goes on.",
      stats: [
        { label: "Attendees Cleared", value: "50k+" },
        { label: "Safety Rating", value: "A+" },
        { label: "Support 24/7", value: "Yes" }
      ],
      whyTitle: "Why Professional Event Security?",
      whyText: "Successful events rely on a safe atmosphere. Our crowd management specialists handle logistics, entry screening, and VIP protection so you can focus on your guests.",
      features: [
        { title: "Entry Screening", description: "Rigorous bag searches and metal detection to prevent prohibited items.", icon: "fa-search" },
        { title: "VIP Protection", description: "Dedicated close protection teams for performers, artists, and special guests.", icon: "fa-star" },
        { title: "Medical Support", description: "Coordinated response teams ready to handle first aid and emergency situations.", icon: "fa-briefcase-medical" }
      ]
    }
  },
  {
    title: "Mobile Security",
    image: "/2.CarPatrolling.png",
    description: "Cost-effective solutions for on-site visual deterrence.",
    detailedContent: {
      intro: "Rapid, randomised patrols to protect vacant properties and high-risk zones.",
      longIntro: "When full-time guarding isn't required, our mobile patrols provide the perfect balance of visible deterrence and cost-efficiency across multiple locations.",
      stats: [
        { label: "Patrol Frequency", value: "Random" },
        { label: "Incident Catch", value: "94%" },
        { label: "Cost Saving", value: "60%" }
      ],
      whyTitle: "The Power of Mobile Deterrence",
      whyText: "Unpredictable patrol times are the nightmare of opportunistic criminals. Our marked vehicles and uniformed guards send a clear message: this property is being watched.",
      features: [
        { title: "Vehicle Patrols", description: "GPS-tracked vehicle patrols with electronic reporting for Every single visit.", icon: "fa-shuttle-van" },
        { title: "Lock/Unlock Services", description: "Managing facility access at the start and end of the business day securely.", icon: "fa-key" },
        { title: "Alarm Response", description: "Fastest response to alarm activations, saving you from attending late-night call-outs.", icon: "fa-bell" }
      ]
    }
  },
  {
    title: "Warehouses Security",
    image: "/10.Warehouse.png",
    description: "Protecting logistics centers to avoid theft and disruption.",
    detailedContent: {
      intro: "Ensuring the integrity of your supply chain with specialized logistics security.",
      longIntro: "Warehouses and distribution hubs are high-value targets for internal and external theft. We provide end-to-end security for the logistics sector.",
      stats: [
        { label: "Loss Reduction", value: "40%" },
        { label: "Manifest Audits", value: "Daily" },
        { label: "CCTV Coverage", value: "100%" }
      ],
      whyTitle: "Why Warehouse Security Matters?",
      whyText: "In logistics, a single missing shipment can derail your whole operation. Our gatehouse staff and internal patrollers ensure that everything accounted for stays on site.",
      features: [
        { title: "Gatehouse Control", description: "Managing HGV flow and validating manifests to prevent unauthorized departures.", icon: "fa-truck-loading" },
        { title: "Inventory Patrols", description: "Constant monitoring of high-value stock areas inside the warehouse.", icon: "fa-boxes" },
        { title: "Trailer Seals", description: "Rigorous checking of security seals on every incoming and outgoing load.", icon: "fa-lock" }
      ]
    }
  }
];

export default servicesData;
