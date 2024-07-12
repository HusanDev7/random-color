const cols = document.querySelectorAll(".col")


document.addEventListener("keydown", event => {
    if (event.code.toLocaleLowerCase() == 'space') {
        setRandomColors()
    }
})

document.addEventListener("click", event => {
    const type = event.target.dataset.type
    if (type == "lock") {
        const node = event.target.tagName.toLocaleLowerCase() == 'span' ? event.target : event.target.children[0]
    } else if (type == 'copy') {
        copyToClickboard(event.target.textContent)
    }
})

function gerenerateRandomColor() {
    // RGB
    // #FF0000
    // #00FF00
    // #0000FF
    let color = ''
    const hexCodes = '0123456789ABCDEF'

    for (let i = 0; i < 6; i++) {
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#' + color
}

function copyToClickboard(text) {
    return navigator.clipboard.writeText(text)
}

function setRandomColors() {
    const colors = []
    cols.forEach(col => {
        const text = col.querySelector("h2")
        const btn = col.querySelector("button")
        const color = gerenerateRandomColor()
        text.textContent = color
        col.style.background = color

        colors.push(color)
    })

    updateLocationHash(colors)
}

function updateLocationHash(colors = []) {
    document.location.hash = colors.toString()
}

setRandomColors()