// Setup
//? Necessary Classes
import Effect from "./classes/Effect.js";
import Animation from "./classes/Animation.js";
// ? Global Variables
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
//? Setting Canvas Width & Height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//? Creating a Gradient for Particles
const gradient = ctx.createLinearGradient(0,0,window.innerWidth ,window.innerHeight);
          gradient.addColorStop(0,'#FAFDD6');
          gradient.addColorStop(0.3, '#E4E9BE');
          gradient.addColorStop(0.6, '#A2B38B');
          gradient.addColorStop(1, '#464E2E');





const main  = ((
    settings = {
    particleColor: "#C0EEF2",
    particleSize: {base: 10, radius: 5},
    particleSpeed: {base: 1, speed: 0.5},
    particleDensity: 400,
    }
    ) => 
    {
    
        ctx.fillStyle = gradient;
        ctx.strokeStyle = 'white';
    const effect = new Effect(canvas,settings);
    const animation = new Animation(ctx,effect);
    
    animation.animate();


})(); 