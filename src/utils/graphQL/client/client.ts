import { GraphQLClient } from "graphql-request";

const API_URL = `${process.env.NEXT_PUBLIC_CMS_DOMAIN}/${process.env.NEXT_PUBLIC_CMS_SPACE}/environments/${process.env.NEXT_PUBLIC_CMS_ENVIRONMENTS}`;
const Authorization = `Bearer ${process.env.NEXT_PUBLIC_CMS_AUTHORIZATION}`;

const client = new GraphQLClient(API_URL, {
  headers: {
    Authorization,
  },
  errorPolicy: "all",
});

export default client;
