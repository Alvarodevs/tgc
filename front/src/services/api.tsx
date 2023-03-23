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

export const postProduct = async (body: object): Promise<any> => {
  const backURL: string = import.meta.env.VITE_API_URL
  const stringify = JSON.stringify(body)
  console.log('body', stringify)
  try {
    const resp = await fetch(backURL, {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5173/'
      },
      // eslint-disable-next-line object-shorthand
      body: stringify
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
}

export const putProduct = async ({id, body}: {id: number, body: object}): Promise<any> => {
  const backURL: string = import.meta.env.VITE_API_URL
  try {
    const resp = await fetch(`${backURL}/${id}`, {
      method: 'PUT',
      mode: "cors",
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5173/'
      },
      body: JSON.stringify(body)
    });
    const data = await resp.json();
    return data;
  } catch (error) {
    return error;
  }
}

export const deleteProduct = async (id: number): Promise<any> => {
  const backURL: string = import.meta.env.VITE_API_URL
  try {
    const resp = await fetch(`${backURL}/${id}`, {
      method: 'DELETE',
      mode: "cors",
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:5173/'
      }
    });
    const data = await resp.json();
    console.log('data', data)
    return data;
  } catch (error) {
    return error;
  }
}
