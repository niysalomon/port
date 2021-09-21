import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles,Avatar,List,ListItem,ListItemAvatar,ListItemText,DialogTitle,Container,Modal,Typography } from '@material-ui/core'; 
import { Notifications} from '@material-ui/icons';  
import { blue } from '@material-ui/core/colors'; 
import {Posts} from'../dammyData';
import {Users} from'../dammyData';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles((theme)=>({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  dialog:{
      marginTop:"66px",
      paddingRight:theme.spacing(1),
  },
  dialogHeader:{
    borderBottom:"1px solid grey",
  },
  container:{ 
    width:300,
    float:"right",
    height:"100%",
    padding:"2px",    
    backgroundColor:"white",
    border:"none", 
    [theme.breakpoints.down("sm")]:{
       width:"100%",
    }, 
  },
  message:{
      display:"flex",
      flexDirection:"column",
  },
  messageText:{
      fontSize:"12px",
      color:"grey",

  },
  messageList:{
    overflowY:"scroll",
  },

}));

function Notification(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

   

  return (
    <Modal className={classes.dialog} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <Container className={classes.container}>
      <DialogTitle className={classes.dialogHeader} id="simple-dialog-title">New Notifications </DialogTitle>
      <List className={classes.messageList}>
        {Posts.map((post) => (
          <ListItem   key={post.id}>
            <ListItemAvatar>               
              <Avatar className={classes.avatar} alt="no profile" src={`assets/${Users.filter((u) => u.id === post.userId)[0].profilePicture}`}/>          
            </ListItemAvatar>
            <div className={classes.message}>
            <ListItemText primary= {Users.filter((u) => u.id === post.userId)[0].username} />
            <Typography className={classes.messageText}> {post.desc} </Typography>
            </div>
          </ListItem>
        ))} 
      </List>
      </Container>
    </Modal>
  );
}

Notification.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>      
      <Notifications onClick={handleClickOpen}/>
       
      <Notification selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}