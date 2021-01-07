import { Providers, ProviderState } from '@microsoft/mgt';
import { Login } from '@microsoft/mgt-react';
import React, { useState, useEffect } from 'react';
import './App.css';
import { PersonCardComponent } from './personCardComponent';

function useIsSignedIn(): [boolean] {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const updateState = () => {
      const provider = Providers.globalProvider;
      setIsSignedIn(provider && provider.state === ProviderState.SignedIn);
    };

    Providers.onProviderUpdated(updateState);
    updateState();

    return () => {
      Providers.removeProviderUpdatedListener(updateState);
    }
  }, []);

  return [isSignedIn];
}

function App() {
  
  const [isSignedIn] = useIsSignedIn();

  return (
    <div className="App">
      <header>
        <Login />
      </header>
      <div>
        {isSignedIn &&
          <PersonCardComponent></PersonCardComponent>}
      </div>
    </div>
  );
}

export default App;