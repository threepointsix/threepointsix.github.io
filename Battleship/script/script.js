import { enemy } from "./battleship.js";

function enemyTable() {
	let battleMaps = document.getElementById('battleMaps'),
		tbl = document.createElement('table');

	tbl.style.margin = '0 auto';

	let letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

	for (let i = 0; i < 10; i++) {
		let tr = tbl.insertRow();
		for (let j = 0; j < 10; j++) {
			let td = tr.insertCell();
			let block = td.appendChild(document.createElement("div"));
			block.className = 'block';
			block.style.width = '3vw';
			block.style.height = block.style.width;
			block.style.background = 'white';
			block.style.outline = 'none';
			block.style.margin = '0 0';
			block.style.padding = '0 0';
			block.style.border = '1px solid black';
			block.id = enemy.arrIndex(letterArr[i].toString(), j + 1).toString();
			block.addEventListener("click", function () { enemy.buttonClick(block); });
		}
	}
	battleMaps.appendChild(tbl);
}

function userTable() {
	let battleMaps = document.getElementById('battleMaps'),
		tbl = document.createElement('table');

	tbl.style.margin = '0 auto';

	let letterArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

	for (let i = 0; i < 10; i++) {
		let tr = tbl.insertRow();
		for (let j = 0; j < 10; j++) {
			let td = tr.insertCell();
			let block = td.appendChild(document.createElement("div"));
			block.className = 'block';
			block.style.width = '30px';
			block.style.height = '30px';
			block.style.background = 'white';
			block.style.outline = 'none';
			block.style.margin = '0 0';
			block.style.padding = '0 0';
			block.style.border = '1px solid black';
			block.id = arrIndex(letterArr[i].toString(), j + 1).toString();
		}
	}
	battleMaps.appendChild(tbl);
}

enemyTable();
// userTable();