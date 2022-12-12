import {BrowserRouter, HashRouter, useNavigate} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import TopAppBar from "./components/NavBar/TopAppBar/TopAppBar";
import ToolBar from "./components/NavBar/ToolBar/ToolBar";
import {Spinner} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userAPI";
import './styles/style.css'
import {fetchBrands, fetchDevices, fetchTypes} from "./http/deviceAPI";
import {SHOP_ROUTE} from "./utils/consts";
import {fetchBasket} from "./http/basketAPI";
import jwt_decode from "jwt-decode";


const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)
    const {device} = useContext(Context)
    const token = localStorage.getItem('token')
    // const userId = token ? jwt_decode(token).id : null

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data.rows))
    }, [])

    useEffect(() => {
        setTimeout(() => {
            check().then(data => {
                user.setUser(true)
                user.setIsAuth(true)
            }).finally(() => setLoading(false))
        }, 400)
    }, [])

    if (loading) {
        return (
            <h1 className='loading'>Loading...</h1>
        )
    }
    else{
        return (
            <BrowserRouter>
                <TopAppBar/>
                <ToolBar/>
                <AppRouter/>
            </BrowserRouter>
        );
    }
});

export default App;
