import React from 'react';
import { Box,makeStyles,Card,Avatar,CardHeader,IconButton,CardMedia,InputBase,Paper,Divider,Fab,Tooltip,
  CardContent,Typography,CardActions,Collapse,Button} from "@material-ui/core"; 
import { red } from '@material-ui/core/colors';
import {   MoreVert, Share,Reply,ThumbUp,ThumbDownAlt,AddPhotoAlternate,CameraAlt,EmojiEmotions,Send,Comment } from "@material-ui/icons";
import clsx from 'clsx';
import { Users } from '../dammyData';
import {useState} from 'react'; 

const PF = process.env.REACT_APP_PUBLIC_FOLDER;

const useStyles= makeStyles( (theme) => ({
  
  container:{
    paddingTop:theme.spacing(10),
  },
 

  root: {
      marginBottom:theme.spacing(5),
        
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    objectFit:"contain",
    marginTop: "20px",
    width: "100%", 
    [theme.breakpoints.down("sm")]:{ 
        marginLeft:theme.spacing(1),
        objectFit:"cover",
    }, 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(0deg)',
  },
  avatar: {
    objectFit:"cover",
    backgroundColor: red[500],
    [theme.breakpoints.down("sm")]:{
     fontSize:"12px",
    }, 
  },
  cardheader:{
      display:'flex',
      [theme.breakpoints.down("sm")]:{
        fontSize:"12px",
        fontWeight:200,
  },
  },
  headerTitle:{
    display:'flex', 
    cursor:'pointer',
  
},
  dates:{
      marginLeft:theme.spacing(5),
      [theme.breakpoints.down("sm")]:{
        fontSize:"12px",
        fontWeight:200,
  },
},
  names:{
      marginLeft:theme.spacing(0),
      [theme.breakpoints.down("sm")]:{
        fontSize:"12px",
        fontWeight:200,
  },
      
  },
  postLikecounter:{
    fontSize:"15px",

  },
  commentButton:{
    float:"right",
    display:"flex",    
    },
     
  fab:{
    fontSize:"12px",
  },
  tooltip:{    
    fontSize:"12px",
  },
  
  commentIcon:{
    marginTop:"5px",  
    [theme.breakpoints.down("sm")]:{
      display:"none",
},
    },
  
  comment:{
    borderRadius:"20px", 
    [theme.breakpoints.down("xs")]:{   
     display:"flex",
    },
  },
  coments:{
    display:"flex",
  },
  commentBox:{    
    borderRadius:"20px",
  },
  smallTooltip:{
    float:"right",
    [theme.breakpoints.up("sm")]:{   
     display:"none",
    },
  }
}));
 

const Post = ({post}) => {
    const classes = useStyles(); 
    const [expanded, setExpanded] = React.useState(false);  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  const[like,SetLike] = React.useState(post.like)
  const[isLiked,SetIsLiked] = useState(false)
  
const handleClick=()=>{
  SetLike(isLiked? like-1 : like+1)  
        SetIsLiked(!isLiked)
}


const[dislike,SetDisike] = React.useState(post.dislike)
const[isDisLiked,SetIsDisLiked] = useState(false)

const handleDisClick=()=>{
  SetDisike(isDisLiked? dislike-1 : dislike+1)  
  SetIsDisLiked(!isDisLiked)
}
    return (
    <>
    
    <Box boxShadow={3}>
         <Card className={classes.root}>
      <CardHeader className={classes.cardheader}
      
        avatar={ 
          <Avatar alt="no profile" src={`assets/${Users.filter((u) => u.id === post.userId)[0].profilePicture}`} >            
          </Avatar>
        }  
        action={
          
           <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }

         title={
             <div className={classes.headerTitle}>
           <Typography className={classes.names}> {Users.filter((u) => u.id === post.userId)[0].username}</Typography>
           <Typography className={classes.dates}>  {post.date}</Typography>
          
        </div>} 
      />
      <CardMedia
        className={classes.media}
        image={`${PF}${post.photos}`}
        title={Users.filter((u) => u.id === post.userId)[0].username} 
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
          <ThumbUp onclick={handleClick}/> 
          <Typography>{like}</Typography>         
        </IconButton>
        <IconButton aria-label="add to favorites">
          <ThumbDownAlt onClick={handleDisClick}/>
          <Typography className={classes.postLikecounter}>{post.dislike}</Typography>               
        </IconButton> 
         
        <IconButton aria-label="share">
          <Share />
        </IconButton>       
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Typography paragraph className={classes.coments}><Comment className={classes.commentcon}/>12 </Typography>
        </IconButton>
      </CardActions>

      <Box boxShadow={3}>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {/* comments header */}
      
            <hr className="sidebarhr"/>
            
      <CardHeader className={classes.cardheader}      
      avatar={ 
        <Avatar alt="no profile" src= {`assets/${Users.filter((u) => u.id === post.userId)[0].profilePicture}`}  >            
        </Avatar>
      } 
     

       title={
           <div className={classes.headerTitle}>
         <Typography className={classes.names}> {Users.filter((u) => u.id === post.userId)[0].username}</Typography>
         <Typography className={classes.dates}>  {post.date}</Typography>
        
      </div>} 
    />   {/* comments header */}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {post.desc}
          </Typography>
        </CardContent> 
      <CardActions>
      <IconButton aria-label="add to favorites">
          <ThumbUp/> <Typography>19</Typography>                   
        </IconButton>
        <IconButton aria-label="add to favorites">
          <ThumbDownAlt/>
          <Typography>2</Typography>          
        </IconButton>
        <Button size="small" color="primary">
          <Reply/>
        </Button>
      </CardActions>
      <Box boxShadow={3} className={classes.commentBox}>
      <Paper component="form" className={classes.comment}>
       <IconButton className={classes.profileIcon} aria-label="menu">
        <Avatar />
      </IconButton>      
      <InputBase
        className={classes.input}
        placeholder="comment..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
{/*       
      <Tooltip className={classes.smallTooltip} title="Send" aria-label="send" >
         <Fab color="secondary" className={classes.fab}>
         <Send/>
       </Fab>
</Tooltip> */}
       <div type="submit" className={classes.commentButton} >
        <AddPhotoAlternate className={classes.commentIcon}/>
        <CameraAlt className={classes.commentIcon}/>
        <EmojiEmotions className={classes.commentIcon}/>
        <Tooltip className={classes.Tooltip} title="Send" aria-label="send" >
         <Fab color="secondary" className={classes.fab}>
         <Send/>
       </Fab>
</Tooltip>
      </div>  
      <Divider className={classes.divider} orientation="vertical" />            
    </Paper>
    </Box>
        </CardContent>
        </Collapse>
        </Box>
    </Card>
    </Box>
        </>);    
};

export default Post;