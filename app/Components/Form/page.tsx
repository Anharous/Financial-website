'use client'
import Image from "next/image";
import './form.css'
// import { motion } from 'framer-motion';
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";


interface FormData {
    name: string;
    subject: string;
    email: string;
    phone: string;
    message: string;
  }

export default function page(){
    const [formData, setFormData] = useState<FormData>({
        name: '',
        subject: '',
        email: '',
        phone: '',
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
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.subject) formErrors.subject = 'Subject is required';
        if (!formData.email) formErrors.email = 'Email is required';
        if (!formData.phone) formErrors.phone = 'Phone number is required';
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
          name: '',
          subject: '',
          email: '',
          phone: '',
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
    
    return(
        
        <div className="phase-five">
            <div className="phase-five-head">
                <h1>Get in touch!</h1>
                <div className="phase-five-line"></div>
            </div>
            <div className="phase-five-container">
                <div className="form-container">
                    <h3>Ready to learn more about how Redtail Insurance Agency can help protect your business?</h3>
                    <p>Contact us today to schedule a consultation with one of our experienced agents. We're here to answer your questions and provide personalized insurance solutions that meet your needs.</p>
                    <div className="form-inside-container">
                        <div className="form-row-one">
                            <div className="form-inputbox-container">
                                <label htmlFor="fname">First name</label>
                                <div className="inputbox">
                                    <Image src="/form-user.svg" alt="user" width={20} height={20} />
                                    <div className="form-box-inline"></div>
                                    <input type="text" id="fname" name="fname" placeholder="First name" required/>
                                </div>
                            </div>
                            <div className="form-inputbox-container">
                                <label htmlFor="lname">Last name</label>
                                <div className="inputbox">
                                    <Image src="/form-user.svg" alt="user" width={20} height={20} />
                                    <div className="form-box-inline"></div>
                                    <input type="text" id="lname" name="lname" placeholder="Last name" required />
                                </div>
                            </div>
                        </div>
                        <div className="form-row-two">
                            <div className="form-inputbox-container">
                                <label htmlFor="email">E-mail address</label>
                                <div className="inputbox">
                                    <Image src="/form-mail.svg" alt="mail" width={20} height={20} />
                                    <div className="form-box-inline"></div>
                                    <input type="email" id="email" name="email" placeholder="E-mail address" required/>
                                </div>
                            </div>
                            <div className="form-inputbox-container">
                                <label htmlFor="phone">Phone number</label>
                                <div className="inputbox">
                                    <Image src="/form-phone.svg" alt="phone" width={20} height={20} />
                                    <div className="form-box-inline"></div>
                                    <input type="string" id="phone" name="phone" placeholder="Phone Number" required/>
                                </div>
                            </div>
                        </div>
                        <div className="form-row-three">
                            <label htmlFor="insurance">Insurance coverage</label> <br/>
                            <input type="text" id="insurance" name="insurance" required/>
                        </div>
                        <div className="form-row-four">
                            <label htmlFor="message">How can we help?</label> <br/>
                            <textarea id="message" name="message" required ></textarea>
                        </div>
                        <div className="form-row-five">
                            <input type="submit" value="Get A Quote" />
                        </div>
                    </div>
                </div>
                <div className="image">
                    <Image src="/form-right-img.svg" alt="form-iage" width={604} height={745} id="form-image"/>
                </div>
            </div>

        </div>
    )
}