class Game {
  name: string;
  root: HTMLElement;
  gameCanvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor() {
    this.name = '2dCombat';
    document.body.style.overflow = 'hidden';

    this.gameCanvas = document.createElement('canvas');
    this.ctx = this.gameCanvas.getContext('2d');
    this.root = document.getElementById('root');
    this.root.appendChild(this.gameCanvas);
  }
  init = () => {
    this.gameCanvas.style.border = '4px dashed white';
    this.gameCanvas.width = document.body.clientWidth - 20;
    this.gameCanvas.height = document.body.clientHeight - 20;
    this.ctx.fillRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);

    // Add Full Screen Button
    const fullScreenBtn = document.createElement('button');
    fullScreenBtn.innerText = '💯 Full Screen';
    fullScreenBtn.classList.add('full-screen-btn');
    this.root.appendChild(fullScreenBtn);
    fullScreenBtn.addEventListener('click', () => {
      this.gameCanvas.requestFullscreen();
    });
  };
}

// Path: src\game.ts
export { Game };
