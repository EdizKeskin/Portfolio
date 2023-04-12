import { GraphQLClient } from "graphql-request";

export const getAllProjects = async () => {
  const query = `
  query {
    projects {
      link
      title
      image {
        url
        width
        height
      }
      tags
    }
  }
  `;
  const client = new GraphQLClient(process.env.NEXT_GRAPHQL_API_URL, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_GRAPHQL_API_TOKEN}`,
    },
  });

  const data = await client.request(query);
  return data.projects;
};
