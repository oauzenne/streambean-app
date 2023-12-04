import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import "../dialogPopUp/DialogPopUp.css";
import ContactForm from "../contactForm/ContactForm.jsx";

const DialogPopUp = ({ isOpen, handleClose, tabText }) => {
  if (tabText === "Privacy") {
    return (
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Privacy</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            is a placeholder text that is often used in the design and
            development of websites and other applications. It is a Latin text
            that has been used for centuries, and it is based on classical Latin
            texts such as Cicero's speeches and the works of Virgil and Ovid.
            Lorem ipsum is a good choice for placeholder text because it is not
            only grammatically correct but it also has a natural flow that makes
            it easy to read.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  } else if (tabText === "Terms") {
    return (
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Terms</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            is a placeholder text that is often used in the design and
            development of websites and other applications. It is a Latin text
            that has been used for centuries, and it is based on classical Latin
            texts such as Cicero's speeches and the works of Virgil and Ovid.
            Lorem ipsum is a good choice for placeholder text because it is not
            only grammatically correct but it also has a natural flow that makes
            it easy to read.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  } else if (tabText === "Contact") {
    return (
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Contact Us</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ContactForm />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }
};

export default DialogPopUp;
