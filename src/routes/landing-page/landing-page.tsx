import { AboutSection } from "../../components/about/about-section"
import { Box } from "../../components/box/box"
import { GetStartedWrap, WhyJoinWrapper } from './landing-page-styles'
import analyticsIcon from '../../assets/analytics.svg'
import content from '../../assets/content.svg'
import socials from '../../assets/socials.svg'
// import bcg from '../../assets/bacg.svg'
export const LandingPage=()=>{
  return (
  <>
    <GetStartedWrap>
    
      <div className="text">
        <div className="align">
        <h1>Welcome to Chatter: A Haven for Text-Based Content</h1>
        <p>Unleash the Power of Words. Connect with Like-Minded Readers and Writers</p>
        <button>Get Started</button>
        </div>
      </div>
    </GetStartedWrap>
    <AboutSection/>
    <WhyJoinWrapper>
      <h2>Why you should join chatter</h2>
      <p>Our goal is to make writers and readers see our platform as their next heaven for blogging, ensuring ease in interactions, connecting with like-minded peers, have access to favorite content based on interests and able to communicate your great ideas with people.</p>
      <div className="boxes">
        <Box imgSrc={analyticsIcon} heading='Analytics' detail='Analytics to track the number of views, likes and comment and also analyze the performance of your articles over a period of time' />
        <Box imgSrc={socials} heading='Social interactions' detail='Users on the platform can interact with posts they like, comment and engage in discussions' />
        <Box imgSrc={content} heading='Content creation' detail='Write nice and appealing with our in-built markdown, a rich text editor' />

        
      </div>
    </WhyJoinWrapper>
  </>
  )
}