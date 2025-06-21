// Description: About page component for ShoppyGlobe

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Contact Us 📬</h2>
      <p className="text-gray-700 mb-4">
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hi —
        feel free to reach out using the info below.
      </p>

      <ul className="text-gray-600 space-y-2">
        <li><strong>Email:</strong> support@shoppyglobe.com</li>
        <li><strong>Phone:</strong> +91 96850 82298</li>
        <li><strong>Address:</strong> 123 Some-Road, Delhi, India</li>
      </ul>

      <p className="mt-4 text-sm text-gray-500">Response time: Within 24-48 hours</p>
    </div>
  );
};

export default Contact;
