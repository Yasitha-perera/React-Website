import "./ContactFromStyles.css";

function ContactFrom() {
  return (
    <div className="form-container">
      <h1>Send a Message to Us!</h1>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Regarding" />
        <textarea placeholder="Message" rows="4"></textarea>
      </form>
      <button>Send Message</button>
    </div>
  );
}

export default ContactFrom;
