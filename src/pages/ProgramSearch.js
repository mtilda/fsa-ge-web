import { useEffect, useState } from 'react';
import { requestGE } from '../helpers/gainfulEmploymentAPI.js.js';
import PageLayout from '../components/PageLayout';
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
    <PageLayout title='Search Programs'>
      <ProgramTable programs={programs} />
    </PageLayout>
  );
};

export default ProgramSearch;