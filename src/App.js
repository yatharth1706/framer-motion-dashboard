import logo from './logo.svg';
import './App.css';
import {motion} from 'framer-motion';
import {useState} from 'react';
import AppsIcon from '@material-ui/icons/Apps';

function App() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleSwitch = () => {
    console.log("asdf");
    setIsToggle(!isToggle);
  }

  return (
    <div className="App">
      <div className = "main" style={{width: "100%", height: "100%", display: "flex"}}>
        <motion.div layout className = "sidebar" data-isOn = {isToggle} >
          
        </motion.div>
        <div style={{height: "47px", width:"auto", backgroundColor: "white", boxShadow : "2px 0px 10px lightgray", padding: "5px"}}>
          <AppsIcon style={{ fontSize: 35, marginTop : "5px", cursor : "pointer" }} onClick = {toggleSwitch}></AppsIcon>
        </div>
      </div>
    </div>
  );
}

export default App;
