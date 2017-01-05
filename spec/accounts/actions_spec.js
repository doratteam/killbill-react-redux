import Immutable from 'immutable';
import * as AccountActionTypes from '../../src/accounts/actionTypes.js';
import * as AccountActions from '../../src/accounts/actions.js';

let uid = () => Math.random().toString(36).substr(2, 9);

describe('AccountActions.addAccount', () => {
	var action = AccountActions.addAccount('My Account');

	it('returns an action with the type of ADD_ACCOUNT', () => {
		expect(action.type).toEqual(AccountActionTypes.ADD_ACCOUNT);
	});

	describe('payload of the returned action', () => {
		var {payload} = action;

		it('has id and name properties', () => {
			expect(payload.hasOwnProperty('id')).toEqual(true);
			expect(payload.hasOwnProperty('name')).toEqual(true);
		});

		it('sets the name property with the name given as parameter', () => {
			expect(payload.name).toEqual('My Account');
		});
	});
});

describe('AccountActions.editAccountInfo', () => {
	var accountId = uid();
	var accountName = 'My Account';
	var accountDescription = 'My main household account';
	var action = AccountActions.editAccountInfo(accountId,
		Immutable.Map({name: accountName, description: accountDescription}));

	it('returns an action with the type of EDIT_ACCOUNT_INFO', () => {
		expect(action.type).toEqual(AccountActionTypes.EDIT_ACCOUNT_INFO);
	});

	describe('payload of the returned action', () => {
		var {payload} = action;

		it('has following properties', () => {
			expect(payload.hasOwnProperty('id')).toEqual(true);
			expect(payload.hasOwnProperty('accountInfo')).toEqual(true);
		});

		it('sets the id with the given account id', () => {
			expect(payload.id).toEqual(accountId);
		});

		it('sets the accountInfo with the given Immutable.Map that holds info about account', () => {
			var {accountInfo} = payload;
			expect(accountInfo.get('name')).toEqual(accountName);
			expect(accountInfo.get('description')).toEqual(accountDescription);
		});
	});
});

describe('AccountActions.deleteAccount', () => {
	var accountId = uid();
	var action = AccountActions.deleteAccount(accountId);

	it('returns an action with the type of DELETE_ACCOUNT', () => {
		expect(action.type).toEqual(AccountActionTypes.DELETE_ACCOUNT);
	});

	describe('payload of the returned action', () => {
		var {payload} = action;

		it('has following properties', () => {
			expect(payload.hasOwnProperty('id')).toEqual(true);
		});

		it('sets the id with the given account id', () => {
			expect(payload.id).toEqual(accountId);
		});
	});
});
