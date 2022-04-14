import { gql } from '@apollo/client';

export const CREATE_BOARD = gql`
  mutation createBoard($title: String!,$content: String!,$projectId: String!){
    createBoard(title:$title,content:$content,projectId:$projectId){
      id
    }
  }
`