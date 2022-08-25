import { AnimatePresence } from "framer-motion";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/List";

function Routes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path={"/"} component={Home}/>
        <Route path={"/list"} component={List}/>
      </Switch>
    </AnimatePresence>
  );
}

export default Routes;
