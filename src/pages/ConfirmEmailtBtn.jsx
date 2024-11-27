import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { IconButton } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmEmailBtn({ openDialog, setopenDialog }) {
  const [open, setOpen] = useState(openDialog);
  const navigate = useNavigate();
  const handleConfirmEmail = (e) => {
    e.preventDefault();

    navigate("/");
    toast.warning("Please Check your email");
  };
  return (
    <>
      <Dialog
        PaperProps={{
          sx: {
            borderRadius: "14px",
          },
        }}
        fullWidth={false}
        maxWidth="xs"
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            aria-label="delete"
            size="large"
            color=""
            sx={{
              backgroundColor: "#dcfce7",
              marginBottom: "1px",
            }}
          >
            <ErrorOutlineOutlinedIcon fontSize="inherit" />
          </IconButton>
          <DialogTitle
            id="alert-dialog-title"
            sx={{ textAlign: "center", margin: "2px 0" }}
          >
            Password Reset Required?
          </DialogTitle>
          <DialogContentText
            id="alert-dialog-slide-description"
            fontSize="medium"
            sx={{ textAlign: "center", marginBottom: "1px" }}
          >
            We have sent you a password request mail to your registered email.
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: "center",
            padding: "8px",
            marginBottom: "12px",
          }}
        >
          <Button
            onClick={handleConfirmEmail}
            variant="contained"
            color="primary"
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
