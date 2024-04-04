// const Contact = () => {
//   return (
//     <div>
//       <h1 className="font-bold text-3xl p-4 m-4">Contact Us </h1>
//       <form>
//         <input
//           type="text"
//           className="border border-black p-2 m-2"
//           placeholder="Name"
//         />
//         <input
//           type="text"
//           className="border border-black p-2 m-2"
//           placeholder="Message"
//         />
//         <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import StyledContactForm from "./StyledContactForm";
// import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gp1nvca", "template_fgrrlcc", form.current, {
        publicKey: "dgLIhGUYqcunhH-Sf",
      })
      .then(
        (e) => {
          console.log("SUCCESS!");
          // e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="mt-10 mx-auto w-3/12">
      <div className="w-[400px]  font-normal text-base">
        <form
          className="flex  flex-col w-[100%] font-[16px]"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="font-bold mt-4">Name</label>
          <input
            className="w-full h-9 px-3 py-2 rounded border-2 border-gray-300 focus:border-teal-500 focus:outline-none"
            type="text"
            name="to_name"
            required
          />

          <label className="font-bold mt-4">Email</label>
          <input
            className="w-full h-9 px-3 py-2 rounded border-2 border-gray-300 focus:border-teal-500 focus:outline-none"
            type="email"
            name="from_name"
            required
          />

          <label className="font-bold mt-4">Message</label>
          <textarea
            className="w-full h-32 px-3 py-2 mt-2 rounded border-2 border-gray-300 focus:border-teal-500 focus:outline-none"
            name="message"
            required
          />

          <input
            className="my-8 cursor-pointer bg-orange-500 text-white border-none px-4 py-2 rounded"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;

// Styles;
// const StyledContactForm = styled.div`
//   width: 400px;

//   form {
//     display: flex;
//     align-items: flex-start;
//     flex-direction: column;
//     width: 100%;
//     font-size: 16px;

//     input {
//       width: 100%;
//       height: 35px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
//     }

//     textarea {
//       max-width: 100%;
//       min-width: 100%;
//       width: 100%;
//       max-height: 100px;
//       min-height: 100px;
//       padding: 7px;
//       outline: none;
//       border-radius: 5px;
//       border: 1px solid rgb(220, 220, 220);

//       &:focus {
//         border: 2px solid rgba(0, 206, 158, 1);
//       }
// //     }

// //     label {
// //       margin-top: 1rem;
// //     }

// //     input[type="submit"] {
// //       margin-top: 2rem;
// //       cursor: pointer;
// //       background: rgb(249, 105, 14);
// //       color: white;
// //       border: none;
// //     }
// //   }
// // `;
