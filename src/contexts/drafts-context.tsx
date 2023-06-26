import { createContext ,Dispatch, SetStateAction} from "react";

interface DraftsType{
  drafts:string[];
  setDrafts: Dispatch<SetStateAction<null|string[]>>;
}
const defaultCon:DraftsType={
  drafts: [],
  setDrafts: ()=>null,

}
export const DraftContext=createContext(defaultCon)