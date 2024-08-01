import Head from 'next/head';

const ThankYouPage = () => {
  return (
    <>
      <Head>
        <title>Thank You | Noliga Engineering</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Thank You page for Mak Beauty Salon. Your message has been received. We will get back to you as soon as possible."
        />
        <meta
          name="keywords"
          content="Mak Beauty Salon, Thank You Page, Beauty Salon, Contact, Inquiry"
        />
        <meta name="author" content="Mak Beauty Salon" />
        <link rel="icon" href="/images/noliga_logo_img.PNG" type="image/gif" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "Mak Beauty Salon",
              url: "https://www.makbeautysalonandspa.com/",
              logo: "https://www.makbeautysalonandspa.com/images/mak_beauty_salon_logo.PNG",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+251956505152",
                contactType: "customer service",
              },
            }),
          }}
        />
      </Head>
      <div className="bg-orange-100 min-h-screen flex items-center justify-center py-10">
        <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-10">
          {/* Thank You Message */}
          <div className="text-center mb-8">
            <img
              src="/images/noliga_logo.png"
              alt="Thank You Images"
              className="w-full max-w-md mx-auto mb-6 animate-bounce"
            />
            <h1 className="text-4xl font-bold text-orange-500 mb-4">Thank You!</h1>
            <p className="text-lg text-gray-700">
              Your message has been received. We will get back to you as soon as possible.
            </p>
          </div>
          {/* Additional Information */}
          <div className="text-center mb-8">
            <p className="text-base text-gray-600 mb-2">
              For any further inquiries, please contact us at:
            </p>
            <p className="text-base text-gray-600 mb-2">Phone: +251909540938</p>
            <p className="text-base text-gray-600">Email: noligaengineering4@gmail.com</p>
          </div>
          {/* Back to Blog Link */}
          <div className="text-center">
            <a
              href="/contact"
              className="inline-block bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Back to the page
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
