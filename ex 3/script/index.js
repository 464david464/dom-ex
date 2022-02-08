const body = document.querySelector('body');
body.classList.add('body');

function buildHeaher() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.classList.add('header')
    header.appendChild(h1);
    h1.textContent = 'Homework 3'

    return header;
}

function buildDescription() {
    const div = document.createElement('div');
    div.setAttribute('id', 'description')
    const h2 = document.createElement('h2');
    h2.textContent = 'how we are'
    const p = document.createElement('p');
    p.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor reiciendis inventore aliquid optio eveniet rerum magni molestiae, commodi accusamus
 `
    div.appendChild(h2);
    div.appendChild(p);

    return div;
}

function main() {
    const div = document.createElement('div');
    div.classList.add('continer')

    const greyDiv = document.createElement('div');
    div.appendChild(greyDiv);
    greyDiv.classList.add('grayDiv')

    const clDiv = document.createElement('div')
    div.appendChild(clDiv)
    clDiv.classList.add('clDiv')

    const span1 = document.createElement('span');
        const h21 = document.createElement('h2');
        const p1 = document.createElement('p');
            h21.textContent = 'Our Maision'
            p1.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor reiciendis inventore aliquid optio eveniet rerum magni molestiae, commodi accusamus
        `

        span1.appendChild(h21);
        span1.appendChild(p1);

    const span2 = document.createElement('span')
        const h22 = document.createElement('h2');
        const p2 = document.createElement('p');
            h22.textContent = 'Our Vision'
            p2.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor reiciendis inventore aliquid optio eveniet rerum magni molestiae, commodi accusamus
        `

        span2.appendChild(h22);
        span2.appendChild(p2);

    const span3 = document.createElement('span')
        const h23 = document.createElement('h2');
        const p3 = document.createElement('p');
            h23.textContent = 'Our Values'
            p3.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor reiciendis inventore aliquid optio eveniet rerum magni molestiae, commodi accusamus
        `
        span3.appendChild(h23);
        span3.appendChild(p3);

    clDiv.appendChild(span1);
    clDiv.appendChild(span2);
    clDiv.appendChild(span3);
    return div;
}


function buildAPage() {
    body.appendChild(buildHeaher())
    body.appendChild(buildDescription())
    body.appendChild(main())
}
buildAPage()