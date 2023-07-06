import './App.css';
import SearchBar from './components/SearchBar';
import Logo from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Logo/> 
      <SearchBar/>
      <Footer />  
    </div>
  );
}

export default App;
