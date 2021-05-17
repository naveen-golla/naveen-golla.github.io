const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {

    button.addEventListener('click', function(e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft


        const inSidex = x - buttonLeft
        const inSidey = y - buttonTop

        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = inSidey + "px"
        circle.style.left = inSidex + "px"
        this.appendChild(circle)
        setTimeout(() => circle.remove(), 500)
    })
})

// $(function() {
//     $('.ripple').each(function() {

//         $(this).click(function(e) {
//             const x = e.clientX
//             const y = e.clientY

//             const buttonTop = e.target.offsetTop
//             const buttonLeft = e.target.offsetLeft

//             const xInside = x - buttonLeft
//             const yInside = x - buttonTop

//             console.log(xInside, yInside)



//             const circle = document.createElement('span')
//             circle.classList.add('circle')
//             circle.style.top = xInside + "px"
//             circle.style.left = yInside + "px"
//             this.appendChild(circle)

//         })
//     })
// })