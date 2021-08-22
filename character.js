const sprite = '/assets/climber-images.png'
const spriteFrames = 2;
let spriteWidth = 0;
let spriteHeight = 0;





class Character {

    constructor(ctx, options) {
        this.ctx = ctx;
        this.posX = options.posX;
        this.posY = options.posY;
        this.scale = options.scale
        this.moveSpeed = options.moveSpeed;

        this.spriteWidth = 0
        this.spriteHeight = 0;
        this.frameWidth = 0
        this.frameHeight = 0;
        this.currentFrame = 0;

    }

    onLoad(fn) {
        this.spriteImg = new Image()
        this.spriteImg.addEventListener('load', () => {
            this.spriteWidth = this.spriteImg.width;
            this.spriteHeight = this.spriteImg.height;
            this.frameWidth = this.spriteWidth / spriteFrames;
            this.frameHeight = this.spriteHeight;
            fn()
        })
        this.spriteImg.src = sprite;
    }

    move(deltaX, deltaY, canvasWidth, canvasHeight) {
        const curX = this.posX
        const curY = this.posY

        this.posY = this.posY + (this.moveSpeed * deltaY)
        this.posX = this.posX + (this.moveSpeed * deltaX)

        const maxX = canvasWidth - (this.scale * this.frameWidth)
        const maxY = canvasHeight - (this.scale * this.frameHeight)

        if (this.posX < 0) {
            this.posX = 0;
        } else if (this.posX > maxX) {
            this.posX = maxX
        }
        if (this.posY < 0) {
            this.posY = 0;
        } else if (this.posY > maxY) {
            this.posY = maxY
        }


        if (curX !== this.posX || curY !== this.posY) {
            this.currentFrame++
            if (this.currentFrame >= spriteFrames) {
                this.currentFrame = 0
            }
        }



    }


    draw() {
        const width = this.spriteWidth / spriteFrames
        this.ctx.drawImage(
            this.spriteImg,
            width * this.currentFrame,
            0,
            width,
            this.spriteHeight,
            this.posX,
            this.posY,
            width * this.scale,
            this.spriteHeight * this.scale
        )


        // ctx.drawImage(img,
        //     frameX * width, frameY * height, width, height,
        //     canvasX, canvasY, scaledWidth, scaledHeight);
    }


}