
import "./App.css";

// import AuthProvider from "./context/AuthProvider/AuthProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import ProductsAll from "./components/ProductsAll/ProductsAll";
import ProductBook from "./components/ProductBook/ProductBook";
import ContactUs from "./components/ContactUs/ContactUs";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import DashBoard from "./components/DashBoard/DashBoard/DashBoard"
import AuthProvider from "./context/AuthProvider";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/products">
              <ProductsAll></ProductsAll>
            </Route>
            <PrivateRoute path="/product/:id">
              <ProductBook></ProductBook>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route path="/contact">
             <ContactUs></ContactUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

