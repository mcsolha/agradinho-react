import React, { createContext } from 'react';

const FirebaseContext = createContext({});

FirebaseContext.displayName = 'FirebaseContext';

export const FirebaseProvider = FirebaseContext.Provider;

export const FirebaseConsumer = FirebaseContext.Consumer;

export function withFirebaseHOC(Component) {
  return (props) => (
    <FirebaseConsumer>
      {
        (state) => (
          <Component {...props} firebase={state} />
        )
      }
    </FirebaseConsumer>
  );
}
