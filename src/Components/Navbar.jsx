import { AppBar,makeStyles,Toolbar,Typography,InputBase,alpha, Badge, Avatar} from "@material-ui/core";  
import { Search,Mail,  Notifications, Cancel, Message } from "@material-ui/icons";
import Notification from'./Notification';
import Messages from'./Messages';
import { useState} from "react";
const useStyles= makeStyles( (theme) => ({
  toolbar:{
    display:"flex",
    justifyContent:"space-between",
  },  
  logoLg:{
    display:"none",
    [theme.breakpoints.up("sm")]:{
      display:"block",
    },
  },
  logoSm:{
    display:"block",
    [theme.breakpoints.up("sm")]:{
      display:"none",
    },
  },
  search:{
    display:"flex",
    alignItems:"center",
    backgroundColor:alpha(theme.palette.common.white, 0.15),
    '&:hover':{
      backgroundColor:alpha(theme.palette.common.white, 0.25),
   },
   borderRadius:theme.shape.borderRadius,
   width:"40%",
   [theme.breakpoints.down("sm")]:{
    display:(props)=>props.open? "flex" : "none",
  },
  },
  
  input:{
    color:"white",
    marginLeft:theme.spacing(2),
  }, 
  icons:{  
    alignItems:"center", 
    display:(props)=>props.open? "none" : "flex",
     
  },
  badge:{
    marginRight:theme.spacing(1),
  },
  searchButton:{
    marginRight:theme.spacing(1),
    [theme.breakpoints.up("sm")]:{
      display:  "none",
    },  
  },
  cancel:{
    [theme.breakpoints.up("sm")]:{
      display:  "none",
  },
},

}));

const Navbar = () => {
  
const [open, setOpen] = useState(false)
    const classes = useStyles({ open });
    return (
    <>
        <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
        <Typography variant="h4" className={classes.logoLg}>
  Port Media
   </Typography>
   <Typography variant="h4" className={classes.logoSm}>
  Port 
   </Typography>
   <div className={classes.search}>
     <Search/>
     <InputBase placeholder="search ......" className={classes.input}/>
     <Cancel className={classes.cancel} onClick={()=> setOpen(false)} />
   </div>
   <div className={classes.icons}>
     <Search className={classes.searchButton} onClick={() => setOpen(true)}/>
   <Badge badgeContent={4} color="secondary" className={classes.badge}>
        <Messages/>
         
      </Badge>
      <Badge badgeContent={5} color="secondary"className={classes.badge}>
        <Notification />
      </Badge>
      <Avatar alt="no profile" src="assets/AAA.jpg"/>
   </div>
        </Toolbar>
        </AppBar>
    </>);   
};

export default Navbar;