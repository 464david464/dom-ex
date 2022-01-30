function action() {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'hello FullStack'
    newDiv.setAttribute('id', 'div1');
    newDiv.style.color = 'white'
    newDiv.style.backgroundColor = 'blue'

    const padding = prompt('padding in px')
    newDiv.style.padding = padding + 'px'
    document.getElementsByTagName('body')[0].appendChild(newDiv);
}
action()