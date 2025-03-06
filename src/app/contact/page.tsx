"use client";
import ContactButtons from "@/components/contactButton/ContactButtons";
import "./page.scss";
import { useState } from "react";
import InputField from "@/components/InputField/InputField";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };
  const validateField = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Empty Field Detected";
    if (!formData.email) newErrors.email = "Empty Field Detected";
    if (!formData.phone) newErrors.phone = "Empty Field Detected";
    if (!formData.subject) newErrors.subject = "Empty Field Detected";
    if (!formData.message) newErrors.message = "Empty Field Detected";

    return newErrors;
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Validate all fields on submit
    const validationErrors = validateField();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", formData);
    } else {
      console.log(errors);
    }
  };
  return (
    <div className="contactContainer">
      <header>
        <h1>
          Get in <span className="text-[#FF5A3C]">touch</span>
        </h1>
      </header>
      <div className="contactSubContainer">
        {/* Left Hand Side */}
        <div className="leftHandSide">
          <div className="content">
            <ContactButtons
              src="/phone.png"
              title="Enquiries"
              subtitle="+234 810 139 3279"
              href="tel:+2348101393279"
            />

            <ContactButtons
              src="/mail.png"
              title="Sales"
              subtitle="sales@rhp.ng"
              href="mailto:sales@rhp.ng"
            />

            <ContactButtons
              src="/person.png"
              title="Website"
              subtitle="www.rhp.ng"
              href="/"
            />

            <ContactButtons
              src="/map.png"
              title="Office"
              subtitle="Lekki, Lagos"
              href="https://www.google.com/maps?q=Lekki,Lagos"
              newTab={true}
            />
          </div>
        </div>

        {/* Right Hand Side */}
        <div className="rightHandSide">
          <h1>Reach Out</h1>
          <div className="form">
            {/* form Item for NAME */}
            <InputField
              label="Name"
              type="text"
              value={formData.name}
              error={errors.name}
              name="name"
              onChange={handleChange}
            />
            <InputField
              label="Email"
              type="text"
              value={formData.email}
              error={errors.email}
              name="email"
              onChange={handleChange}
            />

            <InputField
              label="Phone"
              type="text"
              value={formData.phone}
              error={errors.phone}
              name="phone"
              onChange={handleChange}
            />

            <InputField
              label="Subject"
              type="text"
              value={formData.subject}
              error={errors.subject}
              name="subject"
              onChange={handleChange}
            />

            <div className="form-item">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                autoComplete="off"
                required
                className="text-area"
                onChange={handleChange} // Ensure state updates
              />
              <label htmlFor="message">Message</label>
              <span className="error">{errors.message}</span>
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
