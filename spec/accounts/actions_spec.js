import Immutable from 'immutable';
import Accounts from '../../src/accounts'

const {Actions, ActionTypes} = Accounts;

let uid = () => Math.random().toString(36).substr(2, 9);

describe('Accounts.Actions.addAccount', () => {
	let action = Actions.addAccount('My Account');

	it('returns an action with the type of AddAccount', () => {
		expect(action.type).toBe(ActionTypes.AddAccount);
	});

	describe('payload of the returned action', () => {
		let {payload} = action;

		it('has id and name properties', () => {
			expect(payload.hasOwnProperty('id')).toEqual(true);
			expect(payload.hasOwnProperty('name')).toEqual(true);
		});

		it('sets the name property with the name given as parameter', () => {
			expect(payload.name).toBe('My Account');
		});
	});
});

describe('Accounts.Actions.editAccountInfo', () => {
	let accountId = uid();
	let accountName = 'My Account';
	let accountDescription = 'My main household account';
	let action = Actions.editAccountInfo(accountId,
		Immutable.Map({name: accountName, description: accountDescription}));

	it('returns an action with the type of EditAccountInfo', () => {
		expect(action.type).toBe(ActionTypes.EditAccountInfo);
	});

	describe('payload of the returned action', () => {
		let {payload} = action;

		it('has following properties', () => {
			expect(payload.hasOwnProperty('id')).toEqual(true);
			expect(payload.hasOwnProperty('accountInfo')).toEqual(true);
		});

		it('sets the id with the given account id', () => {
			expect(payload.id).toBe(accountId);
		});

		it('sets the accountInfo with the given Immutable.Map that holds info about account', () => {
			let {accountInfo} = payload;
			expect(accountInfo.get('name')).toBe(accountName);
			expect(accountInfo.get('description')).toBe(accountDescription);
		});
	});
});

describe('Accounts.Actions.deleteAccount', () => {
	let accountId = uid();
	let action = Actions.deleteAccount(accountId);

	it('returns an action with the type of DeleteAccount', () => {
		expect(action.type).toBe(ActionTypes.DeleteAccount);
	});

	describe('payload of the returned action', () => {
		let {payload} = action;

		it('has following properties', () => {
			expect(payload.hasOwnProperty('id')).toEqual(true);
		});

		it('sets the id with the given account id', () => {
			expect(payload.id).toBe(accountId);
		});
	});
});
