import './styles/main.css';
import { Game, Sprite } from './game/index';

const game = new Game();
game.init();

const warior1 = new Sprite({
  name: 'Scooty',
  position: { x: 30, y: 0 },
  velocity: { x: 0, y: 5 },
});
warior1.keyboardController({
  arrowUp: 'w',
  arrowDown: 's',
  arrowLeft: 'a',
  arrowRight: 'd',
});

const warior2 = new Sprite({
  name: 'Ninja',
  position: {
    x: document.body.clientWidth - 100,
    y: 0,
  },
  velocity: { x: 0, y: 5 },
});
warior2.keyboardController({
  arrowUp: 'ArrowUp',
  arrowDown: 'ArrowDown',
  arrowLeft: 'ArrowLeft',
  arrowRight: 'ArrowRight',
});

const animate = () => {
  game.ctx.clearRect(0, 0, game.gameCanvas.width, game.gameCanvas.height);
  warior1.update();
  warior2.update();
  window.requestAnimationFrame(animate);
};
animate();
