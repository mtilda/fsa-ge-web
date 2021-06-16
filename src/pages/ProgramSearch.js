import { useEffect, useState } from 'react';
import { requestGE } from '../helpers/gainfulEmploymentAPI.js.js';
import PageLayout from '../components/PageLayout';
import ProgramTable from '../components/ProgramTable';
import ProgramSearchForm from '../components/ProgramSearchForm.js';
import ContactInfoModal from '../components/ContactInfoModal';

const ProgramSearch = () => {
  const [programs, setPrograms] = useState([]);
  const [query, setQuery] = useState({
    cip_name: '',
    name: '',
    city: '',
    state: '',
  });
  
  const fetchPrograms = async () => {
    (async () => {
      const res = await requestGE('programs', query);
      const data = await res.data;
      console.log(data.results);
      setPrograms(data.results);
    })();
  };

  useEffect(() => {
    fetchPrograms();
  }, [query]);

  return (
    <PageLayout title='Search Programs'>
      <ProgramSearchForm setQuery={setQuery} />
      <ProgramTable programs={programs} />
      <ContactInfoModal />
    </PageLayout>
  );
};

export default ProgramSearch;