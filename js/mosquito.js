function Mosquito() {
    this.img = document.createElement('img');

    this.init = () => {
        this.img.className = this.tamanhoAleatorio();
        this.img.id = 'mosquito';
        this.img.src = 'img/mosca.png';
        document.body.appendChild(this.img);
        this.img.addEventListener('click', this.remover, false);
    }

    this.setPòsicao = (largura, altura) => {
        this.img.style.left = largura + 'px';
        this.img.style.top = altura + 'px';
        this.img.style.position = 'absolute';
    }

    this.tamanhoAleatorio = () => {
        var aleatorio = Math.floor(Math.random() * 3);

        if (aleatorio === 0)
            return 'mosquito0';
        else if (aleatorio === 1)
            return 'mosquito1';
        else
            return 'mosquito2';
    }

    this.remover = () => {
        this.img.remove();
    }

    this.init();
}