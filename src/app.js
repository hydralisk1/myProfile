window.onload = () => {
    const root = document.getElementById('root')
    const container = document.createElement('div')
    container.className = 'container'

    container.append(innerContainer())
    root.appendChild(container)
}

const innerContainer = () => {
    const divTag = document.createElement('div')
    divTag.innerText = 'Hello World'

    return divTag
}
