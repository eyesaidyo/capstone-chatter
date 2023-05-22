import { useState, useEffect, useRef,  } from "react"
export const TextEditor=()=>{
  const textAreaRef= useRef<HTMLTextAreaElement>(null)
  const [textValue, setTextValue]= useState('')
  
  useEffect(()=>{
    setTextValue('')
    // textAreaRef.current=textValue
  },[])
  console.log(textAreaRef)

  const handleLink=():void=>{
    const cursor= textAreaRef.current?.selectionStart
    const words= textValue
    // ?.split(/\s+/)
    console.log(cursor)
    const newTextValue=words?.slice(0, cursor).concat(`[]() ${words.slice(cursor, words.length)}` )
    // .join(' ')
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
      <button onClick={handleLink}>link</button>
      <button>italic</button>
      <button>bold</button>
    </div>
  
  </>
  )
}