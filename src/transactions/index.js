import * as actions from './actions.js';
import * as actionTypes from './actionTypes.js';

// TODO: add reducer to this when transactions/reducers.js is written
export default {
	Actions: actions,
	ActionTypes: actionTypes,
	CrossActionTypes: {
		AddTransaction: actionTypes.AddTransaction,
		DeleteTransaction: actionTypes.DeleteTransaction
	}
};