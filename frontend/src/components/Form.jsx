import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN ,USER_NAME} from "../constants";
import "../styles/Form.css"
import LoadingIndicator from "./LoaginIndicator";

function Form({ route, method }) {
    
   
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";



    const handleSubmit = async (e) => {
        console.log(route,method);
        setLoading(true);
        e.preventDefault();

        try {
            const res = await api.post(route, { username, password });
            
            if (method === "login") {
               
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                localStorage.setItem(USER_NAME,username);
                navigate("/")
            } else {
                localStorage.clear();
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };

    return (
        <form  className="form-container" onSubmit={(e)=>handleSubmit(e)}>
            <h1>{name}</h1>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            {loading && <LoadingIndicator />}
            <button className="form-button" type="submit">
                {name}
            </button>
        </form>
    );
}

export default Form;