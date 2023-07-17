
const TILE_SIZE = 30;
const FPS = 30;
const SLEEP = 1000 / FPS;

enum RawTile {
  FLUX,
  UNBREAKABLE,
  STONE,
  PLAYER,
  AIR,
  FALLING_STONE,
  BOX,
  FALLING_BOX,
  KEY1,
  LOCK1,
  KEY2,
  LOCK2
}

interface Tile {
  isFlux(): boolean;
  isUnbreakable(): boolean;
  isStone(): boolean;
  isPlayer():boolean;
  isAir():boolean;
  isFalling_stone():boolean;
  isBox():boolean;
  isFalling_box():boolean;
  isKey1():boolean;
  isLock1():boolean;
  isKey2():boolean;
  isLock2():boolean;

  color(g: CanvasRenderingContext2D): void
  draw(g: CanvasRenderingContext2D, x: number, y: number): void;
}

class Flux implements Tile {
  color(g: CanvasRenderingContext2D): void {

  }
  isFlux(): boolean {
    return true;
  }

  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFalling_box(): boolean {
    return false;
  }

  isFalling_stone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isPlayer(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number) {
  }
}
class Unbreakable implements Tile {
  isFlux(): boolean {
    return true;
  }

  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFalling_box(): boolean {
    return false;
  }

  isFalling_stone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isPlayer(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  color(g: CanvasRenderingContext2D): void {
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
  }
}
class Stone implements Tile {
  color(g: CanvasRenderingContext2D): void {
  }
  isFlux(): boolean {
    return true;
  }

  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFalling_box(): boolean {
    return false;
  }

  isFalling_stone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isPlayer(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
  }
}

class Player implements Tile {
  isFlux(): boolean {
    return true;
  }

  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFalling_box(): boolean {
    return false;
  }

  isFalling_stone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isPlayer(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  color(g: CanvasRenderingContext2D): void {
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
  }
}
class Air implements Tile {
  color(g: CanvasRenderingContext2D): void {
  }
  isFlux(): boolean {
    return true;
  }

  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFalling_box(): boolean {
    return false;
  }

  isFalling_stone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isPlayer(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
  }


}
class Falling_stone implements Tile {
  isFlux(): boolean {
    return true;
  }

  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFalling_box(): boolean {
    return false;
  }

  isFalling_stone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isPlayer(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  color(g: CanvasRenderingContext2D): void {
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
  }
}
class Box implements Tile {
  color(g: CanvasRenderingContext2D): void {
  }
  isFlux(): boolean {
    return true;
  }

  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFalling_box(): boolean {
    return false;
  }

  isFalling_stone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isPlayer(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
  }
}
class Falling_box implements Tile {
  isFlux(): boolean {
    return true;
  }

  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFalling_box(): boolean {
    return false;
  }

  isFalling_stone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isPlayer(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  color(g: CanvasRenderingContext2D): void {
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
  }
}
class Key1 implements Tile {
  isFlux(): boolean {
    return true;
  }

  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFalling_box(): boolean {
    return false;
  }

  isFalling_stone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isPlayer(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  color(g: CanvasRenderingContext2D): void {
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
  }
}
class Lock1 implements Tile {
  isFlux(): boolean {
    return true;
  }

  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFalling_box(): boolean {
    return false;
  }

  isFalling_stone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isPlayer(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  color(g: CanvasRenderingContext2D): void {
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
  }
}
class Key2 implements Tile {
  isFlux(): boolean {
    return true;
  }

  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFalling_box(): boolean {
    return false;
  }

  isFalling_stone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isPlayer(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  color(g: CanvasRenderingContext2D): void {
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
  }
}
class Lock2 implements Tile {
  isFlux(): boolean {
    return true;
  }

  isAir(): boolean {
    return false;
  }

  isBox(): boolean {
    return false;
  }

  isFalling_box(): boolean {
    return false;
  }

  isFalling_stone(): boolean {
    return false;
  }

  isKey1(): boolean {
    return false;
  }

  isKey2(): boolean {
    return false;
  }

  isLock1(): boolean {
    return false;
  }

  isLock2(): boolean {
    return false;
  }

  isPlayer(): boolean {
    return false;
  }

  isStone(): boolean {
    return false;
  }

  isUnbreakable(): boolean {
    return false;
  }

  color(g: CanvasRenderingContext2D): void {
  }

  draw(g: CanvasRenderingContext2D, x: number, y: number): void {
  }
}

enum RawInput {
  UP, DOWN, LEFT, RIGHT
}


let playerx = 1;
let playery = 1;
let rawMap: RawTile[][] = [
  [2, 2, 2, 2, 2, 2, 2, 2],
  [2, 3, 0, 1, 1, 2, 0, 2],
  [2, 4, 2, 6, 1, 2, 0, 2],
  [2, 8, 4, 1, 1, 2, 0, 2],
  [2, 4, 1, 1, 1, 9, 0, 2],
  [2, 2, 2, 2, 2, 2, 2, 2],
];


function assertExhausted(x: never): never {
  throw new Error("Unexpected object: " + x);
}

function transformTile(tile: RawTile) {
  switch (tile) {
    case RawTile.FLUX: return new Flux();
    case RawTile.BOX: return  new Box();
    case RawTile.FALLING_BOX: return new Falling_box();
    case RawTile.KEY1: return new Key1();
    case RawTile.LOCK1: return new Lock1();
    case RawTile.KEY2: return new Key2();
    case RawTile.LOCK2: return new Lock2();
    case RawTile.AIR: return new Air();
    case RawTile.PLAYER: return new Player();
    case RawTile.UNBREAKABLE: return new Unbreakable();
    case RawTile.STONE: return new Stone();
    case RawTile.FALLING_STONE: return new Falling_stone();
    //
    default: assertExhausted(tile);
  }
}

let map: Tile[][];
function transformMap() {
  map = new Array(rawMap.length);
  for (let y = 0; y < rawMap.length; y++) {
    map[y] = new Array(rawMap[y].length);
    for (let x = 0; x < rawMap[y].length; x++) {
      map[y][x] = transformTile(rawMap[y][x]);
    }
  }
}

let inputs: Input[] = [];

function remove(tile: Tile) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === tile) {
        map[y][x] = new Air();
      }
    }
  }
}

function removeLock1() {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x].isLock1()) {
                map[y][x] = new Air();
            }
        }
    }
}


function removeLock2() {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x].isLock2()) {
                map[y][x] = new Air();
            }
        }
    }
}

function moveToTile(newx: number, newy: number) {
  map[playery][playerx] = new Air();
  map[newy][newx] = new Player();
  playerx = newx;
  playery = newy;
}

function moveHorizontal(dx: number) {
  if (map[playery][playerx + dx].isFlux()
    || map[playery][playerx + dx].isAir()) {
    moveToTile(playerx + dx, playery);
  } else if ((map[playery][playerx + dx].isStone()
    || map[playery][playerx + dx].isBox())
    && map[playery][playerx + dx + dx].isAir()
    && map[playery + 1][playerx + dx].isAir() == false) {
    map[playery][playerx + dx + dx] = map[playery][playerx + dx];
    moveToTile(playerx + dx, playery);
  } else if (map[playery][playerx + dx].isKey1()) {
    remove(new Key1());
    moveToTile(playerx + dx, playery);
  } else if (map[playery][playerx + dx].isKey2()) {
    remove(new Lock2());
    moveToTile(playerx + dx, playery);
  }
}

function moveVertical(dy: number) {
  if (map[playery + dy][playerx] === new Flux()
    || map[playery + dy][playerx] === new Air()) {
    moveToTile(playerx, playery + dy);
  } else if (map[playery + dy][playerx] === new Key1()) {
    // remove(new Lock1());
    removeLock1()
    moveToTile(playerx, playery + dy);
  } else if (map[playery + dy][playerx] === new Key2()) {
    remove(new Lock2());
    moveToTile(playerx, playery + dy);
  }
}

function update() {
  handleInputs();

  updateMap();
}

function handleInputs() {
  while (inputs.length > 0) {
    let current = inputs.pop();
    handleInput(current);
  }
}
function handleInput(current: Input) {
  // if (current.isRight())
  //   moveHorizontal(-1);
  // else if (current.isLeft())
  //   moveHorizontal(1);
  // else if (current.isUp())
  //   moveVertical(-1);
  // else if (current.isDown())
  //   moveVertical(1);
}

function updateMap() {
  for (let y = map.length - 1; y >= 0; y--) {
    for (let x = 0; x < map[y].length; x++) {
      updateTile(y, x);
    }
  }
}

function updateTile(y: number, x: number) {
  if ((map[y][x].isStone() || map[y][x].isFalling_stone())
      && map[y + 1][x].isAir()) {
    map[y + 1][x] = new Falling_stone()
    map[y][x] = new Air()
  } else if ((map[y][x].isBox() || map[y][x].isFalling_stone())
      && map[y + 1][x] === new Air()) {
    map[y + 1][x] = new Falling_stone();
    map[y][x] = new Air();
  } else if (map[y][x].isFalling_stone()) {
    map[y][x] = new Stone();
  } else if (map[y][x].isFalling_box()) {
    map[y][x] = new Box();
  }
}

function drawTile(g: CanvasRenderingContext2D,
                  y: number, x: number) {
  map[y][x].color(g);
  if (!map[y][x].isAir() && !map[y][x].isPlayer()) {
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
}

function drawMap(g: CanvasRenderingContext2D) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      drawTile(g, y, x);
    }
  }
}
interface Tile {
  // ...
  color(g: CanvasRenderingContext2D): void;
}


function colorOfTile(y: number, x: number, g: CanvasRenderingContext2D) {

  map[y][x].color(g);

  // if (map[y][x].isFlux())
  //   g.fillStyle = "#ccffcc";
  // else if (map[y][x].isUnbreakable())
  //   g.fillStyle = "#999999";
  // else if (map[y][x].isStone() || map[y][x].isFalling_stone())
  //   g.fillStyle = "#0000cc";
  // else if (map[y][x].isBox() || map[y][x].isFalling_box())
  //   g.fillStyle = "#8b4513";
  // else if (map[y][x].isKey1() || map[y][x].isLock1())
  //   g.fillStyle = "#ffcc00";
  // else if (map[y][x].isKey2() || map[y][x].isLock2())
  //   g.fillStyle = "#00ccff";
}


function drawPlayer(g: CanvasRenderingContext2D) {
  g.fillStyle = "#ff0000";
  g.fillRect(playerx * TILE_SIZE, playery * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}

function createGraphics() {
  let canvas = document.getElementById("GameCanvas") as HTMLCanvasElement;
  let g = canvas.getContext("2d");

  g.clearRect(0, 0, canvas.width, canvas.height);
  return g;
}

function draw() {
  let g = createGraphics();

  // Draw map
  drawMap(g);

  // Draw player
  drawPlayer(g);
}

function gameLoop() {
  let before = Date.now();
  update();
  draw();
  let after = Date.now();
  let frameTime = after - before;
  let sleep = SLEEP - frameTime;
  setTimeout(() => gameLoop(), sleep);
}

window.onload = () => {
  transformMap();
  gameLoop();
}

interface Input {
  handle(): void;
}
class Right implements Input {
  // handleInput() {
  //   if (false)
  //     moveHorizontal(-1);
  //   else if (false)
  //     moveHorizontal(1);
  //   else if (false)
  //     moveVertical(-1);
  //   else if (true)
  //     moveVertical(1);
  // }
  handle() {
    moveHorizontal(1);
  }


}

class Left implements Input {
  handle() {
    moveVertical(1);
  }
}

class Up implements Input {
  handle() {
    moveVertical(1);
  }
}

class Down implements Input {
    handle() {
        moveVertical(-1);
    }
}
// class Down implements Input {
//   isDown(): boolean {
//     return true;
//   }
//
//   isLeft(): boolean {
//     return false;
//   }
//
//   isRight(): boolean {
//     return false;
//   }
//
//   isUp(): boolean {
//     return false;
//   }
//
// }

const LEFT_KEY = "ArrowLeft";
const UP_KEY = "ArrowUp";
const RIGHT_KEY = "ArrowRight";
const DOWN_KEY = "ArrowDown";
window.addEventListener("keydown", e => {
  if (e.key === LEFT_KEY || e.key === "a") inputs.push(new Left());
  else if (e.key === UP_KEY || e.key === "w") inputs.push(new Up());
  else if (e.key === RIGHT_KEY || e.key === "d") inputs.push(new Right());
  else if (e.key === DOWN_KEY || e.key === "s") inputs.push(new Down());
});

