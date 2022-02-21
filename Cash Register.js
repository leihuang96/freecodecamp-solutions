/* Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key. */

function checkCashRegister(price, cash, cid) {
  const money = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    'ONE HUNDRED': 100.0,
  };

  var sum = 0;
  for (let el of cid) {
    sum += el[1];
  }
  sum = sum.toFixed(2);

  var exchange = cash - price;

  var result = [];

  if (exchange > sum) {
    return { status: 'INSUFFICIENT_FUNDS', change: result };
  } else if (exchange.toFixed(2) == sum) {
    return { status: 'CLOSED', change: cid };
  } else {
    cid = cid.reverse();
    for (let elem of cid) {
      let temp = [elem[0], 0];
      while (exchange >= money[elem[0]] && elem[1] > 0) {
        temp[1] += money[elem[0]];
        elem[1] -= money[elem[0]];
        exchange -= money[elem[0]];
        exchange = exchange.toFixed(2);
      }
      if (temp[1] > 0) {
        result.push(temp);
      }
    }
  }
  if (exchange > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  }
  return { status: 'OPEN', change: result };
}
console.log(
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
);
checkCashRegister(3.26, 100, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]);

/* should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]} */
