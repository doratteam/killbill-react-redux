/*
 *  Transaction-related action creators
 */

 import * as ActionTypes from './actionTypes.js';

// temporary ID assignments (once server is done, these IDs will be generated from server)
let uid = () => Math.random().toString(36).substr(2, 9);

export const addTransaction = (accountId,title) => {
	return {
		type: ActionTypes.AddTransaction,
		payload: {
			accountId: accountId,
			transactionId: uid(),
			title: title
		}
	};
}

export const editTransaction = (id, transaction) => {
	return {
		type: ActionTypes.EditTransaction,
		payload: {
			id: id,
			transaction: transaction
		}
	};
}

export const deleteTransaction = (accountId,transactionId) => {
	return {
		type: ActionTypes.DeleteTransaction,
		payload: {
			accountId: accountId,
			transactionId: transactionId
		}
	};
}