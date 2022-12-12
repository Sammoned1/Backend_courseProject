import React, {useContext, useState} from 'react';
import classes from './CreateNewItemModal.module.css'
import MySelect from "../UI/MySelect/MySelect";
import {Context} from "../../index";
import MyInput from "../UI/Inputs/MyInput/MyInput";
import MyButton from "../UI/Buttons/MyButton/MyButton";
import AddPhotoInput from "../UI/Inputs/AddPhotoInput/AddPhotoInput";
import {createDevice} from "../../http/deviceAPI";

const CreateNewItemModal = ({callback, number}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState('')
    const [selectedBrand, setSelectedBrand] = useState(null)
    const [selectedType, setSelectedType] = useState(null)

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', selectedBrand.id)
        formData.append('typeId', selectedType.id)
        // formData.append('info', info)
        createDevice(formData).then(data => {
            callback(number)
        })
    }

    return (
        <div className={classes.createModal}>
            <div className={classes.createItemTitle}>Новый товар</div>
            <div style={{margin: '15px 0'}}>
                <MyInput placeholder={'Введите название товара'} value={name} handler={setName}/>
            </div>
            <div style={{margin: '15px 0'}}>
                <MyInput
                    placeholder={'Введите цену товара'}
                    value={price || ''}
                    priceFlag={true}
                    handler={setPrice}
                />
            </div>
            {/*<div className={classes.textAreaBlock}>*/}
            {/*    <textarea*/}
            {/*        className={classes.textArea}*/}
            {/*        placeholder={'Введите описание товара'}*/}
            {/*        wrap={'soft'}*/}
            {/*        name=""*/}
            {/*        value={info}*/}
            {/*        id="" cols="10" rows="3"*/}
            {/*        onChange={e => {*/}
            {/*            setInfo(e.target.value)*/}
            {/*        }}></textarea>*/}
            {/*</div>*/}
            <div className={classes.createModalText}>Выберите тип товара</div>
            <MySelect array={device.types} handler={setSelectedType}/>
            <div className={classes.createModalText}>Выберите бренд товара</div>
            <MySelect array={device.brands} handler={setSelectedBrand}/>
            <div className={classes.createModalText}>Выберите фото товара</div>
            <AddPhotoInput onChange={selectFile}/>
            <div style={{display: 'flex'}}>
                <MyButton title={'Отменить'} onClick={() => {
                    callback(number)
                }} style={{fontSize: 20, marginRight: '10px'}}/>
                <MyButton title={'Добавить'} style={{fontSize: 20, marginLeft: '10px'}} onClick={addDevice}/>
            </div>
        </div>
    );
};

export default CreateNewItemModal;