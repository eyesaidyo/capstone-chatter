import { useContext } from "react"
import { TextContext } from "../text-editor/TextEditor"
import { PreviewWrap } from "./preview.styles"
export const Preview=()=>{
  const {textValue} = useContext(TextContext) 
  const regBold= new RegExp(/\[(.*?)\]/g)
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
      words.map((wrd, idx)=>{
        if(wrd.match(regBold)){
          return <strong>{wrd.slice(1,wrd.length-1)}</strong>
        }else if(wrd.match(regLink)){
          return (
          <a href={wrd.slice(1,wrd.length-1)}>
            {words[idx-1]}
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
        }
        else return <p>{wrd}</p>
      })
    }

  </PreviewWrap>
  )
}