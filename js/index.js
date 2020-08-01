function Game() {
    this.tela = new Tela();
    this.vidas;
    this.loop;
    this.tempo = 15;
    this.timeLoop;

    this.start = () => {
        this.setTimeLoop();
        var tempo = document.getElementById('tempo');
        tempo.innerHTML = this.tempo;
        this.vidas = [new Vida(1), new Vida(2), new Vida(3)];
        this.gameLoop();
        this.contador();
    }

    this.gameLoop = () => {
        this.loop = setInterval(() => {
            this.removerMosquito();
            var largura = this.tela.getRandomX();
            var altura = this.tela.getRandomY();
            var m = new Mosquito();
            m.setPòsicao(largura, altura);

        }, this.timeLoop);
    }

    this.removerMosquito = () => {
        var mosquito = document.getElementById('mosquito');
        if (mosquito) {
            mosquito.remove();
            var vida = this.vidas[0];
            if (vida) {
                vida.mudarEstado();
                this.vidas.shift();
            } else {
                clearInterval(this.loop);
                this.loop = null;
                window.location.href = 'game_over.html';
            }
        }
    }

    this.contador = () => {
        var decremento = () => {
            this.tempo--;

            if (this.tempo < 0)
                window.location.href = "vitoria.html";
            else {
                var tempo = document.getElementById('tempo');
                tempo.innerHTML = this.tempo;
            }

        }
        cronometro = setInterval(decremento, 1000);
    }

    this.setTimeLoop = () => {
        var parametro = window.location.search;
        if (parametro === '?facil')
            this.timeLoop = 1500;
        else if (parametro === '?medio')
            this.timeLoop = 1000;
        else
            this.timeLoop = 800;
    }

}

const game = new Game();
game.start();