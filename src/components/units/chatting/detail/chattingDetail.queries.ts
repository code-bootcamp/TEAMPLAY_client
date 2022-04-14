import { gql } from "@apollo/client";

export const FETCH_CHATS = gql`
  query fetchChats($chatRoomId: String!) {
    fetchChats(chatRoomId: $chatRoomId) {
      id
      content
      createdAt
      user {
        name
      }
    }
  }
`;

export const SEND_MESAGE = gql`
  mutation sendMessage($message: String!, $chatRoomId: String!) {
    sendMessage(message: $message, chatRoomId: $chatRoomId)
  }
`;

export const FETCH_CHAT_ROOM_MEMBERS = gql`
  query fetchChatRoomMembers($chatRoomId: String!) {
    fetchChatRoomMembers(chatRoomId: $chatRoomId) {
      user {
        id
        name
        point
        tendencys {
          name
        }
        position {
          name
        }
      }
    }
  }
`;

export const START_PROJECT = gql`
  mutation startProject(
    $chatRoomId: String!
    $userIds: [String!]!
    $point: Float!
  ) {
    startProject(chatRoomId: $chatRoomId, userIds: $userIds, point: $point) {
      id
      name
      teamname
    }
  }
`;
