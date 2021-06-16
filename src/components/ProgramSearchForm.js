import { useState } from 'react';
import { Box, Button, TextField } from '@material-ui/core';

const ProgramSearchForm = ({ setQuery }) => {
  const [input, setInput] = useState({
    cip_name: '',
    name: '',
    city: '',
    state: '',
    zip: '',
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

  const handleChangeZip = (e) => {
    setInput({ ...input, zip: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(input);
  };

  return (
    <Box color='primary' padding='16px' component='form' onSubmit={handleSubmit}>
      <TextField
        id='program-classification'
        label='Program Classification'
        variant='outlined'
        value={input.cip_name}
        onChange={handleChangeClassification}
      />
      <TextField
        id='institution-name'
        label='Institution'
        variant='outlined'
        value={input.name}
        onChange={handleChangeInsititution}
      />
      <TextField
        id='city'
        label='City'
        variant='outlined'
        value={input.city}
        onChange={handleChangeCity}
      />
      <TextField
        id='state'
        label='State'
        variant='outlined'
        value={input.state}
        onChange={handleChangeState}
      />
      <TextField
        id='zip'
        label='Zip'
        variant='outlined'
        value={input.zip}
        onChange={handleChangeZip}
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