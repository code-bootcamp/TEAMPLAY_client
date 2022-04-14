import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchUsersArgs,
} from "../../../commons/types/generated/types";

const FETCH_USERS = gql`
  query fetchUsers($page: Float!) {
    fetchUsers(page: $page) {
      id
      email
      name
      imgUrl
      position {
        id
        name
      }
      tendencys {
        id
        name
      }
    }
  }
`;

export const useFetchUsers = () => {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchUsers">,
    IQueryFetchUsersArgs
  >(FETCH_USERS, { variables: { page: 1 } });

  return { data, refetch };
};
