import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import CharacterDetails from '../details/CharacterDetails';
import CharacterList from '../characters/CharacterList';


export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={CharacterList} />
      {/* <Route exact path="/:_id" component={CharacterDetails} /> */}
    </Switch>
  );
}
