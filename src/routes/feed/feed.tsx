import { PostItem } from "../../components/post-item/post-item";
import { FeedWrap } from "./feed-styles";
import pfp from "../../assets/postPFP.svg";
import img from "../../assets/postIMG.svg";
import { useEffect, useState } from "react";
import { getGlobalPosts } from "../../utils/firebase/firebase-utils";

export const Feed = () => {
  const [feed, setFeed] = useState([
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
    getGlobalPosts().then((res) => setFeed(res));
    console.log(`feed ${feed[0].content}`);
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
        <PostItem
          title="how to train your dragon"
          avatarSRC={pfp}
          articleSRC={img}
          content="a story on dragon training"
          date={`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
          name="rajon irem"
        />
        <PostItem
          title="how to train your dragon"
          avatarSRC={pfp}
          articleSRC={img}
          content="a story on dragon training"
          date={`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
          name="rajon irem"
        />
        <h1>{feed[0].content}</h1>
      </FeedWrap>
    </>
  );
};
