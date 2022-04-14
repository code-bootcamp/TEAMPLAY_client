import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../commons/types/generated/types";

const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      email
      name
      point
      career
      tendencys {
        name
      }
      position {
        name
      }
      types {
        name
      }
    }
  }
`;

export default function useFetchUser() {
  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);
  return { data };
}
