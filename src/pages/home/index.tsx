import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { logout } from "@store/user/auth.reducers";

export default function HomePage() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <div>
            <Button onClick={logoutHandler} variant="contained">logout</Button>
        </div>
    );
}