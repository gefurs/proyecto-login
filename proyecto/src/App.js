import {useState} from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./session/Login";
import Home from "./components/Home";
import Faq from "./components/Faq";


function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/" element={
            <ProtectedRoute user={user}>
              <Home setUser={setUser} />
            </ProtectedRoute>
            } 
          />
          <Route path="/faq" element={
            <ProtectedRoute user={user}>
              <Faq setUser={setUser} />
            </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
