import "./App.css";
import PlanLayout from "./pages/Layouts/PlanLayout";
import Welcome from "./pages/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotiffication from "./pages/AllowNotiffication";
import AppLayout from "./pages/Layouts/AppLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Activity from "./pages/Activity";

function App() {
  return (
    <Router
      exact
      path={[
        "/",
        "/invite",
        "/get_username",
        "/code_confirm",
        "/allow_notification",
      ]}
    >
      <PlanLayout>
        <Routes>
          <Route exact path="/" element={<Welcome />}></Route>
          <Route exact path="/invite" element={<PhoneConfirmation />}></Route>
          <Route exact path="/code_confirm" element={<CodeConfirm />}></Route>
          <Route
            exact
            path="/allow_notification"
            element={<AllowNotiffication />}
          ></Route>
        </Routes>
      </PlanLayout>
      <AppLayout exact path={["/home"]}>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/activity" element={<Activity />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
