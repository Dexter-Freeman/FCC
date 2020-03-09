function convertToRoman(num) {
	let innerNum = num;

	const thousands = Math.trunc( innerNum / 1000 );
	innerNum = innerNum - thousands * 1000;

	const hundreds = Math.trunc( innerNum / 100 );
	innerNum = innerNum - hundreds * 100;

	const dozens = Math.trunc( innerNum / 10 );
	innerNum = innerNum - dozens * 10;

	const toTen = num => {
		switch(num) {
			case 1:
				return 'I';
			case 2:
				return 'II';
			case 3:
				return 'III';
			case 4:
				return 'IV';
			case 5:
				return 'V';
			case 6:
				return 'VI';
			case 7:
				return 'VII';
			case 8:
				return 'VIII';
			case 9:
				return 'IX';
			default:
				return '';
		};
	};

	const toHundred = num => {
		switch(num) {
			case 1:
				return 'X';
			case 2:
				return 'XX';
			case 3:
				return 'XXX';
			case 4:
				return 'XL';
			case 5:
				return 'L';
			case 6:
				return 'LX';
			case 7:
				return 'LXX';
			case 8:
				return 'LXXX';
			case 9:
				return 'XC';
			default:
				return '';
		};
	};

	const toThousand = num => {
		switch(num) {
			case 1:
				return 'C';
			case 2:
				return 'CC';
			case 3:
				return 'CCC';
			case 4:
				return 'CD';
			case 5:
				return 'D';
			case 6:
				return 'DC';
			case 7:
				return 'DCC';
			case 8:
				return 'DCCC';
			case 9:
				return 'CM';
			default:
				return '';
		};
	};

	const upToThreeThousands = num => {
		switch(num) {
			case 1:
				return 'M';
			case 2:
				return 'MM';
			case 3:
				return 'MMM';
			default:
				return '';
		};
	};

	return `${upToThreeThousands(thousands)}${toThousand(hundreds)}${toHundred(dozens)}${toTen(innerNum)}`;
	
}


convertToRoman(36);
convertToRoman(2);
convertToRoman(3);
convertToRoman(4);
convertToRoman(5);
convertToRoman(9);
convertToRoman(12);
convertToRoman(16);
convertToRoman(29);
convertToRoman(44);
convertToRoman(45);
convertToRoman(68);
convertToRoman(83);
convertToRoman(97);
convertToRoman(99);
convertToRoman(400);
convertToRoman(500);
convertToRoman(501);
convertToRoman(649);
convertToRoman(798);
convertToRoman(891);
convertToRoman(1000);
convertToRoman(1004);
convertToRoman(1006);
convertToRoman(1023);
convertToRoman(2014);
convertToRoman(3999);
