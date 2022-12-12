import ProfilePage from "./pages/ProfilePage";
import {
    ADMIN_ROUTE, BAGS_ROUTE,
    BASKET_ROUTE, BOOTS_ROUTE, BRANDS_ROUTE,
    CATALOGUE_ROUTE, CLOTHES_ROUTE,
    DEVICE_ROUTE, JEWELLERY_ROUTE,
    LOGIN_ROUTE, MAN_COLLECTION_ROUTE, PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE, WOMAN_COLLECTION_ROUTE
} from "./utils/consts";
import BasketPage from "./pages/BasketPage";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import DevicePage from "./pages/DevicePage";
import Catalogue from "./pages/Catalogue";
import WomanCollection from "./pages/WomanCollection";
import ManCollection from "./pages/ManCollection";
import Jewellery from "./pages/Jewellery";
import Clothes from "./pages/Clothes";
import Boots from "./pages/Boots";
import Brands from "./pages/Brands";
import Bags from "./pages/Bags";
import AdminPage from "./pages/AdminPage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: <AdminPage/>
    },
    {
        path: BASKET_ROUTE,
        Component: <BasketPage/>
    },
    {
        path: PROFILE_ROUTE,
        Component: <ProfilePage/>
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: DEVICE_ROUTE + '/' + ':id',
        Component: <DevicePage/>
    },
    {
        path: CATALOGUE_ROUTE,
        Component: <Catalogue/>
    },
    {
        path: WOMAN_COLLECTION_ROUTE,
        Component: <WomanCollection/>
    },
    {
        path: MAN_COLLECTION_ROUTE,
        Component: <ManCollection/>
    },
    {
        path: JEWELLERY_ROUTE,
        Component: <Jewellery/>
    },
    {
        path: CLOTHES_ROUTE,
        Component: <Clothes/>
    },
    {
        path: BOOTS_ROUTE,
        Component: <Boots/>
    },
    {
        path: BRANDS_ROUTE,
        Component: <Brands/>
    },
    {
        path: BAGS_ROUTE,
        Component: <Bags/>
    },
]