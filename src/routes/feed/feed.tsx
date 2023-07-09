import { PostItem } from "../../components/post-item/post-item";
import { FeedWrap } from "./feed-styles";
import pfp from "../../assets/postPFP.svg";
import img from "../../assets/postIMG.svg";
import { useEffect, useState } from "react";
import { db, getGlobalPosts } from "../../utils/firebase/firebase-utils";
import { collection, DocumentData } from "firebase/firestore";
import { Link } from "react-router-dom";
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
  console.log(feed);
  useEffect(() => {
    const fetchGlobalPosts = async () => {
      const myFeed = await getGlobalPosts();
      setFeed(myFeed);
    };
    fetchGlobalPosts();
  }, []);
  console.log(collection(db, "globalPosts"));
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
          <Link to={"post" + "/" + post.id}>
            <PostItem
              title={post.title}
              content={post.content.slice(0, 50) + "..."}
              date={post.date}
            ></PostItem>
          </Link>
        ))}
      </FeedWrap>
    </>
  );
};
