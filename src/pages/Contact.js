import React, { useState } from "react";
import styled from "styled-components";

const ContactWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

const ContactTitle = styled.h1`
  font-size: 3rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactForm = styled.form`
  display: grid;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: var(--color-primary);
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid var(--color-primary);
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  resize: vertical;
  min-height: 150px;
`;

const SubmitButton = styled.button`
  background-color: var(--color-primary);
  color: var(--color-light);
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-secondary);
  }
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to a server

    await fetch(`/mail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    alert("Thank you for your message. We will get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <ContactWrapper>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </ContactWrapper>
  );
}

export default Contact;
