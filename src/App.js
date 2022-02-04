import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import awsExports from './aws-exports';
import AppBar from './components/AppBar';

import Profile from './views/ProfilePage.jsx';
import Dashboard from './views/Dashboard';

Amplify.configure(awsExports);

const App = () => {
  return (
    <div className='App'>
      <Authenticator>
        {({ signOut, user }) => (
          <>
            <AppBar />
            <Routes>
              <Route exact path='/' element={<Dashboard user={user} />} />
              <Route exact path='/profile' element={<Profile user={user} />} />
            </Routes>
          </>
        )}
      </Authenticator>
    </div>
  );
};

export default withAuthenticator(App);
