import React, { Component } from 'react';

import './App1.css';
import './App.css';
import TiHomeOutline from 'react-icons/lib/ti/home-outline';
import MdNotificationsNone from 'react-icons/lib/md/notifications-none';
import MdMailOutline from 'react-icons/lib/md/mail-outline';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AvatarExampleSimple1 from './AvatarExampleSimple1';
import MdAccountCircle from 'react-icons/lib/md/account-circle';
import FaCommentO from 'react-icons/lib/fa/comment-o';
import FaRetweet from 'react-icons/lib/fa/retweet';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';

import img from './image_icon.png';
import Avatar from 'material-ui/Avatar';
import logo from './search-icon-2.png';
import flo from './flower.jpg';
import MS from './MS Dhoni.jpg';
import MSD from './MSDonPitch.jpg';
import ng from './NG_Yell.jpg';
import gal from './galaxy.jpg';

const A={
  fontSize:'13px',color:'#42A5F5'
}
const A1={
  fontSize:'15px',fontFamily: 'Calibri',float:'left',marginTop:'2.2em'
}
const acc={
  position: 'absolute',
  right:'14.5em'
}
const bStyle = { backgroundColor: '#42A5F5',border: '1px solid white',borderRadius:'30px',
padding:'10px 20px 10px 20px',color:'white',position:'absolute',right:'12em',fontFamily: 'Calibri',
fontWeight:'bolder'
}
const firstTweet={
  fontFamily: 'Calibri',color:'#757575'
}
const happenprof={
  float:'left',marginLeft:'2em',marginTop:'0.7em'
}
const hstyle={
  fontFamily: 'Calibri',fontWeight:'bold',fontSize:'18px'
}
const hstyle1={
  fontFamily: 'Calibri',fontWeight:'bold',color:'#42A5F5',fontSize:'18px'
}
const H3={
  fontFamily: 'Calibri',fontSize:'22px',textAlign:'left',marginLeft:'12px'
}
const H3_1={
  fontFamily: 'Calibri',fontSize:'22px',textAlign:'left',marginLeft:'12px',paddingTop:'15px'
}
const H3_2={
  fontFamily: 'Calibri',fontSize:'22px',textAlign:'left',marginLeft:'12px',paddingTop:'-10px'
}
const MSprof={
  float:'left',marginLeft:'1em',marginTop:'0.7em'
}
const num={
  float:'left'
}

const P={
  fontFamily: 'Arial',fontSize:'15px',textAlign:'left',marginLeft:'12px',color:'#42A5F5',
 fontWeight:'bold',marginTop:'-8px'
}
const P2={
  fontFamily: 'Calibri',marginTop:'-1em',textAlign:'justify',marginLeft:'15px',marginRight:'15px',
  color:'#757575',fontSize:'12px'
}
const P3={
  fontFamily: 'Calibri',top:'5em',textAlign:'left',color:'#757575',fontSize:'16px'
}
const pstyle={
  fontFamily:'Calibri',color:'#757575',marginTop:'-1em'
}
const prof={
  float:'left',marginLeft:'0.4em',marginTop:'-1em'
}
const prostyle={
  fontFamily:'Calibri'
}

const T1style={
  fontFamily: 'Calibri',float:'left',marginLeft:'20px',marginTop:'2em'
}

const Twicon1={
  float:'left',marginLeft:'2em'
}




class App extends Component {
  render() {
    return (
      <div className="App1">
      <header className="App-header">
      <ul className='ustyle'>
         <li><a href="#"><TiHomeOutline size={20} color={'#42A5F5'} /><span style={hstyle1}>Home</span></a></li>
         <li><a href="#"><MdNotificationsNone size={20} /><span style={hstyle}>Notifications</span></a></li>
         <li><a href="#"><MdMailOutline  size={20} /><span style={hstyle}>Messages</span></a></li>
    
  <TiSocialTwitter className="icon" size={27} />
 <div className="abc">
 <input type="text" placeholder="Search Twitter"/>
 <img src={logo} width="30px" />
 <MuiThemeProvider>
    <Avatar
  src={flo}
  size={35}
  style={acc}
/>
</MuiThemeProvider>
 <button className="button" style={bStyle}><a href="#">Tweet</a></button>
 </div>
 </ul>
</header>

  <div className="Div1">
    <div className="bck" width="100%"></div>
    <MuiThemeProvider>
            <Avatar
          src={flo}
          size={70}
          style={prof}
        />
        </MuiThemeProvider>
    <div className="myprof" width="100%">
       <a href="#" className="proA"><h3 style={prostyle}>Swetha Ravichandran</h3><p style={pstyle}>@SwethaRav</p></a>
       <div className="prostat">
         <a href="#">
         <span className="protweet">Tweets &emsp;&emsp;&emsp;&emsp;Following</span>
         </a><br/>
         <span className="protweetno">20 &emsp;&emsp;&emsp;&emsp;&emsp; 10</span>
       </div>
    </div>
    
  </div>

  <div className="Div2">
    <div className="happendiv">
    <MuiThemeProvider>
            <Avatar
          src={flo}
          size={30}
          style={happenprof}
        />
        </MuiThemeProvider>
        <input type="text" className="happenInput" placeholder="What's happening?" />
        <img src={img} width="20px" height="20px" className="happenimg"/>
    </div>

    <div className="tw1">
    <MuiThemeProvider>
            <Avatar
          src={MS}
          size={50}
          style={MSprof}
        />
    </MuiThemeProvider>
      <h4 style={T1style}><a href="#" className="txt1">MS Dhoni MS Dhoni </a>
      <span style={firstTweet}> @msdfanofficial&emsp;</span></h4>
      <a href="#">
      <span className="txt1" style={A1}>32m</span></a>
      </div>

         <p className="pp"><a href="#" className="txt2">#MSD</a>: India's crisis man.
          An invaluable 50* scoring more than half of India's runs. Half-century # 67.  
          <a href="#" className="txt2">#INDvSL</a></p>
          <img src={MSD} className="MSDTweet" width="500px" height="300px"/>

          <p className="pp1"><a href="#" className="txt1">Mahendra Singh Dhoni</a></p>
          <div className="Twicon">
          <FaCommentO style={Twicon1}/><span style={num}>&ensp;7</span>
          <FaRetweet style={Twicon1}/><span style={num}>&ensp;7</span>
          <FaHeartO style={Twicon1}/><span style={num}>&ensp;68</span>
          <FaEnvelopeO style={Twicon1}/>
          </div>
          
           <br/>
           <hr color="#E0E0E0" size="1"/>
          <div className="tw1">
    <MuiThemeProvider>
            <Avatar
          src={ng}
          size={50}
          style={MSprof}
        />
    </MuiThemeProvider>
      <h4 style={T1style}><a href="#" className="txt1">National Geographic</a>
      <span style={firstTweet}> @NatGeo&emsp;</span></h4>
      <a href="#">
      <span className="txt1" style={A1}>5h</span></a>
      </div>

      <p className="pp">By zooming into the incredible shot of the Andromeda galaxy,
       this filmmaker creates an unforgettable interactive experience</p>
          <img src={gal} className="MSDTweet" width="500px" height="300px"/>

          <p className="hp1">A Hundred Million Stars in 3 Minutes</p>
          <div className="Twicon">
          <FaCommentO style={Twicon1}/><span style={num}>&ensp;30</span>
          <FaRetweet style={Twicon1}/><span style={num}>&ensp;778</span>
          <FaHeartO style={Twicon1}/><span style={num}>&ensp;2.0K</span>
          <FaEnvelopeO style={Twicon1}/>
          </div>
          <br/>
          <hr color="#E0E0E0" size="1"/>
            
  </div>

  <div className="Div3">
  <h3 style={H3_2}>Who to follow&nbsp;&nbsp;<a href="#">
            <span className="txt" style={A}>Refresh</span></a>&nbsp;&nbsp;
            <a href="#">
            <span className="txt" style={A}>View all</span></a>
            </h3>
  <MuiThemeProvider>
            <AvatarExampleSimple1 />
            </MuiThemeProvider>
  </div>

  
  <div className="Div4">
  <h3 style={H3_1}>Trends for you&nbsp;&nbsp;<a href="#">
            <span className="txt" style={A}>Change</span></a>
            </h3>
           <p className="TrP"> <a href="#"><p style={P}><span className="txt">#INDvsSL</span>
            </p></a><p style={P2}>9,965 Tweets</p>
           </p>
           <p className="TrP"> <a href="#"><p style={P}><span className="txt">MS Dhoni</span>
            </p> </a><p style={P2}>12.6K Tweets</p>
          </p>
          <p className="TrP"> <a href="#"><p style={P}><span className="txt">#HumanRightsDay</span>
            </p> </a><p style={P2}>32.3K Tweets</p>
          </p>
          <p className="TrP"><a href="#"><p style={P}><span className="txt">#ThaanaaSerndhaKoottam</span>
            </p> </a><p style={P2}>2,410 Tweets</p>
        </p>
        <p className="TrP"> <a href="#"><p style={P}><span className="txt">#GujaratWithNamo</span>
            </p> </a><p style={P2}>5,838 Tweets</p>
        </p>
        <p className="TrP"> <a href="#"><p style={P}><span className="txt">Dinesh Karthik</span>
            </p> </a><p style={P2}>1,202 Tweets</p>
        </p>
        <p className="TrP"> <a href="#"><p style={P}><span className="txt">#Zaira Wasim</span>
            </p> </a><p style={P2}>16.1K Tweets</p>
        </p>
  </div>

 

  </div>
    );
  }
}

export default App;
