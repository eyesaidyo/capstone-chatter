import styled from "styled-components";
import { Link } from "react-router-dom";
export const PostWrap = styled.div`
  width: 60%;
  border: 1px solid #cdcdcd;
  padding: 25px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
  background-color: #f7f7f7;
  color: #444444;
  .top {
    display: flex;
    gap: 50px;
  }
  .pfp {
    width: 80px;
    border-radius: 50%;
  }
  .foot {
    display: flex;
    justify-content: center;
    align-items: center;
    & .details {
      display: flex;
      align-items: center;
      gap: 3px;
    }
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
export const IconWrap = styled.img`
  width: 20px;
`;
export const IconWrap2 = styled.img`
  width: 15px;
`;
