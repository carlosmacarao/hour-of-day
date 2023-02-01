function carregar() {
    var msg = document.querySelector('div#msg');
    var img = document.querySelector('img#imagem');

    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();

    msg.innerHTML = `<p> Agora são exatamente <strong>${hora}:${min}</strong> horas</p>`

    if (hora >= 0 && hora < 12) {
        msg.innerHTML += '<p> Bom Dia! </p>'
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'

    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += '<p> Boa Tarde! </p>'
        img.src = 'tarde.png'
        document.body.style.background = '#B9846F'

    } else {
        msg.innerHTML += '<p> Boa Noite! </p>' 
        img.src = 'noite.png'
        document.body.style.background = '#515154'

    }
}