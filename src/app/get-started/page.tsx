"use client";
import Image from "next/image";
import "./page.scss";
import Link from "next/link";
import InputField from "@/components/InputField/InputField";
import { useState } from "react";
const GetStarted = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    phone: "",
    email: "",
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
    if (!formData.firstName) newErrors.firstName = "Empty Field Detected";
    if (!formData.password) newErrors.password = "Empty Field Detected";
    if (!formData.phone) newErrors.phone = "Empty Field Detected";
    if (!formData.email) newErrors.email = "Empty Field Detected";
    if (!formData.lastName) newErrors.lastName = "Empty Field Detected";

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
    <div className="get-started-container">
      <div className="getStartedImage">
        <Image
          src="/get-started.jpeg"
          width={490}
          height={792}
          alt="Colored Image"
          className="img"
        />
      </div>
      <div className="getstarted-form">
        <div className="header-header">
          <span className="h6">Create an account</span>
          <span className="p">
            Already have an account?{" "}
            <Link className="link" href={"/login"}>
              Log in
            </Link>
          </span>
        </div>

        <div className="form-fields">
          <div className="row">
            <InputField
              label="First Name"
              name="firstName"
              error={errors.firstName}
              onChange={handleChange}
              type="text"
              value={formData.firstName}
              className="radius"
            />
            <InputField
              label="Last Name"
              name="lastName"
              error={errors.lastName}
              onChange={handleChange}
              type="text"
              value={formData.lastName}
              className="radius"
            />
          </div>
          <InputField
            label="Email"
            name="email"
            error={errors.email}
            onChange={handleChange}
            type="text"
            value={formData.email}
            className="radius"
          />
          <InputField
            label="Phone"
            name="phone"
            error={errors.phone}
            onChange={handleChange}
            type="text"
            value={formData.phone}
            className="radius"
          />
          <InputField
            label="Password"
            name="password"
            error={errors.password}
            onChange={handleChange}
            type="password"
            value={formData.password}
            className="radius text-lg tracking-widest"
          />
        </div>
        <button onClick={handleSubmit}>Create Account</button>

        <p>
          By clicking on create account, you agree to the{" "}
          <Link className="text-[#FF5A3C]" href={"/terms&condition"}>
            Terms & Conditions
          </Link>{" "}
          of RHP
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
