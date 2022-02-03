import { Amplify } from "aws-amplify";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import "./App.css";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const App = () => {
  return (
    <div className="App">
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello, {user.attributes.email}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
};

export default withAuthenticator(App);
