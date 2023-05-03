import { gql } from "graphql-request";

const GET_PAGE = gql`
  query page($id: String!, $preview: Boolean) {
    page(id: $id, preview: $preview) {
      sys {
        id
      }
      url
      internalName
    }
  }
`;

export default GET_PAGE;
