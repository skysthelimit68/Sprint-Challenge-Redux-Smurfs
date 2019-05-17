
import { GET_SMURFS_START, GET_SMURFS_SUCCESS, GET_SMURFS_FAIL, ADD_SMURF_START, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL, DELETE_SMURF_START, DELETE_SMURF_SUCCESS, DELETE_SMURF_FAIL } from "../actions"

const initialState =
 {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action ) => {
   console.log(action.type)
   switch(action.type) {
   
    case GET_SMURFS_START: 
      return {
        ...state,
        fetchingSmurfs : true
      }
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs : false,
        smurfs : action.payload
      }
    case GET_SMURFS_FAIL:
      return {
        ...state,
        fetchingSmurfs : false,
      }

    case ADD_SMURF_START: 
      return {
        ...state,
        addingSmurf : true
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf : false,
        smurfs : action.payload
      }
    case ADD_SMURF_FAIL:
      return {
        ...state,
        addingSmurf : false,
      }  

      case DELETE_SMURF_START: 
      return {
        ...state,
        deletingSmurf : true
      }
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        deletingSmurf : false,
        smurfs : action.payload
      }
    case DELETE_SMURF_FAIL:
      return {
        ...state,
        deletingSmurf : false,
      }
    default:
    return state;
  }
}

export default reducer;