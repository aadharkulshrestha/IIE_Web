import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Image from "next/image";
const Contact = () => {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team for any queries or support"
      />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a question or want to learn more about our programs? Fill
                out the form and our team will get back to you as soon as
                possible.
              </p>
              <div className="hidden md:block">
                <ContactInfo />
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <ContactForm />
            </div>
          </div>

          <div className="md:hidden mt-12">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <ContactInfo />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Find Us</h2>
          <div className="h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.033903294952!2d80.17786927454756!3d13.033513013518924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261003d615339%3A0x3ac5b7057e33135!2sIIE%20Centre%20and%20Fab%20Lab!5e0!3m2!1sen!2sin!4v1743242028272!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      
      <section style={{ padding: "4rem 1rem" }}>
        <div
          style={{
            maxWidth: "72rem",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "1.875rem",
              fontWeight: "bold",
              marginBottom: "1.5rem",
            }}
          >
            Connect With Us
          </h2>
          <p
            style={{
              color: "#4B5563",
              marginBottom: "2rem",
              maxWidth: "32rem",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Follow us on social media to stay updated with our latest events,
            success stories, and opportunities.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            {/* Facebook */}
            <a
              href="https://facebook.com/"
              style={{
                height: "3rem",
                width: "3rem",
                borderRadius: "9999px",
                backgroundColor: "#2563EB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                transition: "background-color 0.3s",
              }}
            >
              <svg
                style={{ height: "1.5rem", width: "1.5rem" }}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/"
              style={{
                height: "3rem",
                width: "3rem",
                borderRadius: "9999px",
                backgroundColor: "#DB2777",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                transition: "background-color 0.3s",
              }}
            >
              <svg
                style={{ height: "1.5rem", width: "1.5rem", color: "white" }}
                fill="white"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/"
              style={{
                height: "3rem",
                width: "3rem",
                borderRadius: "9999px",
                backgroundColor: "#0EA5E9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                transition: "background-color 0.3s",
              }}
            >
              <Image
                src={"/images/footer/twitterX.svg"}
                alt="twitter"
                width={20}
                height={20}
              />
            </a>

            {/* Linkedin */}
            <a
              href="https://linkedin.com/"
              style={{
                height: "3rem",
                width: "3rem",
                borderRadius: "9999px",
                backgroundColor: "#1D4ED8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                transition: "background-color 0.3s",
              }}
            >
              <svg
                style={{ height: "1.5rem", width: "1.5rem", color: "white" }}
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
