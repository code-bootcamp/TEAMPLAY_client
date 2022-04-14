import { gql } from "@apollo/client";

export const FETCH_CHAT_ROOMS = gql`
  query fetchChatRooms {
    fetchChatRooms {
      id
      name
      chat {
        content
        createdAt
      }
      project {
        id
        imgUrl
        leader {
          name
        }
      }
    }
  }
`;
