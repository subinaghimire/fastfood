import {BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../Components/Pages/Header";
import { Login } from "../Components/Pages/Login";
import { Menu } from "../Components/Pages/Menu";
import { PaymentSucess } from "../Components/Pages/Payment Successful";
import { Register } from "../Components/Pages/Register";
import { Cart } from "../Components/Pages/Cart";


const Navigation = {} => {
    return{
        <BrowserRouter>
           <Header />
           <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/login" element={<Login />} />
           <Route path="/menu" element={<Menu/>} />
           <Route path="/payment-success" element={<PaymentSucess />} />
           <Route path="/register" element={<Register />} />
           <Route path="/cart" element={<Cart />} />
           </Routes>
        </BrowserRouter>
    }
}

export default Navigation;