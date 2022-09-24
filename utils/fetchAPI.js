import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'X-RapidAPI-Key': 'fcc6a94013msha589816d7606529p1b63c0jsnf2d1d8479d74',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    }
  })

  return data;
}