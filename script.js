

// copyright
document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))


// invert links

const btn = document.getElementById('invert')

btn.addEventListener('click', () => {

    console.log('clicked')

    const links = document.querySelectorAll('.link-a')
    links.forEach(link => {
        let url = link.href;
        console.log(url);
        
        if (url.includes('https://')) {
            url = url.replace('https://', '')
        } else {
            url = url.replace('http://', '')
        }

        // remove trailing slash
        if (url.endsWith('/')) {
            url = url.slice(0, -1)
        }



        console.log(url);
        link.innerHTML = url;
    })
    }
)


// show link on hover

const links = document.querySelectorAll('.link-a')
links.forEach(link => {

    let url = link.href;
    console.log(url);
    
    if (url.includes('https://')) {
        url = url.replace('https://', '')
    } else {
        url = url.replace('http://', '')
    }

    // remove trailing slash
    if (url.endsWith('/')) {
        url = url.slice(0, -1)
    }

    url = ` - ${url}`

    link.addEventListener('mouseenter', () => {
        link.innerHTML += url
    })
    link.addEventListener('mouseleave', () => {
        link.innerHTML = link.dataset.name
    })
})