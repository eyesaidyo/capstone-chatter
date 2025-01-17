import {
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
} from "react";

interface ModalType {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  isModalClosed: boolean;
  setIsModalClosed: Dispatch<SetStateAction<boolean>>;
}
const defaultCon: ModalType = {
  modal: false,
  setModal: () => false,
  isModalClosed: false,
  setIsModalClosed: () => false,
};
interface ModProps {
  children: ReactNode;
}
export const ModalContext = createContext(defaultCon);
export const ModalProvider = (props: ModProps) => {
  const [modal, setModal] = useState<boolean>(false);
  const [isModalClosed, setIsModalClosed] = useState<boolean>(false);

  const val: ModalType = { modal, setModal, isModalClosed, setIsModalClosed };
  return (
    <ModalContext.Provider value={val}>{props.children}</ModalContext.Provider>
  );
};
