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
        img3 = ($('<img />',
            {
                class: "carta",
                val: "4",
                src: "imagens/nodejs.png",
            })),
        img1 = ($('<img />',
            {
                class: "carta",
                val: 1,
                src: "imagens/angularjs.png",
            })),

        img2 = ($('<img />',
            {
                class: "carta",
                val: 2,
                src: "imagens/css3.png",
            })),
        img3 = ($('<img />',
            {
                class: "carta",
                val: 3,
                src: "imagens/html5.png",
            })),
        img3 = ($('<img />',
            {
                class: "carta",
                val: 4,
                src: "imagens/nodejs.png",
            }))
    ]
    var Pontos = 0;
    const areaDoJogo = $(".areaDoJogo");
    var HistoricoDeClick = 0;
    var primeiroclick = 0;
    var Segundoclick = 0;
    var imagemUm = "";
    var imagemDois = "";

    //função para resetar 
    imagens = imagens.sort(() => Math.random() - 0.5)
    imagens.forEach(imagens => {
        (imagens).appendTo($("#areaDoJogo"))
    })
    function carregaJogo() {
        imagens = imagens.sort(() => Math.random() - 0.5)
        imagens.forEach(imagens => {
            (imagens).appendTo($("#areaDoJogo"))
        })
    }
    //Recebe os valores das cartas
    $(".carta").click(function () {

        if (primeiroclick == 0) {
            primeiroclick = ($(this).val());
            HistoricoDeClick += 1;
            imagemUm = $(this);

        } else if (Segundoclick == 0) {
            Segundoclick = ($(this).val());
            HistoricoDeClick += 1;
            imagemDois = $(this);

            verificadorAcertosErros();
        }
    })

    //verifica se acertou ou erro
    function verificadorAcertosErros() {
        if (primeiroclick == Segundoclick) {
            console.log("acertou");
            Pontos += 2;

            imagemUm.remove();
            imagemDois.remove();

            primeiroclick = 0;
            Segundoclick = 0;

        } else if (primeiroclick != Segundoclick) {
            console.log("errou")
            primeiroclick = 0
            Segundoclick = 0
        }
    }

    $(".botao").click(function () {
        carregaJogo()

    })

})