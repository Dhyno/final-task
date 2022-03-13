import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { API, Tilt, options } from '../export/exportComponent'

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
  const onEditorStateChange = (editorState, id) => {
    setCount(userInfo.description.value.length-8);
    setDescription(editorState);
  }

  const [isError, setError] = useState(null);
  const [count, setCount] = useState(0);

  const [uploadImage, setUploadImage] = useState([])
  const getImage = ( file, callback ) =>{
    let tempUpload=uploadImage;
    tempUpload.push(file);
    setUploadImage(tempUpload);

    return new Promise( ( resolve, reject ) => resolve( { data: { link: URL.createObjectURL(file) }  } ) )
  }

  const [showData, setShowData]=useState({});
  const [image, setImage] = useState()
  const handleChange = (e) => {
    let imageFile=e.target.files[0];
    setImage(imageFile);

    let url = URL.createObjectURL(imageFile);
    setShowData({...showData, image: url});
  }

  const handleSubmitData = async e => {
    e.preventDefault();

    const token= localStorage.getItem('token')
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`,//to get id user and send for api insert id user into table journey
        "Content-type": "multipart/form-data",
      },
    };

    let formFile= new FormData();
    formFile.set("title", userInfo.title)
    formFile.set("description", userInfo.description.value)
    formFile.set("image", image);
    console.log(formFile);

    const response = await API.post("/journey", formFile, config);
    console.log(response);
    // console.log(uploadImage); send for table journey assets after add journey success and get it id
  }

  return (
    <>
      <div className="App add-j pb-5">
        <div className="container">
          <div className="row"> 
            <form onSubmit={handleSubmitData} className="update__forms">
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
                      placeholder='Add your Journey'
                      editorClassName="editorClassName"
                      toolbarClassName="toolbarClassName"
                      wrapperClassName="wrapperClassName"
                      onEditorStateChange={onEditorStateChange}
                      toolbar={{
                        image: { 
                          uploadCallback: getImage,
                          previewImage: true,
                          urlEnabled: false,
                          inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg,image/SVG',
                          defaultSize: {
                            height: 'auto',
                            width: 100,
                          },
                        }
                      }}
                    />
                  <textarea className='bg-light px-2' style={{display:'none'}}  disabled ref={(val) => userInfo.description = val} value={draftToHtml(convertToRaw(description.getCurrentContent())) } />
                </div>
                {isError !== null && <div className="errors"> {isError} </div>}
                <div className='bg-light text-end px-2 py-2'>
                  <h6>Character: {count} </h6>
                </div>
                <div className='row'>
                  <div className="form-group col-md-12 mt-4 mb-2">
                    <input onChange={handleChange} type="file" name="image" id='images' className="form-control"  required />
                  </div>
                </div>
                <div className="form-group col-sm-12 text-end">
                  <button type="submit" className="btn btn-primary mt-2 mb-4"> Submit  </button>
                </div> 
              </div>
              <Tilt options={options}>
                <div className='col-md-12 text-center '>
                  <img className="w-50 add-journey-img" src={showData.image} />
                </div> 
              </Tilt>
            </form>
          </div>
        </div>
    </div>
  </>
  );
}

// https://codeat21.com/react-wysiwyg-text-editor/
//https://stackoverflow.com/questions/59351920/how-to-display-dynamic-content-html-in-editor-using-react-froala-wysiwyg
//https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp
//https://github.com/froala/wysiwyg-editor/issues/1941
//https://stackoverflow.com/questions/39758136/render-html-string-as-real-html-in-a-react-component
//https://stackoverflow.com/questions/1298531/regular-expression-in-javascript-replace-image-src-attribute
//https://www.npmjs.com/package/node-html-parser