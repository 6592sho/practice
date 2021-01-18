const stripe = require('stripe')('sk_test_r1fZkTPVq2OUIuv50QD34T7200Gwe0wjK9');

const createStripeAccount = async () => {
  const account = await stripe.accounts.create({
    type: 'express',
    country: 'JP',
    capabilities: {
      card_payments: {requested: true},
      transfers: {requested: true},
    },
  });
  console.log(account);

  return account.id;
}

const createAccountLinkUrl = async (accountId) => {
  const accountLink = await stripe.accountLinks.create({
    account: accountId,
    refresh_url: 'https://botlogy-dev.firebaseapp.com/',
    return_url: 'https://botlogy-dev.firebaseapp.com/',
    type: 'account_onboarding',
  });
  console.log(accountLink);

  return accountLink.url;
}

const test = async () => {
const accountId = await createStripeAccount();
const accountLinkUrl = await createAccountLinkUrl(accountId);
console.log(accountLinkUrl);
}
test();