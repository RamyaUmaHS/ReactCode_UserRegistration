// import userReducer from './usersReducer';
// import postReducer from './postReducer';
// import photosReducer from './photosReducer'
// import loginReducer from './loginReducer';
import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';

const rootReducer=combineReducers({form});

export default rootReducer;

