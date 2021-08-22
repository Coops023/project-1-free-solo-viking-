

class Background {
    constructor(canvasContext) {
        this.ctx = canvasContext;
        this.x = 0;
        this.y = 0;
        this.width = 500;
        this.height = 500;
    }
    onLoad(fn) {
        this.img = new Image()
        this.img.addEventListener("load", () => {
            fn()
        })
        this.img.src = "/assets/background.png"
    }

    draw() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}