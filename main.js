const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultao');

const perguntas = [
    {
        enunciado: "Durante sua jornada por Hallownest, você encontra Zote em apuros sendo mastigado pelo Rei Vengemosca. O que você fará?",
        alternativas: [ 
            {
                texto: "Você decide salvar Zote, enfrentando o Rei Vengemosca enquanto ele está desacordado.",
                afirmacao: "Após vencer o Rei Vengemosca, você conversa com Zote e percebe o quanto ele é arrogante. Mais a frente você se depara com Zote no ninho profundo e no Coliseu dos Tolos, percebendo que ele não passa de um fracote arrogante."
            },
            {
                texto: "Você decide deixar Zote para morrer, continuando a sua jornada.",
                afirmacao: "Após avançar no jogo, você decide voltar um pouco e chega onde encontrou Zote pela primeira vez e repara que apenas seu crânio restou. Você não o encontra pelo resto do jogo."
            },
        ]    
    },
    {
        enunciado: "Explorando os Ermos fúngicos, você chega em local e se depara com um besouro. O que você fará?",
        alternativas: [
            {
                texto: "Decide conversar com o besouro.",
                afirmacao: "Após conversar com ob besouro, descobre que seu nome é Bretta. Após isso, você abre caminho e continua sua jornada, até que decide voltar a Dirthmouth e percebe que uma casa está aberta. Lá você encontra um fragmento de máscara."
            },
            {
                texto: "Decide ignorar o besouro e continuar a sua jornada.",
                afirmacao: "Você ignora o besouro e continua a jornada. Uma das casas permanece fechada e você não pode encontrar um dos fragmentos da máscara."
            },
        ]
    },
    {
        enunciado: "Durante sua jornada você se encontra com um ferreiro e ele melhora seu ferrão. No último melhoramento, ele diz que criou o melhor ferrão da sua vida e diz para você que deseja morrer pela lâmina dele. O que você fará?",
        alternativas: [
            {
                texto: "Decide deixá-lo vivo.",
                afirmacao: "Após isso, você continua sua jornada. E mais tarde, indo para o local onde Sheo, um dos mestres do ferrão está, você encontra o ferreiro com ele e o mesmo demonstra que está feliz por não ter sido morto quando pediu."
            },
            {
                texto: "Decide mata-lo.",
                afirmacao: "Após isso, o corpo do ferreiro cai e fica abaixo de sua cabana. E mais tarde seu corpo pode ser encontrado na Cova de Lixo."
            },
            
        ]
    },
    {
        enunciado: "Durante sua jornada, você acaba parando na Terra do Descanso. Indo abaixo dela, usando o Mergulho Desolador ou a Escuridão Descente, acaba parando em um local subterrâneo e seguindo em frente acaba por encontrar um baú e acima dele você quebra um teto e lá encontra a Pranteadora Dourada. Ela pede para você levar uma Flor Delicada para o túmulo de sua amada, sem poder usar a Estação do Besouro ou o Portal dos Sonhos. O que você fará?",
        alternativas: [
            {
                texto: "Decide aceitar o pedido e levar a flor até o túmulo.",
                afirmacao: "O caminho não foi fácil, porém você chegou no túmulo e entregou a flor. Assim que entregou a flor, o espírito da amada da Pranteadora te agradece, e assim você volta para falar com a Pranteadora, a dando paz e fazendo com que você desbloqueie um fragmento de máscara."
            },
            {
                texto: "Decide não aceitar o pedido.",
                afirmacao: "Você nega o pedido e continua a sua joranda, fazendo com que tanto a Pranteadora Cinzenta como a sua amada não consigam ter paz."
            },
        ]
    },
    {
        enunciado: "Ao explorar os Penhascos Uivantes, você chega a um local e encontra uma lanterna, indo um pouco a frente você se depara com um boneco e decide usar o Ferrão dos Sonhos nele. Assim que faz isso, nada acontece, porém você decide bater na lanterna até a ascender. Voltando para Dirthmouth, lá está cabanas misteriosas e ao entrar em uma delas, se depara com Grimm. Ele o pede para alimentar sua cria com uma certa chama que está espalhada por Hallownest. Você alimenta cria uma vez, e volta para falar com Grimm, ele pega a cria e a devolve já crescida e pede para você alimentar ela mais uma vez. Após isso, você a alimenta e volta para falar com o Grimm e ali começa um um ritual com uma luta-dança. E depois de vencê-lo, ele mais uma vez o pede para alimentar a cria. E procurando pelas chamas, você vai até uma chama localizada na Aldeia Distante e encontra-a com Brumm e ele diz que se quiser parar o ritual, deve o encontrar no Penhasco Uivante no mesmo local da lanterna. O que você fará?",
        alternativas: [
            {
                texto: "Decide ignorar o pedido de Brumm, e segue coletando as chamas.",
                afirmacao: "Após coletar todas as chamas, você volta para Dirthmouth e encontra Grimm dormindo e decide usar o Ferrão dos Sonhos nele, assim acaba enfrentando a versão dos sonhos dele: Rei do Pesadelo Grimm. E depois de o vencer, o ritual se completa e ele desaparece. Deixando sua cria já crescida com você."
            },
            {
                texto: "Decide seguir o pedido de Brumm.",
                afirmacao: "Após isso você segue para o Penhasco Uivante e encontra Brumm lá na lanterna, e ele te ajuda a destruí-la. Assim, você bane a Trupe Grimm de Hallownest, e Brumm te dá o amuleto: Melodia Despreocupada."
            }, 
        ]
    }
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() 
    {
        if (atual >= perguntas.length)
        {
            mostreResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativa.textContent = "";
        mostraAlternativas();
    }

function mostraAlternativas()
    {
        for (const alternativa of perguntaAtual.alternativas)
        {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click",() => respostaSelecionada(alternativa));
            caixaAlternativa.appendChild(botaoAlternativas);
        }
    }

function respostaSelecionada(opcaoSelecionada) 
    {
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }

function mostreResultado()
    {
        caixaPerguntas.textContent = "Após suas escolhas este foi o resultado delas durante seu jogo";
        textoResultado.textContent = historiaFinal;
        caixaAlternativa.textContent = "";
    }

    mostraPergunta();