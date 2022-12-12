import React, {useContext, useEffect} from 'react';
import classes from './ItemList.module.css'
import SectionHeader from "../SectionHeader/SectionHeader";
import Item from "../Item/Item";
import {Context} from "../../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";

const ItemList = ({title}) => {
    const {device} = useContext(Context)

    return (
        <div className={classes.listPage}>
            <SectionHeader title={title}/>
            <div className={classes.list}>
                {device.devices.map((e)=>
                    <Item key={e.id} device={e}/>
                )}
            </div>
        </div>
    );
};

export default ItemList;