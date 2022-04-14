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
        position {
          name
        }
        number
      }
      platforms {
        name
      }
      location {
        name
      }
      leader {
        name
      }
      type {
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
