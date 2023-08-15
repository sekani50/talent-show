import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import Scrolltotop from "./components/UI/ScrollToTop";
//import { RequireAuth } from "./Utils/RequireAuth";
import {
  Login,
  Register,
  ForgotPassword,
  Landing,
  About,
  Contact,
  Events,
  EventDetail,
  Voting,
  ManageAccount,
  OnBoarding,
  FreqAskQuestion,
  LoginOnBoarding,
} from "./Pages";

const App = () => {
  return (
    <div className="w-full h-full text-sm sm:text-[15px] poppins text-[#051534]">
      <div>
        <Toaster
          toastOptions={{
            duration: 5000,
            position: "top-center",
            success: {
              style: {
                background: "#222",

                color: "#fff",
              },
            },
            error: {
              duration: 5000,
              position: "top-center",
              style: {
                background: "red",
                color: "#fff",
              },
            },
          }}
        />
      </div>
      <Router>
        <Scrolltotop />

        <Routes>
          {/*    AUTH PAGE */}

          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          {/*    LANDING PAGE  */}
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/event" element={<Events />} />
          <Route exact path="/voting/:id" element={<Voting />} />
          <Route exact path="/join" element={<OnBoarding />} />
          <Route exact path="/profile" element={<ManageAccount />} />
          <Route exact path="/event/:id" element={<EventDetail />} />
          <Route exact path="onboarding" element={<LoginOnBoarding />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/faq" element={<FreqAskQuestion />} />
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
      
          {/**Protected routes */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
