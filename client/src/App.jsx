import Login from "./pages/Login";
import PersonalInfo from "./pages/AccountPage";
import Register from "./pages/Register";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, createContext } from "react";
import { UserContext } from "./utils/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase-config";
import { getDoc, doc } from "firebase/firestore";
import { useEffect } from "react";
function App() {
  const [currentUserAuth, setCurrentUserAuth] = useState("");
  const [userDetail, setUserDetail] = useState("");
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    currentUser ? setCurrentUserAuth(currentUser) : null;
  });

  return (
    <div className="">
      <UserContext.Provider
        value={{
          currentUserAuth,
          setCurrentUserAuth,
          userDetail,
          setUserDetail,
        }}
      >
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>

          <Route path="/login" element={<Login></Login>}></Route>
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
