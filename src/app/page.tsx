'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Experience } from './components/experience/experience';
import { Header } from './components/header/header';
import { Info } from './components/information/information';
import { Projects } from "./components/projects/project";

import "./styles/home.scss";
import { EmailIcon } from './components/icons/email-icon';
import { SocialBtns } from './components/social-btns/social-btns';
import emailjs from 'emailjs-com';
import { SassColor } from 'sass';

export default function Home() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_o9ltcrd',  
      'template_42swhcn',  
      e.target as HTMLFormElement, 
      'kdfiL1SrWb328022O' 
    )
    .then(
      (result) => {
        alert('Mensagem enviada com sucesso!');
      },
      (error) => {
        alert('Erro ao enviar a mensagem, tente novamente.');
      }
    );
  };

  return (
    <main className="container">
      
      <Header />
      <Experience />
      <Info />
      
     
      <div className="contact-form">
        <h2 className='contatos'>Entre em contato</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu e-mail"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Sua mensagem"
            required
          />
          <button type="submit">Enviar</button>
        </form>

       
      </div>

      <div className="projeto" style={{ width: '100%', gridColumn: 'span 2' }} >
      <Projects />
      </div>
      
    </main>
  );
}
