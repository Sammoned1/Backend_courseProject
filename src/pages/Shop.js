import React, {useContext, useEffect} from 'react';
import Slider from "../components/Slider/Slider";
import Footer from "../components/Footer/Footer";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Sections from "../components/GenderSections/Sections";
import Item from "../components/Item/Item";
import FindMoreItems from "../components/Item/FindMoreItems/FindMoreItems";
import {Context} from "../index";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";

const Shop = () => {
    const {device} = useContext(Context)
    return (
        <div>
            <Sections/>
            <Slider title={'Новинки'}>
                {device.devices.map((e)=>
                    <Item key={e.id} device={e}/>
                )}
                {/*<FindMoreItems title={'Больше новых товаров'}/>*/}
            </Slider>
            <Slider title={'Популярное'}>
                {device.devices.map((e)=>
                    <Item key={e.id} device={e}/>
                )}
                {/*<FindMoreItems title={'Больше популярных товаров'}/>*/}
            </Slider>
            <Footer/>
        </div>
    );
};

export default Shop;