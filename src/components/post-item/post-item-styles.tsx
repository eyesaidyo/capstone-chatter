import styled from "styled-components";
import { Link } from "react-router-dom";
export const PostWrap = styled.div`
  width: 60%;
  border: 1px solid;
  padding: 10px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
export const IconWrap = styled.img`
  width: 20px;
`;
