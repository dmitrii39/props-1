// import logo from './logo.svg';
import './App.css';
import Stars from './Stars'  



function App() {

    const count = [1,2,3,4,5];

  
  return (
    <div className="App-header">
      
        <Stars count={count} />
        
    </div>
  );
}

export default App;
