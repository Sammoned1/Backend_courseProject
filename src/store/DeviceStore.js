import {makeAutoObservable} from "mobx";
import classes from './icons.module.css'

export default class DeviceStore {
    constructor() {
        this._genders = [
            {id: 1, name: 'Для неё', icon: classes.woman},
            {id: 2, name: 'Для него', icon: classes.man}
        ]
        this._brands = []
        this._clothes = [
            {id: 1, name: 'Футболки', icon: classes.tShirts},
            {id: 2, name: 'Куртки', icon: classes.jackets},
            {id: 3, name: 'Штаны', icon: classes.pants},
            {id: 4, name: 'Шапки', icon: classes.hats}
        ]
        this._boots = [
            {id: 1, name: 'Кроссовки', icon: ''},
            {id: 2, name: 'Туфли', icon: ''}
        ]
        this._bags = [
            {id: 1, name: 'Сумки', icon: ''},
            {id: 2, name: 'Рюкзаки', icon: ''},
            {id: 3, name: 'Барсетки', icon: ''}
        ]
        this._jewellery = [
            {id: 1, name: 'Часы', icon: ''},
            {id: 2, name: 'Серьги', icon: ''},
            {id: 3, name: 'Кольца', icon: ''},
            {id: 4, name: 'Ожерелья', icon: ''}
        ]
        this._devices = []
        this._types = []

        this._filterTypes = [
            {id: 1, name: 'Бренды', icon: classes.brands, list: this._brands},
            {id: 2, name: 'Одежда', icon: classes.clothes, list: this._clothes},
            {id: 3, name: 'Обувь', icon: classes.boots, list: this._boots},
            {id: 4, name: 'Сумки', icon: classes.bags, list: this._bags},
            {id: 5, name: 'Украшения', icon: classes.jewellery, list: this._jewellery},
        ]

        this._selectedGender = {}
        this._selectedType = {}
        this._selectedOther = {}

        makeAutoObservable(this)
    }

    setGenders(genders) {
        this._genders = genders
    }

    setTypes(types) {
        this._types = types
    }

    setFilterTypes(filterTypes){
        this._filterTypes = filterTypes
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedGender(gender) {
        this._selectedGender = gender
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedOther(other) {
        this._selectedOther = other
    }

    get types() {
        return this._types
    }

    get filterTypes(){
        return this._filterTypes
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get genders() {
        return this._genders
    }

    get selectedGender() {
        return this._selectedGender
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedOther() {
        return this._selectedOther
    }


}