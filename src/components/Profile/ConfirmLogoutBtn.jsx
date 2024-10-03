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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ConfirmLogoutBtn({
  openDialog,
  setopenDialog,
  confirmLogout,
}) {
  const [open, setOpen] = useState(openDialog);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setopenDialog(false);
  };

  return (
    <>
      <Dialog
        PaperProps={{
          sx: {
            borderRadius: "14px", // Add custom border-radius here
          },
        }}
        fullWidth={false}
        maxWidth="xs"
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
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
            color="error"
            sx={{
              backgroundColor: "#ffe2e3",
              marginBottom: "1px", // Reduce margin between the icon and text
            }}
          >
            <ErrorOutlineOutlinedIcon fontSize="inherit" />
          </IconButton>
          <DialogTitle
            id="alert-dialog-title"
            sx={{ textAlign: "center", margin: "2px 0" }}
          >
            Are You Sure?
          </DialogTitle>
          <DialogContentText
            id="alert-dialog-slide-description"
            fontSize="medium"
            sx={{ textAlign: "center", marginBottom: "1px" }}
          >
            Are you sure you want to logout? This action cannot be undone.
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
            onClick={handleClose}
            color="error"
            variant="contained"
            sx={{ marginRight: "30px" }}
          >
            Cancel
          </Button>
          <Button onClick={confirmLogout} variant="contained" color="success">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
