import React from 'react'
import { useNavigate } from 'react-router-dom'
import { serverError, addBookmark, addContent }  from '../export/exportImage'

export function ServerError() {
  return (
    <div className='err-page-cnt'>
        <img className='err-page img-fluid' src={serverError} />
        <h2 className='text-err my-5'>Ooopsss something went wrong please back later</h2>
    </div>
  )
}

export function BookMarkEmpty(){
    return (
        <div className='d-flex justify-content-center flex-column align-items-center err-page-cnt bookmark'>
            <img className='img-fluid  profile-empty' src={addBookmark} />
            <h2 className='text-err my-5'>Ooopsss your bookmark is empty</h2>
        </div>
    )
}

export function ProfileEmpty(){
    const navigate = useNavigate();
    return (
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <img className='img-fluid profile-empty' src={addContent} />
            <h2 className='text-err my-4'>Ooopsss your blog is empty</h2>
            <button onClick={()=>navigate('/newjourney')} className='create-blog'>Create Now</button>
        </div>
    )
}
