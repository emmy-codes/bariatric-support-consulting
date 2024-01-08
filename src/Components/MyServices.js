import Order from "./Order";

function MyServices() {
    return (
        <div className="my-services-container">
            <h2>My Services</h2>
            <div className="services-container">
                <ol className="services">
                    <li><h3>Pre-surgery support</h3> <p>We meet and go through your questions and concerns regarding food before and after the surgery, and your goals for post-surgery weight-loss.</p><Order /></li>
                    <li><h3>Post-surgery support</h3><p>Have you already had your surgery? Let's talk through your weight-loss goals and any hurdles you're facing now.</p><Order /></li>
                    <li><h3>Meal assistance</h3><p>Are you finding it hard to get the right amount of food in post-surgery? Let's talk about which foods can help sate you and help with weight loss.</p><Order /></li>
                </ol>
                <p>All plans include a membership login where you'll have access to any food/exercise suggestions, and access to book a meeting with me. All users will have my WhatsApp for checkins!</p>
            </div>
        </div>
    );
};

export default MyServices;