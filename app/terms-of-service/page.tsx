import { APP_NAME, CONTACT_EMAIL } from "@/lib/constants";

function TermsOfService() {
    return (
        <div className="py-32 px-4 flex flex-col gap-y-2 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold">Terms of Service</h2>
            <p>Last Updated: Dec 22, 2023</p>
            <p>Welcome to {APP_NAME}. Please read these Terms of Service carefully before using {APP_NAME} {`(the "Service")`} operated by {APP_NAME}{`("us", "we", or "our")`}.</p>

            <div className="mt-10 flex flex-col gap-y-5">
                <div>
                    <h3 className="text-xl font-semibold">1. Acceptance of Terms</h3>
                    <p>By accessing and using our Service, you agree to abide by these Terms and all applicable laws, rules, and regulations.</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">2. Changes to Terms</h3>
                    <p>We reserve the right to modify these Terms at any time. Any changes will be posted on this page with an updated revision date.</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">3. Privacy</h3>
                    <p>Please refer to our Privacy Policy for information about how we collect, use, and disclose your information.</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">4. User Conduct</h3>
                    <p>You agree not to use the Service in a way that is harmful to us, our services, our users, or any third party.</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">5. Intellectual Property</h3>
                    <p>All content, features, and functionality on the Service are owned by {APP_NAME} and are protected by international copyright and other intellectual property laws.</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">6. Termination</h3>
                    <p>We reserve the right to terminate or suspend your access to the Service at any time, without prior notice or liability, for any reason.</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">7. Limitation of Liability</h3>
                    <p>To the maximum extent permitted by law, {APP_NAME} will not be held liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the Service.</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">8. Governing Law</h3>
                    <p>These Terms are governed by the laws of Singapore without regard to its conflict of law provisions.</p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">9. Contact Us</h3>
                    <p>If you have any questions about these Terms, please contact us at {CONTACT_EMAIL}.</p>
                </div>
            </div>
        </div>
    );
}

export default TermsOfService;