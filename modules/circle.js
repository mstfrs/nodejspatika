const pi=3.14
function circleArea(radius) {
    console.log(pi*(radius*radius))
}
function circleCircumference (radius) {
    console.log(2*pi*radius)
}


module.exports={
    circleArea,
    circleCircumference
}

