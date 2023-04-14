import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Face3Icon from '@mui/icons-material/Face3';
import MailIcon from '@mui/icons-material/Mail';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface ContactProps {
  setAlert: React.Dispatch<React.SetStateAction<boolean>>
}

export const Contact: React.FC<ContactProps> = ({ setAlert }) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current !== null) {
      emailjs
        .sendForm(
          "service_9fs836d",
          "template_39fu91h",
          form.current,
          "cd2-A_WgQneuf-FQP"
        )
        .then(
          (result) => {
            console.log(result.text);
            setAlert(true);
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <TextField
        id="Name"
        label="Name"
        name="user_name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Face3Icon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField
        id="Email"
        label="Email"
        name="user_email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <TextField
        id="Message"
        label="Message"
        name="message"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MessageIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Stack spacing={2} direction="row">
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </form>
  );
};

export default Contact;
