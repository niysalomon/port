import { makeStyles,Grid} from "@material-ui/core";
import Leftbar from "./Components/Leftbar";
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import Add from "./Components/Add";



const useStyles= makeStyles( (theme) => ({
  right:{
    [theme.breakpoints.down("sm")]:{
      display:"none",
    }
  }
}));

const App = () => {
    const classes = useStyles();
    return (
    <>
        <div>
          <Navbar item md={12} SM={12} XS={12}/>
          <Grid container>
            <Grid item md={2} sm={2} xs={2}>
            <Leftbar/>
            </Grid>
            <Grid item md={7} sm={10} xs={10}>
              <Feed/>
            </Grid>
            <Grid item md={3}  className={classes.right}>
              <Rightbar/>
              </Grid> 
              <Add/>
          </Grid>
        </div>
        </>);
    
};

export default App;
