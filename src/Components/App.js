import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavPage from '../Components/NavPage/navPage';
import HomePage from '../Components/HomePage/homePage';
import AboutPage from '../Components/AboutPage/aboutPage';
import PetsPage from '../Components/PetsPage/petsPage';
import PetPage from '../Components/PetPage/petPage';

const App = () => {
  return (
    <>
      <NavPage />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/pets/:id" component={PetPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/pets" component={PetsPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
