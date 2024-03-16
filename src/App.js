import './App.css';
import AddPage from './Component/AddPage/AddPage';
import Banner from './Component/Banner/Banner';
import Header from './Component/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignPage from './Component/SignPage/SignPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/addNew" element={<AddPage />} />
          <Route path="/Sign" element={<SignPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
