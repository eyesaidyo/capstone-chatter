import { AboutWrapper } from "./about-section-styles"
import aboutImg from '../../assets/aboutimg.svg'
export const AboutSection=()=>{
  return (
    <AboutWrapper>
      <div className="about">
        <h3>About Chatter</h3>
        <p>Chatter is a multi-functional platform where authors and readers can have access to their own content. It aims to be a traditional bookworm’s heaven and a blog to get access to more text based content. Our vision is to foster an inclusive and vibrant community where diversity is celebrated, by promoting dialogue and understanding. We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs.</p>
      </div>
      <div className="img">
        <img src={aboutImg}/>
      </div>
    </AboutWrapper>
  )
}