import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Customerlist from "./components/Customerlist";
import Traininglist from "./components/Traininglist";
import Reservations from "./components/Reservations"
import Index from "./components/Index";
import Calendar from "./components/Calendar";
import GridListi from "./components/Gridlist"
import Coachlist from "./components/Coachlist"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Customers" component={Customerlist}>
            <Customerlist />
          </Route>
          <Route path="/Trainings" component={Traininglist}>
            <Traininglist />
          </Route>
          <Route path="/Reservations" component={Reservations}>
            <Reservations />
          </Route>
          <Route path="/Index" component={Index}>
            <Index />
          </Route>
          <Route path="/Calendar" component={Calendar}>
            <Calendar />
          </Route>
          <Route path="/Coachgrid" component={GridListi}>
            <GridListi />
          </Route>
          <Route path="/Coachlist" component={Coachlist}>
            <Coachlist />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;