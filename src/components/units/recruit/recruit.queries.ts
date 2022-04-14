import { gql } from "@apollo/client";

export const FETCH_TENDENCYS = gql`
  query fetchTendencys {
    fetchTendencys {
      name
      id
    }
  }
`;