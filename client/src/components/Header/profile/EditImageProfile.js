import React, { useContext, useState, useEffect, useRef } from 'react'
import { Modal } from 'react-bootstrap'
import { UserContext } from '../../../export/exportComponent'
import AvatarEditor from 'react-avatar-editor'

export default function EditImageProfile({ closeModal }) {    
  const [state, dispatch] = useContext(UserContext)

  const [modalChoose, setModalChoose] = useState(true)
  const handleCloseChoose = () => {
      setModalChoose(false)
      closeModal();
  }

  const [showEditorModal, setShowEditorModal] = useState(false);
  const hanldeCloseEditorModal = () => {
      closeModal();
      setShowEditorModal(false);
  }
  const switchModal = () =>{
    setModalChoose(false);
    setShowEditorModal(true);
  }


  const[imageEdit, setImageEdit] = useState(null);
  const handleImage = ( e ) => {
    let imageFile=e.target.files[0];
    setImageUploadAttributes({ name: imageFile.name, type: imageFile.type });
    let url = URL.createObjectURL(imageFile);
    // console.log(imageFile);
    setPreview(url)

    setImageEdit(imageFile);
    switchModal();
  }

  
  const [preview, setPreview] = useState(null)
  const [imgUploadAttributes, setImageUploadAttributes]= useState({});

  const EditorRef=useRef(null);
  const saveChange = () => {
    fetch(EditorRef).then(res => res.blob())
    .then(blob => {
      const file = new File([blob], imgUploadAttributes.name ,{ type: imgUploadAttributes.type })
      let url = URL.createObjectURL(file);
      setPreview(url);
      
    //   console.log(file);
      closeModal();
    })
    
  }
  

  return (
    <div>
        <Modal size='md' show={showEditorModal} centered onHide={hanldeCloseEditorModal} className='modal-choose'>
            <Modal.Body className='text-center modal-choose-body'> 
                <AvatarEditor
                    image= {imageEdit}
                    width={290}
                    height={290}
                    border={50}
                    borderRadius={145}
                    color={[255, 255, 255, 0.6]} // RGBA
                    scale={1.2}
                    rotate={0}
                    ref={EditorRef}
                />
                <div className='text-end pt-2'>
                    <button onClick={saveChange} className='save'>Save</button>
                </div>
                {/* <img src={preview} /> */}
            </Modal.Body>
        </Modal>
        <Modal size='sm' show={modalChoose} centered onHide={handleCloseChoose} className='modal-choose'>
            <Modal.Body className='text-center modal-choose-body d-flex'> 
                <h6 onClick={()=>{setImageEdit(state.user.image); switchModal()}} className='cursor-p choose-1'>Your Profile</h6>{/* for history user image later make table for this*/}
                <label for='image' className='label-img'><h6 className='cursor-p choose-2'>Upload Image</h6></label>
                <input type="file" id='image' onChange={handleImage} hidden/>
            </Modal.Body>
        </Modal>
    </div>
  )
}
