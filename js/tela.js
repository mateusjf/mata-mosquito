function Tela() {

    this.getY = () => {
        return window.innerHeight;
    }

    this.getX = () => {
        return window.innerWidth;
    }

    this.getRandomY = () => {
        var altura = Math.random() * this.getY();
        altura = Math.floor(altura) - 90
        return altura < 0 ? 0 : altura;
    }

    this.getRandomX = () => {
        var largura = Math.random() * this.getX();
        largura = Math.floor(largura) - 90;
        return largura < 0 ? 0 : largura;
    }
}