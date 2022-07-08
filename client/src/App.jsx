import Login from "./pages/Login";
import PersonalInfo from "./pages/AccountPage";
import Register from "./pages/Register";
import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import { UserContext } from "./utils/UserContext";
function App() {
  const [user, setUser] = useState();
  return (
    <div className="">
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route
            path="/account"
            element={<PersonalInfo></PersonalInfo>}
          ></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
