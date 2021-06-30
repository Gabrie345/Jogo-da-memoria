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


    //função para resetar 
    imagens = imagens.sort(() => Math.random() - 0.5)
    console.log([imagens])
    const areaDoJogo = $(".areaDoJogo")
    imagens.forEach(imagens => {

        (imagens).appendTo($("#areaDoJogo"))

    })

    $(".carta").click(function () {
        console.log($(this).val())
    })



    $(".botao").click(function () {


    })

})