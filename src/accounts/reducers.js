/*
 * Accounts reducers
 */

// TODO: use import transactions from '../transactions' and destructure transactions instead of importing every action types from transactions
import Immutable from 'immutable';
import * as AccountActionTypes from './actionTypes.js';
import * as TransactionActionTypes from '../transactions/actionTypes.js';
import {createReducer} from '../utils.js';
import {combineReducers} from 'redux-immutable'

function addTransaction(state, action) {
	const {accountId, transactionId} = action.payload;
	const account = state.get(accountId);

	const updatedAccount = account.update('transactions', transactions => {
		return transactions.push(transactionId);
	});

	return state.set(accountId, updatedAccount);
}

function deleteTransaction(state, action) {
	const {accountId, transactionId} = action.payload;
	const account = state.get(accountId);

	const updatedAccount = account.update('transactions', transactions => {
		const idx = transactions.indexOf(transactionId);
		return transactions.delete(idx);
	});

	return state.set(accountId, updatedAccount);
}

const accountsById = createReducer(Immutable.Map({}), {
	[TransactionActionTypes.ADD_TRANSACTION](state, action) {
		return addTransaction(state, action);
	},
	[TransactionActionTypes.DELETE_TRANSACTION](state, action) {
		return deleteTransaction(state, action);
	},
	[AccountActionTypes.ADD_ACCOUNT](state, action) {
		const {id, name} = actio.payload;

		const account = Immutable.Map({
			info: Immutable.Map({name: name}),
			transactions: Immutable.List([])
		});

		return state.set(id, account);
	},
	[AccountActionTypes.EDIT_ACCOUNT_INFO](state, action) {
		const {id, accountInfo} = action.payload;
		const account = state.get(id);
		const updatedAccount = account.set('info', accountInfo);

		return state.set(id, updatedAccount);
	},
	[AccountActionTypes.DELETE_ACCOUNT](state, action) {
		const {id} = action.payload;
		return state.delete(id);
	}
	// TODO: add async reducers
});

console.log(createReducer);

const allAccounts = createReducer(Immutable.List([]), {
	ADD_ACCOUNT: (state, action) => {
		const {id} = actio.payload;

		return state.push(id);
	},
	DELETE_ACCOUNT: (state, action) => {
		const {id} = action.payload;
		const idx = state.indexOf(id);
		return state.delete(idx);
	}
});

export const accountsReducer = combineReducers({
	byId: accountsById,
	allIds: allAccounts
});

