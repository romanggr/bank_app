import styled from "styled-components";
import { ReactNode, cloneElement, createContext, useContext, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { MdClose } from "react-icons/md";
import { createPortal } from "react-dom";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-light--2);
  border-radius: 2rem;
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-500);
  }
`;

interface IdefaultValue {
  openName: string;
  open: (name: string) => void;
  close: () => void;
}

const defaultContextValue: IdefaultValue = {
  openName: '',
  open: () => { },
  close: () => { },
};

const ModalContext = createContext<IdefaultValue>(defaultContextValue);


const Modal = ({ children }: { children: ReactNode }) => {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};
function Open({ children, opens: opensWindowName }: { children: ReactNode, opens: string }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children as React.ReactElement, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }: { children: ReactNode, name: string }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);
  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <MdClose />
        </Button>
        <div>{cloneElement(children as React.ReactElement)}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;