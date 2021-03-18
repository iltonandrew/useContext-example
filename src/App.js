import './App.css';
import Buttons from './Buttons';
import Rest from './Rest';
import { ThemeProvider, useMenu } from './hook';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <Rest />
          <Buttons />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
