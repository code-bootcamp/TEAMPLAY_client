import { gql } from "@apollo/client";

export const UPDATE_USER_BY_ONBOARD = gql`
  mutation updateUserByOnboard(
    $updateUserOnboardInput: UpdateUserOnboardInput!
  ) {
    updateUserByOnboard(updateUserOnboardInput: $updateUserOnboardInput) {
      career
      tendencys {
        id
        name
      }
      position {
        id
        name
      }
      types {
        id
        name
      }
    }
  }
`;

export const FETCH_TENDENCYS = gql`
  query fetchTendencys {
    fetchTendencys {
      name
      id
    }
  }
`;

export const FETCH_TYPES = gql`
  query fetchTypes {
    fetchTypes {
      name
      id
    }
  }
`;

export const FETCH_POSITIONS = gql`
  query fetchPositions {
    fetchPositions {
      name
      id
    }
  }
`;
