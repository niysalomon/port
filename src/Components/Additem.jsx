import { makeStyles,Tooltip,Fab} from "@material-ui/core";  
import { Add} from "@material-ui/icons";  


const useStyles= makeStyles( (theme) => ({
  fab:{
    position:"fixed",
    bottom:20,
    right:20,
  }
}));

const Additem = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)
    return (
    <>
  <Tooltip title="Add" aria-label="add" onClick={()=>setOpen(true)}>
  <Fab color="secondary" className={classes.fab}>
    <Add />
  </Fab> 
</Tooltip> 

        </>);  
    
};

export default Additem;