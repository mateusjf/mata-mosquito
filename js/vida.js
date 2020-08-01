function Vida(idElement) {
    this.elemento = document.getElementById(idElement);

    this.init = () => {
        this.elemento.src = 'img/coracao_cheio.png';
    }

    this.mudarEstado = () => {
        this.elemento.src = 'img/coracao_vazio.png';
    }

    this.init();
}