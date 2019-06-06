import React from 'react';
import ReactDom from 'react-dom';
import { useEffect } from 'react';
const ModalRoot = document.getElementById('modal-root');

function PortalModal(props) {
  let el = document.createElement('div');
  useEffect(() => {
    ModalRoot.appendChild(el);
    return function remove() {
      ModalRoot.removeChild(el);
    }
  });

  return (
    ReactDom.createPortal(
      props.children,
      el
    )
  );
}

export default PortalModal;