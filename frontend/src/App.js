import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import Login from "./views/Login";
import About from "./views/About";
import Admission from "./views/Admission";
import Contact from "./views/Contact";
import Pricing from "./views/Pricing";
import Vizitas from "./views/Vizitas"
import { AuthProvider } from "./contexts/authContext";
import BottomInfo from "./components/BottomInfo";
import PrivateRoute from "./routes/PrivateRoute";
import PrivateView from "./views/PrivateView";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AdminRoute from "./routes/AdminRoute";
import AdminView from "./views/AdminView";
import ScrollToTop from "./routes/ScrollTop"
import axios from "axios";
const queryClient = new QueryClient();

// axios.defaults.baseURL="https://us-central1-darzelis-ef216.cloudfunctions.net/api"

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <AuthProvider>
          <ScrollToTop />
            <Switch>
              <Route exact path="/login" component={Login} />
              <AdminRoute exact path="/admin" component={AdminView} />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/Apiemus" component={About} />
                <Route exact path="/Priemimas" component={Admission} />
                <Route exact path="/Kainos" component={Pricing} />
                <Route exact path="/Kontaktai" component={Contact}/>
                <Route exact path="/VizitoRegistravimas" component={Vizitas}/>
                <PrivateRoute exact path="/paskyra" component={PrivateView} />
                
            </Switch>
            {/* <BottomInfo /> */}
          </AuthProvider>
        </Router>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
};

export default App;
