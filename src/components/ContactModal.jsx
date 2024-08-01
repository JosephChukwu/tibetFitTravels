import React, { useRef } from 'react';
import { motion } from "framer-motion";
import Backdrop from './Backdrop'; // Assuming this is your custom backdrop component
import { Grid, TextField, Button } from '@mui/material';
import { styled } from "@mui/system";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

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
  const form = useRef(); // Create a ref for the form

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      location: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      location: Yup.string().required('Required'),
      message: Yup.string().required('Required'),
    }),
    onSubmit: () => {
      emailjs.sendForm('service_hp98szb', 'template_92tojzs', form.current, 'f15kThW9_D-ndvVpO')
        .then((result) => {
          alert('Message sent successfully!');
        }, (error) => {
          alert('Failed to send message. Please try again later.');
        });
    },
  });

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
        <form ref={form} onSubmit={formik.handleSubmit}>
          <TextField
            label="Name"
            name="name"
            multiline
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Location"
            name="location"
            value={formik.values.location}
            onChange={formik.handleChange}
            error={formik.touched.location && Boolean(formik.errors.location)}
            helperText={formik.touched.location && formik.errors.location}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            fullWidth
            margin="normal"
            sx={{
              // '& .MuiInputBase-input': {
              //   color: 'white', // Change text color
              //   '::placeholder': {
              //     color: 'grey', // Change placeholder color
              //   },
              // },
              // '& .MuiInputLabel-root': {
              //   color: 'white', // Change label color
              // },
              // '& .MuiInput-underline:after': {
              //   borderBottomColor: 'white', // Change underline color
              // },
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </MotionGrid>
    </Backdrop>
  )
}

export default ContactModal;


// google sheets link
// https://docs.google.com/spreadsheets/d/1Wh01878HSAKjnW2cnyB2zyuwbHxIzbiM49UpMF_l8SY/edit?usp=sharing
