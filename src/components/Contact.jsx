import React, { useState } from 'react';
import Title from './Title';

function Contact() {
   const [name, setName] = useState()
   const [email, setEmail] = useState()
   const [message, setMessage] = useState()


   const resetForm = () => {
      setName("")
      setEmail("")
      setMessage("")
   }

   return (

      <div className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/57b6ec77-f636-4571-b7dd-673518ef1327"
               method="POST"
               className="flex flex-col w-full md:w-7/12"
            >
               <Title>Contact</Title>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  className="p-2 bg-transparent border-2 rounded-lg border-stone-900 dark:border-white focus:outline-none"
               />
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  className="my-2 p-2 bg-transparent border-2 rounded-lg border-stone-900 dark:border-white focus:outline-none"
               />
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  value={message}
                  className="p-2 mb-4 bg-transparent border-2 rounded-lg border-stone-900 dark:border-white focus:outline-none"
               />
               <input
                  type="submit"
                  className="text-center inline-block px-8 py-3 w-max text-base font-medium dark:text-white border-2 hover:scale-105 border-stone-900 dark:border-white rounded-lg"
                  value="Send"
                  onClick={() => resetForm()}
               />
            </form>
         </div>
      </div>
   )
}

export default Contact;