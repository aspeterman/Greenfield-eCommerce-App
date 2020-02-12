import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';
//return a function called formDialog
export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Link size="small"onClick={handleClickOpen}>Add a Answer</Link>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Add a Answer</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label=""
            type="email"
            fullWidth 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
              Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}