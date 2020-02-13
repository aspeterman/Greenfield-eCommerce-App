import React, { Component,useState,useCallback} from 'react'
import { useSelector} from 'react-redux'
import { connect } from 'react-redux';
import AnswerModal from './AnswerModal.jsx'
import initialState from '../../reducers/initialState'
import Modal from './Modal.jsx'
import { useDispatch } from 'react-redux'
import { makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// const Incrementing = useCallback(
//   () => dispatch({ type: 'increment-counter' }),
//   [dispatch]
//)

// const increase = () => ({ type: "INCREASE_COUNTER" });

const moment = require('moment');
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

export default function ListItems() {
    const State = useSelector(state => state);
    const classes = useStyles();
    const dispatch = useDispatch()

  return (

    <div>
    {console.log("state:",State.question.Acount)}
    <List className={classes.root}>
    {/* {console.log("State:",count)} */}
    {State.question.question.results ? State.question.question.results.slice(0,State.question.count).map((each,i) => { return(
      <ListItem alignItems="flex-start">
      <ListItemText
     primary={`Q: ${each["question_body"]}`}
      secondary={
        <React.Fragment>
           { Object.keys(each["answers"]).map((num)=>{ return{id: num,value: each["answers"][num]['helpfulness']}}).sort(function (a, b) {
              return a.value - b.value}).reverse()
          .map((idValue)=>idValue.id).slice(0,State.question.Acount).map((every,x) =>
          <Typography>
         {`A: ${each["answers"][every]["body"]}`}<br></br>
         {each["answers"][every]['photos'].length > 0?each["answers"][every]['photos'].map((photo,i)=>
                  <ul style={styles} type='none'>
                    {/* {console.log("photo:",photo)} */}
                  <li key ={i}><img src = {photo} alt="Smiley face" height="42" width="42"></img></li>
                  </ul>
                  ):console.log('')}
         <Typography  >{`by ${each["answers"][every]["answerer_name"]}, ${moment(each["answers"][every]["date"]).utc().format("YYYY-MM-DD hh:mm:ss")} | helpful? `}
         <a id = {`yesAButton${i}`} onClick={(e)=>e.preventDefault(
         document.getElementById(`yesAButton${i}`).text = `yes(${Number(each["answers"][every]["helpfulness"])+1})`
         )}>yes({each["answers"][every]["helpfulness"]})</a>
          |<a href="#" onClick = {(e)=> e.preventDefault()}>Report</a></Typography>
         </Typography>
           )}
           {Object.keys(each["answers"]).length > 0?

    <Button id = {`Answer${i}`} onClick={() => dispatch({ type: "IncrementAnswer"})}>Load more answers</Button>
          //  <Button variant="contained" variant="outlined" onClick = {
          //   () => dispatch({ type: "IncrementAnswer"  })
          //     }>Load more answers</Button>
           :<p>no answers yet</p>}
        </React.Fragment>
      }
    />
      <a id = {`yesButton${i}`} onClick={(e)=>e.preventDefault(
         document.getElementById(`yesButton${i}`).text = `yes(${Number(each["question_helpfulness"])+1})`
      )}>yes({each["question_helpfulness"]})</a>|<AnswerModal/>
      </ListItem>
      )}): null}

    </List>
    <Button variant="contained" variant="outlined" onClick = {
   () => dispatch({ type: "Increment" })
     }>more answered questions</Button>
    <Modal/>
    </div>
  );
}
