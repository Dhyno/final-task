import { useContext } from 'react'
import { Row ,Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { DataContext, UserContext } from '../../export/exportComponent'
import { bookmark, logout, newJourney, user } from '../../export/exportImage'

export default function PopData(props) {

    const [state, dispatch] = useContext(UserContext);
    const [dataState, dispatchData] = useContext(DataContext);

    const { closeModal } = props;
    const navigate=useNavigate();

    const handleLogout = () => {
        closeModal();
        navigate('/');
        dispatch({ type: "LOGOUT"})
        dispatchData({type: 'DELETE_BOOKMARK'})
    }

  return (
    <>
        <div className='pop-list py-2 px-2 mb-2'>
            <div className='img-list'>
                <img className="pop-img" src={user} />
            </div>
            <h6 onClick={()=>{closeModal(); navigate('/profile')}} className="cursor-p fw-bold">Profile</h6>
        </div>
        <div className='pop-list py-2 px-2 mb-2'>
            <div className='img-list'>
                <img className="pop-img" src={newJourney} />
            </div>
            <h6 onClick={()=>{closeModal(); navigate('newjourney')}} className="cursor-p fw-bold">New Journey</h6>
        </div>
        <div className='pop-list py-2 px-2 mb-2 border-bottom border-2'>
            <div className='img-list'>
                <img className="pop-img" src={bookmark} />
            </div>
            <h6 onClick={()=>{closeModal(); navigate('/bookmark')}} className="cursor-p fw-bold">Bookmark</h6>
        </div>
        <div className='pop-list'>
            <div className='img-list'>
                <img className="pop-img" src={logout} />
            </div>
            <h6 onClick={handleLogout} className="cursor-p fw-bold" >Logout</h6>
        </div>
    </>
  )
}
