function abrirEfechar(){
    const corpo = document.getElementById("corpo")
    const botao = document.getElementById("botao")
    


    corpo.classList.toggle("open")
    botao.classList.toggle("active")
    

}

var pokeNumero = 1

const pokeNOME = document.querySelector(`.nome`);
const pokeGIF = document.querySelector(`.gif`);
const pokeFORM = document.querySelector(`.form`);
const pokeSEARCH = document.querySelector(`.pesquisar`);

const fetchPokemon = async (pokemon) => {
const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
const data = await APIresponse.json();
return data;
}


const renderPokemon = async (pokemon) => {const data = await fetchPokemon(pokemon)


    if(data.id <= 649 && data.id >0){
        pokeNOME.innerHTML = data.id+"-"+data.name;
        pokeGIF.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        pokeSEARCH.value = '';
    }else{
        pokeNOME.innerHTML= 'Pokemon não encontrado :('
        pokeGIF.src=''
}
}

pokeFORM.addEventListener('submit', (event) => {

event.preventDefault();
renderPokemon(pokeSEARCH.value.toLowerCase());
pokeSEARCH.value = "";

});


renderPokemon('1');
