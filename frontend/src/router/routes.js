import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Feed from '../screens/Feed';
import Thread from '../screens/Thread/Thread';
const MainRouter = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/f" exact component={Feed} />
        <Route path="/t" exact component={Thread} />
      </Switch>
    </Router>
  );
};
export default MainRouter;
