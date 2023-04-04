import './App.css';
import ComponentA from './components/ComponentA';
import { UserProvider } from './components/userContext';

const App = () => {
  return (
    <div className="App">
      <UserProvider value='YamTee'>
        <ComponentA />
      </UserProvider>
    </div>
  );
}

export default App;