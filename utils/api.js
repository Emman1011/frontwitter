import axios from 'axios';

export async function fetchFromExpressAPI() {
  try {
    const response = await axios.get(`http://localhost:5000/`);
    return response.data;
  } catch (error) {
    throw new Error('Falha ao buscar dados da API');
  }
}
