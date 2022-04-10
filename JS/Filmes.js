function filme(nome, imagem, sinopse, genero, classificacao, emCartaz, trailer){
    this.nome = nome;
    this.imagem = imagem;
    this.sinopse = sinopse;
    this.genero = genero;
    this.classificacao = classificacao;
    this.emCartaz = emCartaz;
    this.trailer = trailer;

    this.updatePage = function() {
        set("nome", this.nome);
        document.getElementById("imagem").src = this.imagem;
        set("sinopse", this.sinopse);
        set("genero", this.genero);
        document.getElementById("classificacao").src = this.classificacao;
        document.getElementById("embedTrailer").src = this.getEmbed();
    }

    this.getEmbed = function() {
        embed = this.trailer;
        start = embed.lastIndexOf("=");
        return "https://www.youtube.com/embed/" + embed.substring(start + 1, embed.length);
    }
}

filmes = [
    new filme(
        "Velozes e Furiosos 9",
        "img/velozes e furiosos.jpg",
        "Cada vez mais identificado com o papel de pai de família, Dominic Toretto precisará enfrentar um inimigo que possuiu seu sangue, uma enorme ameaça capaz de causar grandes turbulências na família Velozes e Furiosos.",
        "Ação",
        "img/14anos.jpg",
        "Em Cartaz",
        "https://www.youtube.com/watch?v=aSiDu3Ywi8E"
    ),
    new filme(
        "Invocação do Mal 3: A Ordem do Demônio",
        "img/invocacaodomal3-1.jpg",
        "O casal Ed e Lorraine Warren investigam um assassino que alega ter sido possuído por um demônio.",
        "Terror",
        "img/14anos.jpg",
        "Em Cartaz",
        "https://www.youtube.com/watch?v=anDtrp34xig"
    ),
    new filme(
        "Espiral: O Legado de Jogos Mortais",
        "img/espiral.jpg",
        `Um sádico mentor desencadeia uma forma distorcida de justiça em "Espiral", o novo e aterrorizante capítulo do universo dos Jogos Mortais. Trabalhando à sombra de um respeitado veterano da polícia (Samuel L. Jackson), o impetuoso detetive Ezekiel "Zeke" Banks (Chris Rock) e seu parceiro novato (Max Minghella) se encarregam de uma terrível investigação sobre assassinatos que assombram a cidade. Involuntariamente envolvido em um profundo mistério, Zeke se encontra no centro de um mórbido jogo do assassino. O longa é estrelado por Chris Rock, Max Minghella, Marisol Nichols e Samuel L. Jackson, e é produzido pela mesma equipe de ‘Jogos Mortais', de Mark Burg e Oren Koules. O filme é dirigido por Darren Lynn Bousman e escrito por Josh Stolberg e Pete Goldfinger.`,
        "Terror",
        "img/14anos.jpg",
        "Em Cartaz",
        "https://www.youtube.com/watch?v=gzy6ORqE9IY"
    ),
    new filme(
        "Cruella",
        "img/cruela.jpg",
        `Inteligente, criativa e determinada, Estella quer fazer um nome para si através de seus designs e acaba chamando a atenção da Baronesa Von Hellman. Entretanto, o relacionamento delas desencadeia um curso de eventos e revelações que fazem com que Estella abrace seu lado rebelde e se torne a Cruella, uma pessoa má, elegante e voltada para a vingança.`,
        "Comédia",
        "img/12anos.png",
        "Em Cartaz",
        "https://www.youtube.com/watch?v=gmRKv7n2If8"
    ),
    new filme(
        "Spirit: O Indomável",
        "img/Spirit.jpg",
        `Em Spirit - O Indomável, acompanhamos a vida da pequena Lucky Prescott. Quando ela se muda para uma pequena cidade fronteiriça, junto com o seu pai, Lucky acaba fazendo amizade com um cavalo selvagem chamado Spirit. Com o objetivo de levá-lo até a sua família, ela embarca em altas aventuras.`,
        "Aventura",
        "img/livre2.jpg",
        "Em Cartaz",
        "https://www.youtube.com/watch?v=pxvQ8GjxwTY"
    ),
    new filme(
        "Horários Em um Bairro de Nova York",
        "img/novayork.jpg",
        `As luzes se acendem em Washington Heights... O cheirinho de um cafecito caliente paira no ar, na saída da estação de metrô da Rua 181, onde um caleidoscópio de sonhos mobiliza essa comunidade vibrante e muito unida. No meio de tudo, temos o querido e magnético dono de uma mercearia, Usnavi (Anthony Ramos), que economiza cada centavo do seu dia de trabalho enquanto torce, imagina e canta sobre uma vida melhor.`,
        "Drama",
        "img/12anos.png",
        "Em Cartaz",
        "https://www.youtube.com/watch?v=ifUrOinKiJk"
    ),
    new filme(
        "Veneza",
        "img/veneza.jpg",
        `Reencontrar o único homem que amou é o sonho de Gringa, dona de um bordel no interior do Brasil. Mesmo cega e muito doente, ela insiste em realizar seu último desejo: ir até Veneza para pedir perdão ao amante que abandonou décadas atrás. Para levá-la à cidade italiana, Tonho, Rita e as outras moças que trabalham para Gringa idealizam um fantástico plano com a ajuda de uma trupe circense.`,
        "Comédia",
        "img/16anos.png",
        "Em Cartaz",
        "https://www.youtube.com/watch?v=pzE3DQr5Af0"
    ),
    new filme(
        "Godzilla vs Kong",
        "img/Godzilla_vs._Kong.jpg",
        `Kong e seus protetores embarcam em uma jornada perigosa para encontrar seu verdadeiro lar. Jia, uma garota órfã que tem um vínculo único e poderoso com a poderosa besta, acompanha a aventura. No entanto, eles logo se encontram no caminho de Godzilla, completamente enfurecido, deixando um rastro de destruição em todo o mundo. O confronto inicial entre os dois titãs, instigado por forças misteriosas, é apenas o começo do enigma que reside nas profundezas do planeta.`,
        "Ação",
        "img/14anos.jpg",
        "Em Cartaz",
        "https://www.youtube.com/watch?v=aJMfEz2cobI"
    ),
    new filme(
        "Demon Slayer - Mugen Train: O Filme",
        "img/demon slayer.jpg",
        `Em Demon Slayer - Mugen Train, durante o período Taisho no Japão, o jovem Tanjiro volta para casa depois de um dia de trabalho e encontra sua família brutalmente assassinada por um demônio. Para pior a situação, sua irmã mais jovem, Nezuko, foi transformada em uma criatura demoníaca. Agora ele precisará lutar para vingar sua família e recuperar a irmã.`,
        "Ação",
        "img/14anos.jpg",
        "Em Cartaz",
        "https://www.youtube.com/watch?v=ATJYac_dORw"
    ),
    new filme(
        "Mortal Kombat",
        "img/mortal kombat.png",
        `Em Mortal Kombat, Shang Tsung, imperador da Exoterra, envia seu melhor guerreiro, Sub-Zero, para assassinar o jovem Cole Young. Temendo pela segurança da família, Cole vai em busca de Sonya Blade seguindo a indicação de Jax, um major das Forças Especiais, que tem a mesma estranha marca de dragão com a qual Cole nasceu. Logo, ele se vê no templo do Lorde Raiden, um Deus Ancião e guardião do Plano Terreno, que abriga todos que possuem a marca. No templo, ele treina com os experientes guerreiros Liu Kang, Kung Lao e Kano, enquanto se prepara para lutar contra os inimigos da Exoterra em uma batalha pelo universo. Será que Cole irá longe o suficiente para desbloquear sua arcana - o imenso poder da sua alma - a tempo de salvar não apenas a família, mas interromper os planos de Shang Tsung de uma vez por todas?`,
        "Ação",
        "img/16anos.png",
        "Em Cartaz",
        "https://www.youtube.com/watch?v=8Tk8sqXlogM"
    ),
    new filme(
        "Quem Vai Ficar com Mário?",
        "img/quem vai ficar com mario.jpg",
        `Quando Mário (Daniel Rocha), um jovem de 30 anos que trabalha com teatro, viaja para sua terra natal para visitar a familia, ele decide se assumir para o pai conservador e contar que mora com o namorado, Fernando (Felipe Abib). Porém seu irmão mais velho, Vicente (Rômulo Arantes Neto), acaba estragando seus planos trazendo outras novidades para a família. Para piorar a situação, o pai de Mário quer que ele assuma a liderança da cervejaria da família, e ele acaba se envolvendo com Ana (Letícia Lima), a coach que seu irmão contratou para modernizar a empresa.`,
        "Comédia",
        "img/14anos.jpg",
        "Em Cartaz",
        "https://www.youtube.com/watch?v=meFEzL_Mw1A"
    ),
    new filme(
        "A Boa Esposa",
        "img/aboaesposa.jpg",
        `Paulette Van Der Beck é diretora de uma escola de governança doméstica há muitos anos. Sua missão é treinar adolescentes para serem donas de casa perfeitas, esperando que as mulheres sejam obedientes aos maridos. Ela descobre que a escola está à beira da falência e assume a responsabilidade do local, decidindo participar de um programa de TV. Mas ela e suas animadas alunas começam a questionar suas crenças enquanto os protestos de maio de 1968 em todo o país transformam a sociedade ao seu redor.`,
        "Comédia",
        "img/12anos.png",
        "Em Cartaz",
        "https://www.youtube.com/watch?app=desktop&v=Wv0BwU1ongs"
    ),
    new filme(
        "Nomadland",
        "img/Nomadland.jpg",
        `Uma mulher na casa dos 60 anos que, depois de perder tudo na Grande Recessão, embarca em uma viagem pelo Oeste americano, vivendo como uma nômade moderna.`,
        "Drama",
        "img/12anos.png",
        "Em Cartaz",
        "https://www.youtube.com/watch?v=6sxCFZ8_d84"
    ),
    new filme(
        "Helen",
        "img/helen.jpg",
        `A rotina típica de quem vive nos cortiços do bairro do Bexiga, em São Paulo, retratada pelos olhos de uma menina de nove anos em uma jornada para conseguir comprar um presente de aniversário para sua avó, um kit de maquiagem completo.`,
        "Drama",
        "img/14anos.jpg",
        "Em Cartaz",
        "https://www.youtube.com/watch?v=NPeyiBj19vc"
    ),
    new filme(
        "Meu Pai",
        "img/Meu Pai.jpg",
        `Anthony tem 81 anos de idade. Ele mora sozinho em seu apartamento em Londres, e recusa todos os cuidadores que sua filha, Anne, tenta impor a ele. Mas isso se torna uma necessidade maior quando ela resolve se mudar para Paris com um homem que conheceu há pouco, e não poderá estar com pai todo dia. Fatos estanhos começam a acontecer: um desconhecido diz que este é o seu apartamento. Anne se contradiz, e nada mais faz sentido na cabeça de Anthony. Estaria ele enlouquecendo, ou seria um plano de sua filha para o tirar de casa?`,
        "Drama",
        "img/14anos.jpg",
        "Em Cartaz",
        "https://www.youtube.com/watch?v=4TZb7YfK-JI"
    ),
    new filme(
        "Space Jam: Um Novo Legado",
        "img/space.jpg",
        "Quando LeBron e seu filho Dom são aprisionados em um espaço digital por uma I.A. trapaceira, LeBron precisa trazê-los de volta para casa em segurança levando o Pernalonga, a Lola Bunny e uma equipe indisciplinada de Looney Tunes a uma vitória contra os campeões digitais da I.A. na quadra: um elenco de peso formado por astros e estrelas da NBA e WNBA como você nunca viu. Será Tunes contra Goons no desafio mais arriscado da vida de LeBron, que redefinirá o laço entre ele e seu filho, e reforçará a importância de ser você mesmo. Prontos para arrasar, os Tunes desafiam as convenções, turbinam seus talentos únicos e surpreendem até o “Rei” James jogando à sua própria maneira.",
        "Aventura",
        "img/livre2.jpg",
        "Em Breve",
        "https://www.youtube.com/watch?v=PSiVKkFbWJw"
    ),
    new filme(
        "Os Croods 2: Uma Nova Era",
        "img/croods2.jpg",
        "Os Croods 2: Uma Nova Era, acompanha a jornada dos Croods em busca de um novo lar. Durante a aventura, eles se deparam com uma família moderna, com costumes completamente diferentes dos deles, os Bemelhores. A família, composta por Esperança Bemelhor (voz de Juliana Paes), Bem Bemelhor (voz de Rodrigo Lombardi) e a filha Aurora, leva uma vida bem diferente da dos homens das cavernas.",
        "Aventura",
        "img/livre2.jpg",
        "Em Breve",
        "https://www.youtube.com/watch?v=TMaAtOe89Jk"
    ),
    new filme(
        "Abe",
        "img/abe.jpg",
        "Abe (Noah Schnapp), um menino de 12 anos mora no Brooklyn, Nova Iorque, com a mãe judia de origem israelense e o pai palestino de origem muçulmana. O jovem, aprendiz de um chefe de cozinha brasileiro, ama gastronomia e tenta usar desse artifício para manter sua família unida.",
        "Drama",
        "img/12anos.png",
        "Em Breve",
        "https://www.youtube.com/watch?v=rpmWZufcTf0"
    ),
    new filme(
        "De Volta à Itália",
        "img/italia.jpg",
        "Esta é a história do artista boêmio londrino Robert, que se junta ao seu filho Jack, para fazer uma rápida viagem para a Itália, para vender a propriedade herdada da esposa. Com a relação abalada, a dupla surpreende-se com o estado degradante do local e decide colocar mãos à obra numa renovação.",
        "Comédia",
        "img/livre2.jpg",
        "Em Breve",
        "https://www.youtube.com/watch?v=4ICLSRYOLqQ"
    ),
    new filme(
        "Viúva Negra",
        "img/viuva negra.jpg",
        "No novo filme da Marvel Studios, Viúva Negra precisa confrontar partes de sua história quando surge uma conspiração perigosa ligada ao seu passado. Perseguida por uma força que não irá parar até derrotá-la, Viúva Negra terá que lidar com sua antiga vida de espiã, e também, reencontrar parte de sua família que deixou para trás antes de se tornar uma Vingadora. ",
        "Ação",
        "img/12anos.png",
        "Em Breve",
        "https://www.youtube.com/watch?v=Gm3o0bfGP3g"
    ),
    new filme(
        "4 x 100 - Correndo Por Um Sonho",
        "img/4X100.jpg",
        "O atletismo feminino está prestes a conquistar uma medalha de ouro no revezamento 4x100 nos Jogos Olímpicos de 2016, a vitória brasileira é quase certa e as velocistas estão a um passo do que seria um marco histórico. Seria. Um erro fatal, no entanto, adia os sonhos das atletas: o descuido da jovem Maria Lúcia causa a desclassificação do grupo. O que muda para sempre sua vida e a de Adriana, colega que não a perdoa após a final. Quatro anos se passam. Maria Lúcia ainda é a grande promessa do atletismo, enquanto Adriana vive de pequenas lutas de MMA. A poucos meses das Olimpíadas de Tóquio, são chamadas para a nova equipe do 4x100. Agora, Maria Lúcia e Adriana precisam superar os erros do passado. Para isso, elas contam com a ajuda das veteranas Rita e Jaciara e da novata Bia, atletas que redescobrem seu verdadeiro poder como equipe, mostrando que o atletismo feminino brasileiro segue mais forte do que nunca. ",
        "Drama",
        "img/12anos.png",
        "Em Breve",
        "https://www.youtube.com/watch?v=Rf-T--CNKMw"
    ),
    new filme(
        "Dupla Explosiva 2",
        "img/dupla explosiva.jpg",
        "O guarda-costas Michael Bryce (Ryan Reynolds) terá que abandonar sua licença sabática para proteger Darius (Samuel L. Jackson) e Sonia (Salma Hayek), o casal estranho mais letal do mundo. Enquanto Bryce é levado ao limite por seus dois protegidos, o casal Kincaid se mete em uma trama global, onde são perseguidos por um louco vingativo e poderoso (Antonio Banderas).",
        "Ação",
        "img/12anos.png",
        "Em Breve",
        "https://www.youtube.com/watch?v=M23GC4dxqmc"
    ),
    new filme(
        "Infiltrado",
        "img/infiltrado.jpg",
        "Harry (Jason Statham), conhecido apenas como “H”, é um homem misterioso que trabalha para uma empresa de carros-fortes e movimenta grandes quantias de dinheiro pela cidade de Los Angeles. Quando, ao impedir um assalto, ele surpreende a todos com suas habilidades de combate, suas verdadeiras intenções começam a ser questionadas e um plano maior é revelado. ",
        "Ação",
        "img/14anos.jpg",
        "Em Breve",
        "https://www.youtube.com/watch?v=U6lq_G4VR60"
    ),
    new filme(
        "Um Lugar Silencioso - Parte II",
        "img/um lugar silencioso.jpg",
        "Logo após os acontecimentos mortais, até mesmo dentro de casa, a família Abbott (Emily Blunt, Millicent Simmonds, Noah Jupe) precisa agora encarar o terror mundo afora, continuando a lutar para sobreviver em silêncio. Obrigados a se aventurar pelo desconhecido, eles rapidamente percebem que as criaturas que caçam pelo som não são as únicas ameaças que os observam pelo caminho de areia. ",
        "Terror",
        "img/16anos.png",
        "Em Breve",
        "https://www.youtube.com/watch?v=AkIMYJpVM3w"
    ),
    new filme(
        "Tempo",
        "img/tempo.jpg",
        "Uma família decide relaxar em uma praia isolada durante o feriado e acaba se envolvendo em um grande mistério: todos começam a envelhecer rapidamente, de modo que suas vidas inteiras se resumem a um único dia. ",
        "Drama",
        "img/12anos.png",
        "Em Breve",
        "https://www.youtube.com/watch?v=zxnVGnQKM4E"
    ),
    new filme(
        "Jungle Cruise",
        "img/jungle cruiser.jpg",
        "O capitão de um barco leva uma dupla de irmãos na sua missão para achar uma árvore com poderes de cura. Animais selvagens e outra expedição alemã são alguns dos problemas que eles encontram no caminho. ",
        "Aventura",
        "img/livre2.jpg",
        "Em Breve",
        "https://www.youtube.com/watch?v=giiVNWmtUDI"
    ),
    new filme(
        "Anônimo",
        "img/anonimo.jpg",
        "Em Nobody, Hutch Mansell (Bob Odenkirk) é um pacato pai e marido que sempre arca com as injustiças da vida, sem revidar. Quando dois ladrões invadem sua casa, Hutch se recusa a defender a si mesmo e sua família na esperança de evitar qualquer violência, desapontando seus familiares com sua passividade. As consequências do incidente acabam despertando uma raiva latente em Hutch, desencadeando instintos adormecidos e impulsionando-o em um caminho brutal que irá trazer à tona segredos sombrios e habilidades letais.",
        "Ação",
        "img/16anos.png",
        "Em Breve",
        "https://www.youtube.com/watch?v=5suJxv2YcL4"
    )
    // <--- Novo filme aqui --->
];

function PegarFilmePorNome() {
    nomeAPegar = sessionStorage.getItem("filme");

    for(film of filmes) {
        if(film.nome == nomeAPegar){
            film.updatePage();
        }
    }
}

function get(s) {
    return document.getElementById(s).value;
}

function set(s, n) {
    document.getElementById(s).innerHTML = n;
}
