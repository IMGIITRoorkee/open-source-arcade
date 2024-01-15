const scoreEl = document.querySelector('#scoreEl')

const canvas = document.querySelector('canvas')
const c= canvas.getContext('2d')
canvas.width=1024
canvas.height=576
class Player{
    constructor(){
       
        this.velocity ={
            x:0,
            y:0
        }
        this.rotation=0
        this.opacity=1
        const image = new Image()
        image.src='blob-removebg-preview (2) (1).png'
    
        
        image.onload = () => {
            this.image=image
            this.width=image.width*0.5
            this.height=image.height*0.5
            this.position = {
                x: canvas.width/2 -this.height/2,
                y:0
            }
        }
        }
        draw(){
            // c.fillStyle ='red'
            // c.fillRect(this.position.x , this.position.y, this.width, this.height)
            c.save()
            c.globalAlpha=this.opacity
            c.translate(player.position.x + player.width/2 ,player.position.y + player.height/2)
            c.rotate(this.rotation)
            c.translate(-player.position.x - player.width/2 ,-player.position.y - player.height/2)

            c.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)
            c.restore()
    
        }
        update(){
            if(this.image){
            this.draw()
            this.position.x += this.velocity.x
            }
        }
    }
    class Projectile{
        constructor({position,velocity}){
            this.position=position
            this.velocity=velocity
            this.radius = 10
        }
        draw() {
            c.beginPath();
            const gradient = c.createRadialGradient(
              this.position.x,
              this.position.y,
              0,
              this.position.x,
              this.position.y,
              this.radius
            );
            gradient.addColorStop(0, 'white');
            gradient.addColorStop(1, 'lightgray');
            c.fillStyle = gradient;
            c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
            c.fill();
            c.closePath();
          }
          
        update(){
            this.draw()
            this.position.x+= this.velocity.x
            this.position.y+=this.velocity.y
        }
    }
    class Particle{
        constructor({position,velocity,radius,color,fades}){
            this.position=position
            this.velocity=velocity
            this.radius = radius
            this.color=color
            this.opacity=1
            this.fades=fades
        }
        draw() {
            c.save()
            c.globalAlpha=this.opacity
            c.beginPath();
           
            c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
            c.fillStyle = this.color;
            c.fill();
            c.closePath();
            c.restore()
          }
          
        update(){

            this.draw()
            this.position.x+= this.velocity.x
            this.position.y+=this.velocity.y
            if(this.fades)this.opacity+=-0.01
        }
    }
    class InvaderProjectile{
        constructor({position,velocity}){
            this.position=position
            this.velocity=velocity
            this.width =3
            this.height=10
        }
        draw() {
            c.fillStyle='red'
         c.fillRect(this.position.x,this.position.y,this.width,this.height)
          }
          
        update(){
            this.draw()
            this.position.x+= this.velocity.x
            this.position.y+=this.velocity.y
        }
    }
    class Invader{
        
                constructor({position}) {
                  this.velocity = {
                    x: 0,
                    y:0
                  };
                  const image = new Image();
                  image.src = 'istockphoto-1208621500-612x612-removebg-preview.png';
                  image.onload = () => {
                    this.image = image;
                    this.width = image.width * 0.1;
                    this.height = image.height * 0.1;
                    this.position = {
                      x: position.x,
                      y: position.y
                    };
                  };
                }
              
              
              
    
        draw(){
            // c.fillStyle ='red'
            // c.fillRect(this.position.x , this.position.y, this.width, this.height)

            c.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)
    
        }
        update({velocity}){
            if(this.image){
            this.draw()
            this.position.x += velocity.x
            this.position.y += velocity.y

            }
        }
        shoot(invaderProjectiles){
            invaderProjectiles.push(new InvaderProjectile({
                position:{
                    x:this.position.x+ this.width / 2,
                    y:this.position.y+this.height
                },
                velocity:{
                    x:0,
                    y:-5
                }
            }))

        }
    }
    class Grid{
        constructor(){
            this.position={
                x:0,
                y:0
            }
            this.velocity={
                x:4,
                y:0
            }
            this.invaders=[]
 const columns= Math.floor(Math.random() * 10 +5)

const rows= Math.floor(Math.random() * 5 + 2)
this.width= columns*50
                    for (let i = 0; i < columns; i++) {
                        for(let j=0;j<rows;j++){
                this.invaders.push(
                    new Invader({
                        position:{
                            x:i*50,
                            y:500 +j*50
                        }
                        }));
                     } }
             console.log(this.invaders) 
            
        }
        update(){
            this.position.x += this.velocity.x
            this.position.y+=this.velocity.y
            this.velocity.y=0
            if(this.position.x +this.width >=canvas.width || this.position.x<=0){
                this.velocity.x= -this.velocity.x
                this.velocity.y=-20
            }
        }
    }

    const player = new Player()
    const projectiles =[]
    const grids=[]
    const invaderProjectiles =[]
const particles=[]
    
    const keys={
        a:{
            pressed:false
        },
        d:{
            pressed:false
        },
        space:{
            pressed:false
        }
    }
    let firstGridDestroyed = false;
    let frames=0
    let randomInterval = Math.floor( Math.random() *500 +500)
    let game ={
        over:false,
        active:true
    }
    let score =0
    for(let i=0;i<50;i++)
    {  particles.push(new Particle({position:{
          x:Math.random()*canvas.width,
          y:Math.random()*canvas.height
         }
      ,
  velocity:{
      x:0,
      y:-1
  },
  radius:Math.random()*3,
  color: 'white'
})) }
function endGame() {
    let startDiv = document.getElementById('start');
    let gameCanvas = document.getElementById('canvas');
    let gameOver = document.getElementById('over');
    let playAgainButton = document.getElementById('playAgain');
    hehe.innerHTML = score;

    startDiv.style.display = 'none';
    gameCanvas.style.display = 'none';
    gameOver.style.display = 'block';
    playAgainButton.style.display = 'block';
  
    game.active = true;
    game.over=true;
    player.opacity = 1;
    start();
  }
  
function startGame() {
    let startDiv = document.getElementById('start');
    let gameCanvas = document.getElementById('canvas');
    let endGame = document.getElementById('over');
    let playAgainButton = document.getElementById('playAgain');
  
    startDiv.style.display = 'none';
    gameCanvas.style.display = 'block';
    endGame.style.display = 'none';
    playAgainButton.style.display = 'none';
  
    // Reset game variables
    game.over = false;
    game.active = true;
    score = 0;
    scoreEl.innerHTML = score;
    player.opacity = 1;
    projectiles.length = 0;
    grids.length = 0;
    invaderProjectiles.length = 0;
    particles.length = 0;
  
    // Re-initialize objects
    player.position.x = canvas.width / 2 - player.height / 2;
    player.velocity.x = 0;
    player.rotation = 0;
    grids.push(new Grid());
    grids.velocity.x=4;
    grids.velocity.y=0;
    

    animate();
  }
  

function playHitSound() {
    const hitSound = document.getElementById('hitSound');
    hitSound.currentTime = 0; // Reset the sound to the beginning
    hitSound.volume = 0.5;

    hitSound.play();
  }
  function stopHitSound() {
    const hitSound = document.getElementById('hitSound');
    hitSound.currentTime = 0; // Reset the sound to the beginning
  
    hitSound.pause(); // Use pause() instead of play()
  
    
  }
  
  function playKillSound() {
    const hitSound = document.getElementById('killSound');
    hitSound.currentTime = 0; // Reset the sound to the beginning
    hitSound.volume = 0.5;

    hitSound.play();
  }
  function playFireSound() {
    const hitSound = document.getElementById('fireSound');
    hitSound.currentTime = 0; // Reset the sound to the beginning
    hitSound.volume = 0.5;

    hitSound.play();
  }
  
    function createParticles({object,color,fades}){
        for(let i=0;i<15;i++)
        {  particles.push(new Particle({position:{
              x:object.position.x+object.width /2,
              y:object.position.y+object.height /2
             }
          ,
      velocity:{
          x:(Math.random() -0.5)*2,
          y:(Math.random()-0.5)*2
      },
      radius:Math.random()*3,
      color:color ||'purple',
      fades:fades
  })) }
    }
function animate()
{ if(!game.active)return
    requestAnimationFrame(animate)
    c.fillStyle='black'
    c.fillRect(0,0,canvas.width,canvas.height)
    player.update()
    if(game.over) stopHitSound();
    particles.forEach((particle,i)=>{
        if(canvas.height-particle.position.y -particle.radius >= canvas.height)
        {
            particle.position.x=Math.random() *canvas.width,
            particle.position.y= canvas.height +particle.radius
        }
        if(particle.opacity <=0){
            setTimeout(()=>{
            particles.splice(i,1)
        },0) }
        else{
        particle.update()
 } })
    invaderProjectiles.forEach((invaderProjectile,index)=>{
        if( invaderProjectile.position.y +invaderProjectile.height>=canvas.height){
            setTimeout(() =>{
                invaderProjectiles.splice(index,1)

            },0)
         } else invaderProjectile.update()
         if(player.position.x < invaderProjectile.position.x + invaderProjectile.width &&
            player.position.x + player.width > invaderProjectile.position.x &&
            player.position.y < invaderProjectile.position.y + invaderProjectile.height &&
            player.position.y + player.height > invaderProjectile.position.y)
        { 
            console.log('lose')
            setTimeout(() =>{
                
            invaderProjectiles.splice(index,1)
            player.opacity=0
            hitSound.play();
            game.over=true
        },0)
        setTimeout(() =>{
            game.active=false
endGame();
        },2000)
         
         createParticles({
            object:player,
            color:'red',
            fades:true
          })
}}  )
      projectiles.forEach((projectile, index) => {
        if(
                projectile.position.y +projectile.radius <=0){
                 
                    setTimeout(() =>{
                        projectiles.splice(index,1)

                    },0)
                }
                else{
                    projectile.update()

                }
        })
        grids.forEach((grid,gridIndex)=>{
            grid.update()
            if(frames % 30===0 && grid.invaders.length >0)
    {
        grid.invaders[Math.floor(Math.random() * grid.invaders.length)].shoot(invaderProjectiles)
    }
            grid.invaders.forEach((invader,i) => {
                invader.update({velocity: grid.velocity})
                projectiles.forEach((projectile,j) =>{
                    if(projectile.position.y -projectile.radius <=
                        invader.position.y +invader.height && projectile.position.x + projectile.radius >=invader.position.x && projectile.position.x - projectile.radius <=invader.position.x +invader.width && projectile.position.y + projectile.radius >= invader.position.y){
                         
                            setTimeout(() => {
                        const invaderFound =grid.invaders.find((invader2) =>invader2 ===invader
                            )
                            const projectileFound=projectiles.find(
                                (projectile2)=>projectile2===projectile
                            )

                            if(invaderFound && projectileFound){
                                score+=100
                                scoreEl.innerHTML=score
                              createParticles({
                                object:invader,
                                fades:true
                              })
                        grid.invaders.splice(i,1)
                        playKillSound();
                        projectiles.splice(j,1)
                    if(grid.invaders.length >0 ){
                        const firstInvader = grid.invaders[0]
                        const lastInvader = grid.invaders[grid.invaders.length -1]
                        grid.width=lastInvader.position.x - firstInvader.position.x + lastInvader.width
                        grid.position.x= firstInvader.position.x

                    
                    }
                else{
                   grids.splice (gridIndex,1)
                   grids.push(new Grid()) 
                }} 

                      },0)
                        }

                    
                })
            })
        })
    
    if(keys.a.pressed  && player.position.x>=0)
    {
        player.velocity.x = -5
        player.rotation =-0.15
    } else if(keys.d.pressed && player.position.x+player.width<=canvas.width){
player.velocity.x=5
player.rotation =0.15

    }else{
        player.velocity.x=0
        player.rotation =0

    }
    
    if(frames==0){
        grids.push(new Grid())
        frames=0
    }
    frames++

}
animate()
addEventListener('keydown', (event) => {
    if(game.over) 
    
{return}
    else{switch (event.key) {
        case 'a':
            console.log('left');
            keys.a.pressed = true;
            break;
        case 'd':
            console.log('right');
            keys.d.pressed = true;
            break;
        case ' ':
            console.log('space');
            projectiles.push(new Projectile({
                position: {
                    x: player.position.x + player.width / 2,
                    y: player.position.y + player.height
                },
                velocity: {
                    x: 0,
                    y: 10
                }
            }));
            break;
    }}
});


addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'a':
            console.log('left');
            keys.a.pressed = false;
            break;
        case 'd':
            console.log('right');
            keys.d.pressed = false;
            break;
        case ' ':
            console.log('space');
            break;
    }
});

