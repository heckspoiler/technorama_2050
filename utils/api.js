import axios from 'axios';

export async function fetchWordpressData() {
  const response = await axios.get(
    'http://technorama2050.local/wp-json/wp/v2/posts'
  );
  console.log(response.data);
  return response.data;
}
