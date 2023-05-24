import { useState, useEffect, useRef,  } from "react"
import React from 'react'
export const TextEditor=()=>{
  const textAreaRef= useRef<HTMLTextAreaElement>(null)
  const [textValue, setTextValue]= useState('')
  const [comp , setComp] = useState(<div></div>)
  useEffect(()=>{
    setTextValue('')
  },[])
 // console.log(textAreaRef)

  const handleLink=():void=>{
    const cursor= textAreaRef.current?.selectionStart
    const words= textValue
    console.log(cursor)
    const newTextValue=words?.slice(0, cursor).concat(`[]() ${words.slice(cursor, words.length)}` )
    setTextValue(newTextValue)
  }
  const handlePrev=():void=>{
    function replaceStringWithComponent(string:string, component:string | React.FunctionComponent<{ children: string; }> | React.ComponentClass<{ children: string; }>) {
      return React.createElement(component, {
        children: string,
      });
    }
    interface MCProps{
      text:string
    }
    function MyComp(props:MCProps){
      return <a>{props.text}</a>
    }
    //
    // const newwrd=replaceStringWithComponent(textValue, <MyComp text={te}/>)
    //const words=textValue.replace(reg, replaceStringWithComponent)
    // setComp(newwrd)
  }
  const Preview=(props:{inputStr:string})=>{
    const reg= new RegExp(/\[(.*?)\]/g)
    const words= props.inputStr.split(' ')
    return (
      <div className="prev">
      {
        words.map(wrd=>{
          if(wrd.match(reg)){
            return <strong>{wrd}</strong>
          }else return wrd+ ' '
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
      <button onClick={handleLink}>link</button>
      <button>italic</button>
      <button>bold</button>
      <button onClick={handlePrev}>preview</button>
    </div>
    <Preview inputStr={textValue}/>
  </>
  )
}