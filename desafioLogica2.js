const nomeHeroi = "MACROHEAD";
let vitorias = 130;
let derrotas = 15;
let rankHeroi;

function calcularRank(vitorias, derrotas) {
  return vitorias - derrotas;
}

const saldoDeVitorias = calcularRank(vitorias, derrotas);

switch (true) {
  case saldoDeVitorias > 0 && saldoDeVitorias <= 10:
    rankHeroi = "Ferro";
    break;
  case saldoDeVitorias >= 11 && saldoDeVitorias <= 20:
    rankHeroi = "Bronze";
    break;
  case saldoDeVitorias >= 21 && saldoDeVitorias <= 50:
    rankHeroi = "Prata";
    break;
  case saldoDeVitorias >= 51 && saldoDeVitorias <= 80:
    rankHeroi = "Ouro";
    break;
  case saldoDeVitorias >= 81 && saldoDeVitorias <= 90:
    rankHeroi = "Diamante";
    break;
  case saldoDeVitorias >= 91 && saldoDeVitorias <= 100:
    rankHeroi = "Lendário";
    break;
  case saldoDeVitorias >= 101:
    rankHeroi = "Imortal";
    break;
  default:
    rankHeroi = "Não Ranqueado";
}

if (rankHeroi === "Não Ranqueado") {
  console.log(
    `O Herói ${nomeHeroi} ainda não jogou partidas ranqueadas suficientes.`
  );
} else {
  console.log(
    `Herói ${nomeHeroi} tem de saldo de ${saldoDeVitorias} vitórias e está no ranking ${rankHeroi}`
  );
}
