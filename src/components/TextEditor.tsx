import { useState, useEffect, useRef,  useContext,  } from "react"
import {Link}  from 'react-router-dom'
import { createContext } from "react"
interface Text{children:React.ReactNode}
interface TextCon{
            textValue:string, 
          setTextValue:React.Dispatch<React.SetStateAction<string>>
}
const def:TextCon={
  textValue:'',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTextValue:()=>{}
}
export const TextContext =createContext(def)
export const TextProvider=(props:Text)=>{
  const [textValue, setTextValue]= useState('') 
  const value= {textValue, setTextValue}
  return <TextContext.Provider value={value}>{props.children}</TextContext.Provider>
}
export const TextEditor=()=>{
  const textAreaRef= useRef<HTMLTextAreaElement>(null)
  const {textValue, setTextValue}= useContext(TextContext)
  useEffect(()=>{
    setTextValue('')
  },[setTextValue])

  const handleCharacter=(xter:string):void=>{
    const cursor= textAreaRef.current?.selectionStart
    const words= textValue
    const newTextValue=words?.slice(0, cursor).concat(`${xter} ${words.slice(cursor, words.length)}` )
    setTextValue(newTextValue)
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
      <button onClick={()=>handleCharacter('{}')}>paragraph</button>
      <Link to={'prev'} >preview</Link>
    </div>
    
  </>
  )
}