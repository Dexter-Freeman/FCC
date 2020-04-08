function checkCashRegister(price, cash, cid) {
	const INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS';
	const CLOSED = 'CLOSED';
	const OPEN = 'OPEN';
	const VALUES = {
		'PENNY': 0.01,
		'NICKEL': 0.05,
		'DIME': 0.1,
		'QUARTER': 0.25,
		'ONE': 1,
		'FIVE': 5,
		'TEN': 10,
		'TWENTY': 20,
		'ONE HUNDRED': 100
	};

	let changeValue = cash - price;
	let cidValue = cid.reduce((acc, value) => {
		return acc + value[1];
	}, 0);

	cidValue = Math.round(cidValue * 100) / 100;

	let change = [];
	let status = CLOSED;

	if ( cidValue === changeValue ) {
		change = cid;
		return (
			{ 
				status, 
				change
			}
		)
	}

	for (let i = cid.length - 1; i >= 0; i--) {

		if ( changeValue >= VALUES[cid[i][0]] && cid[i][1] > 0 && changeValue < cidValue) {
			
				let ch = [cid[i][0], 0];
				
				while ( changeValue > 0 && cid[i][1] > 0 && changeValue >= VALUES[cid[i][0]] ) {

					ch[1] = ch[1] + VALUES[cid[i][0]];
					cid[i][1] = cid[i][1] - VALUES[cid[i][0]];
					changeValue = changeValue - VALUES[cid[i][0]];
					changeValue = Math.round(changeValue * 100) / 100;

				}

				change.push(ch);
		}
	}

	changeValue > 0 ? change = [] : null;

	status = change.length > 0 ?  OPEN : INSUFFICIENT_FUNDS;

	return (
		{
			status, 
			change 
		}
	)	
	
};
  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);