class Sprite {
  name: string;
  position: { x: number; y: number };
  ctx: CanvasRenderingContext2D;

  constructor(name: string, position: { x: number; y: number }) {
    this.name = name || 'Untitled Sprite';
    this.position = position || { x: 0, y: 0 };
    this.ctx = document.querySelectorAll('canvas')[0].getContext('2d');
  }

  draw = () => {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.position.x, this.position.y, 50, 150);
  };
}

export { Sprite };
