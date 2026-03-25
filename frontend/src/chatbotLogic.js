const knowledgeBase = {
  greetings: {
    keywords: ["hello", "hi", "hey", "hy", "hye", "hii", "helo", "yo", "greeting", "good morning", "good afternoon"],
    response: "Hello! I'm the Observant Assistant. How can I help you today? You can ask me about our security services, our company, or how to get a quote."
  },
  services: {
    keywords: ["services", "what do you do", "provide", "offer"],
    response: "We provide professional security solutions across the UK, including Solar Farm Security, CCTV Monitoring, Construction Site Security, Corporate Security, Event Security, Mobile Patrols, and Warehouse Security. Which area are you interested in?"
  },
  solar: {
    keywords: ["solar", "farm", "renewable", "panels"],
    response: "We are specialists in Solar Farm Security and renewable energy asset protection. We provide 24/7 protection, smart perimeter detection, and rapid response deployment. Would you like to see more details on our Services page?"
  },
  cctv: {
    keywords: ["cctv", "camera", "monitor", "surveillance"],
    response: "Our CCTV solutions include 24/7 proactive monitoring by SIA-licensed professionals, HD/4K recording, and AI-powered analytics. We provide real-time intervention to prevent crimes before they happen."
  },
  construction: {
    keywords: ["construction", "building", "site", "developer"],
    response: "We provide elite construction site security, including manned guarding and strict access control to prevent theft of plant machinery and materials. We're very active in the West Midlands and across the UK."
  },
  sia: {
    keywords: ["sia", "licensed", "badge", "guards"],
    response: "All our security officers are 100% SIA licensed and fully vetted. We maintain the highest industry standards for your safety and peace of mind."
  },
  about: {
    keywords: ["about", "who are you", "mission", "story"],
    response: "Observant Security is a professional, service-driven security company dedicated to meeting the complex safety needs of modern businesses. Our mission is to provide a secure environment for our clients and the community."
  },
  contact: {
    keywords: ["contact", "call", "email", "quote", "price", "cost"],
    response: "You can request a free quote by clicking 'GET A QUOTE' at the top of the page, or visit our Contact Us page. We're also available 24/7 for our contract clients."
  },
  brochure: {
    keywords: ["brochure", "profile", "download", "pdf"],
    response: "You can view and download our full company brochure on our dedicated Brochure page. It has all the details on our services and standards."
  },
  thanks: {
    keywords: ["thanks", "thank you", "great", "awesome", "bye"],
    response: "You're very welcome! Feel free to ask if you have any more questions. Stay safe!"
  }
};

export const getBotResponse = (input) => {
  const lowerInput = input.toLowerCase();
  
  for (const category in knowledgeBase) {
    if (knowledgeBase[category].keywords.some(keyword => lowerInput.includes(keyword))) {
      return knowledgeBase[category].response;
    }
  }
  
  return "That's a great question. While I'm just a virtual assistant, one of our security specialists would be happy to give you a detailed answer. Would you like to visit our Contact page or call our 24/7 support?";
};
