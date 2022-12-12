import React, {useContext} from 'react';
import classes from './UserName.module.css'
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";
import {PROFILE_ROUTE} from "../../utils/consts";
import jwt_decode from "jwt-decode";

const UserName = observer(() => {
    const {user} = useContext(Context)
    const token = localStorage.getItem('token')
    const username = token ? jwt_decode(token).email : null

    return (
        <div className={classes.userBlock}>
            {user.isAuth
                ? <NavLink to={PROFILE_ROUTE}>
                    <div className={classes.userName}>
                        <div>{username}</div>
                    </div>
                </NavLink>
                : null
            }
        </div>


    );
});

export default UserName;