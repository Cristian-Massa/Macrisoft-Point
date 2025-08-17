export class Renderer {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  constructor() {
    this.canvas = document.getElementById("window") as HTMLCanvasElement;
    this.ctx = this.canvas.getContext("2d")!;
    this._setCanvasDimension();
  }
  private _setCanvasDimension() {
    const { innerHeight, innerWidth } = window;
    this.canvas.width = innerWidth;
    this.canvas.height = innerHeight;
  }
  draw(
    currentPos: { x: number; y: number },
    lastPos: { x: number; y: number },
    color: string,
    size: number
  ) {
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = size;
    this.ctx.lineCap = "round";
    this.ctx.beginPath();
    this.ctx.moveTo(lastPos.x, lastPos.y);
    this.ctx.lineTo(currentPos.x, currentPos.y);
    this.ctx.stroke();
  }

  reset() {
    this.ctx.clearRect(0, 0, 100000, 100000);
  }
}
