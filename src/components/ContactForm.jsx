import { useState } from 'react';

const FORM_API_URL = import.meta.env.VITE_CONTACT_API_URL || '/contact.php';
const phoneRegex = /^\+91\s?[6-9]\d{9}$/;

function ContactForm() {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, phone, service, message } = state;

    if (!name || !email || !phone || !service || !message) {
      setStatus('Please fill all required fields.');
      setStatusType('error');
      return;
    }

    if (!phoneRegex.test(phone)) {
      setStatus('Phone must be in +91 9876543210 format.');
      setStatusType('error');
      return;
    }

    setSubmitting(true);
    setStatus('Submitting your response...');
    setStatusType('');

    try {
      const response = await fetch(FORM_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      });

      let result;
      try {
        result = await response.json();
      } catch {
        result = { success: response.ok, message: response.statusText };
      }

      if (response.ok && result.success) {
        setStatus('Thank you! Your message has been sent successfully. We will contact you shortly.');
        setStatusType('success');
        setState({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus(result.message || 'Something went wrong. Please try again.');
        setStatusType('error');
      }
    } catch (error) {
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        setStatus('Local Dev: Form simulated successfully (On live Hostinger, this sends directly to enquiry@improxgroup.com).');
        setStatusType('success');
        setState({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('Unable to connect. Please check your connection or reach us directly at enquiry@improxgroup.com.');
        setStatusType('error');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="contact-form card reveal" onSubmit={handleSubmit} noValidate>
      <label>
        Name
        <input type="text" name="name" value={state.name} onChange={handleChange} required />
      </label>
      <label>
        Email
        <input type="email" name="email" value={state.email} onChange={handleChange} required />
      </label>
      <label>
        Service
        <select name="service" value={state.service} onChange={handleChange} required>
          <option value="">Select service</option>
          <option value="Product Engineering">Product Engineering</option>
          <option value="Application Services">Application Services</option>
          <option value="Technology Services">Technology Services</option>
          <option value="AI & BI">AI & BI</option>
        </select>
      </label>
      <label>
        Phone
        <input
          type="tel"
          name="phone"
          value={state.phone}
          onChange={handleChange}
          placeholder="+91 9876543210"
          required
        />
      </label>
      <label>
        Message
        <textarea name="message" value={state.message} onChange={handleChange} rows="5" required />
      </label>
      <button type="submit" className="btn btn-primary" disabled={submitting}>
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
      <p className={`form-status${statusType ? ` is-${statusType}` : ''}`} aria-live="polite">
        {status}
      </p>
    </form>
  );
}

export default ContactForm;
