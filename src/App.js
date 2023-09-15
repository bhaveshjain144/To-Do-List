import './App.css';
import Header from './components/Header';
import TodoForm from './TodoForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <TodoForm />
      </header>
    </div>
  );
}

export default App;
