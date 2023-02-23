function randomNumber (val) {
    let num = Math.random() * 1
    return val === "rgb" ? Math.floor(Math.random() * 255) : num.toFixed(1)


}

function generateRgb() {
    return `rgb(${randomNumber("rgb")}, ${randomNumber("rgb")}, ${randomNumber("rgb")}, ${randomNumber()})`
}

document.getElementById('submit-btn').addEventListener('click', render)

function render() {
    const rgb = generateRgb()
    document.querySelector('header').style.backgroundColor = rgb
    document.getElementById('rgb-code').innerHTML = rgb
}
