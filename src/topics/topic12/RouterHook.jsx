import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const CurrentLocation = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("dashboard", {replace: true});
    };

    const location = useLocation();
    return (
        <div>
        <h3 className="flex flex-col items-center justify-center text-3xl font-bold text-blue-600"
        >Current Path: {location.pathname}</h3>

        <button className="text-white mt-4 text-lg br-gray-800 p-4"
        onClick={handleLogin}>
            Login
        </button>
        <Routes>
            <Route path="dashboard" element={<Dashboard/>} />
        </Routes>
        </div> 
    );

};
export default CurrentLocation;