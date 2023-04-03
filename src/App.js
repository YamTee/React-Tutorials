import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName="William" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="YamTee" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Naveen" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
