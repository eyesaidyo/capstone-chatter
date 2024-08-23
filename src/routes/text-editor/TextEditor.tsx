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
    const cursor = textAreaRef.current?.selectionStart ?? 0;
    const text = textAreaRef.current?.value ?? "";
    const newTextValue = text?.slice(0, cursor) + xter + text?.slice(cursor);
    if (textAreaRef.current) {
      textAreaRef.current.value = newTextValue;
    }
    // Insert the character at the current cursor position
    const newCursorPosition = newTextValue?.indexOf(xter) + 1;
    if (textAreaRef.current && newCursorPosition) {
      textAreaRef.current.setSelectionRange(
        newCursorPosition,
        newCursorPosition
      );
      textAreaRef.current.focus();
    }
  };
  const date = new Date();
  return (
    <TextEditorWrap>
      <div>
        <TitleAreaWrap
          placeholder="insert title here"
          value={titleValue}
          onChange={(e) => {
            if (currentUser) setTitleValue(e.target.value);
            editField(currentUser?.uid, "currentTitle", titleValue);
          }}
        />
        <TextAreaWrap
          placeholder="your text here"
          id="text"
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
            editField(currentUser?.uid, "currentPost", textValue);
          }}
          ref={textAreaRef}
        ></TextAreaWrap>
        <div className="btn-container">
          <button onClick={() => handleCharacter("%%")}>link</button>
          <button onClick={() => handleCharacter("~~")}>italic</button>
          <button onClick={() => handleCharacter("[]")}>bold</button>
          <button onClick={() => handleCharacter("{}")}>paragraph</button>
          <Link to={"/dashboard/prev"}>preview</Link>
          <button
            onClick={() => {
              addPost({
                title: titleValue,
                content: textValue,
                date: `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`,
                user: currentUser?.uid,
                likes: [],
                comments: [],
              });
              // setTextValue('')
              // setTitleValue('')
            }}
          >
            publish
          </button>
        </div>
      </div>
    </TextEditorWrap>
  );
};
