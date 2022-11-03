import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image'
import defaultImage from '../assets/defaultImage.jpg'
import { saveAs } from 'file-saver'

const SDImage = ({ imgSrc = defaultImage, maxImSize = '512px', imgID=0, imgCaption="", key=0 }) => {
  const [imgInfo, setImgInfo] = useState({ id: imgID, caption: imgCaption, imgSrc: imgSrc })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const downloadImage = (url, filename) => {
    saveAs(url, filename)
  }

  return (
    <>
      <Image src={`${imgSrc}`} onClick={handleShow} key={imgID}
        className={`
      m-[20px]
      mb-[50px]
      min-w-[128px]
      max-h-[${maxImSize}]
      shadow-lg
      transition-shadow
      duration-300
      hover:shadow-xl
      hover:shadow-indigo-500/50`}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Image Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>Caption: {imgCaption} {imgInfo.imgSrc}</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {downloadImage(imgInfo.imgSrc, imgInfo.caption.toLocaleLowerCase().replace(/ /g, "_")+".png")}}>
            Download
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SDImage