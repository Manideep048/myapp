import './App.css';
import Navbar from './containers/Navbar';
import TextForm from './containers/TextForm';


function App() {
  return (
    <>
      <Navbar title = "TextUtils"/>
      <div className="container my-3">
        <TextForm  heading = "Enter the Text to Analyze below"/>
      </div>
      
    </>
  );
}

export default App;
