import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export default function PrivateRoute(){

    const [state, dispatch] = useContext(UserContext)

    return(
        state.isLogin ? <Outlet /> : <Navigate to='/'/>
    );

}