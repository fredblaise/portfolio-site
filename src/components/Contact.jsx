import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Title from './Title';

const Contact = () => {
const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_tskl8ji', 'template_vh2u0j8', form.current, 'Mgw8Bv66AlJCoXXWT')
         .then((result) => {
            console.log(result.text);
            alert("The email was sent succesfully.");
         }, (error) => {
            console.log(error.text);
            alert("The email failed to send. Please try again.");
         });

      form.current.reset();
   };

   return (
      <div className="flex flex-col mb-10 mx-auto">
         <div className="flex flex-col">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col w-full md:w-7/12 m-auto">
               <Title>Contact</Title>
               <input
                  type="text"
                  name="user_name"
                  placeholder='Name'
                  className="p-2 bg-transparent border-2 rounded-lg border-stone-900 dark:border-white focus:outline-none"
                  required
               />
               <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border-2 rounded-lg border-stone-900 dark:border-white focus:outline-none"
                  required
               />
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="p-2 mb-4 bg-transparent border-2 rounded-lg border-stone-900 dark:border-white focus:outline-none"
                  required
               />
               <button
                  type="submit"
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium dark:text-white border-2 active:scale-95 border-stone-900 dark:border-white rounded-lg">
                     Send
               </button>
            </form>
         </div>
      </div>
   );
};

export default Contact;