import Immutable from 'immutable';
import { createStore } from 'redux';
import Accounts from '../../src/accounts';
import Transactions from '../../src/transactions'

describe('Accounts.Reducer', () => {
	const {Reducer} = Accounts;
	const accountActions = Accounts.Actions;
	const initialState = Immutable.Map();
	var accountsStore;
		
	beforeEach(() => {
		accountsStore = createStore(Reducer, initialState);
	});

	describe('default', () => {
		var accountsState;

		beforeEach(() => {
			accountsState = accountsStore.getState();
		});

		it('state has two keys', () => {
			expect(accountsState.has('byId')).toEqual(true);
			expect(accountsState.has('allIds')).toEqual(true);
		});

		it('state.byId is an empty Immutable.Map', () => {
			const byId = accountsState.get('byId');
			expect(Immutable.Map.isMap(byId)).toEqual(true);
			expect(byId.size).toEqual(0);
		});

		it('state.allIds is an empty Immutable.List', () => {
			const allIds = accountsState.get('allIds');
			expect(Immutable.List.isList(allIds)).toEqual(true);
			expect(allIds.size).toEqual(0);
		});
	});

	describe('on AddAccount action', () => {
		var accountsState,accountId;
		let accountName = 'My Account';

		beforeEach(() => {
			const action = accountActions.addAccount(accountName);

			accountId = action.payload.id;
			accountsStore.dispatch(action);
			accountsState = accountsStore.getState();
		});

		it('state.byId has {id: account} added as a new entry', () => {
			const byId = accountsState.get('byId');
			const account = byId.get(accountId);
			const accountInfo = account.get('info');

			expect(account).toBeDefined();
			expect(account).not.toBeNull();
			expect(accountInfo).toBeDefined();
			expect(accountInfo).not.toBeNull();
		});

		it('accountInfo is initialized with the given name', () => {
			expect(accountsState.get('byId').get(accountId).get('info').get('name')).toBe(accountName);
		});

		it('state.allIds has id added as a new entry', () => {
			const allIds = accountsState.get('allIds');

			expect(allIds.indexOf(accountId)).not.toBe(-1);
		});
	});
});

