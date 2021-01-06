import React from 'react';
import { ThemeModal } from './styles';

const Modal = ({ modalVisible, handleCloseModal, children }) => {
  return (
    <ThemeModal
      animationType="slide"
      visible={modalVisible}
      onRequestClose={() => {
        alert('Modal has been closed.');
      }}
    >
      {children}
    </ThemeModal>
  );
};

export default Modal;
