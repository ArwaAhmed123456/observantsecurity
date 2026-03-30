const servicesData = [
  {
    title: "Solar Farm Security",
    image: "/original/solar_1.jpeg",
    description: "Comprehensive security solutions for solar energy installations across the UK.",
    detailedContent: {
      intro: "Securing the future of renewable energy with advanced surveillance and rapid response.",
      longIntro: "As the UK pushes towards a greener future, solar farms have become a cornerstone of our national energy infrastructure. However, their isolated, rural locations and the high value of copper cabling and solar panels make them prime targets for organized criminal groups. Observant Security provides a comprehensive, multi-layered defense strategy specifically designed for the unique challenges of renewable energy asset protection. We work closely with site developers and operators from the planning stage through to full operation, ensuring every square meter of your installation is monitored and protected around the clock.",
      stats: [
        { label: "Asset Protection", value: "100%" },
        { label: "Deterrence Rate", value: "98%" },
        { label: "Response Time", value: "<15m" }
      ],
      whyTitle: "Why is Specialized Solar Farm Security Essential?",
      whyText: "The financial impact of solar farm theft extends far beyond the cost of stolen equipment. Damaged cabling can lead to weeks of operational downtime and significant loss of power generation revenue. Furthermore, unauthorized access poses a severe health and safety risk to both trespassers and maintenance teams. Our specialized security solutions act as an unbreachable barrier, utilizing a blend of high-visibility physical deterrence and cutting-edge remote monitoring to stop threats before they even reach your perimeter fence.",
      features: [
        { title: "Advanced Thermal Imaging", description: "Our state-of-the-art thermal cameras provide total situational awareness, detecting human heat signatures from over 1km away in complete darkness or fog.", icon: "fa-eye" },
        { title: "Smart Perimeter Detection", description: "We implement advanced fence-line vibration sensors and ground-based radar that provide instant, pinpoint alerts to our 24/7 monitoring center.", icon: "fa-shield-alt" },
        { title: "Rapid Response Deployment", description: "In the event of a perimeter breach, our SIA-licensed rapid response teams are dispatched immediately in all-terrain vehicles to intercept intruders.", icon: "fa-helicopter" }
      ],
      gallery: [
        { type: "image", src: "/original/solar_1.jpeg", alt: "Solar Panel Inspection" },
        { type: "image", src: "/original/solar_2.jpeg", alt: "Solar Farm Perimeter" },
        { type: "image", src: "/original/original_solar_security_image.jpeg", alt: "Site Security Setup" },
        { type: "video", src: "/original/solar_3.mp4", alt: "Surveillance Demonstration" },
        { type: "video", src: "/original/solar_4.mp4", alt: "Security Patrol" }
      ]
    }
  },
  {
    title: "CCTV Security",
    image: "/original/camera security.jpeg",
    description: "24/7 Monitored surveillance systems with rapid intervention capabilities.",
    detailedContent: {
      intro: "Advanced visual surveillance and proactive remote monitoring for total property protection.",
      longIntro: "Modern security requires more than just recording an incident; it requires the ability to intervene in real-time. Observant Security's CCTV solutions leverage the latest in high-definition optics and AI-driven analytics to provide proactive surveillance. Our systems are linked directly to our central monitoring station, where highly trained professionals scan for suspicious activity every second of every day. We don't just provide evidence after a crime has occurred—we provide the means to prevent it from ever happening.",
      stats: [
        { label: "Live Monitoring", value: "24/7" },
        { label: "Recording Quality", value: "4K/HD" },
        { label: "Audio Warning", value: "Instant" }
      ],
      whyTitle: "The Critical Importance of Active Monitoring",
      whyText: "Passive CCTV systems often only serve to document a crime that has already taken place, leaving you with the losses and the insurance paperwork. Active, monitored systems change the dynamic entirely. When our operators detect unauthorized activity, they can issue immediate live audio warnings to the site, alerting intruders that they are being watched and that police have been dispatched. This immediate psychological deterrent stops approximately 95% of criminal acts before any damage or theft can occur.",
      features: [
        { title: "24/7 Proactive Monitoring", description: "Off-site surveillance by SIA-licensed professionals who are trained to evaluate threats and initiate emergency protocols instantly.", icon: "fa-desktop" },
        { title: "AI-Powered Analytics", description: "Our systems utilize advanced algorithms for facial recognition, license plate identification, and 'loitering' detection to filter out false alarms.", icon: "fa-brain" },
        { title: "Cloud-Based Evidence", description: "All footage is securely encrypted and stored in the cloud, ensuring that high-definition evidence is tamper-proof and accessible for legal proceedings.", icon: "fa-cloud" }
      ]
    }
  },
  {
    title: "Construction Security",
    image: "/original/original_site_security_image_1.jpeg",
    description: "Elite security for West Midlands construction sites to prevent theft and project delays.",
    detailedContent: {
      intro: "Professional construction site security guarding and access control in Birmingham, Coventry, and beyond.",
      longIntro: "Construction sites are dynamic, high-risk environments that demand specialized security expertise. With millions of pounds in plant machinery, raw materials, and tools often left exposed, active development sites are prime targets for both opportunistic and professional thieves. Observant Security is a leading Midlands-based firm in protecting critical infrastructure projects. We provide reliable, SIA-licensed staff who understand the nuances of construction logistics, health and safety compliance, and site-specific risk management.",
      stats: [
        { label: "Theft Reduction", value: "95%" },
        { label: "Staff Vetting", value: "100%" },
        { label: "Coverage", value: "24/7" }
      ],
      whyTitle: "Why Construction Sites Need Professional Guarding",
      whyText: "The true cost of site theft is not just the equipment itself; it is the project delay that follows. Missing tools or materials can halt progress for days, leading to missed deadlines and heavy financial penalties. Furthermore, open sites are hazards for trespassers, and as a developer, you carry a heavy liability for their safety. Our guards manage every aspect of site integrity, from strict access control during the day to thorough perimeter patrols at night, ensuring your project remains safe, secure, and on schedule.",
      features: [
        { title: "Site Access Control", description: "Our guards strictly manage all entry and exit points, maintaining professional visitor logs and verifying the credentials of every individual.", icon: "fa-door-open" },
        { title: "Manned Guarding", description: "Highly visible, SIA-licensed security officers provide a constant physical presence to deter theft and vandalism 24 hours a day.", icon: "fa-user-shield" },
        { title: "Asset Documentation", description: "We perform regular audits of plant and machinery, ensuring all high-value equipment is correctly secured and accounted for at the end of every shift.", icon: "fa-car" }
      ]
    }
  },
  {
    title: "Corporate Security",
    image: "/Services/4.CorporateSecurity.png",
    description: "Bespoke security and concierge services for professional business environments.",
    detailedContent: {
      intro: "Elite protection and professional representation for your corporate assets, staff, and visitors.",
      longIntro: "In the corporate world, your security team is often the first point of contact for your clients and stakeholders. At Observant Security, we believe that corporate protection should be as sophisticated as the businesses it serves. Our corporate security officers are more than just guards—they are trained in hospitality, conflict resolution, and emergency management. We provide a seamless blend of high-end concierge services and rigorous security protocols, ensuring your workplace remains a safe, productive, and inviting environment for everyone.",
      stats: [
        { label: "Visitor Clearance", value: "100%" },
        { label: "Response Speed", value: "<1m" },
        { label: "Client Retention", value: "99%" }
      ],
      whyTitle: "Balancing Professionalism and Protection",
      whyText: "Corporate security faces the dual challenge of keeping a building secure while maintaining an open, welcoming atmosphere for authorized guests. A heavy-handed approach can damage your brand, while a lax approach can leave your data and staff vulnerable. We strike the perfect balance, implementing 'discrete security' measures that don't disrupt your daily operations but provide a solid barrier against unauthorized access, internal theft, and outside interference.",
      features: [
        { title: "Front-of-House Concierge", description: "Professional hospitality-trained officers who manage visitor reception, badging, and information desks with elite standards.", icon: "fa-concierge-bell" },
        { title: "Internal Asset Protection", description: "Monitoring of sensitive areas, such as server rooms and executive suites, to prevent data breaches or physical document theft.", icon: "fa-building" },
        { title: "Crisis Management", description: "Our officers are trained to lead building evacuations, provide emergency first aid, and coordinate with emergency services during critical incidents.", icon: "fa-running" }
      ]
    }
  },
  {
    title: "Event Security",
    image: "/Services/3.MannedGuarding.png",
    description: "Expert crowd management and venue security for events of all scales.",
    detailedContent: {
      intro: "Ensuring safe, secure, and successful events in the UK with expert crowd management.",
      longIntro: "Hosting a successful event requires meticulous planning, especially when it comes to the safety of your guests. Whether it's a high-profile corporate product launch, a wedding, or a large-scale public festival, the security challenges are diverse. Observant Security provides comprehensive event management solutions that handle everything from initial risk assessment to real-time crowd control. Our team is trained to handle large volumes of people with professionalism, ensuring that the atmosphere remains positive while safety protocols are strictly followed.",
      stats: [
        { label: "Reliability", value: "High" },
        { label: "Safety Success", value: "100%" },
        { label: "SIA Licensed", value: "100%" }
      ],
      whyTitle: "Why Professional Event Security is Mandatory",
      whyText: "In the age of heightened safety awareness, event organizers have a legal and moral obligation to protect their attendees. Poor crowd management can quickly lead to dangerous situations, while inadequate entry screening can allow prohibited items into your venue. Our expert teams are skilled in identifying potential issues before they escalate, utilizing discrete techniques to de-escalate conflicts and maintaining a secure perimeter around your most important assets and VIP guests.",
      features: [
        { title: "Crowd Management", description: "Expert logistical planning for entry flows, queue management, and emergency exit routes to ensure attendee safety at all times.", icon: "fa-search" },
        { title: "VIP/Artist Protection", description: "Dedicated close-protection teams for high-profile speakers, performers, and executive guests, ensuring their safe passage through the venue.", icon: "fa-star" },
        { title: "Entry Screening", description: "Rigorous bag checks, metal detection, and ticket verification to maintain a strictly controlled and safe environment within the event space.", icon: "fa-briefcase-medical" }
      ]
    }
  },
  {
    title: "Mobile Security",
    image: "/Services/2.CarPatrolling.png",
    description: "Rapid, randomized patrols providing cost-effective visual deterrence for your property.",
    detailedContent: {
      intro: "Randomized, high-visibility vehicle patrols to protect vacant assets and high-risk zones.",
      longIntro: "For many properties, 24/7 static guarding is not a financial necessity, yet the risk of theft and vandalism remains high. Our mobile security solution fills this gap, providing unpredictable, high-impact patrols across multiple locations. We utilize marked, GPS-tracked security vehicles driven by professional uniformed guards who conduct thorough inspections of your site's fence lines, lock points, and sensitive areas. This constant threat of discovery is one of the most effective psychological barriers for opportunistic criminals.",
      stats: [
        { label: "Cost Efficiency", value: "60%" },
        { label: "Visibility", value: "High" },
        { label: "Reporting", value: "Live" }
      ],
      whyTitle: "The Deterrent Power of Unpredictability",
      whyText: "Opportunistic criminals often 'scout' a target to identify predictable patterns. Our mobile patrols are randomized by design, ensuring that no two shifts are ever the same. This unpredictability makes it impossible for intruders to time their activities. Furthermore, our patrol vehicles are equipped with first-on-scene capabilities, allowing our guards to respond to alarm activations or identify maintenance issues like leaks or electrical faults before they become expensive disasters.",
      features: [
        { title: "GPS-Tracked Patrols", description: "Every visit is logged via GPS and NFC checkpoints, providing our clients with transparent, time-stamped reports of every inspection.", icon: "fa-shuttle-van" },
        { title: "Lock & Unlock Services", description: "We securely manage facility access for your staff and contractors, ensuring your building is correctly armed at the end of every day.", icon: "fa-key" },
        { title: "Rapid Alarm Response", description: "In the event of an alarm trigger, our nearest mobile patrol is dispatched immediately, providing a faster response than standard police protocols.", icon: "fa-bell" }
      ]
    }
  },
  {
    title: "Warehouses Security",
    image: "/Services/10.Warehouse.png",
    description: "Specialized logistics and distribution security to protect your global supply chain.",
    detailedContent: {
      intro: "Safeguarding your distribution hubs with expert gatehouse control and internal inspections.",
      longIntro: "Warehouses and logistics centers are the lifeblood of the economy, but they also represent massive concentrations of wealth that are attractive to organized crime. From high-value electronics to pharmaceutical supplies, the risk of internal shrinkage and external theft is a constant threat to profitability. Observant Security provides a rigorous security framework specifically for the logistics sector, focusing on gatehouse integrity, inventory transparency, and robust perimeter defense in industrial environments.",
      stats: [
        { label: "Shrinkage Cut", value: "45%" },
        { label: "Logs Audited", value: "100%" },
        { label: "CCTV Uptime", value: "24/7" }
      ],
      whyTitle: "Securing the Integrity of Your Operations",
      whyText: "In the warehouse sector, security is as much about operational accuracy as it is about protection. A single unauthorized HGV departure or a missing shipping manifest can cause chaos in your supply chain. Our guards are trained to manage high-volume gatehouse traffic, verifying paperwork and inspecting vehicle seals with meticulous detail. By ensuring that every item that enters the site is accounted for when it leaves, we protect your bottom line and your reputation with your customers.",
      features: [
        { title: "HGV Gatehouse Management", description: "Strict monitoring of all vehicle movements, manifest verification, and security seal inspections for every incoming and outgoing load.", icon: "fa-truck-loading" },
        { title: "Internal Inventory Patrols", description: "Constant, discrete monitoring of high-value storage areas and loading bays to prevent unauthorized stock movement or internal theft.", icon: "fa-boxes" },
        { title: "Loading Bay Supervision", description: "Supervising the loading process to ensure that security protocols are followed and that the correct assets are placed on the correct vehicles.", icon: "fa-lock" }
      ]
    }
  },
  {
    title: "Security Subcontracting",
    image: "/Services/subcontracter.png",
    description: "Reliable, SIA-licensed subcontract security services for firms across the UK.",
    detailedContent: {
      intro: "Elite subcontracting solutions for security firms requiring professional SIA personnel.",
      longIntro: "Observant Security specialist in providing reliable, SIA-licensed subcontract security services. We understand the pressure of managing multiple sites and the critical need for dependable staff. Our team serves as a high-quality extension of your own workforce, maintaining your reputation with the same level of professionalism and dedication to safety that you provide to your own clients.",
      stats: [
        { label: "SIA Licensed", value: "100%" },
        { label: "Rapid Fill", value: "<2h" },
        { label: "Compliance", value: "Full" }
      ],
      whyTitle: "Why Partner with Observant for Subcontracting?",
      whyText: "The security industry often faces sudden surges in demand or unexpected staff shortages. Finding reliable, vetted, and professional officers at short notice is a major challenge. Our subcontracting division is designed specifically to fill these gaps without compromising on quality. We don't just provide 'warm bodies'—we provide trained professionals who integrate seamlessly into your operational protocols and represent your brand with excellence.",
      features: [
        { title: "Fully Vetted Personnel", description: "All subcontracted officers undergo rigorous vetting and background checks, exceeding standard SIA requirements for your peace of mind.", icon: "fa-certificate" },
        { title: "Seamless Integration", description: "Our staff are trained to quickly adapt to diverse site-specific instructions and client cultures, ensuring a 'white-label' experience for your customers.", icon: "fa-sync-alt" },
        { title: "24/7 Availability", description: "Whether it's an emergency last-minute cover or a long-term deployment, our team is ready to support your firm around the clock.", icon: "fa-clock" }
      ]
    }
  }
];

export default servicesData;
