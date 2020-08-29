class Camera {

    constructor() {
        this.body = camera;
        this.position = {
            x: this.body.position.x,   
            y: this.body.position.y
        }
        this.velocityX = 0;
        this.velocityY = 0;
    }

    functions(){
        this.body.position.x = this.body.position.x + this.velocityX;
        this.body.position.y = this.body.position.y + this.velocityY;

        this.position = this.body.position;
    }
}