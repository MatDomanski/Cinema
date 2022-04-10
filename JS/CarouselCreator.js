function StartIndex() {
    CreateMainCarousel();
    CreateBreveCarousel();
}

function StartGenero() {
    genero = sessionStorage.getItem("genero");

    document.getElementById("filmeGenero").innerHTML = "Filmes de " + genero;
    CreateGeneroCarousel(genero);
}

function CreateGeneroCarousel(genero) {
    filmesParaCarrossel = new Array();
    for (const filme of filmes) {
        if(filme.genero == genero) {
            filmesParaCarrossel.push(filme);
        }
    }

    document.getElementById("genero-carousel").innerHTML = CreateCarousel(filmesParaCarrossel, "genero-carousel");
}

function CreateBreveCarousel() {
    filmesParaCarrossel = new Array();
    for (const filme of filmes) {
        if(filme.emCartaz == "Em Breve") {
            filmesParaCarrossel.push(filme);
        }
    }

    document.getElementById("carouselExampleIndicators3").innerHTML = CreateCarousel(filmesParaCarrossel, "carouselExampleIndicators3");
}

function CreateMainCarousel() {
    filmesParaCarrossel = new Array();
    for (const filme of filmes) {
        if(filme.emCartaz == "Em Cartaz") {
            filmesParaCarrossel.push(filme);
        }
    }

    document.getElementById("carouselExampleIndicators2").innerHTML = CreateCarousel(filmesParaCarrossel, "carouselExampleIndicators2");
}


function CreateCarousel(filmeArray, carrossel) {

    carouselIndicators = `<ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators2" class="active" data-slide-to="` + 0 + `"></li>`

    for (let i = 1; i < filmeArray.length/6; i++){
       carouselIndicators += `<li data-target="#carouselExampleIndicators2" class="" data-slide-to="` + i + `"></li>`;      
    }

    carouselIndicators += `</ol>`
    carouselInner = `<div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="contfilmesemcartaz">`

    for (let i = 0; i < filmeArray.length; i++) {
        const filme = filmeArray[i];

        carouselInner += `<div class="cinza">
                            <div class="filme movie-cover"><img class="b1" src="` + filme.imagem + `">
                                <div class="color-layer">
                                    <div class="cover-btns">
                                        <a><p class="cover-name">` + filme.nome + `</p></a>
                                        <div class="cover-btn"><a onclick="send('` + filme.nome + `')" href="filme.html"><p>SINOPSE</p></a></div>
                                        <div class="cover-btn"><a href="` + filme.trailer + `" ` + "target='_blank'" + `><p>TRAILER</p></a></div>
                                    </div>
                                </div>
                            </div>
                            <div class="classificacao"><img src="` + filme.classificacao + `" alt="">
                                <div class="sinopese"><a href="">HORÁRIOS</a></div>
                            </div>
                        </div>`;

        if(i%6 == 5 && i != filmeArray.length -1) {
            carouselInner += ` </div>
            </div>
            <div class="carousel-item">
                <div class="contfilmesemcartaz">`;
        }        
    }

    carouselInner += ` </div>
                    </div>`;

    carouselControl = `<a class="carousel-control-prev" style="width: 80px;" href="#` + carrossel+ `" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" style="width: 80px;" href="#` + carrossel+ `" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span  class="sr-only">Next</span>
                        </a>`

    return carouselInner + carouselControl;
}