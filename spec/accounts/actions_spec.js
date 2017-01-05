import * as AccountActionTypes from '../../src/accounts/actionTypes.js';
import * as AccountActions from '../../src/accounts/actions.js';

describe('AccountActions.addAccount', function() {
	var action = AccountActions.addAccount('My Account');
	it('returns an action with the type of ADD_ACCOUNT', function() {
		expect(action.type).toEqual(AccountActionTypes.ADD_ACCOUNT);
	});

	describe('payload of the returned action', function() {
		var {payload} = action;
		it('has id and name properties', function() {
			expect(payload.hasOwnProperty('id')).toEqual(true);
			expect(payload.hasOwnProperty('name')).toEqual(true);
		});

		it('sets the name property with the name given as parameter', function() {
			expect(payload.name).toEqual('My Account');
		});
	});
});

