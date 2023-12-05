import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const WordpressData = async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.NEXT_WORDPRESS_ENDPOINT,
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      query getPosts {
        post(id: "1") {
          date
          content(format: RAW)
        }
      }
    `,
  });

  console.log(data);

  return {
    props: {
      posts: data.posts.nodes,
    },
  };
};

export default WordpressData;
