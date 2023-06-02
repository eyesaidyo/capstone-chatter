import { BoxWrapper } from "./box-styles"

export const Box=(props:{imgSrc:string, heading:string, detail:string})=>{
  return (
    <BoxWrapper>
      <img src={props.imgSrc}/>
      <h3>{props.heading}</h3>
      <p>{props.detail}</p>
    </BoxWrapper>
  )
}