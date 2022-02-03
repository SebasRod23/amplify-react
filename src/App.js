import { Amplify } from 'aws-amplify';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import './App.css';
import awsExports from './aws-exports';
import AppBar from './ui-components/AppBar';

Amplify.configure(awsExports);

const App = () => {
  return (
    <div className='App'>
      <Authenticator>
        {({ signOut, user }) => (
          <>
            <AppBar />
            <h1>Hello, {user.attributes.email}</h1>
            <button onClick={signOut}>Sign out</button>
          </>
        )}
      </Authenticator>
    </div>
  );
};

export default withAuthenticator(App);
