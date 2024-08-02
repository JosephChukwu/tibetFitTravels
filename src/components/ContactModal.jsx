import React from 'react';
import { motion } from "framer-motion";
import Backdrop from './Backdrop'; // Assuming this is your custom backdrop component
import { Grid, Button, Typography, TextField } from '@mui/material';
import { styled } from "@mui/system";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import MoonLoader  from "react-spinners/ClipLoader";





const MotionGrid = motion(
  styled(Grid)({})
);

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: "100vh",
    opacity: 0
  }
}

const ContactModal = ({ handleClose }) => {
  const scriptUrl = "https://script.google.com/macros/s/AKfycbz3xQVB1kvMMukOwIMJYueITYgVFcDJJXsSkg0drgBfNDBbpv6mj5vVK445ShMdsw0w/exec";

  const initialValues = {
    Name: '',
    Email: '',
    Nationality: '',
    Subject: '',
    Message: ''
  };

  const validationSchema = Yup.object({
    Name: Yup.string().required('Required'),
    Email: Yup.string().email('Invalid email address').required('Required'),
    Nationality: Yup.string().required('Required'),
    Subject: Yup.string().required('Required'),
    Message: Yup.string().required('Required')
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
     const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },       

        body: JSON.stringify(values),
        mode: "no-cors",
      });
      // console.log('sent req')


      await new Promise((resolve) => setTimeout(resolve, 250));
      // console.log("Form submitted:", values);

      Swal.fire({
        title: "Enquiry sent!",
        text: "We will provide you with a response shortly.",
        icon: "success",
        confirmButtonText: "Close",
        willClose: () => {
          handleClose(); 
        }
      });
    } catch (error) {
      console.error(error.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "There was an error. Please try again.",
      });
    } finally {
      setSubmitting(false);
      resetForm();
    }
  };

  return (
    <Backdrop onClick={handleClose}>
      <MotionGrid
        onClick={(e) => e.stopPropagation()}
        sx={{
          width: "70%",
          height: "auto",
          padding: "0.5rem",
          margin: "auto",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          backgroundColor: "#f4f4f4"
        }}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, touched, errors, isSubmitting }) => (
            <Form style={{ width: "90%" }}>
              <Field
                as={TextField}
                name="Name"
                label="Name"
                fullWidth
                margin="normal"
                value={values.Name}
                onChange={handleChange}
                error={touched.Name && Boolean(errors.Name)}
                helperText={touched.Name && errors.Name}
              />
              <Field
                as={TextField}
                name="Email"
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                value={values.Email}
                onChange={handleChange}
                error={touched.Email && Boolean(errors.Email)}
                helperText={touched.Email && errors.Email}
              />
              <Field
                as={TextField}
                name="Nationality"
                label="Nationality"
                fullWidth
                margin="normal"
                value={values.Nationality}
                onChange={handleChange}
                error={touched.Nationality && Boolean(errors.Nationality)}
                helperText={touched.Nationality && errors.Nationality}
              />
              <Field
                as={TextField}
                name="Subject"
                label="Subject"
                fullWidth
                margin="normal"
                value={values.Subject}
                onChange={handleChange}
                error={touched.Subject && Boolean(errors.Subject)}
                helperText={touched.Subject && errors.Subject}
              />
              <Field
                as={TextField}
                name="Message"
                label="Message"
                multiline
                rows={4}
                fullWidth
                margin="normal"
                value={values.Message}
                onChange={handleChange}
                error={touched.Message && Boolean(errors.Message)}
                helperText={touched.Message && errors.Message}
              />
              <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                {isSubmitting ? <MoonLoader color='#0379a9'/> : <Typography variant='body1'>Send enquiry</Typography>}
              </Button>
            </Form>
          )}
        </Formik>
      </MotionGrid>
    </Backdrop>
  );
}

export default ContactModal;







// import React, { useRef } from 'react';
// import { motion } from "framer-motion";
// import Backdrop from './Backdrop'; // Assuming this is your custom backdrop component
// import { Grid, TextField, Button } from '@mui/material';
// import { styled } from "@mui/system";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from 'yup';
// import Swal from "sweetalert2";
// import "sweetalert2/dist/sweetalert2.min.css";


// const MotionGrid = motion(
//   styled(Grid)({})
// );

// const dropIn = {
//   hidden: {
//     y: "-100vh",
//     opacity: 0
//   },
//   visible: {
//     y: "0",
//     opacity: 1,
//     transition: {
//       duration: 0.1,
//       type: "spring",
//       damping: 25,
//       stiffness: 500
//     }
//   },
//   exit: {
//     y: "100vh",
//     opacity: 0
//   }
// }

// const ContactModal = ({ handleClose }) => {

//   const scriptUrl =
  // "https://docs.google.com/spreadsheets/d/1Wh01878HSAKjnW2cnyB2zyuwbHxIzbiM49UpMF_l8SY/edit?resourcekey=&gid=2103818021#gid=2103818021";

//    const initialValues = {
//       Name: '',
//       Email: '',
//       Nationality: '',
//       Subject: '',
//       Message: ''
//     }
//    const validationSchema = Yup.object({
//       Name: Yup.string().required('Required'),
//       Email: Yup.string().email('Invalid email address').required('Required'),
//       Nationality: Yup.string().required('Required'),
//       Message: Yup.string().required('Required'),
//     })
//     const handleSubmit = async (
//       values,
//       { setSubmitting, resetForm, isSubmitting }
//     ) => {
//       //setsubmitting to true to trigger the spinner
//       setSubmitting(true);
  
//       try {
//         const response = await fetch(scriptUrl, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(values),
//           //removed cors cuz google api was blocking the request based o coos pilicy
//           mode: "no-cors",
//         });
  
//         //small delay before poppingup the sweetalert
//         await new Promise((resolve) => setTimeout(resolve, 250));
//         console.log("Form submitted:", values);
  
//         //Via sweetalert
//         Swal.fire({
//           title: "Successfully Joined Waitlist!",
//           text: "Click the WhatsApp Button to join our Waitlist Group",
//           icon: "success",
//           showCancelButton: true,
//           confirmButtonText: "WhatsApp",
//           cancelButtonText: "Cancel",
//         }).then((result) => {
//           if (result.isConfirmed) {
//             // now direct the user to the whatspp link
//             window.location.href =
//               "https://chat.whatsapp.com/F9ZEVNWjqHeEA49ZYCwNRi";
//           }
//         });
//         // toast.success("Thanks for joining our Waitlist!");
//       } catch (error) {
//         console.log(error.message);
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "There was an error loading the page. Please check your internet connection.",
//         });
//         setSubmitting(false);
  
//         // toast.error('Please check you internet and try again!')
//       }
  
//       resetForm();
//     };


  

//   return (
//     <Backdrop onClick={handleClose}>
//       <MotionGrid
//         onClick={(e) => e.stopPropagation()}
//         sx={{
//           width: "70%",
//           height: "auto",
//           padding: "0.5rem",
//           margin: "auto",
//           borderRadius: "12px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           color: "white",
//           backgroundColor: "#f4f4f4"
//         }}
//         variants={dropIn}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//       >

//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//       {({ isSubmitting }) => (

//       <Form style={{ width: "300px" }}>
//       <TextField
//             label="Name"
//             name="name"
//             multiline
//             value={formik.values.name}
//             onChange={formik.handleChange}
//             error={formik.touched.name && Boolean(formik.errors.name)}
//             helperText={formik.touched.name && formik.errors.name}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Email"
//             name="email"
//             type="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//             error={formik.touched.email && Boolean(formik.errors.email)}
//             helperText={formik.touched.email && formik.errors.email}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Location"
//             name="location"
//             value={formik.values.location}
//             onChange={formik.handleChange}
//             error={formik.touched.location && Boolean(formik.errors.location)}
//             helperText={formik.touched.location && formik.errors.location}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Message"
//             name="message"
//             multiline
//             rows={4}
//             value={formik.values.message}
//             onChange={formik.handleChange}
//             error={formik.touched.message && Boolean(formik.errors.message)}
//             helperText={formik.touched.message && formik.errors.message}
//             fullWidth
//             margin="normal"
//             sx={{
             
//             }}
//           />
//           <Button type="submit" variant="contained" color="primary">
//           {isSubmitting ? (
//             // <BallTriangle color="#fffff" height={100} width={100} />
//               <Typography>Loading</Typography>
//           ) : (
//             <Typography>send request</Typography>

//           )}      
//               </Button>
//           </Form>
//         )}

//           </Formik>
//       </MotionGrid>
//     </Backdrop>
//   )
// }

// export default ContactModal;














// // Replace 'your_spreadsheet_url' with your actual spreadsheet URL
// const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1Wh01878HSAKjnW2cnyB2zyuwbHxIzbiM49UpMF_l8SY/edit?resourcekey=&gid=2103818021#gid=2103818021");
// const sheet = sheets.getSheetByName("Sheet1");

// function doPost(e) {
//   // Add CORS headers
//   var headers = {
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'POST',
//     'Access-Control-Allow-Headers': 'Content-Type',
//   };

//   try {
//     let data = JSON.parse(e.postData.contents);
//     sheet.appendRow([data.Name, data.Email, data.Nationality, data.Subject, data.Message]);
//     return ContentService.createTextOutput(
//       JSON.stringify({ success: true, message: "Request Submitted!" })
//     ).setMimeType(ContentService.MimeType.JSON).setHeaders(headers);
//   } catch (error) {
//     return ContentService.createTextOutput(
//       JSON.stringify({ success: false, message: "Error adding data" })
//     ).setMimeType(ContentService.MimeType.JSON).setHeaders(headers);
//   }
// }