import { useState, useEffect, useRef,  } from "react"
export const TextEditor=()=>{
  const textAreaRef= useRef<HTMLTextAreaElement>(null)
  const [textValue, setTextValue]= useState('')
  const [comp , setComp] = useState(<div></div>)
  useEffect(()=>{
    setTextValue('')
  },[])

  const handleCharacter=(xter:string):void=>{
    const cursor= textAreaRef.current?.selectionStart
    const words= textValue
    const newTextValue=words?.slice(0, cursor).concat(`${xter} ${words.slice(cursor, words.length)}` )
    setTextValue(newTextValue)
  }
  const Preview=(props:{inputStr:string})=>{
    const regBold= new RegExp(/\[(.*?)\]/g)
    const regLink= /%(.*?)%/g
    const regItalic =/~(.*?)~/g
    const words= props.inputStr.split(' ')
    return (
      <div className="prev">
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
            return (
            <em>
              {wrd.slice(1,wrd.length-1)}
              </em>
              )
          }
          else return wrd+ ' '
        })
      }

    </div>
    )
  }
  return(
    <>
    <div>
      <textarea 
      placeholder="your text here"
      id="text"
      // value={textValue}
      value={textValue}
      onChange={(e) => setTextValue(e.target.value)}
      ref={textAreaRef}
      >

      </textarea>
    </div>
    <div className="btn-container">
      <button onClick={()=>handleCharacter('%%')}>link</button>
      <button onClick={()=>handleCharacter('~~')}>italic</button>
      <button onClick={()=>handleCharacter('[]')}>bold</button>
      <button>preview</button>
    </div>
    <Preview inputStr={textValue}/>
  </>
  )
}