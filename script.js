function carry() {
    let now = new Date()
    let hour = now.getHours()
    let min = now.getMinutes()

    let res = document.querySelector('div#res')
    let img = document.querySelector('img#imagem')
    let body = document.body

    res.innerHTML = `<p> Now are precisely <strong>${hour}:${min}</strong> hours. </p>`

    if (hour >= 0 && hour < 12) {
        res.innerHTML += '<p> Good Morning! </p>'
        img.src = 'manha.png'
        body.style.background = '#e2cd9f'

    } else if (hour < 18) {
        res.innerHTML += '<p> Good Afternoon! </p>'
        img.src = 'tarde.png'
        body.style.background = '#b9846f'

    } else {
        res.innerHTML += '<p> Good Evening! </p>'
        img.src = 'noite.png'
        body.style.background = '#515154'
    }
}