class Sprite {
  name: string;
  height: number;
  width: number;
  position: { x: number; y: number };
  ctx: CanvasRenderingContext2D;
  velocity: { x: number; y: number };

  constructor({
    name,
    position,
    velocity,
  }: {
    name?: string;
    position?: { x: number; y: number };
    velocity?: { x: number; y: number };
  }) {
    this.name = name || 'Untitled Sprite';
    this.position = position || { x: 0, y: 0 };
    this.ctx = document.querySelectorAll('canvas')[0].getContext('2d');
    this.velocity = velocity || { x: 0, y: 0 };
    this.height = 150;
    this.width = 50;
  }

  draw = () => {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  };

  update = () => {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    if (this.position.y > document.body.clientHeight - this.height) {
      this.velocity.y = -this.velocity.y;
    }
    if (this.position.y < 0) {
      this.velocity.y = -this.velocity.y;
    }
  };
}

export { Sprite };
