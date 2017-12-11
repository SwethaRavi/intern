import React, { Component } from 'react';
import './App1.css';
import TiHomeOutline from 'react-icons/lib/ti/home-outline';
import MdNotificationsNone from 'react-icons/lib/md/notifications-none';
import MdMailOutline from 'react-icons/lib/md/mail-outline';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import logo from './search-icon-2.png';
import ac from './aadhar.jpg';
import eco from './Economic.jpg';
import ban2 from './banner2.jpg';
import ban1 from './banner1.png';
import aapro from './aadh_profile.jpg';
import nandpro from './nandan.jpeg';
import flo from './flower.jpg';

import MdAccountCircle from 'react-icons/lib/md/account-circle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AvatarExampleSimple from './AvatarExampleSimple';
import Avatar from 'material-ui/Avatar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import verify from './twitter-verified-thumb.jpg';


const A01={
    fontSize:'18px',fontFamily: 'Calibri',fontWeight:'bold',float:'left',marginLeft:'1em'
  }
  const A={
    fontSize:'13px',color:'#42A5F5'
  }
  const A1={
      color:'black'
  }
  const acc={
    position: 'absolute',
    right:'14.5em'
  }

const bStyle = { backgroundColor: '#42A5F5',border: '1px solid white',borderRadius:'30px',
padding:'10px 20px 10px 20px',color:'white',position:'absolute',right:'12em',fontFamily: 'Calibri',
fontWeight:'bolder'
}
const b1Style = { backgroundColor: 'transparent',border: '2px solid #42A5F5',borderRadius:'30px',
padding:'6px 20px 6px 20px',color:'#42A5F5', float:'right', marginRight:'5em',marginTop:'-2em',

}
const ecoStyle={
    borderRadius:'50px',float:'left',marginLeft:'15px'
}
const follbtn={
    border:'2px solid #42A5F5',borderRadius:'20px',color:'#42A5F5',fontFamily: 'Calibri',fontSize:'14px',
    marginTop:'-1em',marginLeft:'10em',   
}
const hstyle={
    fontFamily: 'Calibri',fontWeight:'bold',fontSize:'18px'
    
}
const h1Style={fontFamily: 'Calibri',
  color:'white',position:'relative',right:'23.5em',
}
const H3={
    fontFamily: 'Calibri',fontSize:'22px',textAlign:'left',marginLeft:'12px'
}
const H3_1={
    fontFamily: 'Calibri',fontSize:'22px',textAlign:'left',marginLeft:'12px',paddingTop:'15px'
}
const H5_topic={
    fontFamily: 'Calibri',fontSize:'14px',textAlign:'left',marginLeft:'35px',marginTop:'10px'
}
const H5_date={
    fontFamily: 'Calibri',fontSize:'14px',textAlign:'right',marginRight:'5px',marginTop:'-3em',
    color:'#757575'
}
const iconbtn={
    float:'right',marginRight:'1em',marginTop:'-1em'
}


const P={
    fontFamily: 'Arial',fontSize:'15px',textAlign:'left',marginLeft:'12px',color:'#42A5F5',
   fontWeight:'bold',marginTop:'-8px'
}
const P1={
    fontFamily: 'Calibri',marginTop:'12px',textAlign:'justify',marginLeft:'15px',marginRight:'15px',
    color:'#757575'
}
const P2={
    fontFamily: 'Calibri',marginTop:'-1em',textAlign:'justify',marginLeft:'15px',marginRight:'15px',
    color:'#757575',fontSize:'12px'
}
const prof={
    marginTop:'-1em',marginRight:'7em'
}

const S1={
    fontFamily: 'Calibri',marginTop:'0.4em',
  }
const Span={
    display:'inline'
}

 




class App1 extends Component {
    render(){
        return (
          <div className="NewApp">
              <header className="App-header1">
              <ul className='ustyle'>
                 <li><a href="#"><TiHomeOutline size={20} /><span style={hstyle}>Home</span></a></li>
                 <li><a href="#"><MdNotificationsNone size={20} /><span style={hstyle}>Notifications</span></a></li>
                 <li><a href="#"><MdMailOutline  size={20} /><span style={hstyle}>Messages</span></a></li>
            
          <TiSocialTwitter className="icon" size={27} />
         <div className="abc">
         <input type="text" placeholder="aadhar"/>
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
         
        <div className="div2">
           <h1>aadhaar</h1>
        </div>

        
        <header className="App-header2">
            <ul className='u1Style'>
            <li className='li1'><h5 id='h5_1'>Top</h5></li>
            <li className='li1'><h5>Latest</h5></li>
            <li className='li1'><h5>People</h5></li>
            <li className='li1'><h5>Photos</h5></li>
            <li className='li1'><h5>Videos</h5></li>
            <li className='li1'><h5>News</h5></li>
            <li className='li1'><h5>Broadcasts</h5></li>
            </ul>
            </header>


            <div className="div3">
            <h3 style={H3}>Search filters&nbsp;&nbsp;<a href="#">
            <span className="txt" style={A}>Show</span></a>
            </h3>
            </div>

             
            <div className="div4">
            <h3 style={H3_1}>Related searches</h3>
            <a href="#"><p style={P}><span className="txt">yogendra yadav</span>
            </p> </a>
            <a href="#"><p style={P}><span className="txt">#smog</span>
            </p> </a>
            <a href="#"><p style={P}><span className="txt">chairman</span>
            </p> </a>
            <a href="#"><p style={P}><span className="txt">pervez musharraf</span>
            </p> </a>
            <a href="#"><p style={P}><span className="txt">bhavnagar</span>
            </p> </a><br/>
            </div>

            <div className="div4">
            <h3 style={H3_1}>Who to follow&nbsp;&nbsp;<a href="#">
            <span className="txt" style={A}>Refresh</span></a>&nbsp;&nbsp;
            <a href="#">
            <span className="txt" style={A}>View all</span></a>
            </h3>
            <MuiThemeProvider>
            <AvatarExampleSimple />
            </MuiThemeProvider>
            </div>

            <div className="div4_1">
            <h3 style={H3_1}>Trends for you&nbsp;&nbsp;<a href="#">
            <span className="txt" style={A}>Change</span></a>
            </h3>
           <p className="TrP"> <a href="#"><p style={P}><span className="txt">#WBBL</span>
            </p></a>
           </p>
           <p className="TrP"> <a href="#"><p style={P}><span className="txt">#HBDSoniaGandhi</span>
            </p> </a><p style={P2}>6,794 Tweets</p>
          </p>
          <p className="TrP"> <a href="#"><p style={P}><span className="txt">#IslamicState</span>
            </p> </a>
          </p>
          <p className="TrP"><a href="#"><p style={P}><span className="txt">#AntiCorruptionDay</span>
            </p> </a><p style={P2}>1,492 Tweets</p>
        </p>
        <p className="TrP"> <a href="#"><p style={P}><span className="txt">#WeTheWoman</span>
            </p> </a><p style={P2}>1,344 Tweets</p>
        </p>
            </div>
            
            <br/>
             <h3 className="Hdiv">Top news</h3>
             <a href="#">
            <span className="txt" id="Adiv" style={A}>View all</span></a>


            <div className="div5">
            <img src={ac} width="100%" height="300px"/>
            <a href="#" className="Ahead" style={A1}>
            <h3 style={H3}>Government extends date for linking Aadhaar with PAN till March 31</h3>
            </a>
            <p style={P1}>On Thursday, the Supreme Court proposed a five-judge Constitution bench to be set up
                by next week to hear pleas seeking an interim stay on the mandatory linking of Aadhaar.
            </p>
            <img src={eco} width="15px" height="15px" style={ecoStyle}/>
            <a href="#" className="Ahead" style={A1}>
            <h5 style={H5_topic}>Economic Times</h5>
            <h5 style={H5_date}>Dec 08, 2017</h5>
            </a>
            </div>

            <h3 className="Hdiv1">People</h3>
             <a href="#">
            <span className="txt" id="Adiv1" style={A}>View all</span></a>

            <div className="div6">
            <img src={ban2} className="ban2" width="100%"/>
            <MuiThemeProvider>
            <Avatar
          src={aapro}
          size={60}
          style={prof}
        />
        </MuiThemeProvider>

        <MuiThemeProvider>
        <FlatButton label="follow" style={follbtn} hoverColor='#E3F2FD'/>
        </MuiThemeProvider>

        <MuiThemeProvider>
        <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      style={iconbtn}
        >  
        </IconMenu>
        </MuiThemeProvider>
        
        <a href="#">
            <span className="txt1" style={A01}>Aadhaar<img src={verify} width="20px" height="20px" />
            </span></a><br/><br/><p style={P1}>@UIDAI</p>
        <p style={P1}>Official Twitter account of the Unique Identification Authority of India. RTs are not endorsements.</p>

      </div>

      <div className="div7">
            <img src={ban1} className="ban1" width="100%"/>
            <MuiThemeProvider>
            <Avatar
          src={nandpro}
          size={60}
          style={prof}
        />
        </MuiThemeProvider>

        <MuiThemeProvider>
        <FlatButton label="follow" style={follbtn} hoverColor='#E3F2FD'/>
        </MuiThemeProvider>

        <MuiThemeProvider>
        <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      style={iconbtn}
        >  
        </IconMenu>
        </MuiThemeProvider>
        
        <a href="#">
            <span className="txt1" style={A01}>Nandan Nilekani<img src={verify} width="20px" height="20px" />
            </span></a><br/><br/><p style={P1}>@NandanNilekani</p>
        <p style={P1}>Co-founder of @Infosys. Worked on #Aadhaar. Worked on #Aadhaar. Co-author of @RebootingIndia.
        Author of @ImaginingIndia.</p>
      </div>
     
        </div>
        
         
        );
    }
}

export default App1;