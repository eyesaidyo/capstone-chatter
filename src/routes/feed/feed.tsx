import { PostItem } from "../../components/post-item/post-item";
import { FeedWrap, Top } from "./feed-styles";
import { useEffect, useState } from "react";
import { db, getGlobalPosts } from "../../utils/firebase/firebase-utils";
import { collection, DocumentData } from "firebase/firestore";
// import { Link } from "react-router-dom";
import { StyledLink } from "../../components/post-item/post-item-styles";
import { SearchBar } from "../../components/searchbar/searchbar";
export const Feed = () => {
  const [feed, setFeed] = useState<DocumentData[]>([
    {
      avatarSRC: "",
      name: "",
      date: "",
      title: "",
      content: "",
      articleSRC: "",
      comments: [],
      likes: [],
    },
  ]);
  console.log(feed);
  useEffect(() => {
    const fetchGlobalPosts = async () => {
      const myFeed = await getGlobalPosts();
      setFeed(myFeed);
    };
    fetchGlobalPosts();
  }, []);
  console.log(collection(db, "globalPosts"));

  return (
    <>
      <FeedWrap>
        <Top>
          <SearchBar />
        </Top>

        {feed.map((post) => (
          <StyledLink to={"post" + "/" + post.id}>
            <PostItem
              title={post.title}
              content={post.content.slice(0, 50) + "..."}
              date={post.date}
              comments={post.comments}
              likes={post.likes}
            ></PostItem>
          </StyledLink>
        ))}
      </FeedWrap>
    </>
  );
};
