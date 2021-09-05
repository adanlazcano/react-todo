import { ContextProvider } from './context/Context';
import Search from './components/Search';
import List from './components/List';
import './css/App.css';


function App() {
  return (
    <div className="App">
      <header>
        <span>[ ]</span>
        <h1>To Do LIST</h1>
      </header>
      <main>
        <ContextProvider>
          <Search/>
          <List/>
        </ContextProvider>
      </main>
    </div>
  );
}

export default App;
