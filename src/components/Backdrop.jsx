import React from "react";
import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      style={{
        display: "flex",
        position: "absolute",
        height: "100vh",
        width: "100%",
        top: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
        background: "#000000b1",
        zIndex: 10,
      }}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;






// import { React, useState } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { FiArrowRight } from "react-icons/fi";
// import Swal from "sweetalert2";
// import "sweetalert2/dist/sweetalert2.min.css";
// // import HashLoader from "react-spinners/ClipLoader";
// import FullScreenLoader from "./FullScreenLoader";

// const scriptUrl =
//   "https://script.google.com/macros/s/AKfycbwZnShRQ4vhYtmmtuM7SR34vy4-Im-juOYI3Z1sZbSKYpSA8wXPxfj8OuesYJ2QBXtzwQ/exec";

// const validationSchema = Yup.object({
//   Fullname: Yup.string().required("Name is required!"),
//   WhatsAppnumber: Yup.string().required("WhatsApp number is Required!"),
//   Email: Yup.string()
//     .email("Invalid email address")
//     .required("Email is required!"),
// });

// const MyForm = () => {
//     const [loading, setloading] = useState(false)
//   const initialValues = {
//     Fullname: "",
//     WhatsAppnumber: "",
//     Email: "",
//   };

//   const handleSubmit = async (
//     values,
//     { setSubmitting, resetForm, isSubmitting }
//   ) => {
//     //setsubmitting to true to trigger the spinner
//     setSubmitting(true);

//     try {
//       const response = await fetch(scriptUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(values),
//         //removed cors cuz google api was blocking the request based o coos pilicy
//         mode: "no-cors",
//       });

//       //small delay before poppingup the sweetalert
//       await new Promise((resolve) => setTimeout(resolve, 250));
//       console.log("Form submitted:", values);

//       //Via sweetalert
//       Swal.fire({
//         title: "Successfully Joined Waitlist!",
//         text: "Click the WhatsApp Button to join our Waitlist Group",
//         icon: "success",
//         showCancelButton: true,
//         confirmButtonText: "WhatsApp",
//         cancelButtonText: "Cancel",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           // now direct the user to the whatspp link
//           window.location.href =
//             "https://chat.whatsapp.com/F9ZEVNWjqHeEA49ZYCwNRi";
//         }
//       });
//       // toast.success("Thanks for joining our Waitlist!");
//     } catch (error) {
//       console.log(error.message);
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "There was an error loading the page. Please check your internet connection.",
//       });
//       setSubmitting(false);

//       // toast.error('Please check you internet and try again!')
//     }

//     resetForm();
//   };

//   return (
//     <div className="contact-form-container">
//       <FullScreenLoader loading={loading} />

//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form style={{ width: "300px" }}>
//             <div style={{ marginBottom: "10px" }}>
//               <label htmlFor="Fullname" style={{ color: "white" }}>
//                 Your Name
//               </label>
//               <Field
//                 type="text"
//                 id="Fullname"
//                 name="Fullname"
//                 className="formField"
//               />
//               <ErrorMessage
//                 name="Fullname"
//                 component="div"
//                 style={{ color: "red" }}
//               />
//             </div>

//             <div style={{ marginBottom: "10px" }}>
//               <label htmlFor="WhatsAppnumber" style={{ color: "white" }}>
//                 WhatsApp Number
//               </label>
//               <Field
//                 type="text"
//                 id="WhatsAppnumber"
//                 name="WhatsAppnumber"
//                 className="formField"
//               />
//               <ErrorMessage
//                 name="WhatsAppnumber"
//                 component="div"
//                 style={{ color: "red" }}
//               />
//             </div>

//             <div style={{ marginBottom: "10px" }}>
//               <label htmlFor="email" style={{ color: "white" }}>
//                 Email
//               </label>
//               <Field
//                 className="formField"
//                 type="text"
//                 id="Email"
//                 name="Email"
//               />
//               <ErrorMessage
//                 name="Email"
//                 component="div"
//                 style={{ color: "red" }}
//               />
//             </div>

//             <button
//               className="secondary-button"
//               type="submit"
//               style={{
//                 width: "100%",
//                 borderRadius: "27px",
//                 padding: "10px",
//                 outline: "none",
//               }}
//             >
//               {isSubmitting ? (
//                 // <BallTriangle color="#fffff" height={100} width={100} />
//                 <FullScreenLoader loading={isSubmitting} />
//               ) : (
//                 <div>
//                   Join WaitList <FiArrowRight />
//                 </div>
//               )}
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default MyForm;
