import Header from '../components/Header/Header'
import ModalLogin from '../components/Header/ModalLogin'
import ModalRegister from '../components/Header/ModalRegister'
import PopData from '../components/Header/PopData'
import CardArticle from '../components/CardArticle'

import { BookMarkEmpty } from '../pages/EmptyPage'
import { ServerError } from '../pages/EmptyPage'
import { ProfileEmpty } from '../pages/EmptyPage'

import PrivateRoute from '../route/PrivateRoute'

import { API } from '../config/api'
import { Tilt } from '../config/Tilt'
import { options } from '../config/Tilt'

import { DataContext } from '../context/dataContext'
import { UserContext } from '../context/userContext'

import { filterDate } from '../filterAndConvert/filterConvert'
import { filterTitle } from '../filterAndConvert/filterConvert'

import AddJourney from '../pages/AddJourney'
import BookMark from '../pages/Bookmark'
import DetailJourney from '../pages/DetailJourney'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

export { Header, ModalLogin, ModalRegister, PopData, CardArticle, API, Tilt, options, DataContext, UserContext,
        filterDate, filterTitle, AddJourney, BookMark, DetailJourney, Home, Profile, BookMarkEmpty, ServerError, 
        ProfileEmpty, PrivateRoute}