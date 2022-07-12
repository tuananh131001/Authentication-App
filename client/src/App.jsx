import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./utils/AnimatedRoutes";
import { useState, createContext } from "react";
import { UserContext } from "./utils/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [currentUserAuth, setCurrentUserAuth] = useState("");
  const [userDetail, setUserDetail] = useState("");
  onAuthStateChanged(auth, (currentUser) => {
    currentUser ? setCurrentUserAuth(currentUser) : null;
  });

  return (
    <div className="h-screen flex flex-col sm:justify-center items-center">
      {" "}
      <UserContext.Provider
        value={{
          currentUserAuth,
          setCurrentUserAuth,
          userDetail,
          setUserDetail,
        }}
      >
        <Router>
          <AnimatedRoutes></AnimatedRoutes>
        </Router>
      </UserContext.Provider>
      <footer className="sm:mt-0 mt-auto font-thin text-gray-400 text-center text-sm flex justify-between w-96 ">
        <p>Nguyen Tuan Anh</p> <p>devchallenges.io</p>
      </footer>
    </div>
  );
}

export default App;
