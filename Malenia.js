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
podeEnfrentarGuardiao = vidaSuficiente && (ataqueForte || nivelAvancado);
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

let manaAtual = 50;
let manaMaxima = 50;
console.log(`Após chegar em um vilarejo, Malenia recita feitiços de um mago antigo e desbloqueia sua mana.`);
console.log(`🪬 Mana Atual: ${manaAtual}`);
console.log(`🪬 Mana maxima ${manaMaxima}`);

let localAtual = "Floresta sombria";
let missaoAtual = "Derrotar o guardião da floresta sombria";
console.log("------------------------------");
console.log(`Malenia ainda segue na ${localAtual} após sair do vilarejo e precisa derrotar o guardião.`);
console.log("------------------------------");

// Novos atributos para batalha
let forca = 15;
let defesa = 10;
let agilidade = 12;
let combatesVencidos = 0;

//capitulo 1

console.log("Caminhando na floresta, Malenia encontra um goblin traiçoeiro e precisa enfrenta-lo para subir de nivel.");

let vidaGoblin = 30
let ataqueGoblin = 10

if (vida >= 50 && forca > ataqueGoblin) {
   nivel++
   console.log(`Nivel atual: ${nivel}`);
   console.log("Malenia enfrentou o Goblin com vitória e subiu de nível!");
}

console.log("------------------------------");
console.log("Continuando a sua jornada para o guardião, Malenia encontra uma fada que propõe a ela escolher entre aumentar o seu xp em 2x caso tenha 20 moedas de ouro para trocar.");
console.log("------------------------------");

if (ouro >= 20) {
    console.log("Malenia recebe 2x XP em troca das 20 moedas de ouro e segue normalmente.");
    ouro -= 20
    xp *= 2
    console.log(`💰 Ouro total: ${ouro}`);
    console.log(`✨ XP atual: ${xp}`);
}

console.log("------------------------------");
console.log("Malenia resolve parar perto de um rio para descansar mas acaba encontrando um baú que só pode ser aberto apartir do nível 5.");
console.log("------------------------------");

if (nivel >= 5) {
    console.log("Malenia desbloqueia o baú com a recompensa de 50 moedas de ouro e aumenta seu nível em 2x");
    ouro += 50
    nivel *= 2
    console.log(`✨ Nivel atual: ${nivel}`);
    console.log(`💰 Ouro atual: ${ouro}`) ;
} 

//capitulo 2

console.log("------------------------------");
console.log("Malenia descansa na beira do rio e aumenta a sua força, caminhando mais um pouco, a arqueira decide ir ao ferreiro emancipar seu arco de guerra.");
forca++
console.log(`💪 Força atual: ${forca}`);
console.log("------------------------------");

console.log("No ferreiro, Malenia só poderá emancipar seu arco se estiver nivel 10, junto com 20 moedas de ouro.");
console.log("------------------------------");

if (nivel >= 10 && ouro >= 20) {
    console.log("Malenia emancipou seu arco para level 15.");
    ouro -= 20
console.log(`💰 Ouro atual: ${ouro}`);
} else {
    console.log("Malenia ainda não subiu de nivel e não possui moedas suficientes.");
}
console.log("------------------------------");
console.log("Ainda perto ao ferreiro, um cidadão misterioso oferece uma poção para aumentar seu dano em combate, porém não quer nada em troca.");
console.log("Malenia aceita o presente e aumenta seu dano");
danoEncantado += 50
console.log(`💥 Dano atual: ${danoEncantado}`);
console.log("------------------------------");
console.log("Saindo da vila do ferreiro Malenia caminha o suficiente para por fim encontrar o guardião e poder desbloquear o portal para passar de fase.");
console.log("------------------------------");
console.log("Malenia equipa seu Arco e se prepara para a grande batalha.");

let vidaGuardiao = 150
let forcaGuardiao = 100

if (danoEncantado > forcaGuardiao && vida >= 100) {
    console.log("Malenia vence a batalha e avança para a proxima fase!");
} else if (danoEncantado < forcaGuardiao) {
    console.log("Malenia acaba sendo ferida, mas consegue seguir lutando.");
} else {
    console.log("Malenia foi derrotada, recue e siga outro caminho.");
}
console.log("------------------------------");
console.log("Malenia continua a sua jornada após vencer bravamente a batalha contra o guardião, a arqueira entra no portal e conclui sua caminhada. Do outro lado do portal Malenia se deita em baixo da árvore sagrada de Elden e descansa para recuperar sua agilidade e força e assim seguir para a proxima aventura.");

//cap 3

console.log("--------------------------------");
console.log("Malenia enfim seguiu sua jornada com novos atributos.");
let inventario = ["Poção de cura", "Armadura de arcanjo"];
let aliados = ["Mago oculto", "Ferreiro", "Arqueiro de Elden"];
let inimigosEncontrados = ["Goblin", "Guardião da floresta"];

console.log(nome + "adentra dentro do castelo dos arrays.");
console.log("Após muitas vitorias Malenia chegou ao castelo lendário.");
console.log("Inventario inicial"  +  inventario.length  +  "itens magicos.");
