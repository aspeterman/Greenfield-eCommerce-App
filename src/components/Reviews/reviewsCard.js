import React from 'react';
import { Link } from 'react-router-dom';
import store from '../../store/store.js';

store.dispatch({
  type: "RATE_COLOR",
  id: id,
  rating: rating
})