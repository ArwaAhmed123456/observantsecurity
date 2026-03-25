const knowledgeBase = {
  greetings: {
    keywords: ["hello", "hi", "hey", "hy", "hye", "hii", "helo", "yo", "greeting", "good morning", "good afternoon"],
    response: "Hello! I'm the Observant Security Assistant. How can I help you today? I can provide details on our specialized security services, our expertise in Solar Farm protection, or help you get a quote."
  },
  identity: {
    keywords: ["who are you", "who is observant", "about the company", "tell me about", "background", "experience", "how long"],
    response: "Observant Security is a professional, service-driven security firm with over 10 years of experience in protecting critical assets across the UK. Based in the West Midlands (Birmingham & Coventry), we specialize in high-stakes security for Solar Farms, Construction Sites, and Corporate environments using SIA-licensed elite personnel."
  },
  location: {
    keywords: ["location", "where are you", "base", "areas", "birmingham", "coventry", "midlands", "london", "uk", "nationwide"],
    response: "We are headquartered in the West Midlands, primarily serving Birmingham, Coventry, and the surrounding areas. However, we provide comprehensive security solutions NATIONWIDE across the UK for large-scale projects like solar farms and industrial logistics."
  },
  solar: {
    keywords: ["solar", "farm", "renewable", "panels", "energy", "copper", "theft", "cabling"],
    response: "We are UK specialists in Solar Farm Security. We protect your assets with: \n• 24/7 thermal imaging (1km+ detection)\n• Smart perimeter vibration sensors\n• Rapid response teams in all-terrain vehicles\n• 100% asset protection history. \nWould you like to speak to a solar security specialist?"
  },
  cctv: {
    keywords: ["cctv", "camera", "monitor", "surveillance", "remote", "audio", "warning"],
    response: "Our CCTV systems aren't just for recording—they are for active intervention. Our SIA-licensed operators provide 24/7 proactive monitoring with live audio warnings that stop 95% of crimes before they happen. We also use AI analytics to filter out false alarms."
  },
  construction: {
    keywords: ["construction", "site", "building", "developer", "machinery", "plant", "theft"],
    response: "We secure construction projects throughout the Midlands and the UK. Our guards manage strict access control and 24/7 perimeter patrols to prevent the theft of high-value plant machinery and raw materials, keeping your project on schedule."
  },
  corporate: {
    keywords: ["corporate", "office", "business", "concierge", "reception", "hospitality"],
    response: "Our corporate security blends elite protection with professional hospitality. Our officers are hospitality-trained to manage front-of-house concierge while maintaining rigorous security protocols for your staff and sensitive data."
  },
  mobile: {
    keywords: ["mobile", "patrol", "vehicle", "van", "random", "deterrent", "door", "lock"],
    response: "Our Mobile Patrols provide high-visibility, GPS-tracked vehicle tours at randomized intervals. It's a cost-effective way to secure multiple entrances and detect issues like leaks or forced entry through psychological deterrence."
  },
  warehouses: {
    keywords: ["warehouse", "logistics", "distribution", "hub", "inventory", "gatehouse", "hgv"],
    response: "For warehouses, we focus on gatehouse integrity and inventory transparency. We audit HGV manifests, check vehicle seals, and conduct internal patrols to stop shrinkage and secure your global supply chain."
  },
  vetted: {
    keywords: ["sia", "licensed", "badge", "vetted", "training", "guards", "officers", "personnel"],
    response: "Trust is paramount. Every single Observant Security officer is 100% SIA licensed, fully vetted, and trained to the highest industry standards. We don't just provide guards; we provide professional safety specialists."
  },
  contact: {
    keywords: ["contact", "call", "email", "quote", "price", "cost", "hire", "get a quote", "phone"],
    response: "You can reach us 24/7 at +44 7446 084868. Alternatively, click the 'GET A QUOTE' button at the top of our website to receive a tailored security proposal for your site."
  },
  brochure: {
    keywords: ["brochure", "profile", "download", "pdf", "info", "details"],
    response: "You can download our full company brochure on our dedicated Brochure page. It contains detailed case studies, service breakdowns, and our technical standards."
  },
  thanks: {
    keywords: ["thanks", "thank you", "great", "awesome", "perfect", "bye", "goodbye"],
    response: "You're very welcome! Feel free to reach out if you have any more questions about your security needs. Stay safe!"
  }
};

/**
 * Enhanced response logic with multi-keyword matching and fallbacks.
 */
export const getBotResponse = (input) => {
  if (!input) return "I'm sorry, I didn't catch that. How can I help you with your security needs?";
  
  const cleanInput = input.toLowerCase().replace(/[?.,!]/g, "").trim();
  
  // Try to find the best matching category
  for (const category in knowledgeBase) {
    if (knowledgeBase[category].keywords.some(keyword => cleanInput.includes(keyword))) {
      return knowledgeBase[category].response;
    }
  }
  
  // Smart fallback
  return "That's an important question. While I can answer most things about our services, for specific site requirements, I recommend speaking directly with one of our security specialists. You can call us 24/7 at +44 7446 084868 or use the 'GET A QUOTE' form.";
};
