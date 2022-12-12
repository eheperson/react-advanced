import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/Todolist';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';


const  App = () => {

  return (
    <div className="App">
      <div className='ui raised very padded text container segment'>
        <AuthContextProvider>
          <ThemeContextProvider>
            <Navbar />
            <TodoList />
          </ThemeContextProvider>
        </AuthContextProvider>
      </div>
    </div>
  )
}

export default App;
