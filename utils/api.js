import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export async function fetchWordpressData() {
  const client = new ApolloClient({
    uri: process.env.NEXT_WORDPRESS_ENDPOINT,
    cache: new InMemoryCache(),
  });

  const data = await client.query({
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
  return data.pages.nodes.authorId;
}
