import { useEffect, useState } from 'react';
import { requestGE } from '../helpers/gainfulEmploymentAPI.js.js';
import ProgramTable from '../components/ProgramTable';

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
    <div>
      <h1>Search Programs</h1>
      <ProgramTable programs={programs} />
    </div>
  );
};

export default ProgramSearch;