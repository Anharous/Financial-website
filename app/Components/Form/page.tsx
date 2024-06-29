'use client'
import Image from "next/image";
import  "./form.css";


// import { motion } from 'framer-motion';
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";





interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  insurance: string;
  message: string;
}

export default function page() {

  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    insurance:'',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validate = () => {
    let formErrors: Partial<FormData> = {};
    if (!formData.firstname) formErrors.firstname = 'FirstName is required';
    if (!formData.lastname) formErrors.lastname = 'lastName is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.phone) formErrors.phone = 'Phone number is required';
    if (!formData.insurance) formErrors.insurance = 'Insurance coverage is required';
    if (!formData.message) formErrors.message = 'Message is required';
    return formErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          insurance:'',
          message: ''
        });
      } else {
        alert(`Failed to send email: ${result.message}`);
        console.error(result.error);
      }
    } else {
      setErrors(formErrors);
    }
  };


  return (
    <div className="phase-five">
            <div className="phase-five-head">
                <h1>Get in touch!</h1>
                <div className="phase-five-line"></div>
            </div>
    <div className="mail-container">
    <div className="left">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-para">
          <h3>Ready to learn more about how Redtail Insurance Agency can help protect your business?</h3>
          <p>Contact us today to schedule a consultation with one of our experienced agents. We're here to answer your questions and provide personalized insurance solutions that meet your needs.</p>
        </div>
        <div className="namesub">
          <div className="name-container">
            <label htmlFor="fname">First name</label>
            <div className="name">
              <Image src="form-user.svg" alt="user image" width={20} height={20} />
              <div className="formline"></div>
              <input
                placeholder="First name"
                name="First name"
                value={formData.firstname}
                onChange={handleChange} />
                 
            </div>
            {errors.firstname && <span className="error">{errors.firstname}</span>}
          </div>
          <div className="name-container">
            <label htmlFor="fname">Last name</label>
            <div className="name">
              <Image src="form-user.svg" alt="user image" width={20} height={20} />
              <div className="formline"></div>
              <input
                placeholder="Last name"
                name="Last name"
                value={formData.lastname}
                onChange={handleChange}/>
            </div>
            {errors.lastname && <span className="error">{errors.lastname}</span>}

          </div>
        </div>
        <div className="emailphone">
          <div className="name-container">
            <label htmlFor="lname">E-name address</label>
            <div className="name">
              <Image src="form-mail.svg"alt="mail image" width={20} height={20} />
              <div className="formline"></div>
              <input
                placeholder="E-mail address"
                name="email"
                value={formData.email}
                onChange={handleChange}/>
            </div>
            {errors.email && <span className="error">{errors.email}</span>}

          </div>
          <div className="name-container">
            <label htmlFor="fname">Phone number</label>
            <div className="name">
              <Image src="form-phone.svg" alt="phone image" width={20} height={20} />
              <div className="formline"></div>
              <input
                placeholder="phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}/>
            </div>
            {errors.phone && <span className="error">{errors.phone}</span>}

          </div>
        </div>
        <div className="message">
          <div className="messagebox">
            <label htmlFor="fname">Insurance coverage</label>
            <input
              // placeholder="Insurance coverage"
              // name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          {errors.insurance && <span className="error">{errors.insurance}</span>}

        </div>
        <div className="message">
          <div className="messagebox">
            <label htmlFor="fname">How can we help?</label>
            <input
              id="message"
              // placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          {errors.message && <span className="error">{errors.message}</span>}

        </div>
        <button type="submit">Get A Quote</button>
      </form>
    </div> 
    <div className="right">
      <Image src="/form-right-img.svg" alt="persons" width={600} height={750} />

    </div>
    </div>
    </div>
  );
}
