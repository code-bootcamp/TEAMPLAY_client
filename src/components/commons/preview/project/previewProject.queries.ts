import { gql } from "@apollo/client";

export const FETCH_PROJECT = gql`
  query fetchProject($projectId: String!) {
    fetchProject(projectId: $projectId) {
      id
      name
      teamname
      intro
      method
      recruitDate
      imgUrl
      skill
      description
      isComplete
      isStart
      projectToPositions {
        id
        position {
          id
          name
        }
        number
      }
      platforms {
        id
        name
      }
      location {
        id
        name
      }
      leader {
        id
        name
      }
      type {
        id
        name
      }
      projectMembers {
        id
      }
    }
  }
`;

export const JOIN_CHATROOM = gql`
  mutation joinChatRoom($projectId: String!) {
    joinChatRoom(projectId: $projectId) {
      id
    }
  }
`;
