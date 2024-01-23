const resultado = document.querySelector('#resultado')
const pontos_jogador = document.querySelector('#pontos_jogador')
const pontos_maquina = document.querySelector('#pontos_maquina')
const pontos_empate = document.querySelector('#pontos_empate')

let pontuacao_empate = 0
let pontuacao_jogador = 0
let pontuacao_maquina = 0

const op_jogo = {
    PEDRA: 'pedra',
    PAPEL: 'papel',
    TESOURA: 'tesoura'
}

const escolhaUsuario = (escolha) => {
    vencedor(escolha, escolhaMaquina())
}

const escolhaMaquina = () => {
    const escolha = [op_jogo.PEDRA, op_jogo.PAPEL, op_jogo.TESOURA]
    const numAleatorio = Math.floor(Math.random() * 3)

    return escolha[numAleatorio]
}

const vencedor = (humano, maquina) => {
    console.log('Humano: ' + humano + ' Máquina: ' + maquina)

    if (humano === maquina) {
        pontuacao_empate ++
        pontos_empate.innerHTML = pontuacao_empate
        resultado.innerHTML = 'Empatamos!'
    } else if (
        humano === op_jogo.PEDRA && maquina === op_jogo.TESOURA ||
        humano === op_jogo.PAPEL && maquina === op_jogo.PEDRA ||
        humano === op_jogo.TESOURA && maquina === op_jogo.PAPEL) {
        pontuacao_jogador++
        pontos_jogador.innerHTML = pontuacao_jogador
        resultado.innerHTML = 'Parabéns, você ganhou!'
    } else {
        pontuacao_maquina ++
        pontos_maquina.innerHTML = pontuacao_maquina
        resultado.innerHTML = 'Você perdeu, tente novamente!'
    }
}

const restart = () => {
    setTimeout(function() {
        location.reload();
    }, 500);
}