const BASE_URL = 'https://fakestoreapi.com/';

export async function getProducts() {
  try {
    const response = await fetch(`${BASE_URL}products/`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}

export async function getProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}products/${id}`);
    return response.json();
  } catch (error) {
    return new Error(error);
  }
}
