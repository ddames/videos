import axios from 'axios';

const KEY = 'AIzaSyCdMWbtglODqQe_p1RQL4n6_nLxg56nQgo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '5',
    key: KEY
  }
})