import { useState } from 'react';
import { EMAIL } from '../data/site';

/** Opens the visitor's mail app with the message pre-filled (no backend needed). */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Portfolio message from ${data.get('name')}`;
    const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <h3 className="card__heading">Send a message</h3>
      <label>
        Name
        <input name="name" type="text" required autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Message
        <textarea name="message" rows="4" required />
      </label>
      <button className="btn" type="submit">Send message</button>
      <p className="form__note" role="status">
        {sent ? 'Your email app should open with the message ready to send.' : 'This opens your email app with the message filled in.'}
      </p>
    </form>
  );
}
