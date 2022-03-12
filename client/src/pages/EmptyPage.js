import React from 'react'
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
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <img style={{width: '40%'}} className='img-fluid' src={addBookmark} />
            <h2 className='text-err my-5'>Ooopsss your bookmark is empty</h2>
        </div>
    )
}

export function ProfileEmpty(){
    return (
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <img style={{width: '40%'}} className='img-fluid' src={addContent} />
            <h2 className='text-err my-4'>Ooopsss your blog is empty</h2>
            <button className='create-blog'>Create Now</button>
        </div>
    )
}
