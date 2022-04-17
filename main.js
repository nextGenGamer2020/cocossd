status1 = ""

function preload(){
    img = loadImage("dog_cat.jpg")
}

function setup(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    canvas = createCanvas(350,350)
    canvas.center()

}

function draw(){
    image(img, 0,0, 350,350)
    fill("#ff00e6")
    text("Dog", 40,50)
    noFill()
    stroke("black")
    rect(30,40,150,300)

    fill("#0059ff")
    text("Cat", 200,50)
    noFill()
    stroke("black")
    rect(180,40,150,300)

    fill("#000000")
    text("Bowl", 185,260)
    noFill()
    stroke("black")
    rect(150,245,70,100)
}


function modelLoaded(){
    console.log("Model Loaded!")
    status1 = true
    objectDetector.detect(img, gotResults)
}

function gotResults(error, results){
    if(error){
        console.error(error)

    }
    else{
        console.log(results)
    }
    console.log(results)
}


