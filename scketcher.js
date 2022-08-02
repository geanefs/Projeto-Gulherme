var dev
var cli

function setup() {
    createCanvas(500,500)

    dev=createSprite(250,400,30,30)


    cli = createSprite(250,20,30,30)
    cli.velocity.x = 10

    createEdgesSprites()



    
}

function draw(){
    background('green')
    cli.bounceOff(edges)
    drawSprites()
}