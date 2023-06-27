import { createContext ,Dispatch, SetStateAction, ReactNode, useState} from "react";

interface DraftsType{
  drafts:string[]|null;
  setDrafts: Dispatch<SetStateAction<null|string[]>>;
}
const defaultCon:DraftsType={
  drafts: [],
  setDrafts: ()=>[],

}
interface DraftsProps{
  children:ReactNode
}
export const DraftContext=createContext(defaultCon)
export const DraftsProvider=(props:DraftsProps)=>{
  const [drafts, setDrafts]= useState<string[]|null>([])
  const val:DraftsType={drafts, setDrafts}
  return (
    <DraftContext.Provider value={val}>{props.children}</DraftContext.Provider>
  )
}