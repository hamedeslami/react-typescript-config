import {Outlet} from "react-router-dom";

export default function PrivateLayout() {
    return (
        <>
            <h1>Private Layout</h1>
            <Outlet/>
        </>
    )
}