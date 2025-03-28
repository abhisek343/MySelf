import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 dark:from-accent-dark/5 dark:to-primary-dark/5" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Get in Touch
          </h2>
          <p className="text-text-main dark:text-text-main-dark max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-surface dark:bg-surface-dark p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-text-main dark:text-text-main-dark mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <svg
                    className="w-6 h-6 text-primary dark:text-primary-light mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="text-text-main dark:text-text-main-dark font-medium">Email</p>
                    <a
                      href="mailto:contact@example.com"
                      className="text-primary dark:text-primary-light hover:underline"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg
                    className="w-6 h-6 text-primary dark:text-primary-light mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-text-main dark:text-text-main-dark font-medium">Location</p>
                    <p className="text-text-main/70 dark:text-text-main-dark/70">
                      Your City, Your Country
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-surface dark:bg-surface-dark p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-text-main dark:text-text-main-dark mb-4">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', url: 'https://github.com/abhisek343' },
                  { name: 'LinkedIn', url: 'https://linkedin.com/in/abhisek343' },
                  { name: 'Twitter', url: 'https://twitter.com/abhisek343' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-main dark:text-text-main-dark hover:text-primary dark:hover:text-primary-light transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="sr-only">{social.name}</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      {/* Add social media icons here */}
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-surface dark:bg-surface-dark p-6 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-main dark:text-text-main-dark mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full px-4 py-2 rounded-lg border border-neutral dark:border-neutral-dark bg-white dark:bg-neutral-dark text-text-main dark:text-text-main-dark focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-main dark:text-text-main-dark mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full px-4 py-2 rounded-lg border border-neutral dark:border-neutral-dark bg-white dark:bg-neutral-dark text-text-main dark:text-text-main-dark focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-main dark:text-text-main-dark mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  autoComplete="off"
                  className="w-full px-4 py-2 rounded-lg border border-neutral dark:border-neutral-dark bg-white dark:bg-neutral-dark text-text-main dark:text-text-main-dark focus:ring-2 focus:ring-primary dark:focus:ring-primary-light focus:border-transparent transition-colors"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 rounded-lg text-white font-medium transition-colors ${
                  isSubmitting
                    ? 'bg-primary/70 dark:bg-primary-light/70 cursor-not-allowed'
                    : 'bg-primary dark:bg-primary-light hover:bg-primary-dark dark:hover:bg-primary-dark'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>

            {/* Form Status */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 p-4 rounded-lg bg-secondary/10 dark:bg-secondary-dark/10 text-secondary dark:text-secondary-light"
                >
                  Message sent successfully!
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="mt-4 p-4 rounded-lg bg-accent/10 dark:bg-accent-dark/10 text-accent dark:text-accent-light"
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 