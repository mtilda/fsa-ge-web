import { useEffect, useState } from 'react';
import { requestGE } from '../helpers/gainfulEmploymentAPI.js.js';
import ProgramTable from '../components/ProgramTable';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const ProgramSearch = () => {
  const [programs, setPrograms] = useState([]);
  
  const fetchPrograms = async () => {
    const res = await requestGE('programs');
    const data = await res.data;
    console.log(data);
    setPrograms(data.results);
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  return (
    <Container maxWidth='lg'>
      <Typography variant="h1">
        Search Programs
      </Typography>
      <ProgramTable programs={programs} />
    </Container>
  );
};

export default ProgramSearch;