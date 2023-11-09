export function Contact() {
  return (
    <div className="container">
      <h1 id="contactId">Contact</h1>
      <p>
        I would love to hear about your project and how I could help. Please
        fill in the form, and I’ll get back to you as soon as possible.
      </p>
      <form>
        <label for="fname">Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label for="lname">Email</label>
        <input
          type="email"
          id="lname"
          name="lastname"
          placeholder="Your email"
        />

        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." />

        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
}
