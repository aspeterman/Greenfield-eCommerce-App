import React, { Component } from 'react'
import { connect } from 'react-redux';
import AnswerModal from './AnswerModal.jsx'
import initialState from '../../reducers/initialState'
//Class component
//___________________________________________
// class List extends Component {
//     render() {
//     //  const reactState = useSelector(state => state)
//         return (
//         <div>
//           <ul id='question' >

//             {initialState.products[0].questions ? initialState.products[0].questions[0].results.map((each) => { return(
//           <li>{`Q: ${each["question_body"]}`}&nbsp;&nbsp;
//           <a href="#">yes</a>{`(${each["question_helpfulness"]})| `}<AnswerModal/><br></br>
//               <ul id='answer'>
//               {Object.keys(each["answers"]).map((every,i) =>
//                <li key ={i}>{`A: ${each["answers"][every]["body"]}`}<br></br>
//               {console.log(each["answers"][every]['photos'])}
//               {each["answers"][every]['photos'].length > 0?each["answers"][every]['photos'].map((photo,i)=>
//               <ul>
//                 {console.log("photo:",photo)}
//               {/* <li key ={i}><image  src={photo} alt="Smiley face" height="42" width="42"></image>/></li> */}
//               <li key ={i}><img src = {photo} alt="Smiley face" height="42" width="42"></img></li>
//               </ul>
//               ):console.log('false')}

//               {`by${each["answers"][every]["date"]},${each["answers"][every]["answerer_name"]}| helpful? `}<a href="/">yes</a>{`(${each["answers"][every]["helpfulness"]})|`}<a href="#">Report</a><br></br></li>
//               )}
//               <a href="#">Load more answers</a><br></br>
//               </ul>

//         </li>
//             )}): null}
//           </ul>
//           {/* <p>{this.state? this.state.reviews: null}</p> */}
//         </div>
//         )
//     }
// }
// export default List;
//___________________________________________

//a function stylizing functional component
//___________________________________________


// function listStyle() {
//   var styles = {
//     margin: '0px',
//     width: '20px',
//     height: '10px',
//     display: 'table-cell',
//   };
//   return (
//     <div>
//           <ul id='question' >

//             {initialState.products[0].questions ? initialState.products[0].questions[0].results.map((each) => { return(
//           <li>{`Q: ${each["question_body"]}`}&nbsp;&nbsp;
//           <a href="#">yes</a>{`(${each["question_helpfulness"]})| `}<AnswerModal/><br></br>
//               <ul id='answer'>
//               {Object.keys(each["answers"]).map((every,i) =>
//                <li key ={i}>{`A: ${each["answers"][every]["body"]}`}<br></br>
//               {console.log(each["answers"][every]['photos'])}
//               {each["answers"][every]['photos'].length > 0?each["answers"][every]['photos'].map((photo,i)=>
//               <ul style={styles}>
//                 {console.log("photo:",photo)}
//               <li key ={i}><img src = {photo} alt="Smiley face" height="42" width="42"></img></li>
//               </ul>
//               ):console.log('false')}

//               {`by${each["answers"][every]["date"]},${each["answers"][every]["answerer_name"]}| helpful? `}<a href="/">yes</a>{`(${each["answers"][every]["helpfulness"]})|`}<a href="#">Report</a><br></br></li>
//               )}
//               <a href="#">Load more answers</a><br></br>
//               </ul>

//         </li>
//             )}): null}
//           </ul>
//         </div>
//   )
// }
// export default listStyle
//++++++++++++++++++++++++++++++++++++++++++++++++++
import { makeStyles,Button } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

  var styles = {
    margin: '0px',
    width: '20px',
    height: '10px',
    display: 'table-cell',
  };
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    
    
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'block',
  
  },
  typography: {
    fontSize: 5,
  },

}));

export default function FolderList() {
  const classes = useStyles();

  return (
    <div>
    <List className={classes.root}>
    {initialState.products[0].questions ? initialState.products[0].questions[0].results.map((each) => { return( 
      <ListItem alignItems="flex-start">
      <ListItemText
     primary={`Q: ${each["question_body"]}`} 
      secondary={
        <React.Fragment>
        
        {Object.keys(each["answers"]).map((every) => 
       
          <Typography variant="subtitle1" >
         <Typography color="textPrimary">A:</Typography>{`${each["answers"][every]["body"]}`}<br></br>
         {each["answers"][every]['photos'].length > 0?each["answers"][every]['photos'].map((photo,i)=>
                  <ul style={styles}>
                    {console.log("photo:",photo)}
                  <li key ={i}><img src = {photo} alt="Smiley face" height="42" width="42"></img></li>
                  </ul>
                  ):console.log('false')}
         <Typography  >{`by${each["answers"][every]["date"]},${each["answers"][every]["answerer_name"]}| helpful? `}<a href="/">yes</a>{`(${each["answers"][every]["helpfulness"]})|`}<a href="#">Report</a></Typography>
         </Typography>
           )}
           {Object.keys(each["answers"]).length > 0? <a href="#">Load more answers</a>:<p>no answers yet</p>}
        </React.Fragment>
       
      }
    />
        {/* <List> */}
         
         <Divider variant="inset" component="li" />
        
         {/* </List> */}
        
     
      <a href="#">yes</a>({each["question_helpfulness"]})|<AnswerModal/>
      </ListItem>
      )}): null}
    </List>
   
    </div>
  );
}
