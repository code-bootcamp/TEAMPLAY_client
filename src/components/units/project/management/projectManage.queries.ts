import { gql } from '@apollo/client';

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
        user{
        id
          name
          imgUrl
          position{
            name
          }
        }
      }
      board{
        id
        title
        content
        createdAt
      }
      task{
        id
        content
        limit
        taskType
        is_complete
    }
    }
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($title: String!,$content: String!,$projectId: String!){
    createBoard(title:$title,content:$content,projectId:$projectId){
      id
    }
  }
`

export const END_PROJECT = gql`
   mutation endProject($projectId:String!){
    endProject(projectId:$projectId)
   }
`

export const DELETE_PROJECT = gql`
   mutation deleteProject($projectId:String!){
    deleteProject(projectId:$projectId)
   }
`
