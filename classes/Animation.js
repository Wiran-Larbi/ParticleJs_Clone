export default class Animation {

    ctx;
    effect;

    constructor(ctx,effect) {
        this.ctx = ctx;
        this.effect = effect;
        
    }

    animate() {
        // console.log(this.ctx);
        // console.log(this.effect);
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.effect.handleParticles(this.ctx);
        requestAnimationFrame(this.animate.bind(this));
    }



}