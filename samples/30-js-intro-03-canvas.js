// copied from this page
// https://cs.lmu.edu/~ray/notes/introjavascriptgraphics/

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('shapes')
    const width = canvas.width
    const height = canvas.height
    // required with canvas, to set e.g. colors and stuff
    const ctx = canvas.getContext('2d')

    // random255 is an arrow-function (like a lambda)
    const random255 = () => Math.floor(Math.random() * 255)
    // it is as if we had written
    // function random255() { return Math.floor(Math.random() * 255) }

    // the following functions are arrow-functions too
    const randomColor = () =>
      // we call it 3 times to create a random color
      `rgb(${random255()} ${random255()} ${random255()} / 50%`
    const randomX = () => (Math.random() * width) - 50
    const randomY = () => (Math.random() * height) - 50
    const randomSide = () => (Math.random() * 100) + 20
    const randomRadius = () => (Math.random() * 50) + 20

    const drawShapes = () => {
      ctx.clearRect(0, 0, width, height)
      for (let i = 0; i < 50; i += 1) {
        ctx.fillStyle = randomColor()
        ctx.fillRect(randomX(), randomY(), randomSide(), randomSide())
        ctx.fillStyle = randomColor()
        ctx.beginPath()
        ctx.arc(randomX(), randomY(), randomRadius(), 0, Math.PI * 2, true)
        ctx.closePath()
        ctx.fill()
      }
    }

    canvas.addEventListener('click', drawShapes)

    drawShapes()
  })
