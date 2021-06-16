// https://codesandbox.io/s/c2rih?file=/demo.js:911-1017
import { useState } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'fixed',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

const ContactInfoModal = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="contact-info-modal"
      aria-describedby="contact-info-modal"
    >
      <Box component='div' className={classes.paper}>
        <Box color='primary' padding='16px' component='form' onSubmit={handleClose}>
          <Typography variant='h5' justify='center'>
            Sign up for our mailing list
          </Typography>
          <TextField
            id='name'
            label='Name'
            variant='outlined'
          />
          <TextField
            id='email-address'
            label='Email address'
            variant='outlined'
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
          >
            Subscribe to mailing list
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ContactInfoModal;