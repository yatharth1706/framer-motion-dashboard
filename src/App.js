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
import ProfilePic from './images/profile.jfif';
import {LineChart,XAxis,YAxis,Tooltip,CartesianGrid,Line } from 'recharts';


function App() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleSwitch = () => {
    console.log("asdf");
    setIsToggle(!isToggle);
  }
  const data = [
    { Followers: 100, Month: 'Jan' },
  { Followers: 200, Month: 'Feb' },
  { Followers: 300, Month: 'March' },
  { Followers: 400, Month: 'April' },
  { Followers: 500, Month: 'May' },
  { Followers: 600, Month: 'June' },
  { Followers: 700, Month: 'July' },

  ];

  return (
    <div className="App">
      <div className = "main" style={{width: "100%", height: "100%", display: "flex"}}>
        <motion.div layout className = "sidebar" data-isOn = {isToggle} >
            <motion.div  className = "leftNav" whileTap = {{scale : 0.97}} whileHover = {{scale : 1.02}} style={{margin: "10px 0px"}}><img src={ProfilePic} alt="profile pic" width = "32" height = "32" style={{borderRadius : "50%"}}/>&nbsp;  <span className = "leftNavText" data-isOn={isToggle}>Barry Allen</span></motion.div>
            <motion.div  className = "leftNav" whileTap = {{scale : 0.97}} whileHover = {{scale : 1.02}}><DashboardIcon style={{ fontSize: 30 }}></DashboardIcon> <span className = "leftNavText" data-isOn={isToggle}>Dashboard</span></motion.div>
            <motion.div className = "leftNav" whileTap = {{scale : 0.97}} whileHover = {{scale : 1.02}}><FollowersIcon style={{ fontSize: 30 }}></FollowersIcon> <span className = "leftNavText" data-isOn={isToggle}>Followers</span></motion.div>
            <motion.div className = "leftNav" whileTap = {{scale : 0.97}} whileHover = {{scale : 1.02}}><MessagesIcon style={{ fontSize: 30 }}></MessagesIcon> <span className = "leftNavText" data-isOn={isToggle}>Messages</span></motion.div>
            <motion.div className = "leftNav" whileTap = {{scale : 0.97}} whileHover = {{scale : 1.02}}><NotificationsIcon style={{ fontSize: 30 }}></NotificationsIcon> <span className = "leftNavText" data-isOn={isToggle}>Notifications</span></motion.div>
            <motion.div  className = "leftNav" whileTap = {{scale : 0.97}} whileHover = {{scale : 1.02}}><SettingsIcon style={{ fontSize: 30 }}></SettingsIcon> <span className = "leftNavText" data-isOn={isToggle}>Settings</span></motion.div>
            <motion.div  className = "leftNav" whileTap = {{scale : 0.97}} whileHover = {{scale : 1.02}}><InfoIcon style={{ fontSize: 30 }}></InfoIcon> <span className = "leftNavText" data-isOn={isToggle}>About</span></motion.div>
        </motion.div>
        <motion.div layout style={{display : "flex", flexDirection : "column"}} className = "rightBack" data-isOn = {isToggle} >
          <motion.div className="rightNav" layout style={{height: "47px", backgroundColor: "white", boxShadow : "2px 0px 10px lightgray", padding: "5px", display : "flex"}} data-isOn = {isToggle}>
            <motion.div whileTap = {{scale : 1.1}} whileHover = {{scale: 1.2}}><AppsIcon style={{ fontSize: 35, marginTop : "1px", cursor : "pointer" }} onClick = {toggleSwitch}></AppsIcon></motion.div>
            <FormControl type = "text" placeholder = "Enter anything to search" style={{width: "300px", marginLeft : "10px"}}/>
          </motion.div>
          <div style={{width: "100%", display : "flex", marginTop : "30px",marginBottom:"40px" ,marginLeft : "40px"}}>
              <motion.div style={{height: "100px", width: "200px", background: "linear-gradient(to right, blue, black)"}} className = "mr-5" whileHover = {{scale: 1.2}}></motion.div>
              <motion.div style={{height: "100px", width: "200px", background: "linear-gradient(to right,blue, black)"}} whileHover = {{scale: 1.2}} className = "mr-5"></motion.div>
              <motion.div style={{height: "100px", width: "200px", background: "linear-gradient(to right,blue, black)"}} whileHover = {{scale: 1.2}} className = "mr-5"></motion.div>
              <motion.div style={{height: "100px", width: "200px",background: "linear-gradient(to right,blue, black)"}} className = "mr-5" whileHover = {{scale: 1.2}} ></motion.div>
              <motion.div style={{height: "100px", width: "200px", background: "linear-gradient(to right,blue, black)"}} whileHover = {{scale: 1.2}} ></motion.div>
            </div>
            <div style={{display: "flex"}}>
              <motion.div layout className = "mt-5 ml-5" whileHover = {{scale: 1.2}} style={{width: "400px", marginRight : "100px"}}>
              <LineChart
                width={400} height={400} data={data}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <XAxis dataKey="Followers" />
                <YAxis type="category" domain={['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July']} />
                <Tooltip />
                <Line type="stepAfter" dataKey="Month" stroke="#ff7300" />
              </LineChart>
            </motion.div>

            <motion.div layout className = "mt-5 ml-5" whileHover = {{scale: 1.2}} style={{width: "400px"}}>
              
              <LineChart
                width={400} height={400} data={data}
                margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <XAxis dataKey="Followers" />
                <YAxis type="category" domain={['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July']} />
                <Tooltip />
                <Line type="stepAfter" dataKey="Month" stroke="#ff7300" />
              </LineChart>
            </motion.div>
            </div>

        </motion.div>

        
        
    </div>
    </div>
  );
}

export default App;
