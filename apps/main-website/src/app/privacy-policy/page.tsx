export const metadata = {
  title: 'Privacy Policy | Riflebird Agency',
  description: 'Our privacy policy outlines how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-36 pb-24 px-8 md:px-16 bg-cream">
      <div className="max-w-4xl mx-auto prose prose-lg text-navy">
        <h1 className="font-sans text-5xl font-bold text-navy text-left mb-16">Privacy Policy</h1>

        <p>
          This Privacy Policy outlines the practices of <strong>Riflebird Agency</strong> (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) concerning 
          the collection, use, and protection of your personal information on our website (<a href="#">www.riflebirdagency.com</a>). 
          Riflebird Agency is committed to safeguarding your privacy and ensuring compliance with the <strong>Privacy Act 1988 (Cth)</strong> and 
          other applicable privacy laws.
        </p>

        <h2 className="text-3xl font-bold text-navy mt-12 mb-6">Personal Information We Collect</h2>
        <p>We may collect and hold the following types of personal information:</p>
        <ul>
          <li>Name</li>
          <li>Address</li>
          <li>Telephone number</li>
          <li>Email address</li>
          <li>Business and/or website details</li>
          <li>Other information you provide to us directly</li>
        </ul>

        <p>We also collect non-personally identifiable information such as:</p>
        <ul>
          <li>Browser type, version, and language</li>
          <li>Operating system</li>
          <li>Pages viewed on our website</li>
          <li>Time and date of access</li>
          <li>Referring website addresses</li>
        </ul>

        <h2 className="text-3xl font-bold text-navy mt-12 mb-6">How We Collect Your Information</h2>
        <p>We may collect personal information in the following ways:</p>
        <ul>
          <li><strong>Directly from you:</strong> via phone calls, emails, or when you submit an enquiry through our website (e.g., contact forms).</li>
          <li><strong>From publicly available sources:</strong> such as online directories or business listings.</li>
          <li><strong>Through third parties:</strong> including representatives, affiliates, or related entities.</li>
        </ul>

        <h2 className="text-3xl font-bold text-navy mt-12 mb-6">Use of Your Personal Information</h2>
        <p>Your personal information may be used for the following purposes:</p>
        <ul>
          <li>To verify your identity.</li>
          <li>To deliver and manage the services you request.</li>
          <li>To communicate with you about your queries, feedback, or changes to our services.</li>
          <li>To research and improve our services.</li>
          <li>To maintain and test our business systems.</li>
          <li>To send marketing communications if you have opted in to receive them.</li>
        </ul>

        <p>
          From time to time, we may use customer information for new, unanticipated purposes not previously 
          disclosed in this policy. Any changes to our practices will apply only to data collected after the 
          policy is updated.
        </p>

        <h2 className="text-3xl font-bold text-navy mt-12 mb-6">Sharing Your Personal Information</h2>
        <p>We may share your personal information with trusted third-party service providers, including but not limited to:</p>
        <ul>
          <li>Web hosting providers</li>
          <li>Content creators</li>
          <li>Marketing agencies</li>
        </ul>

        <p>
          These third parties will only access your information to the extent necessary to perform their functions 
          and are required to protect your information under confidentiality and privacy obligations.
        </p>

        <h2 className="text-3xl font-bold text-navy mt-12 mb-6">Cookies and Tracking Technologies</h2>
        <p>Our website uses cookies, tracking pixels, and similar technologies. These are used to:</p>
        <ul>
          <li>Personalize your experience on our site.</li>
          <li>Track how you use the site to deliver targeted advertising on other platforms.</li>
          <li>Improve website functionality and content.</li>
        </ul>

        <p>
          You can adjust your browser settings to refuse cookies, but this may impact your user experience on our site.
        </p>

        <h2 className="text-3xl font-bold text-navy mt-12 mb-6">Accessing and Updating Your Information</h2>
        <p>
          You have the right to access and correct the personal information we hold about you, subject to any 
          legal exceptions. To request access or corrections, please contact us in writing. A fee may apply for 
          processing such requests.
        </p>

        <h2 className="text-3xl font-bold text-navy mt-12 mb-6">Security of Your Information</h2>
        <p>
          We take reasonable steps to protect your personal information from unauthorized access, misuse, loss, 
          or disclosure. However, no method of transmission over the Internet or electronic storage is completely 
          secure, and we cannot guarantee absolute security.
        </p>

        <h2 className="text-3xl font-bold text-navy mt-12 mb-6">Changes to This Privacy Policy</h2>
        <p>
          We reserve the right to modify this Privacy Policy at any time. Any changes will be effective immediately 
          upon posting on our website. We encourage you to periodically review this policy to stay informed about 
          how we are protecting your information.
        </p>

        <h2 className="text-3xl font-bold text-navy mt-12 mb-6">Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
        <p>
          <strong>Email:</strong> <a href="mailto:admin@riflebirdagency.com">admin@riflebirdagency.com</a><br />
          {/* <strong>Phone:</strong> 1300 707 660<br />
          <strong>Mailing Address:</strong> PO Box 123, Sydney, NSW 2000, Australia */}
        </p>

        <p className="text-sm text-gray-500 mt-16">Last Updated: January 2025</p>
      </div>
    </main>
  );
} 