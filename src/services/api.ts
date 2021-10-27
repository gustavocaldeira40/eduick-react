import axios from 'axios';

import { baseURL } from '../config/Rest.example';

export default axios.create({
  baseURL,
});
