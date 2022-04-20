import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./Components/Login/index";
import Checkout from "./Components/Checkout/index";
import Product from "./Components/Products/index";
import LoanApprove from "./Components/LoadApprove/index";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Login />}>
      </Route>
      <Route path="/checkout" element={<Checkout />}>

      </Route>
      <Route path="/product" element={<Product />}>

      </Route>
      <Route path="/loanapprove" element={<LoanApprove />}>

</Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
