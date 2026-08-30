const PrivacyPolicy = () => {
  return (
    <section className=" bg-azure py-16">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md lg:p-12 w-400px xl:w-[800px] lg:w-[760px] md:w-[720px] sm:w-[580px] mb-4 ">
        <h1 className="mb-2 text-2xl sm:text-[24px] md:text-3xl lg:text-4xl xl:text-4xl font-bold text-slate-900">
          Privacy Policy
        </h1>

        <p className="mb-8 text-[10px] sm:text-[12px] text-gray-500">
          Effective Date: July 9, 2026
        </p>

        <section className="space-y-6 text-gray-700 leading-8">
          <div>
            <h2 className="mb-2 text-[18px] sm:text-[20px] md:2xl lg:2xl xl:2xl font-semibold">
              1. Introduction
            </h2>

            <p className="sm:text-[14px] sm:leading-5 text-[12px] leading-4">
              Welcome to our website. We value your privacy and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when
              you visit our website.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-[18px] sm:text-[20px] md:2xl lg:2xl xl:2xl font-semibold">
              2. Information We Collect
            </h2>

            <ul className="list-disc pl-6 space-y-2 sm:space-y-0 sm:text-[14px] text-[12px] leading-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Profile information</li>
              <li>Comments submitted</li>
              <li>IP address</li>
              <li>Browser information</li>
              <li>Usage analytics</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-[18px] sm:text-[20px] md:2xl lg:2xl xl:2xl font-semibold ">
              3. How We Use Your Information
            </h2>

            <ul className="list-disc pl-6 space-y-2 sm:space-y-0 sm:text-[14px] text-[12px] leading-4">
              <li>Provide our services</li>
              <li>Improve website performance</li>
              <li>Respond to inquiries</li>
              <li>Maintain security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-[18px] sm:text-[20px] md:2xl lg:2xl xl:2xl font-semibold ">
              4. Cookies
            </h2>

            <p className="sm:text-[14px] sm:leading-5 text-[12px] leading-4">
              We may use cookies to improve your browsing experience and
              remember your preferences.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-[18px] sm:text-[20px] md:2xl lg:2xl xl:2xl font-semibold ">
              5. Third-Party Services
            </h2>

            <p className="sm:text-[14px] sm:leading-5 text-[12px] leading-4">
              Our website may use trusted third-party providers such as
              authentication, analytics, cloud hosting, and image hosting
              services.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-[18px] sm:text-[20px] md:2xl lg:2xl xl:2xl font-semibold ">
              6. Data Security
            </h2>

            <p className="sm:text-[14px] sm:leading-5 text-[12px] leading-4">
              We implement reasonable security measures to help protect your
              personal information.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-[18px] sm:text-[20px] md:2xl lg:2xl xl:2xl font-semibold ">
              7. Your Rights
            </h2>

            <p className="sm:text-[14px] sm:leading-5 text-[12px] leading-4">
              Depending on applicable laws, you may have the right to access,
              correct, or delete your personal information.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-[18px] sm:text-[20px] md:2xl lg:2xl xl:2xl font-semibold ">
              8. Changes to This Policy
            </h2>

            <p className="sm:text-[14px] sm:leading-5 text-[12px] leading-4">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-semibold text-[18px] sm:text-[20px] md:2xl lg:2xl xl:2xl">
              9. Contact Us
            </h2>

            <p className="sm:text-[14px] sm:leading-5 text-[12px] leading-4">
              If you have any questions regarding this Privacy Policy, please
              contact us through our Contact page.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
