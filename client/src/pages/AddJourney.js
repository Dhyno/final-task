import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { EditorState, convertToRaw} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function AddJourney() {

  const [userInfo, setuserInfo] = useState({
    title: '',
  });
  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    });
  } 
  
  let editorState = EditorState.createEmpty();
  const [description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setCount(userInfo.description.value.length-8);
    setDescription(editorState);
  }

  const [isError, setError] = useState(null);
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="App add-j">
        <div className="container">
          <div className="row"> 
            <form  className="update__forms">
              <h1 className='fs-1-1 my-5'>New Journey </h1>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label className="fw-bold"> Title <span className="required"></span> </label>
                  <input type="text" name="title" value={userInfo.title} onChange={onChangeValue}  className="form-control"  required />
                </div>
                <div className="form-group col-md-12 editor bg-light">
                  <h2 className='mb-2'></h2>
                    <Editor
                      editorState={description}
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      editorClassName="editorClassName"
                      onEditorStateChange={onEditorStateChange}
                    />
                  <textarea className='bg-light px-2' style={{display:'none'}}  disabled ref={(val) => userInfo.description = val} value={draftToHtml(convertToRaw(description.getCurrentContent())) } />
                </div>
                {isError !== null && <div className="errors"> {isError} </div>}
                <div className='bg-light text-end'>
                  <h6>Character: {count} </h6>
                </div>
                <div className="form-group col-sm-12 text-end">
                  <button type="submit" className="btn btn-primary my-5"> Submit  </button>
                </div> 
              </div> 
            </form>
          </div>
        </div>
    </div>
  </>
  );
}

// https://codeat21.com/react-wysiwyg-text-editor/