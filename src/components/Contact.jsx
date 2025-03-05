import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent ✔");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <div className="w-full bg-[rgb(231,231,231)]">
      <div className="w-[1200px] mx-auto py-2">
        <h1 className="text-[5rem] text-[var(--bgOrange)] font-bold pt-[2rem]">
          Contact Me
        </h1>
        <h3 className="text-[3rem] text-[#707692] font-bold">
          Questions, Thoughts, Or Just Want To Say Hello?
        </h3>
        {/* Contact Form */}
        <div className="flex items-center justify-center gap-3 py-6">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-7.5 m-[2rem] w-[70%]"
          >
            <input
              type="text"
              name="name"
              className="bg-white rounded-md py-2 px-8 text-[18px] sdw"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange} required
            />
            <input
              type="text"
              name="email"
              className="bg-white rounded-md py-2 px-8 text-[18px] sdw"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange} required
            />
            <input
              type="text"
              name="subject"
              className="bg-white rounded-md py-2 px-8 text-[18px] sdw"
              placeholder="Enter your subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              cols="30"
              rows="10"
              placeholder="Enter your message"
              className="h-auto pt-4 bg-white rounded-md px-8 text-[18px] sdw"
            />
            <div className="flex items-center gap-2 mt-4">
              <button
                type="submit"
                className="btn-pink font-bold hover:scale-[0.9] flex items-center gap-2 border-none"
              >
                Send Message
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
