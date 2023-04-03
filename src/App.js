import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

const App = () => {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;