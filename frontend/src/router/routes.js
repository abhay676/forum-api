import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Feed from '../screens/Feed/Feed';
import Thread from '../screens/Thread/Thread';
import AskQuestion from '../screens/AskQuestion/AskQuestion';
const MainRouter = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/f" exact component={Feed} />
        <Route path="/t" exact component={Thread} />
        <Route path="/qc" exact component={AskQuestion} />
      </Switch>
    </Router>
  );
};
export default MainRouter;
