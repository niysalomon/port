import {Snackbar, makeStyles,Tooltip,Fab,Modal,Container,TextField,MenuItem,FormLabel,RadioGroup,FormControlLabel,Radio,Button} from "@material-ui/core";  
import { Add as AddIcon} from "@material-ui/icons";  
import {useState} from "react";
import MuiAlert from '@material-ui/lab/Alert';


const useStyles= makeStyles( (theme) => ({
  fab:{
    position:"fixed",
    bottom:20,
    right:20,
  },
  container:{
    backgroundColor:"white",
    width:500,
    height:550,
    position:"absolute",
    top:0,
    bottom:0,
    right:0,   
    left:0,
    margin:"auto",
    [theme.breakpoints.down("sm")]:
    {
      height:"100hv", 
      width:"100hv",
    },
  },
  item:{
    marginBottom:theme.spacing(3),
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const Add = () => {
  const [openAlert, setOpenAlert] = useState(false);

  const handleClick = () => {
    setOpenAlert(true);
  };
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpenAlert(false);
  };


    const classes = useStyles();
    const [open, setOpen]= useState(false)
    return (
    <>
        <Tooltip title="Add" aria-label="add" onClick={()=>setOpen(true)}>
  <Fab color="secondary" className={classes.fab}>
    <AddIcon />
  </Fab>
</Tooltip>
<Modal open={open}>
  <Container className={classes.container}>MY Modal
 <form className={classes.form} autoComplete="off">
   <div className={classes.item}>
     <TextField id="standard-basic" label="Title" size="small" style={{width:"100%"}}/>
     </div>
     <div className={classes.item}>
     <TextField
          id="standard-multiline-static"
          variant="outlined"
          multiline
          rows={2}
          defaultValue="Please Tell your story ........"
         label="Description" size="small" style={{width:"100%"}}/>
         <TextField select label="Visibility" value="Public">
           <MenuItem value="Public">Public</MenuItem>
           <MenuItem value="Private">Private</MenuItem>
           <MenuItem value="Unlisted">Unlisted</MenuItem> 
           </TextField>
           </div> 
           <div className={classes.item}>        
    <FormLabel component="legend">Who to comment </FormLabel>
  <RadioGroup>
    <FormControlLabel value="Every body" control={<Radio  size="small"/>} label="Every body" />
    <FormControlLabel value="My Friends" control={<Radio size="small"/>} label="My Friends" />
    <FormControlLabel value="No body" control={<Radio size="small"/>} label="No body" /> 
    <FormControlLabel value="disabled" disabled control={<Radio size="small"/>} label="(Disabled option)" />
  </RadioGroup>
   </div>
   <div className={classes.item}> 
   <Button variant="outlined" color="primary" onClick={handleClick} style={{marginRight:10}}>Create</Button>
   <Button variant="outlined" color="secondary" onClick={()=>setOpen(false)}>Cancel</Button>
   </div>

 </form>
 </Container>
</Modal>
<Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Ndakwemeje hhhhhh!!!! wait!!
        </Alert>
      </Snackbar>
        </>);    
};

export default Add;