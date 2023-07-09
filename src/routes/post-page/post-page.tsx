import { PostPageWrap } from "./post-page-styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPost } from "../../utils/firebase/firebase-utils";
import { Preview } from "../preview/Preview";

//interface UserParams extends RouteComponentProps<{ postId: string }> {}
const PostPage = () => {
  const { id } = useParams();
  const [val, setVal] = useState("");
  const [titleVal, setTitleVal] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const post = await getPost(id);
        if (post) {
          setVal(post.content);
          setTitleVal(post.title);
        }

        //console.log(getPost(id).then((res) => (res ? res.data() : null)));
      }
    };
    fetchData();
  }, [id]);

  return (
    <PostPageWrap>
      <h1>post page {id}</h1>
      <Preview val={val} title={titleVal} />
    </PostPageWrap>
  );
};
export default PostPage;
