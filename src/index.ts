import './styles/main.css';
import { Game, Sprite } from './game/index';

const game = new Game();
game.init();

const warior1 = new Sprite({
  name: 'Scooty',
  position: { x: 30, y: 0 },
  velocity: { x: 0, y: 0 },
});
warior1.draw();
console.log(warior1);

const warior2 = new Sprite({
  name: 'Ninja',
  position: {
    x: document.body.clientWidth - 100,
    y: 0,
  },
  velocity: { x: 0, y: 0 },
});
warior2.draw();
console.log(warior2);

const animate = () => {
  game.ctx.clearRect(0, 0, game.gameCanvas.width, game.gameCanvas.height);
  window.requestAnimationFrame(animate);
  warior1.update();
  warior2.update();
};
animate();
