import { Pencil } from "./Pencil";
import { Renderer } from "./Renderer";

export class Paint {
  render: Renderer;
  pencil: Pencil;
  resetButton: HTMLButtonElement;
  constructor() {
    this.resetButton = document.getElementById("reset") as HTMLButtonElement;

    this.pencil = new Pencil();
    this.render = new Renderer();

    this.listenLeftClick();
    this.listenResetButton();

    window.requestAnimationFrame(() => this.loop());
  }

  private listenLeftClick() {
    let initialPos = { x: 1, y: 1 };
    this.render.canvas.onmousedown = (event) => {
      initialPos = this.pencil._setPencilPosition(event);
    };
    this.render.canvas.onmousemove = (event) => {
      if (event.buttons === 1) {
        const currentPos = this.pencil._setPencilPosition(event);
        this.render.draw(
          currentPos,
          initialPos,
          this.pencil.color,
          this.pencil.size
        );
        initialPos = currentPos;
      }
    };
  }

  private listenResetButton() {
    this.resetButton.addEventListener("click", () => {
      this.render.reset();
    });
  }

  private loop() {
    window.requestAnimationFrame(() => this.loop());
  }
}
