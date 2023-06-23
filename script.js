addEventListener('DOMContentLoaded', () => {

    // copyright
    document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))


    // invert links

    const toggle = document.getElementById('invert');

    // check if invert is set
    if (localStorage.getItem('invert') === 'true') {
        
        toggle.checked = true;
        invert();
    }

    toggle.addEventListener('change', () => {
        console.log(toggle.checked);
        localStorage.setItem('invert', toggle.checked)
        invert();
    })



    function invert() { 
    // show link on hover
        const toggle = document.getElementById('invert');
        console.log(toggle.checked);
        if (toggle.checked) {

            // check for toggle state change
            toggle.addEventListener('change', () => {
                return;
            })


            const links = document.querySelectorAll('.link-a')
            links.forEach(link => {

                let url = link.href;
                let name = link.dataset.name;
                console.log(url);
                
                if (url.includes('https://')) {
                    url = url.replace('https://', '');
                } else {
                    url = url.replace('http://', '');
                }

                // remove trailing slash
                if (url.endsWith('/')) {
                    url = url.slice(0, -1);
                }

                url = `${name} - ${url}`

                function mouseenter(){
                    link.style.opacity = 0;
                    link.innerHTML = url;
                    link.style.opacity = 1;
                }
                function mouseleave(){
                    link.innerHTML = link.dataset.name
                }

                link.addEventListener('mouseenter', mouseenter)
                link.addEventListener('mouseleave', mouseleave)
            })

        }
        else{
            // remove event listeners
            const links = document.querySelectorAll('.link-a')
            
            links.forEach(link => {
                function mouseenter(){
                    link.style.opacity = 0;
                    link.innerHTML = url;
                    link.style.opacity = 1;
                }
                function mouseleave(){
                    link.innerHTML = link.dataset.name
                }
                // remove event listeners
                link.removeEventListener('mouseenter', mouseenter)
                link.removeEventListener('mouseleave', mouseleave)

                console.log('removed event listeners');
            })
        }
    }

    

})
