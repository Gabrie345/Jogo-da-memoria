$(document).ready(function () {

    $("#erroName").hide()

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
    ];
    var pontos = 0;
    var historicoDeClick = 0;
    var primeiroclick = 0;
    var segundoclick = 0;
    var imagemUm = "";
    var imagemDois = "";


    function carregaJogo() {
        imagens = imagens.sort(() => Math.random() - 0.5);
        imagens.forEach(imagens => {
            (imagens).appendTo($("#areaDoJogo"));
        });
        $(".carta").css("opacity", "100");
        mostraCartaInicioDoJogo()
        pontos = 0;
        historicoDeClick = 0;
        primeiroclick = 0;
        segundoclick = 0;
    };
    function mostraCartaInicioDoJogo() {
        setTimeout(() => {
            $(".carta").removeClass("ativada");
        }, 100)
        setTimeout(() => {
            $(".carta").addClass("ativada")
        })
    }


    //Recebe os valores das cartas

    function recebeValoresColetado(valorImagem, elemento) {
        if (primeiroclick == 0) {
            primeiroclick = valorImagem;
            historicoDeClick += 1;
            imagemUm = elemento;
            $(imagemUm).addClass("ativada");
        } else if (segundoclick == 0) {
            segundoclick = valorImagem;
            historicoDeClick += 1;
            imagemDois = elemento;
            $(imagemDois).addClass("ativada");

            verificadorAcertoseErros();
        };
    };
    function verificadorAcertoseErros() {
        if (primeiroclick == segundoclick) {
            pontos += 2;
            $(imagemDois).removeClass("ativada").css("opacity", "0");
            $(imagemUm).removeClass("ativada").css("opacity", "0");
            primeiroclick = 0;
            segundoclick = 0;

        } else if (primeiroclick != segundoclick) {

            console.log("errou");
            primeiroclick = 0;
            segundoclick = 0;
            $(imagemDois).removeClass("ativada");
            $(imagemUm).removeClass("ativada");
        };
    };

    //adiciona a tabela de vencedor ao final do jogo
    function voceGanhou(nome, historicoDeClick, tempo) {
        var tabela = $(".tabela").find("tbody");

        let linha = "<tr>" +
            "<td>" + nome + "</td>" +
            "<td>" + historicoDeClick + "</td>" +
            "<td>" + tempo + "</td>" +
            "</tr>";
        tabela.prepend(linha);
        alert("Você Ganhou");

    };

    $("#areaDoJogo").on("click", ".carta", function (event) {
        recebeValoresColetado(event.target.value, event.target);
        console.log(pontos);
        let nome = $("#nome").val();
        if (pontos == 8) {
            voceGanhou(nome, historicoDeClick, "5");
        }
    });

    $("#botao").click(function () {

        if ($("#nome").val() == "") {
            $("#erroName").show();
            console.log("nome vazio");
        } else {
            $("#erroName").hide();
            carregaJogo();
        };
    });

});