// import { type IProduct } from '../interfaces'

export const fetchProducts = async (): Promise<any> => {
  const backURL = import.meta.env.VITE_API_URL
  try {
    const resp = await fetch(backURL, {
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

export const fetchSingleProduct = async (id: number): Promise<any> => {
  const backURL: string = import.meta.env.VITE_API_URL
  try {
    const resp = await fetch(`${backURL}/${id}`, {
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

