import { useContext } from "react"
import { TextContext } from "../text-editor/TextEditor"
import { PreviewWrap } from "./preview.styles"
export const Preview=()=>{
  const {textValue} = useContext(TextContext) 
  const regBold= new RegExp(/<(.*?)</g)
  const regLink= /%(.*?)%/g
  const regItalic =/~(.*?)~/g
  const regParagraph =/{(.*?)}/g
  const regHeading =/@(.*?)@/g
  const regHeading2 =/#(.*?)#/g
  const words= textValue.split('\n')
  console.log(words)
  return (
    <PreviewWrap>
    {
      words.map((wrd, )=>{
        if(wrd.match(regBold)){
          return (
            <p>
              {wrd.slice(0, wrd.indexOf('<'))}
              <strong>{wrd.slice(wrd.indexOf("<")+1,wrd.lastIndexOf('<'))}</strong>
              {
                wrd.slice(wrd.lastIndexOf('<')+1, wrd.length
                )
              }
            </p>
          )
        }else if(wrd.match(regLink)){
          console.log(wrd.split(' '))
          return (
          <a href={wrd.slice(wrd.indexOf('%')+1,wrd.lastIndexOf('%'))}>
            {wrd.split(' ').map((w,i)=>w.includes('%')?wrd.split(' ')[i+1]:null)}
            </a>
            )
        }else if(wrd.match(regItalic)){
          console.log("ital-"+ wrd.slice(wrd.lastIndexOf('~')+1, wrd.length))
          return (
            <p>
              {
              wrd.slice(0, wrd.indexOf('~'))
              }
              <em>
              {wrd.slice(wrd.indexOf('~')+1, wrd.indexOf('~', wrd.indexOf('~')+1))}
              </em>
              {
                wrd.slice(wrd.lastIndexOf('~')+1, wrd.length
                )
              }
            </p>
            )
        }
        else if(wrd.match(regParagraph)){
          console.log(wrd)
          return (
          <p>
            {wrd.slice(1,wrd.length-1)}
            </p>
            )
        } else if(wrd.match(regHeading)){
          console.log(wrd)
          return (
          <h2>
            {wrd.slice(wrd.indexOf('@')+1,wrd.length-1)}
            </h2>
            )
        }   else if(wrd.match(regHeading2)){
          console.log(wrd)
          return (
          <h3>
            {wrd.slice(wrd.indexOf('#')+1,wrd.length-1)}
            </h3>
            )
        }
        else return <p>{wrd}</p>
      })
    }

  </PreviewWrap>
  )
}