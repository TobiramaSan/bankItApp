import { Route, Routes } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Landing from "./pages/landing/landing";
import SignUp from "./pages/signup/signup";
import Login from "./pages/login/login";
import ForgotPassword from "./pages/forgot-password/forgotPassword";
import Dashboard from "./pages/dashboard/dashboard";
import Transactions from "./pages/transactions/transactions";
import Cards from "./pages/cards/cards";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./pages/admin/admin-login/adminLogin";
import AdminReset from "./pages/admin/admin-reset/adminReset";
import AdminDashboard from "./pages/admin/admin-dashboard/adminDashboard";
import AdminCustomerManagement from "./pages/admin/admin-customer-management/adminCustomerManagement";
// import AdminCustomerFilter from "./components/admin-customer-filter/adminCustomerFilter";
import AdminCustomerExport from "./components/admin-customer-export/adminCustomerExport";
import AdminTransactionFeed from "./pages/admin/admin-transaction-feed/adminTransactionFeed";

function App() {
  const variants = {
    hidden: { opacity: 0, x: 200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
  };
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={Route}
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
        className=""
      >
        <div className="App">
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="admin/reset-password" element={<AdminReset />} />
            <Route
              path="admin/transaction-feed"
              element={<AdminTransactionFeed />}
            />
            <Route
              path="/admin/export-filter"
              element={<AdminCustomerExport />}
            />
            <Route
              path="admin/customer-management"
              element={<AdminCustomerManagement />}
            />
          </Routes>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
