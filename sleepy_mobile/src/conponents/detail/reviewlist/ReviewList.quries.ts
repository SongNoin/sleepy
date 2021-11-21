import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      # 내 브라우저 댓글 창에서 나온
      _id # 내가 작성한 댓글의 id
      contents
      createdAt
      # 모든 유저가 작성하는 댓글. 댓글 리스트 유저
      user {
        _id
        name
        email
      }
    }
  }
`;
