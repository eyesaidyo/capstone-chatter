import { IconWrap, PostWrap } from "./post-item-styles";
import comments from "../../assets/comments.svg";
import plain_heart from "../../assets/plain-heart.svg";
export interface PostProps {
  avatarSRC?: string;
  name?: string;
  date: string;
  title: string;
  content: string;
  articleSRC?: string;
  user?: string | null;
}
export const PostItem = (props: PostProps) => {
  return (
    <PostWrap>
      <div className="top">
        <img className="pfp" src={props.avatarSRC} />
        <h3>{props.name}</h3>
        <p>{props.date}</p>
      </div>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <img className="article-img" src={props.articleSRC} />
      <div className="foot">
        <span>
          <IconWrap src={comments} /> 0
        </span>
        <span>
          <IconWrap src={plain_heart} /> 0
        </span>
      </div>
    </PostWrap>
  );
};
