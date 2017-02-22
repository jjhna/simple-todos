/**
 * Created by jojona on 2/22/17.
 * wod
 */

import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});