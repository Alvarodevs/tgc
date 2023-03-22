// import { type IProduct } from '../interfaces'

export const fetchProducts = async (): Promise<any> => {
  const backURL: string = import.meta.env.VITE_API_URL
  try {
    const resp = await fetch(backURL, {
      method: 'GET',
      mode: "cors",
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:5173/'
      }
    });
    const data = await resp.json();
    console.log('DATA', data)
    return data;
  } catch (error) {
    return error;
  }
}

export const fetchSingleProduct = async (id: number): Promise<any> => {
  const backURL: string = import.meta.env.VITE_API_URL
  try {
    const resp = await fetch(`${backURL}/${id}`, {
      method: 'GET',
      mode: "cors",
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:5173/'
      }
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
}

