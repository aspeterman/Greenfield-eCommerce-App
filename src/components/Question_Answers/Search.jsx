 import React, { Component } from 'react'
// import { TextField } from '@material-ui/core';
 import initialState from '../../reducers/initialState';
// import { FormLabel } from '@material-ui/core';
// import FormControl from '@material-ui/core/FormControl';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
const Highlight = require('react-highlighter');

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: theme.spacing(1),
   
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '96%',
    borderColor: 'black',
    border: '1px solid #ced4da',
    borderRadius: 1,
   
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: 14,
    
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();
  return (
    <div>
    <Paper component="form" className={classes.root}>
      <InputBase id="val"
        className={classes.input}
        placeholder= "Have a question?Search for answer..."/>
      <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick ={(e)=> e.preventDefault(
          <Highlight search ={document.getElementById("val").value} >{initialState.products[0].questions}</Highlight>,
          console.log(document.getElementById("val").value)
        )}>    
        <SearchIcon/>
      </IconButton>
    </Paper>
    </div>
  );
}

















// class Search extends Component {
//     // constructor(props) {
//     //     super(props);
//     // }

//     render() {
//         //  const reactState = useSelector(state => state)
//         return (
//          <div>
//              {/* <FormControl  variant="outlined">
//           <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
//           <OutlinedInput
//             id="outlined-adornment-amount"
//             //  value={values.amount}
//             // onChange={handleChange('amount')}
//             //  startAdornment={<InputAdornment position="start">$</InputAdornment>}
//             // labelWidth={100}
//           />
//         </FormControl> */}
//             <form>
//             <TextField id="standard-basic" label="Standard" position="end"/>
//             <input id="val"  placeholder="Have a question?Search for answer..."></input>
//             <button onClick ={(e)=> e.preventDefault(
//             <Highlight search ={document.getElementById("val").value} >{initialState.products[0].questions}</Highlight>,
//               console.log(document.getElementById("val").value)
//             )}>search</button>
//             </form>
//         </div>
//          )
//                 }
//             }
// export default Search;