let nome = "Malenia";
let classe = "Arqueira";
let nivel = 5;
let vida = 100;
let ouro = 50;
let xp = 0;
console.log(`Olá! eu sou  ${nome} e iniciarei minha jornada. Minha classe é ${classe} e estou atualmente nível ${nivel}. 
Possuo ${vida} pontos de vida, tenho ${ouro} moedas de ouro e ${xp} pontos de xp.`);

const NOME_ARMA = "Arco de Hades";
const DANO_BASE = 40;
const NOME_ARMADURA = "Armadura de Dragão";
const DEFESA_BASE = 20;
console.log(`🏹 Arma: ${NOME_ARMA}`);
console.log(`💥 Dano Base: ${DANO_BASE}`);
console.log(`🐱‍🏍 Armadura: ${NOME_ARMADURA}`);
console.log(`🎯 Defesa Base: ${DEFESA_BASE}`);

console.log("------------------------------------------------");
console.log("Malenia enfrentou desafios ao longo de sua jornada.");
console.log("------------------------------------------------");
//malenia treinou e adquiriu 150 pontos de xp
xp += 150;
console.log(`🏆 XP: ${xp}`);
//comprou uma poção por 30 moedas de ouro
ouro -= 30;
console.log(`💰 Ouro: ${ouro}`);
//usou a poção e recuperou 40 pontos de vida
vida += 40;
console.log(`🧬 Vida: ${vida}`);
//sua arma foi encantada, e seu dano foi dobrado
let danoEncantado = DANO_BASE * 2;
console.log(`✨ Dano Atual: ${danoEncantado}`);

ataqueTotal = nivel + DANO_BASE
defesaTotal = DEFESA_BASE + (nivel/2);
console.log(`💥 Dano Total: ${ataqueTotal}`);
console.log(`🎯 Defesa Total: ${defesaTotal}`);

// Malenia encontrou um gigante da floresta sombria
console.log("------------------------------------------------");
console.log("Malenia encontrou um guardião da floresta sombria.");
console.log("------------------------------------------------");

vidaSuficiente = vida > 70
console.log(`🧬 Vida Suficiente: ${vidaSuficiente}`);
ataqueForte = ataqueTotal > 60
console.log(`💥 Ataque Forte: ${ataqueForte}`);
nivelAvancado = nivel >= 10
console.log(`🎯 Nível Avançado: ${nivelAvancado}`);
podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado)
console.log(`🛡️ Pode Enfrentar o Guardião: ${podeEnfrentarGuardiao}`);

//historia de malenia
console.log("-------------------------------------------------");
console.log("📜 LORE DA HERÓINA: Malenia");
console.log("-------------------------------------------------");
console.log("Malenia foi uma criatura criada por um deus antigo, destinada a proteger a floresta sombria em nome do seu pai e criador Elden. Com o tempo, ela desenvolveu habilidades excepcionais de arco e flecha, tornando-se uma arqueira lendária. Sua jornada começou quando um mal antigo ameaçou a floresta, Malenia que desde sua criação foi conduzida a seguir seu caminho como guardiã. Mas Malenia nunca se entendeu como guardiã e decidiu explorar caminhos novos sozinha, assim, iniciando sua história.");
console.log("Portando seu arco digno do Deus Hades, ela atinge seus inimigos com uma precisão encantadora. Sua armadura de dragão, forjada com escamas de dragões ancestrais, a protege contra os perigos da floresta. Malenia está pronta para enfrentar qualquer desafio que venha em seu caminho.");
console.log("A arqueira é penaizada com uma doença imposta pelo seu criador Elden, por conta de sua negligencia em seguir o caminho de guardiã. A doença a impede de se curar completamente, mas ela continua sua jornada com determinação, enfrentando os desafios que surgem em seu caminho.");
console.log("Malenia é uma criatura poderosa mas não sabe de todo poder escondido em seu interior. Ela busca descobrir mais sobre si mesma e seu destino, enquanto luta contra as forças do mal que ameaçam a floresta sombria. Sua jornada está apenas começando, e ela está determinada a se tornar uma heroína lendária.");
console.log("-------------------------------------------------");
console.log("FIM DA HISTÓRIA DE MALENIA");
console.log("-------------------------------------------------");

