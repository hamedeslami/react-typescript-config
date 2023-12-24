import { useDispatch } from "react-redux";
import { login } from "@store/user/auth.reducers";
import {Button} from "@mui/material";

export default function LoginPage() {
    const dispatch = useDispatch();

    const loginHnadler = () => {
        dispatch(
            login({
                username: "Hamed",
                token: "myToken",
            })
        );
    };

    return (
        <div>
            <Button onClick={loginHnadler} variant="contained">login</Button>
        </div>
    );
}