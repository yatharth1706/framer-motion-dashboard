import logo from './logo.svg';
import './App.css';
import {motion} from 'framer-motion';
import {useState} from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FollowersIcon from '@material-ui/icons/People';
import MessagesIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import InfoIcon from '@material-ui/icons/Info';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FormControl} from 'react-bootstrap';


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
            <motion.div  className = "leftNav" whileTap = {{scale : 0.97}} whileHover = {{scale : 1.02}}><DashboardIcon style={{ fontSize: 30 }} onClick = {toggleSwitch}></DashboardIcon> <span className = "leftNavText" data-isOn={isToggle}>Dashboard</span></motion.div>
            <motion.div className = "leftNav" whileTap = {{scale : 0.97}} whileHover = {{scale : 1.02}}><FollowersIcon style={{ fontSize: 30 }}></FollowersIcon> <span className = "leftNavText" data-isOn={isToggle}>Followers</span></motion.div>
            <motion.div className = "leftNav" whileTap = {{scale : 0.97}} whileHover = {{scale : 1.02}}><MessagesIcon style={{ fontSize: 30 }}></MessagesIcon> <span className = "leftNavText" data-isOn={isToggle}>Messages</span></motion.div>
            <motion.div className = "leftNav" whileTap = {{scale : 0.97}} whileHover = {{scale : 1.02}}><NotificationsIcon style={{ fontSize: 30 }}></NotificationsIcon> <span className = "leftNavText" data-isOn={isToggle}>Notifications</span></motion.div>
            <motion.div  className = "leftNav" whileTap = {{scale : 0.97}} whileHover = {{scale : 1.02}}><SettingsIcon style={{ fontSize: 30 }}></SettingsIcon> <span className = "leftNavText" data-isOn={isToggle}>Settings</span></motion.div>
            <motion.div  className = "leftNav" whileTap = {{scale : 0.97}} whileHover = {{scale : 1.02}}><InfoIcon style={{ fontSize: 30 }}></InfoIcon> <span className = "leftNavText" data-isOn={isToggle}>About</span></motion.div>
        </motion.div>
        <motion.div className="rightNav" layout style={{height: "47px", backgroundColor: "white", boxShadow : "2px 0px 10px lightgray", padding: "5px", display : "flex"}} data-isOn = {isToggle}>
          <AppsIcon style={{ fontSize: 35, marginTop : "1px", cursor : "pointer" }} onClick = {toggleSwitch}></AppsIcon>
          <FormControl type = "text" placeholder = "Enter anything to search" style={{width: "300px", marginLeft : "10px"}}/>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
