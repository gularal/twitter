import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Twits from "./components/Twits";
import AuthContextProvider from "./contexts/authContext";
import TwitsContextProvider from "./contexts/twitContext";

function App() {
  return (
    <div>
      <Router>
        <TwitsContextProvider>
          <AuthContextProvider>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/twits" element={<Twits />} />
            </Routes>
          </AuthContextProvider>
        </TwitsContextProvider>
      </Router>
    </div>
  );
}

export default App;
