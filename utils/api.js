import axios from 'axios';

export async function fetchWordpressData() {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_WORDPRESS_REST_ENDPOINT,
      { headers: { 'Content-Type': 'application/json' } }
    );

    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    } else {
      console.error('Failed to fetch data: ', response.status);
      return null;
    }
  } catch (error) {
    console.error('Error fetching data: ', error);
    return null;
  }
}
