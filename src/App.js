import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate';
import { JiraTemplate } from './templates/HomeTemplate/JiraTemplate'
import Home from './pages/Home/Home';
import LoadingComponent from './components/LoadingComponent/LoadingComponent.js';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import IndexJira from './pages/Jira/IndexJira';
import CreateProject from './pages/Jira/CreateProject/CreateProject';
import ProjectManagement from './pages/Jira/ProjectManagement/ProjectManagement';
import DrawerJira from './HOC/DrawerJira';
function App() {

  const history = useHistory()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'ADD_HISTORY', history: history })
  }, [])
  return (
    <div>
      <LoadingComponent/>
      <DrawerJira/>
      <Switch>
        <JiraTemplate exact path='/' Component={ProjectManagement}></JiraTemplate>
        <UserLoginTemplate exact path='/login' Component={Login} />
        <JiraTemplate exact path='/createproject' Component={CreateProject} />
        <JiraTemplate exact path='/projectmanagement' Component={ProjectManagement} />
        <JiraTemplate exact path='/projectdetail/:projectId' Component={IndexJira} />
        <JiraTemplate exact path='/jira' Component={IndexJira} />
      </Switch>
    </div>
  );
}

export default App;

