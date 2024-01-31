const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularXP(nivelMonstro, dificuldadeBatalha) {
    let xpGanho = nivelMonstro * dificuldadeBatalha * 100;
    return xpGanho;
}

// Entrada do usuário usando readline
rl.question("Digite o nível do monstro: ", function(nivelMonstro) {
    rl.question("Digite a dificuldade da batalha (de 1 a 100): ", function(dificuldadeBatalha) {
        // Cálculo do XP ganho
        let xpGanho = calcularXP(parseInt(nivelMonstro), parseInt(dificuldadeBatalha));

        // Exibição do resultado
        console.log(`Você ganhou ${xpGanho} XP!`);

        // Fecha a interface readline
        rl.close();
    });
});
