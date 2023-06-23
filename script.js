

// copyright
document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))


// invert links

const btn = document.getElementById('invert')

btn.addEventListener('click', () => {

    console.log('clicked')

    const links = document.querySelectorAll('.link-a')
    links.forEach(link => {
        link.innerHTML = link.href
    })
    }
)