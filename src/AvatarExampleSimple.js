import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import MdClose from 'react-icons/lib/md/close';
import cnn from './CNN.png';
import ng from './NG_Yell.jpg';
import mi from './redmi.jpg';
import verify from './twitter-verified-thumb.jpg';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const style = {margin:1};


const A1={
    fontSize:'18px',fontFamily: 'Calibri',fontWeight:'bold',float:'left'
  }
  const A2={
    fontSize:'18px',fontFamily: 'Calibri',fontWeight:'bold',marginLeft:'-2.5em'
  }
  const S1={
    fontFamily: 'Calibri',float:'left',marginTop:'0.4em'
  }
  const Close={
    float:'right'
  }
  const bStyle = { backgroundColor: 'transparent',border: '2px solid #42A5F5',borderRadius:'30px',
  padding:'8px 20px 8px 20px',color:'#42A5F5', float:'left', marginLeft:'-1em',marginTop:'12px'}

  const follbtn={
    border:'2px solid #42A5F5',borderRadius:'20px',color:'#42A5F5',fontFamily: 'Calibri',fontSize:'14px',
    float:'left',marginTop:'1em' 
}

const follbtn1={
  border:'2px solid #42A5F5',borderRadius:'20px',color:'#42A5F5',fontFamily: 'Calibri',fontSize:'14px',
  float:'left',marginRight:'20em',marginTop:'1em' 
}
/**
 * Examples of `Avatar` using an image, [Font Icon](/#/components/font-icon), [SVG Icon](/#/components/svg-icon)
 * and "Letter" (string), with and without custom colors at the default size (`40dp`) and an alternate size (`30dp`).
 */
const AvatarExampleSimple = () => (
  <List>
  
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
        src={cnn}
          size={50}
          style={style}
        />
      }
    >
           <MdClose style={Close}/>
           <a href="#">
            <span className="txt1" style={A1}>CNN<img src={verify} width="20px" height="20px" />
            </span></a><span style={S1}>@CNN</span><br/>
            
            <MuiThemeProvider>
        <FlatButton label="follow" style={follbtn} hoverColor='#E3F2FD'/>
        </MuiThemeProvider>

            
    </ListItem><br/><br/>
    <hr width="90%" color="#E0E0E0" size="1"/>


    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
        src={ng}
          size={50}
          style={style}
        />
      }
    >
     <MdClose style={Close}/>
     <a href="#">
            <span className="txt1" style={A2}>Nat Geo Travel<img src={verify} width="20px" height="20px" />
            </span></a><br/><span style={S1}>@NatGeo</span><br/>

            <MuiThemeProvider>
        <FlatButton label="follow" style={follbtn1} hoverColor='#E3F2FD'/>
        </MuiThemeProvider>
           
    </ListItem><br/><br/>
    <hr width="90%" color="#E0E0E0" size="1"/>

    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
        src={mi}
          size={50}
          style={style}
        />
      }
    >
     <MdClose style={Close}/>
     <a href="#">
            <span className="txt1" style={A2}>Redmi India<img src={verify} width="20px" height="20px" />
            </span></a><br/><span style={S1}>@RedmiIndia</span><br/>

            <MuiThemeProvider>
        <FlatButton label="follow" style={follbtn1} hoverColor='#E3F2FD'/>
        </MuiThemeProvider>
           
    </ListItem><br/><br/>
    <hr width="90%" color="#E0E0E0" size="1"/>
    
  </List>
);

export default AvatarExampleSimple;