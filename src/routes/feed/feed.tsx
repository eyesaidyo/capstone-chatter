import { PostItem, PostProps } from "../../components/post-item/post-item";
import { FeedWrap } from "./feed-styles";
import pfp from "../../assets/postPFP.svg";
import img from "../../assets/postIMG.svg";
import { useEffect, useState } from "react";
import { getGlobalPosts } from "../../utils/firebase/firebase-utils";
import { DocumentData } from "firebase/firestore";

export const Feed = () => {
  const [feed, setFeed] = useState<DocumentData[]>([
    {
      avatarSRC: "",
      name: "",
      date: "",
      title: "",
      content: "",
      articleSRC: "",
    },
  ]);
  // const getFeed=()=>{
  //   console.log('fetchin feed...')
  //   getGlobalPosts()
  // }
  useEffect(() => {
    const fetchGlobalPosts = async () => {
      const myFeed = await getGlobalPosts();
      setFeed(myFeed);
    };
    fetchGlobalPosts();
  }, []);
  const date = new Date();
  return (
    <>
      <FeedWrap>
        <h2>feed</h2>
        <PostItem
          title="how to train your dragon"
          avatarSRC={pfp}
          articleSRC={img}
          content="a story on dragon training"
          date={`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
          name="rajon irem"
        />
        {feed.map((post) => (
          <PostItem
            title={post.title}
            content={post.content.slice(0, 50) + "..."}
            date={post.date}
          ></PostItem>
        ))}
      </FeedWrap>
    </>
  );
};
