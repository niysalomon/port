import { makeStyles,Typography,Avatar,ImageListItem,ImageList} from "@material-ui/core"; 
import AvatarGroup from '@material-ui/lab/AvatarGroup';


const useStyles= makeStyles( (theme) => ({
  container:{  
    paddingTop:theme.spacing(10),
    position:"sticky",
    top:0,
  },
  title:{
    fontSize:18,
    fontWeight:500,
    color:"#555",
    marginBottom:"15px", 
    marginLeft:"50px",
  },
  avatagGroup:{
    marginLeft:"20px",
    marginBottom:"20px",
  },
  imageList: {
    width: 400,
    height: 350,
   paddingLeft:"20px",
  },
  gallery:{
    textAlign:"center",
    fontWeight:500,
    fontSize:"18px",
    borderBottom:"1px solid #555",
    marginBottom:"10px",
  }

}));

const Rightbar = () => {
    const classes = useStyles();
    return (
    <>
        <div className={classes.container}>
          <Typography className={classes.title}> My best friends  </Typography>
          <AvatarGroup max={6} className={classes.avatagGroup}>
  <Avatar alt="Remy Sharp" src="/assets/1.jpg" />
  <Avatar alt="Travis Howard" src="/assets/4.jpg" />
  <Avatar alt="Cindy Baker" src="/assets/1.jpgg" />
  <Avatar alt="Agnes Walker" src="/assets/66.jpg" />
  <Avatar alt="Trevor Henderson" src="/assets/10.jpg" />
  <Avatar alt="Trevor Henderson" src="/assets/10.jpg" />
  <Avatar alt="Trevor Henderson" src="/assets/10.jpg" />
  <Avatar alt="Trevor Henderson" src="/assets/100.jpg" />
</AvatarGroup>
<Typography className={classes.gallery}>Gallery</Typography>
  <ImageList rowHeight={160} className={classes.imageList} cols={3}>   
    <ImageListItem  >
      <img src="/assets/10.jpg" alt="altr" />
    </ImageListItem>
    <ImageListItem  >
      <img src="/assets/2.jpg" alt="altr" />
    </ImageListItem>
    <ImageListItem  >
      <img src="/assets/10.jpg" alt="altr" />
    </ImageListItem>
    <ImageListItem  >
      <img src="/assets/1.jpg" alt="altr" />
    </ImageListItem>
    <ImageListItem  >
      <img src="/assets/10.jpg" alt="altr" />
    </ImageListItem> 
    <ImageListItem  >
      <img src="/assets/10.jpg" alt="altr" />
    </ImageListItem>

</ImageList>
        </div>
        
        </>);
     
};

export default Rightbar;