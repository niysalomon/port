import { Box,makeStyles,Avatar} from "@material-ui/core"; 
import Post from "./Post";
import {Posts} from'../dammyData';
import SharePost from './share/Share';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const useStyles= makeStyles( (theme) => ({
  container:{
    paddingTop:theme.spacing(10),
  },
  avatagrpContainer:{
    alignItems:"center", 
    padding:"20px",
    marginBottom:"15px",
    [theme.breakpoints.up("sm")]:{
    display:"none",
    },
    },
  avatagGroup:{
    alignItems:"center",    
    marginTop:"0px",
  },
  avataImage:{
    fontSize:"50px",
  },
}));

const Feed = () => {
    const classes = useStyles();
    return    (
    <>     
  <div className={classes.container}>   
  <Box boxShadow={3} className={classes.avatagrpContainer}>
 <AvatarGroup max={8} className={classes.avatagGroup}>
  <Avatar className={classes.avataImage} alt="Remy Sharp" src="/assets/1.jpg" />
  <Avatar className={classes.avataImage} alt="Travis Howard" src="/assets/4.jpg" />
  <Avatar className={classes.avataImage} alt="Cindy Baker" src="/assets/1.jpgg" />
  <Avatar className={classes.avataImage} alt="Agnes Walker" src="/assets/66.jpg" />
  <Avatar className={classes.avataImage} alt="Trevor Henderson" src="/assets/10.jpg" />
  <Avatar className={classes.avataImage} alt="Trevor Henderson" src="/assets/10.jpg" />
  <Avatar className={classes.avataImage} alt="Trevor Henderson" src="/assets/10.jpg" />
  <Avatar className={classes.avataImage} alt="Trevor Henderson" src="/assets/posts/11.jpg"/>
  <Avatar className={classes.avataImage} alt="Trevor Henderson" src="/assets/posts/37.jpg"/>
  <Avatar className={classes.avataImage} alt="Trevor Henderson" src="/assets/100.jpg" />
  <Avatar className={classes.avataImage} alt="Trevor Henderson" src="/assets/100.jpg" />
</AvatarGroup>
</Box>       
    <SharePost/>
              {Posts.map((p)=>
            <Post key={p.id} post={p}/>
          )} 
        </div>
        </>
        );    
};
export default Feed;