// cash register function. written 9/4/2023
// an fcc js certification project.


function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let totalCashInDrawer = 0;
  let statusString = "OPEN";
  let moneyValues = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
  let moneyTypes = ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"];
  let billTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  let changeArray = [];
  let changeArrayIndex = 0;
  let haveCID = false; // boolean for a loop checking if cid is exactly change due

  // TODO:
  // fix hack for pennies rounding error, to avoid rare failure

  console.log("cid before change: \n", cid);

  // sum up all cash in drawer
  for (let i = 0; i < cid.length; i++) {
    totalCashInDrawer += cid[i][1];
  }

  // if change due is more than total cash in drawer, change status.
  if (changeDue > totalCashInDrawer) {
    console.log("Not enough cash in drawer");
    statusString = "INSUFFICIENT_FUNDS";
  }

  // if change due is less than cash in drawer, try to make change.
  if (changeDue <= totalCashInDrawer) {
    // iterate through array of possible bill / coin types, biggest to smallest.
    for (let j = 0; j < moneyValues.length; j++) {
      // while this bill/coin is smaller than the change due,
      // and while we still have bills/coins of this particular type...
      while ((moneyValues[j] <= changeDue) && (cid[cid.length-(j+1)][1] !== 0)) {
        // increment count for this bill/coin type
        billTotals[j]++;
        // subtract this bill/coin from change due
        
        changeDue -= moneyValues[j];
        // account for insane 0.01 rounding error (last penny)
        // this could be better - might fail in some cases
        if ((0.01 < changeDue < 0.001) && (billTotals[8] !== 0)) {
          billTotals[j]++;
        }
        console.log("new change due: " + changeDue);
        // subtract bill/coin from cid
        cid[(cid.length - (j + 1))][1] -= (moneyValues[j]);
      }
    }
  }

  // add a check here for status: closed condition (change due is exactly cid)
  // aka is there any cash left in the drawer?
  if (statusString != "INSUFFICIENT_FUNDS") {
    for (let l = 0; l < cid.length; l++) {
      console.log(cid[l][1]);
      if (cid[l][1] > 0.05) {
        haveCID = true;
      }
    }
    if (haveCID == false) {
      statusString = "CLOSED";
    }
  }

  // how many of each bill/coin type should be used?
  console.log("FINAL CHANGE DUE:\n");
  for (let k = 0; k < billTotals.length; k++) {
    console.log(moneyTypes[k], billTotals[k]);
    if (billTotals[k] !== 0) {
      changeArray[changeArrayIndex] = [moneyTypes[k], (billTotals[k]*moneyValues[k])];
      changeArrayIndex++;
    }
  }

  console.log("cid after change: \n", cid, "\n");

  // test if we were able to make change
  if (changeDue > 0.01) {
    statusString = "INSUFFICIENT_FUNDS"
    changeArray = [];
  }

  // reconstruct original cash register, for status="CLOSED" scenario (aka cid = changeDue)
  if (statusString == "CLOSED") {
    let n = 0;
    for (let m = (billTotals.length-1); m >= 0; m--) {
      changeArray[n] = [moneyTypes[m], billTotals[m]*moneyValues[m]];
      n++;
    }
  }
  // final output
  console.log("Final output:");
  let finalOutput = {
    status: statusString,
    change: changeArray,
  }
  
  console.log(finalOutput);
  return finalOutput;
}

// test example
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
