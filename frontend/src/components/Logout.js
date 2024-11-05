import { useNavigate } from "react-router-dom";

function Logout() {

let navigate = useNavigate();

let handleLogout= ()=> {
    sessionStorage.removeItem("user");
    navigate("/")
}
    return(
        <div>
            <input type="button" value="logout" onClick={handleLogout}/>
        </div>
    )
}

export default Logout;