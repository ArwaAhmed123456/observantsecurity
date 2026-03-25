import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "Are your security guards SIA licensed?",
            answer: "Yes, all our security professionals are fully SIA (Security Industry Authority) licensed. We also conduct thorough background checks and regular training to ensure the highest standards of professionalism and compliance with UK security regulations."
        },
        {
            question: "What areas of the UK do you cover?",
            answer: "While we are headquartered in the West Midlands (covering Birmingham, Coventry, Wolverhampton, etc.), we provide security solutions for large-scale projects and corporate clients across the entire UK."
        },
        {
            question: "Do you provide 24/7 security monitoring?",
            answer: "Absolutely. Our state-of-the-art monitoring center operates 24 hours a day, 365 days a year. Whether it's live CCTV surveillance or rapid alarm response, we are always on watch."
        },
        {
            question: "Can you provide security for short-term events?",
            answer: "Yes, we offer flexible security solutions for both long-term contracts and short-term requirements, such as festivals, corporate events, or temporary construction site protection."
        },
        {
            question: "How quickly can you deploy security to my site?",
            answer: "In many cases, we can deploy emergency security personnel within 4 to 24 hours of a request, depending on the location and specific requirements of the site."
        },
        {
            question: "Do you offer integrated security technology?",
            answer: "Yes, we specialize in 'hybrid' security, which combines physical guarding with advanced technology like thermal imaging CCTV, smart perimeter alarms, and mobile GPS-tracked patrols for maximum efficiency and cost-effectiveness."
        },
        {
            question: "How do you ensure the quality of your guards?",
            answer: "We use a rigorous multi-stage vetting process, including 5-year work history verification and personal references. Once hired, guards undergo site-specific induction and are monitored via regular supervisor spot-checks and GPS tracking."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-page">
            <div className="faq-hero">
                <div className="hero-overlay"></div>
                <h1>Frequently Asked Questions</h1>
                <p>Everything you need to know about our professional security services and standards.</p>
            </div>

            <div className="faq-container">
                <div className="faq-intro">
                    <h2>Got Questions?</h2>
                    <p>We believe in transparency and professional excellence. If your question isn't answered here, please don't hesitate to contact us directly.</p>
                </div>

                <div className="faq-list">
                    {faqData.map((item, index) => (
                        <div 
                            key={index} 
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question">
                                <h3>{item.question}</h3>
                                <span className="faq-icon">
                                    {activeIndex === index ? '−' : '+'}
                                </span>
                            </div>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-cta">
                    <h3>Still have questions?</h3>
                    <p>Our expert team is ready to discuss your specific security requirements.</p>
                    <a href="/contact" className="contact-btn">Get in Touch</a>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
