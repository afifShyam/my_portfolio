import { useState } from 'react';
import emailService from '../services/emailService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading] = useState(false);
  const [success] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Call mailTo service
    emailService.sendEmail(formData);
  };

  return (
    <div className="container mx-auto px-5 py-28">
      <h2 className="text-6xl font-extrabold text-center mb-16 text-white">Let's Connect</h2>

      <div className="w-full max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 p-10 rounded-3xl shadow-2xl">
        <p className="text-lg leading-relaxed text-gray-300 text-center mb-10">
          I'm open to collaborations, freelance projects, and exciting job opportunities. Feel free
          to reach out via the form below or connect with me on social media!
        </p>

        {success && (
          <div
            className={`text-center p-4 rounded-lg ${
              success.includes('successfully') ? 'bg-green-600' : 'bg-red-600'
            }`}
          >
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-700 py-4 rounded-xl text-white font-semibold shadow-lg transform hover:scale-[1.03] transition-all ${
              loading && 'opacity-50 cursor-not-allowed'
            }`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
