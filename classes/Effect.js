import Particle from "./Particle.js";

export default class Effect {
    #canvas;
    #width;
    #height;
    #particles = [];
    #numberOfParticles = 50;
    #settings;
    
    constructor(canvas,settings) {
        this.#canvas = canvas;
        this.#settings = settings;
        this.#width = this.#canvas.width;
        this.#height = this.#canvas.height;
        this.#numberOfParticles = settings.particleDensity;

        // * Creating The Particles
        this.createParticles();
    }
    get width() {
        return this.#width;
    }
    get height() {
        return this.#height;
    }

    createParticles() {
        for (let index = 0; index < this.#numberOfParticles; index++) {
            this.#particles.push(new Particle(this,this.#settings));
        }
    }

    handleParticles(ctx) {
        this.connectParticles(ctx);
        this.#particles.forEach(particle => {
            particle.draw(ctx);
            particle.update();
        })
    }
    connectParticles(ctx) {
        const maxDistance = this.#settings.particlesConnectDistance ?? 100;
        for(let e = 0; e < this.#particles.length; e++) {
            for(let o = e; o < this.#particles.length; o++) {
                const dx = this.#particles[e].x - this.#particles[o].x;
                const dy = this.#particles[e].y - this.#particles[o].y;
                const distance = Math.hypot(dx, dy);

                if(distance < maxDistance) {
                    ctx.save();
                    const opacity = 1.2 - (distance / maxDistance);
                    ctx.globalAlpha = opacity;
                    ctx.beginPath();
                    ctx.moveTo(this.#particles[e].x,this.#particles[e].y);
                    ctx.lineTo(this.#particles[o].x,this.#particles[o].y);
                    ctx.stroke();
                    ctx.restore();
                }

            }
        }
    }

    


}