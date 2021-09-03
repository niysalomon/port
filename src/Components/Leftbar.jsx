import {Container, makeStyles,Typography} from "@material-ui/core"; 
import { Bookmark, ExitToApp, Home, List, Person, PhotoCamera, PlayCircleOutline, Settings, Storefront, TabletMac } from "@material-ui/icons";


const useStyles= makeStyles( (theme) => ({
  container:{
    height:"100vh",
    color:"white",
    position:"sticky",
    top:0,
    paddingTop:theme.spacing(10),
    backgroundColor:theme.palette.primary.main,
    [theme.breakpoints.up("sm")]:{
      backgroundColor:"white",
      color:"#555",
      border:"1px solid #ece7e7"
    },
    icon:{
      marginRight:theme.spacing(1), 
      [theme.breakpoints.up("sm")]:{
        fontSize:"18px",
      }
    },

  },
  item:{
    display:"flex",
    alignItems:"center",
    marginBottom:theme.spacing(4),
    [theme.breakpoints.up("sm")]:{      
    marginBottom:theme.spacing(3),
    cursor:"pointer",
    },
  },
  text:{
    fontWeight:400,
    [theme.breakpoints.down("sm")]:{
      display:"none",
    },
  },

}));

const Leftbar = () => {
    const classes = useStyles();
    return (
    <>
        <Container className={classes.container}>
          <div className={classes.item}>
            <Home className={classes.icon}/>
            <Typography className={classes.text}>Homepage</Typography>
          </div>
          <div className={classes.item}>
            <Person className={classes.icon}/>
            <Typography className={classes.text}>Friends</Typography>
          </div>
           <div className={classes.item}>
            <List className={classes.icon}/>
            <Typography className={classes.text}>Lists</Typography>
          </div>
          <div className={classes.item}>
            <PhotoCamera className={classes.icon}/>
            <Typography className={classes.text}>Camera</Typography>
          </div>
          <div className={classes.item}>
            <PlayCircleOutline className={classes.icon}/>
            <Typography className={classes.text}>Videos</Typography>
          </div>
          <div className={classes.item}>
            <TabletMac className={classes.icon}/>
            <Typography className={classes.text}>Homepage</Typography>
          </div>
          <div className={classes.item}>
            <Bookmark className={classes.icon}/>
            <Typography className={classes.text}>Apps</Typography>
          </div>
          <div className={classes.item}>
            <Storefront className={classes.icon}/>
            <Typography className={classes.text}>Collections</Typography>
          </div>
          <div className={classes.item}>
            <Settings className={classes.icon}/>
            <Typography className={classes.text}>Settings</Typography>
          </div>
          <div className={classes.item}>
            <ExitToApp className={classes.icon}/>
            <Typography className={classes.text}>Logout</Typography>
          </div>
        </Container>
    </>);
    
};

export default Leftbar;