import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, TextField } from '@material-ui/core';

const ProgramSearchForm = ({ setQuery }) => {
  const [input, setInput] = useState({
    cip_name: '',
    name: '',
    city: '',
    state: '',
  });

  const handleChangeClassification = (e) => {
    setInput({ ...input, cip_name: e.target.value });
  };

  const handleChangeInsititution = (e) => {
    setInput({ ...input, name: e.target.value });
  };

  const handleChangeCity = (e) => {
    setInput({ ...input, city: e.target.value });
  };

  const handleChangeState = (e) => {
    setInput({ ...input, state: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  return (
    <Box color='primary' padding='16px' component='form' onSubmit={handleSubmit}>
      <TextField
        id='outlined-basic'
        label='Classification'
        variant='outlined'
        value={input.cip_name}
        onChange={handleChangeClassification}
      />
      <TextField
        id='outlined-basic'
        label='Institution'
        variant='outlined'
        value={input.name}
        onChange={handleChangeInsititution}
      />
      <TextField
        id='outlined-basic'
        label='City'
        variant='outlined'
        value={input.city}
        onChange={handleChangeCity}
      />
      <TextField
        id='outlined-basic'
        label='State'
        variant='outlined'
        value={input.state}
        onChange={handleChangeState}
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
      >
        Search
      </Button>
    </Box>
  );
};

export default ProgramSearchForm;