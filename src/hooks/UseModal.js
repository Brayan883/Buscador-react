import { useRef } from "react";
import { useCallback } from "react";

const UseModal = () => {
  const refModal = useRef(null);
  const handleShow = useCallback(() => {    
    refModal.current?.showModal();
  }, [refModal]);
  return { refModal, handleShow };
};

export default UseModal;
