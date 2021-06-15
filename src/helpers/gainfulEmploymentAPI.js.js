import axios from 'axios';

const GEAPI = axios.create({
  baseURL: 'https://fsa-ge.herokuapp.com/',
  // baseURL: 'http://localhost:8080/',
  timeout: 10000
});

// {institution_id, program_classification_id, credential_level, opeid, institution_name, city, state, zip, sector, duration_of_programs}
const requestGE = async (resource = '', params) => {
  const id = params && params.id;
  const query = [];

  let path = '';
  if (resource) path += resource;
  if (id) path += '/' + id;

  for (const key in params) {
    if (params[key] && key != 'id') query.push(key + '=' + params[key]);
  }

  const URI = `${path}.json?${query.join('&')}`;

  return GEAPI.get(URI);
};

export { GEAPI, requestGE };