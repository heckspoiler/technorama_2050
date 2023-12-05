import axios from 'axios';

export async function fetchWordpressData() {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_WORDPRESS_REST_ENDPOINT
  );
  console.log(response.data);
  return response.data;
}

fetchWordpressData();
