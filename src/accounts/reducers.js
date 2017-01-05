/*
 * Accounts reducers
 */

import Immutable from 'immutable';
import * as AccountActionTypes from './actionTypes.js';
import Transactions from '../transactions'
import {createReducer} from '../utils.js';
import {combineReducers} from 'redux-immutable'

const TransactionCrossActionTypes = Transactions.CrossActionTypes;

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
	[TransactionCrossActionTypes.AddTransaction](state, action) {
		return addTransaction(state, action);
	},
	[TransactionCrossActionTypes.DeleteTransaction](state, action) {
		return deleteTransaction(state, action);
	},
	[AccountActionTypes.AddAccount](state, action) {
		const {id, name} = action.payload;

		const account = Immutable.Map({
			info: Immutable.Map({name: name}),
			transactions: Immutable.List([])
		});

		return state.set(id, account);
	},
	[AccountActionTypes.EditAccountInfo](state, action) {
		const {id, accountInfo} = action.payload;
		const account = state.get(id);
		const updatedAccount = account.set('info', accountInfo);

		return state.set(id, updatedAccount);
	},
	[AccountActionTypes.DeleteAccount](state, action) {
		const {id} = action.payload;
		return state.delete(id);
	}
	// TODO: add async reducers
});

const allAccounts = createReducer(Immutable.List([]), {
	[AccountActionTypes.AddAccount](state, action) {
		const {id} = action.payload;

		return state.push(id);
	},
	[AccountActionTypes.DeleteAccount](state, action) {
		const {id} = action.payload;
		const idx = state.indexOf(id);
		return state.delete(idx);
	}
});

export const accountsReducer = combineReducers({
	byId: accountsById,
	allIds: allAccounts
});

