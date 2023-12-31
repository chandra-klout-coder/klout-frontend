import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Login from "./components/Login";
import Page404 from "./errors/Page404";
import Page403 from "./errors/Page403";
import Register from "./components/Register";
import UnSubscribe from "./components/UnSubscribe";
import LandingHome from "./components/LandingHome";
import AdminPrivateRoute from "./AdminPrivateRoute";
import PrivacyPolicy from "./components/PrivacyPolicy";
import ResetPassword from "./components/ResetPassword";
import MasterLayout from "./layouts/admin/MasterLayout";
import ForgotPassword from "./components/ForgotPassword";
import TermsAndConditions from "./components/TermsAndConditions";

axios.defaults.baseURL =
  "http://ec2-43-205-139-120.ap-south-1.compute.amazonaws.com";
// axios.defaults.baseURL = "http://localhost:8000/";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";

axios.defaults.withCredentials = false; //true

// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingHome} />

          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>

          <Route path="/terms-and-condition">
            <TermsAndConditions />
          </Route>

          {/* <Route
            exact
            path="/terms-and-condition"
            component={TermsAndConditions}
          /> */}

          <Route exact path="/unsubscribe" component={UnSubscribe} />

          <Route path="/403" component={Page403} />

          <Route path="/login">
            {localStorage.getItem("auth_token") !== null ? (
              <Redirect to="/admin/dashboard" />
            ) : (
              <Login />
            )}
          </Route>

          <Route path="/register">
            {localStorage.getItem("auth_token") !== null ? (
              <Redirect to="/admin/dashboard" />
            ) : (
              <Register />
            )}
          </Route>

          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/reset-password" component={ResetPassword} />

          {/* <Route
            path="/admin"
            name="Admin"
            render={(props) => <MasterLayout {...props} />}
          /> */}

          <AdminPrivateRoute path="/admin" name="Admin" />

          <Route path="/404" component={Page404} />

          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
