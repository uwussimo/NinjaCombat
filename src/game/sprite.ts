const gravity = 0.2;
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
    if (
      this.position.y + this.height + this.velocity.y >=
      document.body.clientHeight - 20
    ) {
      this.velocity.y = 0;
    } else {
      this.velocity.y += gravity;
    }
  };
}

export { Sprite };
