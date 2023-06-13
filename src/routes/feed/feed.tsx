import { PostItem } from "../../components/post-item/post-item"
import { FeedWrap } from "./feed-styles"
import pfp from '../../assets/postPFP.svg'
import img from '../../assets/postIMG.svg'

export const Feed=()=>{
  const date = new Date()
  return (
    <>
    <FeedWrap>
      <PostItem title="how to train your dragon" avatarSRC={pfp} articleSRC={img} summary='a story on dragon training' date={date.getDate()} name='rajon irem' />
      <PostItem title="how to train your dragon" avatarSRC={pfp} articleSRC={img} summary='a story on dragon training' date={date.getDate()} name='rajon irem' />
      <PostItem title="how to train your dragon" avatarSRC={pfp} articleSRC={img} summary='a story on dragon training' date={date.getDate()} name='rajon irem' />
    </FeedWrap>
    
    </>
  )
}