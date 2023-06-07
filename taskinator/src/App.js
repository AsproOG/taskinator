import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import DashboardPage from './DashboardPage';
import AboutPage from './AboutPage';
import CompanyListPage from './CompanyListPage';
import LoginPage from './LoginPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/company-list" component={CompanyListPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
