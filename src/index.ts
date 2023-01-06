import './styles/main.css';
import { Game, Sprite } from './game/index';

const game = new Game();
game.init();

const warior1 = new Sprite('Scooty', { x: 0, y: 0 });
warior1.draw();
console.log(warior1);

const warior2 = new Sprite('Ninja', {
  x: document.body.clientHeight,
  y: 0,
});
warior2.draw();
console.log(warior2);
