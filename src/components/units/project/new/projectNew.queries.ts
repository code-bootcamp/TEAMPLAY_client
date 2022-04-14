import { gql } from "@apollo/client";

export const CREARE_PROJECT = gql`
  mutation createProject($createProjectInput: CreateProjectInput!) {
    createProject(createProjectInput: $createProjectInput) {
      id
    }
  }
`;

export const FETCH_POSITIONS = gql`
  query fetchPositions {
    fetchPositions {
      id
      name
    }
  }
`;

export const FETCH_TYPES = gql`
  query fetchTypes {
    fetchTypes {
      id
      name
    }
  }
`;

export const FETCH_LOCATION = gql`
  query fetchLocations {
    fetchLocations {
      id
      name
    }
  }
`;
