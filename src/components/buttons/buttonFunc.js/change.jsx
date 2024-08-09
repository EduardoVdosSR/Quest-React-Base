import chosenColor from './drawer.js'

function change() {
    const hide = document.getElementById("hide").classList;

    if (!hide) {
        console.error('Elemento com ID "esconder" não encontrado.');
        return;
    }

    if (hide.contains("hidden")) hide.remove("hidden")

    chosenColor(hide)
}

export default change;