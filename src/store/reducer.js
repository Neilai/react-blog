import { combineReducers } from 'redux-immutable';
import { reducer as EditListReducer } from '@/pages/admin/home/list/store';
const reducer = combineReducers({
  EditList:EditListReducer
});

export default reducer;
