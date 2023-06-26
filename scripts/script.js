

    class Fish {
      constructor(x, y, width, height, speed, name, type, theme) {
        this.image = new Image();
        this.imageR = new Image();
        this.imageL = new Image();
        this.image.src;
        this.imageR.src;
        this.imageL.src;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.checkH = false;
        this.checkV = false;
        this.numFrames;
        this.frameWidth;
        this.frameHeight;
        this.spriteSheetX = 0;
        this.spriteSheetY = 0;
        this.currentFrame = 0;
        this.animationSpeed = 15;
        this.lastFrameTime = 0;
        this.name = name;
        this.type = type;
        this.isAlive = true;
        this.deathx = 0;
        this.deathy = 0;
        this.swaydistance = -1;
        this.swayspeed = 0;
        this.theme = theme;
        this.loopVar = 0;
        this.deathspinchance = Math.floor(Math.random() * 2) + 1;
      }



      animate() {
        const currentTime = Date.now();
        const deltaTime = currentTime - this.lastFrameTime;

        switch (this.type) {
          case "1":
            this.imageL.src = 'assets/fish/fish_spritesheet.png';
            this.imageR.src = 'assets/fish/fish_spritesheetR.png';
            this.numFrames = 45;
            this.frameWidth = 200;
            this.frameHeight = 200;
            break;
          case "2":
            this.imageL.src = 'assets/fish/Beepo_Bass_spritesheetL.png';
            this.imageR.src = 'assets/fish/Beepo_Bass_spritesheetR.png';
            this.numFrames = 60;
            this.frameWidth = 200;
            this.frameHeight = 200;
            break;
          case "3":
            this.imageL.src = 'assets/fish/rainbow_Bass_spritesheetL.png';
            this.imageR.src = 'assets/fish/rainbow_Bass_spritesheetR.png';
            this.numFrames = 60;
            this.frameWidth = 200;
            this.frameHeight = 200;
            break;
          case "4":
            this.imageL.src = 'assets/fish/Bass_spritesheet.png';
            this.imageR.src = 'assets/fish/Bass_spritesheetR.png';
            this.numFrames = 60;
            this.frameWidth = 200;
            this.frameHeight = 200;
            break;
          case "5":
            this.imageL.src = 'assets/fish/Uber_Bass_spritesheetL.png';
            this.imageR.src = 'assets/fish/Uber_Bass_spritesheetR.png';
            this.numFrames = 60;
            this.frameWidth = 200;
            this.frameHeight = 200;
            break;
          case "6":
            this.imageL.src = 'assets/fish/Sherbert_Bass_spritesheetL.png';
            this.imageR.src = 'assets/fish/Sherbert_Bass_spritesheetR.png';
            this.numFrames = 60;
            this.frameWidth = 200;
            this.frameHeight = 200;
            break;

      }


        if (deltaTime >= 100 / this.animationSpeed) {
          const sourceX = this.spriteSheetX + this.currentFrame * this.frameWidth;
          const sourceY = this.spriteSheetY;
          const sourceWidth = this.frameWidth;
          const sourceHeight = this.frameHeight;
          //ctx.clearRect(0, 0, canvas.width, canvas.height);



        if(this.isAlive){
          ctx.drawImage(this.image, sourceX, sourceY, sourceWidth, sourceHeight, this.x, this.y, this.width, this.height);
        }




          this.currentFrame = (this.currentFrame + 1) % this.numFrames;
          this.lastFrameTime = currentTime;

        }
      }

      move() {
        //are you in canvas bounds?
        if (this.x <= 10) {
          this.checkH = false;
        } else if (this.y >= (canvas.height - 75)) {
          this.checkV = false;
        } else if (this.x + this.width >= canvas.width - 10) {
          this.checkH = true;
        } else if (this.y + this.height <= 75) {
          this.checkV = true;
        }


        //random vertical reverse
        if (Math.floor(Math.random() * 80) + 1 === (1 || 2)) {
          this.checkV = !this.checkV;
        }
        //random horizontal reverse
        if (Math.floor(Math.random() * 500) + 1 === (1 || 2)) {
          this.checkH = !this.checkH;
        }

        //if direction changes, change movement direction/image
        if(this.isAlive){
        if (this.checkH === true) {
          this.x -= this.speed;
          this.image = this.imageL;
          if (this.checkV === false) {
            this.y -= this.speed;
          } else {
            this.y += this.speed;
          }
          //this.animate();
        } else if (this.checkH === false) {
          this.x += this.speed;
          this.image = this.imageR;

          if (this.checkV === true) {
            this.y += this.speed;
          } else {
            this.y -= this.speed;
          }
        }
      }
      }} //fish object





    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = 0;
    canvas.height = 0;

    let enterfish = [];
    let numFish = 8;
    let allFish = [];
    let names = [];
    let type = "0"
    let x = 0;










    for (let i = 0; i < numFish; i++) {

    let type = 0;
    if(x <= 6){
      x++;
      type = x.toString();
    }else{
      x = 0;
    }
    console.log(x);
    if(x % 2 == 0){
      let size = Math.floor(Math.random() * 51) + 90;
      allFish.push(new Fish(canvas.width/2, canvas.height/2, 100, 100, .5, "left", type));
    }else{
      let size = Math.floor(Math.random() * 51) + 90;
      allFish.push(new Fish(canvas.width/2, canvas.height/2, 100, 100, .5, "right", type));
    }





}

    function updateFishDimensions() {


      allFish.forEach((fish) => {


        let minx = 100;
        let maxx = canvas.width;
        let miny = 100;
        let maxy = canvas.height;

        let sx = 0;
        let sy = Math.floor(Math.random() * (maxy - miny + 1) + miny);



        // Determine the range based on the random number
        if (fish.name == "left") {
          // Range: 10 - 200
           sx = Math.floor(Math.random() * (300 - 10 + 1)) + 10;
        } else {
          // Range: 800 - 990
           sx =  Math.floor(Math.random() * ((canvas.width -10) - (canvas.width - 300) + 1)) + (canvas.width - 300);
          console.log(sx);
          fish.checkH = true;
        }


        fish.x = sx;
        fish.y = sy;
      });
    }



    function animateAllFish() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      allFish.forEach((fish) => {
        fish.animate();
      });
    }



    const moveFishInterval = setInterval(() => {

      allFish.forEach((fish) => {
        fish.move(canvas.width, canvas.height);
      });
    }, 40);

    setInterval(() => {
      animateAllFish();
    }, 20);

window.addEventListener('resize', () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
  updateFishDimensions();
});



window.dispatchEvent(new Event('resize'));
