import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export async function fetchWordpressData() {
  const client = new ApolloClient({
    uri: process.env.NEXT_WORDPRESS_ENDPOINT,
    cache: new InMemoryCache(),
  });

  try {
    const { data } = await client.query({
      query: gql`
        query getPost($id: ID = "", $authorName: String = "") {
          pages(first: 10) {
            nodes {
              authorId
            }
          }
          post(asPreview: true) {
            author {
              node {
                username
              }
            }
          }
        }
      `,
    });

    console.log(data);
    // Assuming you want to return the authorIds of the pages
    return data.pages.nodes.map((node) => node.authorId);
  } catch (error) {
    console.error('Error fetching WordPress data:', error);
    // Handle the error based on your application's needs
    // For example, you might want to return null or an empty array
    return null;
  }
}
