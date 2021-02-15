const ships = [
  {
    name: "Carrier",
    size: 5,
    position: [],
  },
  {
    name: "Battleship",
    size: 4,
    position: [],
  },
  {
    name: "Submarine",
    size: 3,
    position: [],
  },
  {
    name: "Cruiser",
    size: 3,
    position: [],
  },
  {
    name: "Destroyer",
    size: 2,
    position: [],
  },
];

class Enemy {
  constructor() {
    this.enemyFleet = Array.from(ships);
    this.initMap();
    this.fleetSize = 5;
    this.totalCount = 0;
    this.hitCount = 0;
    this.missCount = 0;
  }

  initMap() {
    this.enemyMap = [];
    for (let i = 0; i < 100; i++) {
      this.enemyMap.push(-1);
    }
    for (let i = 0; i < this.enemyFleet.length; i++) {
      let coordinates;
      let shipDir = Math.floor(Math.random() * 2); // 0 = vertical, 1 = horizontal
      do {
        coordinates = Math.floor(Math.random() * 96);
      } while (!this.canPlace(this.enemyFleet[i], coordinates, shipDir));
      this.placeShip(this.enemyFleet[i], i, coordinates, shipDir);
    }
  }

  canPlace(ship, coordinates, direction) {
    if (direction === 1) {
      if (ship.size > 10 - (coordinates % 10)) {
        return false;
      }
      for (let i = 0; i < ship.size; i++, coordinates++) {
        if (this.enemyMap[coordinates] !== -1) {
          return false;
        }
      }
      return true;
    } else {
      if (ship.size > 10 - Math.floor(coordinates / 10)) {
        return false;
      }
      for (let i = 0; i < ship.size; i++, coordinates += 10) {
        if (this.enemyMap[coordinates] !== -1) {
          return false;
        }
      }
      return true;
    }
  }

  placeShip(ship, id, coordinates, direction) {
    if (direction === 1) {
      for (let k = 0; k < ship.size; k++, coordinates++) {
        this.enemyMap[coordinates] = id;
        ship.position[k] = coordinates; // Adding new property [position], so that each ship will store its own coordinates
      }
    } else {
      for (let k = 0; k < ship.size; k++, coordinates += 10) {
        this.enemyMap[coordinates] = id;
        ship.position[k] = coordinates;
      }
    }
  }

  fire(coordinate) {
    let curButton = document.getElementById(coordinate);
    this.totalHits();
    if (this.enemyMap[coordinate] !== -1) {
      let ship = this.enemyFleet[this.enemyMap[coordinate]];
      ship.size--;
      if (ship.size === 0) {
        this.sunkColor(this.enemyMap[coordinate]);
        let fireText = document.getElementById("fireText");
        fireText.innerText = ship.name + " was sunk!";
        this.fleetSize--;
        if (this.fleetSize === 0) {
          fireText.innerText =
            "Game over! You destroyed the fleet in " +
            this.totalCount +
            " moves";
          /*document.getElementById('total').remove();*/
          return -3;
        }
        this.enemyMap[coordinate] = -1;
        return;
      }
      let returnNum = this.enemyMap[coordinate];
      this.enemyMap[coordinate] = -1;
      return returnNum;
    } else if (curButton.style.backgroundColor !== "white") {
      let fireText = document.getElementById("fireText");
      fireText.innerText = "Already fired position!";
      return -2;
    } else {
      return -1;
    }
  }

  buttonClick(button) {
    this.totalCount++;
    let returnVal = this.fire(parseInt(button.id));
    document.getElementById("total").innerText = "Total: " + this.totalCount;
    if (returnVal >= 0) {
      if (button.style.backgroundColor !== "red") {
        this.buttonColor(button, returnVal);
        let fireText = document.getElementById("fireText");
        fireText.innerText = ships[returnVal].name + " was hit!";
        this.hitCount++;
        this.missCount = 0;
        if (this.hitCount > 1) {
          fireText.innerText =
            ships[returnVal].name + " was hit x" + this.hitCount + "!";
        }
      }
    } else if (returnVal === -1) {
      if (
        button.style.backgroundColor !== "green" &&
        button.style.backgroundColor !== "black"
      ) {
        button.style.backgroundColor = "red";
        let fireText = document.getElementById("fireText");
        fireText.innerText = "MISS!";
        this.missCount++;
        this.hitCount = 0;
        if (this.missCount > 1) {
          fireText.innerText = "MISS x" + this.missCount + "!";
        }
      }
    } else if (returnVal === -3) {
      let blocks = document.getElementsByClassName("block");
      Array.from(blocks).forEach((block) => {
        let newBut = block.cloneNode(true);
        newBut.style.opacity = "0.5";
        block.parentNode.replaceChild(newBut, block);
      });
    }
  }

  buttonColor(button, val) {
    switch (this.enemyFleet[val].name) {
      case "Carrier":
        button.style.backgroundColor = "green";
        break;
      case "Battleship":
        button.style.backgroundColor = "purple";
        break;
      case "Submarine":
        button.style.backgroundColor = "yellow";
        break;
      case "Cruiser":
        button.style.backgroundColor = "blue";
        break;
      case "Destroyer":
        button.style.backgroundColor = "cyan";
        break;
    }
  }

  sunkColor(shipIndex) {
    for (let i = 0; i < this.enemyFleet[shipIndex].position.length; i++) {
      let button = document.getElementById(ships[shipIndex].position[i]);
      this.buttonColor(button, shipIndex);
      button.style.outline = "2px solid black";
    }
  }

  totalHits() {
    let body = document.body;
    let total = document.getElementById("total");
    total.innerText = "Total: " + this.totalCount;
    body.appendChild(total);
  }

  arrIndex(letter, number) {
    switch (letter) {
      case "B":
      case "b":
        number += 10;
        break;
      case "C":
      case "c":
        number += 20;
        break;
      case "D":
      case "d":
        number += 30;
        break;
      case "E":
      case "e":
        number += 40;
        break;
      case "F":
      case "f":
        number += 50;
        break;
      case "G":
      case "g":
        number += 60;
        break;
      case "H":
      case "h":
        number += 70;
        break;
      case "I":
      case "i":
        number += 80;
        break;
      case "J":
      case "j":
        number += 90;
        break;
    }
    number--;
    return number;
  }
}

let enemy = new Enemy();
export { enemy };
