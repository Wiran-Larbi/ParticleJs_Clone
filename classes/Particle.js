export default class Particle {
    #x;
    #y;
    #vx;
    #vy;
    #radius;
    #effect;
    #settings;

    constructor(effect,settings) {
        this.#effect = effect;
        this.#settings = settings; //? Particle Draw Style Settings 
        
        this.#radius = Math.random() * settings.particleSize.base + settings.particleSize.radius; //* in pixels
        this.#x = this.#radius + Math.random() * (this.#effect.width - this.#radius * 2);
        this.#y = this.#radius + Math.random() * (this.#effect.height - this.#radius *2);

        //* Velocity
        this.#vx = Math.random() * settings.particleSpeed.base - settings.particleSpeed.speed;
        this.#vy = Math.random() * settings.particleSpeed.base - settings.particleSpeed.speed;

        
    }
    get x(){
        return this.#x;
    }
    get y(){
        return this.#y;
    }

    draw(ctx) {
        //ctx.fillStyle = `hsl(${this.#x * 0.5},56%,43%)`;
        //ctx.fillStyle = this.#settings.fillStyle;
        ctx.beginPath();
        ctx.arc(this.#x,this.#y,this.#radius,0,Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        }

    update() {
        // ******  BASE CODE STRUCTURE   ******//
        this.#x += this.#vx;
        this.#y += this.#vy;
        // ? Bouncing Effect
        if (this.#x > this.#effect.width - this.#radius || this.#x < this.#radius) {
            this.#vx *= - 1;
        }
        if (this.#y > this.#effect.width - this.#radius || this.#y < this.#radius) {
            this.#vy *= - 1;
        }
        //.***********************************.//
    }



}