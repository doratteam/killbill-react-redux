/*
 *  Transaction-related action creators
 */

// temporary ID assignments (once server is done, these IDs will be generated from server)
let uid = () => Math.random().toString(36).substr(2, 9);

export const addTransaction = (accountId,title) => {
	return {
		type: ADD_TRANSACTION,
		payload: {
			accountId: accountId,
			transactionId: uid(),
			title: title
		}
	};
}

export const editTransaction = (id, transaction) => {
	return {
		type: EDIT_TRANSACTION,
		payload: {
			id: id,
			transaction: transaction
		}
	};
}

export const deleteTransaction = (accountId,transactionId) => {
	return {
		type: DELETE_TRANSACTION,
		payload: {
			accountId: accountId,
			transactionId: transactionId
		}
	};
}