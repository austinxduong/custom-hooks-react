import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CharacterDetails from '../details/CharacterDetails';
import AvatarList from '../characters/CharacterList';

// export default function App() {
//   return <h1>Hello World</h1>;
// }

export default function App() {
  return (
    <Switch>
      <Route exact path="/"
        component={AvatarList} />

      <Route exact path="/:_id"
        component={CharacterDetails} />
    </Switch>
  );
}

