//FUNÇÃO QUE CONSOME 8 IMAGENS DA API
function carregarCats() {
    $.getJSON("https://api.thecatapi.com/v1/images/search?limit=8", function(data) {

    console.log(data)

    var dados = data
    $.each(dados, function(key, val) {
        const cats = document.getElementById("cats");

        var img = document.createElement("img");
        img.src = val.url
        cats.appendChild(img)

        console.log('id = ' + val.id + 'url = ' + val.url)
    });

    });
  }
  


//BOTÃO DE CARREGAR MAIS

const loadMore = document.getElementById("loadMore");

      loadMore.addEventListener('click', function(){
        carregarCats()
      });

//COLOCAR A BARRA DE ROLAGEM NO FIM DO SITE

