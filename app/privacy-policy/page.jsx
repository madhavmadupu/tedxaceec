import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div className='w-screen p-8 mt-[6rem] text-justify overflow-y-auto'>
            <h2 className="text-2xl font-bold">Privacy Policy</h2>

            <p>This Privacy Policy statement discloses the privacy practices for this Application / website and all its products (hereinafter referred to as “Service”), hosted by “Audition Update.” We realize that you care how your information is processed and shared, and we appreciate your trust in us to do that carefully and sensibly. This document describes our Privacy Policy. By registering your details with us you confirm that you have read, understood, and agreed to the provisions of this Privacy Policy. For the purpose of this Privacy Policy, the terms “User” shall not only mean the “Registered User” in accordance with the provisions of Terms of Service but also every person visiting all the products or the website.</p>

            <h3 className="text-xl font-semibold mt-4">1. Information We Collect</h3>
            <ul className="list-disc ml-4">
                <li>We collect personal information from Users who visit this Application / Site and use our Service. This includes, at a minimum:
                    <ul className="list-disc ml-4">
                        <li>First and last name;</li>
                        <li>Username;</li>
                        <li>Email address (used as login);</li>
                        <li>Password;</li>
                        <li>Billing information such as address and credit card information;</li>
                        <li>Phone;</li>
                        <li>Country;</li>
                        <li>Address, city, state, zip/pin code;</li>
                        <li>Photographs, etc.</li>
                    </ul>
                </li>
                <li>Additional information may include:
                    <ul className="list-disc ml-4">
                        <li>Company name;</li>
                        <li>Title;</li>
                        <li>Educational institution; and</li>
                        <li>Optional personal details.</li>
                    </ul>
                </li>
            </ul>

            <h3 className="text-xl font-semibold mt-4">2. Passwords</h3>
            <p>The User’s account information, username, password, and profile are password-protected to ensure secure access to personal data. We implement encryption and internal security processes to protect these passwords.</p>

            <h3 className="text-xl font-semibold mt-4">3. User Access and Choice</h3>
            <p>If personal information changes or if the User no longer desires our service, they can update or delete their information. We retain personal information for as long as necessary to provide services, comply with legal obligations, and enforce agreements.</p>

            <h3 className="text-xl font-semibold mt-4">4. Mailing Policy</h3>
            <p>We do not send unsolicited messages or information. Users may opt-in to receive marketing information and can opt-out at any time.</p>

            <h3 className="text-xl font-semibold mt-4">5. Information Sharing</h3>
            <p>We do not sell or rent personal information to third parties unless authorized by the User. We may share information in the case of legal or government requests.</p>

            <h3 className="text-xl font-semibold mt-4">6. Minor’s Privacy Policy</h3>
            <p>Minors must use the Service under parental supervision, and we request all users to confirm they meet the age of majority as per applicable law.</p>

            <h3 className="text-xl font-semibold mt-4">7. Tracking Technologies</h3>
            <p>We use cookies and other tracking technologies to enhance the user experience. Users may disable cookies, but some functionalities may be lost.</p>

            <h3 className="text-xl font-semibold mt-4">8. Information Security</h3>
            <p>We strive to protect personal information through encryption and secure servers, but cannot guarantee the security of data transmitted over the Internet. Users transmit data at their own risk.</p>

            <h3 className="text-xl font-semibold mt-4">Additional Information</h3>
            <ul className="list-disc ml-4">
                <li>Links to Third Party Sites: We are not responsible for privacy practices on third-party sites.</li>
                <li>Testimonials: With consent, we may post testimonials.</li>
                <li>Changes to Policy: We may update the Privacy Policy and notify users of significant changes.</li>
                <li>Contact: Users should help us keep their personal information up-to-date.</li>
            </ul>
        </div>
    )
}

export default PrivacyPolicy
