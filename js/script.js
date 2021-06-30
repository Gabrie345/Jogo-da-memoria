$(document).ready(function () {

    var imagens = [
        img1 = ($('<img />',
            {
                class: "carta",
                val: "1",
                src: "imagens/angularjs.png",
            })),

        img2 = ($('<img />',
            {
                class: "carta",
                val: "2",
                src: "imagens/css3.png",
            })),
        img3 = ($('<img />',
            {
                class: "carta",
                val: "3",
                src: "imagens/html5.png",
            })),
        img4 = ($('<img />',
            {
                class: "carta",
                val: "4",
                src: "imagens/nodejs.png",
            })),
        img5 = ($('<img />',
            {
                class: "carta",
                val: 1,
                src: "imagens/angularjs.png",
            })),

        img6 = ($('<img />',
            {
                class: "carta",
                val: 2,
                src: "imagens/css3.png",
            })),
        img7 = ($('<img />',
            {
                class: "carta",
                val: 3,
                src: "imagens/html5.png",
            })),
        img8 = ($('<img/>',
            {
                class: "carta",
                val: 4,
                src: "imagens/nodejs.png",
            }))
    ]
    var Pontos = 0;
    const areaDoJogo = $(".areaDoJogo");
    var historicoDeClick = 0;
    var primeiroclick = 0;
    var segundoclick = 0;
    var imagemUm = "";
    var imagemDois = "";


    function carregaJogo() {
        imagens = imagens.sort(() => Math.random() - 0.5)
        imagens.forEach(imagens => {
            (imagens).appendTo($("#areaDoJogo"))
        })
        Pontos = 0;
        historicoDeClick = 0;
        primeiroclick = 0;
        segundoclick = 0;
    }

    function verificadorAcertoseErros() {
        if (primeiroclick == segundoclick) {
            Pontos += 2;

            imagemUm.remove();
            imagemDois.remove();

            primeiroclick = 0;
            segundoclick = 0;

        } else if (primeiroclick != segundoclick) {
            console.log("errou")

            primeiroclick = 0
            segundoclick = 0
        }
    }
    //Recebe os valores das cartas
    function RecebeValoresColetado(valorImagem, elemento) {
        if (primeiroclick == 0) {
            primeiroclick = valorImagem;
            historicoDeClick += 1;
            imagemUm = elemento;

        } else if (segundoclick == 0) {
            segundoclick = valorImagem;
            historicoDeClick += 1;
            imagemDois = elemento;
            verificadorAcertoseErros();
        }
    }

    $("#areaDoJogo").on("click", ".carta", function (event) {
        RecebeValoresColetado(event.target.value, event.target);
    })

    $(".botao").click(function () {

        carregaJogo()
        while (Pontos >= 8) {
            console.log("asadas")
        }

    })




})