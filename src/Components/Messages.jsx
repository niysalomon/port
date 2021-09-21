import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Dialog,Container,Modal} from '@material-ui/core';
import {Person,Mail,Notifications} from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors'; 
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
  container:{
    padding:theme.spacing(20),
    width:300,
    float:"right",
    height:"100%",
    padding:"2px",    
    backgroundColor:"white",
    border:"none",  
  },
  message:{
      display:"flex",
      flexDirection:"column",
  },
  messageText:{
      fontSize:"12px",
      color:"grey",

  },

}));

function Messages(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Modal className={classes.dialog} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <Container className={classes.container}>
      <DialogTitle id="simple-dialog-title">New Messages </DialogTitle>
      <List>
        {Users.map((user) => (
          <ListItem button onClick={() => handleListItemClick(user.username)} key={user.id}>
            <ListItemAvatar>               
              <Avatar className={classes.avatar} alt="no profile" src={`assets/${user.profilePicture}`}/>          
            </ListItemAvatar>
            <div className={classes.message}>
            <ListItemText primary= { user.username} />
            <Typography className={classes.messageText}> {user.message} </Typography>
            </div>
          </ListItem>
        ))} 
      </List>
      </Container>
    </Modal>
  );
}

Messages.propTypes = {
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
      <Mail onClick={handleClickOpen}/>
       
      <Messages selectedValue={selectedValue} open={open} onClose={handleClose} />
    </div>
  );
}