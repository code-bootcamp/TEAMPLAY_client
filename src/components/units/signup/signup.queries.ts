import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      email
    }
  }
`;

export const SEND_TOKEN_TO_EMAIL = gql`
  mutation sendTokenToEmail($email: String!) {
    sendTokenToEmail(email: $email)
  }
`;

export const CHECK_TOKEN_TO_EMAIL = gql`
  mutation checkTokenToEmail($email: String!, $token: String!) {
    checkTokenToEmail(email: $email, token: $token)
  }
`;
