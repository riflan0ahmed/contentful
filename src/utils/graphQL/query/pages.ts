import { gql } from "graphql-request";

const GET_PAGES = gql`
  query pageCollection($preview: Boolean) {
    pageCollection(preview: $preview) {
      items {
        sys {
          id
        }
        url
        internalName
      }
    }
  }
`;

export default GET_PAGES;
