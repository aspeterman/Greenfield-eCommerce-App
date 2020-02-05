import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// const useStyles = makeStyles(theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     margin: {
//       margin: theme.spacing(1),
//     },
//     withoutLabel: {
//       marginTop: theme.spacing(3),
//     },
//     textField: {
//       width: 200,
//     },
//   }));
// const classes = useStyles();
class Search extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        //  const reactState = useSelector(state => state)
        return (
         <div>
             {/* <FormControl  variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            //  value={values.amount}
            // onChange={handleChange('amount')}
            //  startAdornment={<InputAdornment position="start">$</InputAdornment>}
            // labelWidth={100}
          />
        </FormControl> */}
            <form>
            <TextField id="standard-basic" label="Standard" position="end"/>
            <input   placeholder="Have a question?Search for answer..."></input>
            <button>{"search"}</button>
            </form>
        </div>
         )
                }
            }
export default Search;