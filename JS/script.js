document.querySelectorAll('.bookmark').forEach(button => {

    let svg = button.querySelector('svg')

    let svgPath = new Proxy({
        y: 0,
        x: 0,
        b: 0
    }, {
        set(target, key, value) {
            target[key] = value;
            let { y, x, b } = target
            if(y !== null && x != null && b != null) {
                svg.innerHTML = '<path d="M8 4H24V5C24 7 '+(24+x)+' '+(8+y)+' '+(24+x)+' '+(11+y)+'C'+(24+x)+' '+(13+y)+' '+(24+b)+' 25 '+(24+b)+' 27.5V28L'+(16+b)+' 24L'+(8+b)+' 28V27.5C'+(8+b)+' 25 '+(8+x)+' '+(13+y)+' '+(8+x)+' '+(11+y)+' C'+(8+x)+' '+(8+y)+' 8 7 8 5V4Z" />'
            }
            return true;
        },
        get(target, key) {
            return target[key];
        }
    })

    button.addEventListener('click', e => {
        gsap.to(svgPath, {
            keyframes: [{
                x: 2.5,
                duration: .125
            }, {
                y: 10,
                b: .5,
                duration: .2
            }, {
                b: 2,
                x: 2,
                duration: .125
            }, {
                b: 1,
                x: 0,
                duration: .125
            }, {
                b: 0,
                duration: .175
            }],
            onComplete() {
                svgPath.y = 0
                svgPath.x = 0
                svgPath.b = 0
            }
        })
        button.classList.toggle('active')
        e.preventDefault()
    })
})
