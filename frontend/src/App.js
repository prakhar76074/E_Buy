import Register from "./screens/Register";
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";


function App() {
  return (
   <>
    <Routes>
       <Route path='/' element={<HomeScreen />} />

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

    </Routes>
   </>
     
  );
}

export default App;
