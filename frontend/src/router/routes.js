import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Feed from '../screens/Feed';
const MainRouter = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/f" exact component={Feed} />
      </Switch>
    </Router>
  );
};
export default MainRouter;
