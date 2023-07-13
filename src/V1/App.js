import './App.css';
import SearchBar from './components/SearchBar';
import Logo from './components/Logo';
import Footer from './components/Footer';
import { Person } from './components/ClassComponent/Person';
import { PersonList } from './components/PersonList';
import { Header } from './components/Header';
import { Icon } from './components/icon';

function App() {
  const warning =false;
  {/*let bgClass='';
  if (warning) {
    bgClass='warning';
  }else{
    bgClass='dark';
  }*/}
  return (
    <div className= {`App ${warning ?'warning':'dark'}`}>
     {/* <Logo/> 
      <SearchBar/>
      <PersonList/>
      <Person/>
      <Footer/>*/}
      <Header/>
      <Icon/>


    </div>
  );
}

export default App;
