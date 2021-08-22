
window.onload = () => {

    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    let keyPresses = {}

    const climber = new Character(ctx, {
        posX: 220,
        posY: 350,
        scale: 0.5,
        moveSpeed: 2
    })
    const background = new Background(ctx)

    //event listeners
    window.addEventListener('keydown', keyDownListner, false);
    function keyDownListner(event) {
        keyPresses[event.key] = true;
    }
    window.addEventListener('keyup', keyUpListner, false);
    function keyUpListner(event) {
        keyPresses[event.key] = false;
    }

    //load character
    let climberLoaded = false;
    let bgLoaded = false;
    background.onLoad(() => {
        bgLoaded = true;
        console.log("bg loaded")
        if (climberLoaded && bgLoaded) { window.requestAnimationFrame(gameLoop) }
    })
    climber.onLoad(() => {
        climberLoaded = true;
        console.log("climber loaded")
        if (climberLoaded && bgLoaded) { window.requestAnimationFrame(gameLoop) }

    })

    // game loop
    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let deltaX = 0;
        let deltaY = 0;

        if (keyPresses.ArrowUp) {
            deltaY = -1
        } else if (keyPresses.ArrowDown) {
            deltaY = 1
        }
        if (keyPresses.ArrowLeft) {
            deltaX = -1
        } else if (keyPresses.ArrowRight) {
            deltaX = 1
        }
        climber.move(deltaX, deltaY, canvas.width, canvas.height)

        background.draw()
        climber.draw()


        window.requestAnimationFrame(gameLoop);
    }




}