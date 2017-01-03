/*
 *  Transaction-related action creators
 */

// temporary ID assignments (once server is done, these IDs will be generated from server)
let uid = () => Math.random().toString(36).substr(2, 9);

export const addTransactionToAccount = (accountId,title) => {
	return {
		type: ADD_TRANSACTION,
		payload: {
			accountId: accountId,
			id: uid(),
			title: title
		}
	};
}

export const editTransaction = (id) => {
	return {
		type: EDIT_TRANSACTION,
		payload: {
			id: id
		}
	};
}

export const deleteTransactionFromAccount = (accountId,transactionId) => {
	return {
		type: DELETE_TRANSACTION,
		payload: {
			accountId: accountId,
			transactionId: transactionId
		}
	};
}

export const saveTransaction = (id, transaction) => {
	return {
		type: SAVE_TRANSACTION,
		payload: {
			id: id,
			transaction: transaction
		}
	};
}