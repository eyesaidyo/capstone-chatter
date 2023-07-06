import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { createContext } from "react";
import {
  TextAreaWrap,
  TextEditorWrap,
  TitleAreaWrap,
} from "./text-editor-styles";
import { addPost, editField } from "../../utils/firebase/firebase-utils";
import { UserContext } from "../../contexts/user-context";
interface Text {
  children: React.ReactNode;
}
interface TextCon {
  textValue: string;
  setTextValue: React.Dispatch<React.SetStateAction<string>>;
  titleValue: string;
  setTitleValue: React.Dispatch<React.SetStateAction<string>>;
}
const def: TextCon = {
  textValue: "",
  setTextValue: () => "",
  titleValue: "",
  setTitleValue: () => "",
};
export const TextContext = createContext(def);
export const TextProvider = (props: Text) => {
  const [textValue, setTextValue] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const value = { textValue, setTextValue, titleValue, setTitleValue };
  return (
    <TextContext.Provider value={value}>{props.children}</TextContext.Provider>
  );
};
export const TextEditor = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { textValue, setTextValue, titleValue, setTitleValue } =
    useContext(TextContext);
  const { currentUser } = useContext(UserContext);

  const handleCharacter = (xter: string): void => {
    const cursor = textAreaRef.current?.selectionStart;
    const words = textValue;
    const newTextValue = words
      ?.slice(0, cursor)
      .concat(`${xter} ${words.slice(cursor, words.length)}`);
    setTextValue(newTextValue);
  };
  const date = new Date();
  const defData = {
    title: "the ABCs of code",
    content: " A if for ability, Bis for brief",
    date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
  };

  return (
    <TextEditorWrap>
      <div>
        <TitleAreaWrap
          placeholder="insert title here"
          value={titleValue}
          onChange={(e) => {
            setTitleValue(e.target.value);
            editField(currentUser, "currentTitle", titleValue);
          }}
        />
        <TextAreaWrap
          placeholder="your text here"
          id="text"
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
            editField(currentUser, "currentPost", textValue);
          }}
          ref={textAreaRef}
        ></TextAreaWrap>
        <div className="btn-container">
          <button onClick={() => handleCharacter("%%")}>link</button>
          <button onClick={() => handleCharacter("~~")}>italic</button>
          <button onClick={() => handleCharacter("[]")}>bold</button>
          <button onClick={() => handleCharacter("{}")}>paragraph</button>
          <Link to={"/dashboard/prev"}>preview</Link>
          <button onClick={() => addPost(defData)}>publish</button>
        </div>
      </div>
    </TextEditorWrap>
  );
};
