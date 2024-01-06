

function FAQ() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>1: What services do you offer?</Accordion.Header>
                <Accordion.Body>
                    I provide comprehensive support services, including personalized nutritional guidance, emotional counseling, and post-surgery wellness programs to help you achieve and maintain a healthier lifestyle.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>2: How experienced are you with bariatric support?</Accordion.Header>
                <Accordion.Body>
                    I am a qualified nutritionist and have focused my nutritional requirements around post-bariatric surgery. I have also personally been through the procedure and have utilised this knowledge to succeed with my weight loss journey!
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>3: Can I receive remote support or is it only in-person?</Accordion.Header>
                <Accordion.Body>Absolutely! I understand the importance of accessibility. I offer both in-person consultations and remote support, ensuring that my guidance reaches you wherever you are on your journey.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>4:  What sets you apart from other bariatric support sites?</Accordion.Header>
                <Accordion.Body>I take a holistic approach, addressing not only the physical aspects but also the emotional and mental facets of your bariatric journey. My personalized care plans distinguish me from the rest, focusing on your unique needs.</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>5: I'm in! How can I get started?</Accordion.Header>
                <Accordion.Body>It's easy! Take a look at our<a href="#my-services">Services</a> section to see which package suits you best. Pick the one you like and you'll be taken to the checkout page to complete your payment. Upon completion, you'll gain access to my calendar to book your first meeting with me! You'll also receive an email with login details to your members only section of the website.</Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default FAQ;