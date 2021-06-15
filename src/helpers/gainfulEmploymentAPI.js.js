import axios from 'axios';

const GEAPI = axios.create({
  baseURL: 'https://fsa-ge.herokuapp.com/',
  // baseURL: 'http://localhost:8080/',
  timeout: 10000
});

/* Request a specified resource from the Gainful Employment API
 */
const requestGE = async (resource = '', params) => {
  const id = params && params.id;
  
  // build path string
  let path = '';
  if (resource) path += resource;
  if (id) path += '/' + id;
  
  // build query strings in an array
  const query = [];
  for (const key in params) {
    if (params[key] && key != 'id') query.push(key + '=' + params[key]);
  }

  const URI = `${path}.json?${query.join('&')}`;
  
  return await GEAPI.get(URI);
};

export { GEAPI, requestGE };