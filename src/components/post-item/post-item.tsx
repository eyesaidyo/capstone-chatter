import { PostWrap } from "./post-item-styles";
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
      <div className="foot"></div>
    </PostWrap>
  );
};
