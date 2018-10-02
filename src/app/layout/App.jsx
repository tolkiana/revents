import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import EventDetailPage from '../../features/event/EventDetail/EventDetailPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetail from '../../features/user/UserDetail/UserDetailPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/EventForm/EventForm';
import HomePage from '../../features/home/HomePage'
import NavBar from "../../features/nav/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <Route exact path='/' component={HomePage}/>
          <Route path='/events' component={EventDashboard}/>
          <Route path='/events/:id' component={EventDetailPage}/>
          <Route path='/people' component={PeopleDashboard}/>
          <Route path='/profile/:id' component={UserDetail}/>
          <Route path='/settings' component={SettingsDashboard}/>
          <Route path='/createEvent' component={EventForm}/>
        </Container>
      </div>
    );
  }
}

export default App;
