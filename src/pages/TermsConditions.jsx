const TermsAndConditions = () => {
  return (
    <section className=" bg-azure py-16">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-8 shadow-md lg:p-12 xl:w-[800px] lg:w-[760px] md:w-[720px] sm:w-[580px] mb-4">
        <h1 className="text-4xl font-bold text-slate-900 sm:text-[28px]">
          Terms & Conditions
        </h1>

        <p className="mt-2 sm:mt-1 text-sm text-gray-500 sm:text-[12px]">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        <p className="mt-8 sm:mt-4 leading-8 text-gray-700 sm:text-[14px] sm:leading-5">
          Welcome to our website. By accessing or using this website, you agree
          to comply with and be bound by the following Terms and Conditions. If
          you do not agree with any part of these terms, please discontinue
          using this website.
        </p>

        <section className="mt-10 sm:mt-6 space-y-10 sm:space-y-5">
          {/* Acceptance */}
          <div>
            <h2 className="text-2xl font-semibold sm:text-[20px]">
              1. Acceptance of Terms
            </h2>

            <p className="mt-4 sm:mt-2 leading-8 text-gray-700 sm:text-[14px] sm:leading-5">
              By accessing this website, you acknowledge that you have read,
              understood, and agreed to these Terms and Conditions, together
              with our Privacy Policy.
            </p>
          </div>

          {/* Website Use */}
          <div>
            <h2 className="text-2xl font-semibold sm:text-[20px]">
              2. Use of the Website
            </h2>

            <p className="mt-4 sm:mt-2 leading-8 text-gray-700 sm:text-[14px] sm:leading-5">
              You agree to use this website only for lawful purposes. You must
              not engage in any activity that could damage, interrupt, or
              interfere with the website or other users experience.
            </p>
          </div>

          {/* Accounts */}
          <div>
            <h2 className="text-2xl font-semibold sm:text-[20px]">
              3. User Accounts
            </h2>

            <p className="mt-4 sm:mt-2 leading-8 text-gray-700 sm:text-[14px] sm:leading-5">
              If you create an account, you are responsible for maintaining the
              confidentiality of your login credentials and for all activities
              that occur under your account.
            </p>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-2xl font-semibold sm:text-[20px]">
              4. Intellectual Property
            </h2>

            <p className="mt-4 sm:mt-2 leading-8 text-gray-700 sm:text-[14px] sm:leading-5">
              All content published on this website, including articles, text,
              graphics, images, logos, and source code, is the property of the
              website owner unless otherwise stated. Unauthorized copying,
              reproduction, or redistribution is prohibited without prior
              permission.
            </p>
          </div>

          {/* User Content */}
          <div>
            <h2 className="text-2xl font-semibold sm:text-[20px]">
              5. User Content
            </h2>

            <p className="mt-4 sm:mt-2 leading-8 text-gray-700 sm:text-[14px] sm:leading-5">
              Users who submit comments or other content remain responsible for
              what they post. We reserve the right to remove content that is
              unlawful, offensive, misleading, spam, or otherwise violates these
              Terms.
            </p>
          </div>

          {/* Third Party */}
          <div>
            <h2 className="text-2xl font-semibold sm:text-[20px]">
              6. Third-Party Links
            </h2>

            <p className="mt-4 sm:mt-2 leading-8 text-gray-700 sm:text-[14px] sm:leading-5">
              This website may contain links to third-party websites for your
              convenience. We are not responsible for the content, privacy
              practices, or services provided by those external websites.
            </p>
          </div>

          {/* Disclaimer */}
          <div>
            <h2 className="text-2xl font-semibold sm:text-[20px]">
              7. Disclaimer
            </h2>

            <p className="mt-4 sm:mt-2 leading-8 text-gray-700 sm:text-[14px] sm:leading-5">
              The information provided on this website is for general
              educational and informational purposes only. While we make
              reasonable efforts to keep content accurate and up to date, we do
              not guarantee that all information is complete, accurate, or free
              from errors.
            </p>
          </div>

          {/* Liability */}
          <div>
            <h2 className="text-2xl font-semibold sm:text-[20px]">
              8. Limitation of Liability
            </h2>

            <p className="mt-4 sm:mt-2 leading-8 text-gray-700 sm:text-[14px] sm:leading-5">
              To the maximum extent permitted by law, we shall not be liable for
              any direct, indirect, incidental, or consequential damages arising
              from your use of this website.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-2xl font-semibold sm:text-[20px]">
              9. Changes to These Terms
            </h2>

            <p className="mt-4 sm:mt-2 leading-8 text-gray-700 sm:text-[14px] sm:leading-5">
              We reserve the right to modify these Terms and Conditions at any
              time. Updated versions will be published on this page together
              with the revised effective date.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-semibold sm:text-[20px]">
              10. Contact Us
            </h2>

            <p className="mt-4 sm:mt-2 leading-8 text-gray-700 sm:text-[14px] sm:leading-5">
              If you have any questions regarding these Terms and Conditions,
              please contact us using the contact information provided on our
              Contact page.
            </p>
          </div>
        </section>

        <div className="mt-12 sm:mt-6 rounded-lg border border-blue-100 bg-blue-50 p-6">
          <p className="text-center text-sm text-gray-600 sm:text-[14px] sm:leading-5">
            By continuing to use this website, you acknowledge that you have
            read, understood, and agreed to these Terms & Conditions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
