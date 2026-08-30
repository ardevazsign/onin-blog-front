import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        form,
      );
      alert(res.data.message);
      setForm({
        fullName: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <section className=" bg-azure py-1">
      <div className="max-w-7xl mx-auto px-4 xl:w-[1000px] xl:mb-0 lg:w-[900px] sm:w-[500px] sm:mb-24 mt-20 sm:mt-20 md:mt-20 lg:mt-20 xl:mt-12 ">
        {/* Header */}
        <div className="text-center mb-1 sm:mb-4">
          <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>

          <p className="mt-1 text-center text-sm text-gray-700 max-w-2xl mx-auto leading-4 italic xl:w-[550px] w-[370px] mb-4">
            We d love to hear from you. Whether you have a question, feedback,
            business inquiry, or simply want to say hello, feel free to reach
            out using the form below.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 ">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg pt-14 pb-10 flex flex-col items-center mb-2 ">
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>

            <div className="space-y-6 xl:space-y-3">
              <div className="flex gap-4">
                <Mail className="text-blue-600" size={28} />

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">newojunior@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="text-blue-600" size={28} />

                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+63 9167522487</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-blue-600" size={28} />

                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    San Francisco, Batangas, Philippines
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="text-blue-600" size={28} />

                <div>
                  <h3 className="font-semibold">Business Hours</h3>

                  <p className="text-gray-600">Monday - Friday</p>

                  <p className="text-gray-600">8:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-20 sm:mb-2 md:mb-2 lg:mb-2 xl:mb-2">
            <h2 className="text-3xl font-semibold mb-8 text-center">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 xl:space-y-3">
              <div>
                <label className="block mb-2 font-medium">Full Name</label>

                <input
                  // type="text"
                  className="w-full rounded-lg border border-gray-300 p-2 outline-none focus:border-blue-500"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={form.fullName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email Address</label>

                <input
                  // type="email"
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Subject</label>

                <input
                  // type="text"
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
                  name="subject"
                  placeholder="Message subject"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>

                <textarea
                  className="w-full rounded-lg border border-gray-300 p-3 outline-none resize-none focus:border-blue-500"
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold transition hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
