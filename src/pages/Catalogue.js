import React, {useContext, useEffect} from 'react';
import ItemList from "../components/ItemList/ItemList";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import FilterList from "../components/FilterList/FilterList";

import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import {Context} from "../index";

const Catalogue = () => {
    const {device} = useContext(Context)
    return (
        <div>
            <ItemList title={'Каталог'}/>
        </div>
    );
};

export default Catalogue;