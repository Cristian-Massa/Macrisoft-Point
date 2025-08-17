export class Pencil {
  size: number;
  pencilType: string;
  color: string;
  palette: HTMLInputElement;
  pencilSizeInput: HTMLInputElement;
  constructor() {
    this.palette = document.getElementById("palette") as HTMLInputElement;
    this.pencilSizeInput = document.getElementById(
      "pencil-size"
    ) as HTMLInputElement;
    (this.pencilType = "round"), (this.size = 10);
    this.color = "#000";

    this.changeColor();
    this.changePencilSize();
  }
  _setPencilPosition(event: MouseEvent) {
    return { x: event.offsetX, y: event.offsetY };
  }

  private changePencilSize() {
    this.pencilSizeInput.addEventListener("change", () => {
      const strToNum = Number(this.pencilSizeInput.value);

      if (isNaN(strToNum)) return;
      this.size = Number(this.pencilSizeInput.value);
    });
  }

  private changeColor() {
    this.palette.addEventListener("change", () => {
      this.color = this.palette.value;
    });
  }
}
