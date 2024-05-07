import { Box, ChakraProvider, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import {
  HashRouter,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import BreadCumb from "./component/breadcumb/Index";
import Footer from "./component/footer/Index";
import Navbar from "./component/navbar/Index";
import NotFound from "./pages/404";
import AddRole from "./pages/setup/role/AddRole.js";
import AddCategory from "./pages/master/category/AddCategory.js";
import Category from "./pages/master/category/Index.js";
import AddCustomer from "./pages/master/customer/AddCustomer.js";
import Customer from "./pages/master/customer/Index.js";
import ReportCustomer from "./pages/master/customer/ReportCustomer.js";
import Dashboard from "./pages/dashboard/Index";
import "react-datepicker/dist/react-datepicker.css";
import Login from "./pages/login/Index"; // Import halaman login
import AddMenu from "./pages/setup/menu/AddMenu.js";
import Menu from "./pages/setup/menu/Index.js";
import AddMitra from "./pages/master/mitra/AddMitra";
import Mitra from "./pages/master/mitra/Index";
import AddPermission from "./pages/setup/permission/AddPermission.js";
import Permission from "./pages/setup/permission/Index.js";
import AddProduct from "./pages/master/product/AddProduct";
import Product from "./pages/master/product/Index";
import AddUnit from "./pages/master/productUnit/AddProductUnit.js";
import Unit from "./pages/master/productUnit/Index.js";
import AddPurchase from "./pages/transaction/purchase/AddPurchase.js";
import Purchase from "./pages/transaction/purchase/Index.js";
import ReportPurchase from "./pages/transaction/purchase/ReportPurchase.js";
import AddSale from "./pages/transaction/sale/AddSale.js";
import Sale from "./pages/transaction/sale/Index.js";
import ReportSales from "./pages/transaction/sale/ReportSale.js";
import AddStore from "./pages/master/store/AddStore.js";
import {
  default as Gomo,
  default as Store,
} from "./pages/master/store/Index.js";
import ReportStore from "./pages/master/store/ReportStore.js";
import AddUser from "./pages/setup/user/AddUser.js";
import User from "./pages/setup/user/Index.js";
import AddVoucher from "./pages/transaction/voucher/AddVoucher.js";
import DetailVoucher from "./pages/transaction/voucher/DetailVoucher.js";
import Voucher from "./pages/transaction/voucher/Index.js";
import DetailPurchase from "./pages/transaction/purchase/DetailPurchase.js";
import DetailSale from "./pages/transaction/sale/DetailSale.js";
import DetailMenu from "./pages/setup/menu/DetailMenu.js";
import DetailPermission from "./pages/setup/permission/DetailPermission.js";
import Role from "./pages/setup/role/Index.js";
import DetailRole from "./pages/setup/role/DetailRole.js";
import DetailUser from "./pages/setup/user/DetailUser.js";
import DetailProduct from "./pages/master/product/DetailProduct";
import DetailStore from "./pages/master/store/DetailStore.js";
import DetailCategory from "./pages/master/category/DetailCategory.js";
import DetailUnit from "./pages/master/productUnit/DetailUnit.js";
import SubCategory from "./pages/master/subCategory/Index.js.js";
import AddSubCategory from "./pages/master/subCategory/AddSubCategory.js";
import DetailSubCategory from "./pages/master/subCategory/DetailSubCategory.js";
import "../node_modules/react-simple-tree-menu/dist/main.css";
import Other from "./pages/transaction/other/Index.js";
import DetailOther from "./pages/transaction/other/DetailOther.js";
import AssignPermission from "./pages/setup/assignPermission/Index.js";
import DetailCustomer from "./pages/master/customer/DetailCustomer.js";
import DetailMitra from "./pages/master/mitra/DetailMitra.js";
import AddPayment from "./pages/master/paymentMethod/AddPayment.js";
import Payment from "./pages/master/paymentMethod/Index.js";
import DetailPayment from "./pages/master/paymentMethod/DetailPayment.js";
import OtherType from "./pages/master/otherType/Index.js";
import DetailOtherType from "./pages/master/otherType/DetailOtherType.js";
import AddOtherType from "./pages/master/otherType/AddOtherType.js";
import ReportOther from "./pages/transaction/other/ReportOther.js";
const routes = [
  { path: "/", element: <Dashboard /> },
  { path: "master", element: <Gomo /> },
  { path: "purchase", element: <Purchase /> },
  { path: "purchase/add", element: <AddPurchase /> },
  { path: "sales", element: <Sale /> },
  { path: "sales/:id", element: <DetailSale /> },
  { path: "sales/add", element: <AddSale /> },
  { path: "payment/add", element: <AddPayment /> },
  { path: "payment/:id", element: <DetailPayment /> },
  { path: "payment", element: <Payment /> },

  { path: "customer", element: <Customer /> },
  { path: "customer/:id", element: <DetailCustomer /> },
  { path: "customer/add", element: <AddCustomer /> },
  { path: "store", element: <Store /> },
  { path: "store/:id", element: <DetailStore /> },
  { path: "store/add", element: <AddStore /> },
  { path: "voucher", element: <Voucher /> },
  { path: "voucher/:id", element: <DetailVoucher /> },
  { path: "voucher/report", element: <DetailVoucher /> },
  { path: "voucher/add", element: <AddVoucher /> },
  { path: "purchase", element: <Purchase /> },
  { path: "purchase/:id", element: <DetailPurchase /> },
  { path: "purchase/add", element: <AddPurchase /> },
  { path: "mitra", element: <Mitra /> },
  { path: "mitra/:id", element: <DetailMitra /> },
  { path: "mitra/add", element: <AddMitra /> },
  { path: "product", element: <Product /> },
  { path: "product/:id", element: <DetailProduct /> },
  { path: "product/add", element: <AddProduct /> },
  { path: "unit", element: <Unit /> },
  { path: "unit/:id", element: <DetailUnit /> },
  { path: "unit/add", element: <AddUnit /> },
  { path: "category", element: <Category /> },
  { path: "category/:id", element: <DetailCategory /> },
  { path: "category/add", element: <AddCategory /> },
  { path: "subcategory/:id", element: <DetailSubCategory /> },
  { path: "subcategory", element: <SubCategory /> },
  { path: "subcategory/add", element: <AddSubCategory /> },
  { path: "permission", element: <Permission /> },
  { path: "permission/:id", element: <DetailPermission /> },
  { path: "permission/add", element: <AddPermission /> },
  { path: "menu", element: <Menu /> },
  { path: "menu/:id", element: <DetailMenu /> },
  { path: "menu/add", element: <AddMenu /> },
  { path: "role", element: <Role /> },
  { path: "role/:id", element: <DetailRole /> },
  { path: "role/add", element: <AddRole /> },
  { path: "user", element: <User /> },
  { path: "user/:id", element: <DetailUser /> },
  { path: "user/add", element: <AddUser /> },
  { path: "purchase/report", element: <ReportPurchase /> },
  { path: "sales/report", element: <ReportSales /> },
  { path: "store/report", element: <ReportStore /> },
  { path: "customer/report", element: <ReportCustomer /> },
  { path: "other", element: <Other /> },
  { path: "other/report", element: <ReportOther /> },
  { path: "other/:id", element: <DetailOther /> },
  { path: "other-type", element: <OtherType /> },
  { path: "other-type/add", element: <AddOtherType /> },
  { path: "other-type/:id", element: <DetailOtherType /> },
  { path: "assign-permission", element: <AssignPermission /> },
];

const App = () => {
  return (
    <ChakraProvider>
      <HashRouter basename="/">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
};

function Layout() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    console.log(token);
  }, [token, navigate]);

  return (
    <Box
      minH="100vh"
      w={"100%"}
      bg="#f4f6f8"
      display="flex"
      flexDirection="column"
    >
      <Navbar h={"4rem"} />
      <VStack
        w="100%"
        justifyContent={"space-between"}
        p={"1rem"}
        alignItems={"flex-start"}
        flex={1}
      >
        <VStack alignItems={"flex-start"} spacing={5} flex={1} w={"100%"}>
          <BreadCumb />
          <Box rounded={10} flex={1} w="100%">
            <Outlet />
          </Box>
        </VStack>
        <Footer />
      </VStack>
    </Box>
  );
}

export default App;
