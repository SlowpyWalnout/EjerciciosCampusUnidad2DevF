//ejercicio 1
function numerosImpares(){
    for(let i = 0; i <= 50; i++){
        if(i % 2 != 0){
            console.log(i);
        }
    }
}
numerosImpares()
//ejercicio 2
function pokemons(){var pokemons = 
    [ 'bulbasaur',
      'ivysaur',
      'venusaur',
      'charmander',
      'charmeleon',
      'charizard',
      'squirtle',
      'wartortle',
      'blastoise',
      'caterpie',
      'metapod',
      'butterfree',
      'weedle',
      'kakuna',
      'beedrill',
      'pidgey',
      'pidgeotto',
      'pidgeot',
      'rattata',
      'raticate',
      'spearow',
      'fearow',
      'ekans',
      'arbok',
      'pikachu',
      'raichu',
      'sandshrew',
      'sandslash',
      'nidoran-f',
      'nidorina',
      'nidoqueen',
      'nidoran-m',
      'nidorino',
      'nidoking',
      'clefairy',
      'clefable',
      'vulpix',
      'ninetales',
      'jigglypuff',
      'wigglytuff',
      'zubat',
      'golbat',
      'oddish',
      'gloom',
      'vileplume',
      'paras',
      'parasect',
      'venonat',
      'venomoth',
      'diglett',
      'dugtrio',
      'meowth',
      'persian',
      'psyduck',
      'golduck',
      'mankey',
      'primeape',
      'growlithe',
      'arcanine',
      'poliwag',
      'poliwhirl',
      'poliwrath',
      'abra',
      'kadabra',
      'alakazam',
      'machop',
      'machoke',
      'machamp',
      'bellsprout',
      'weepinbell',
      'victreebel',
      'tentacool',
      'tentacruel',
      'geodude',
      'graveler',
      'golem',
      'ponyta',
      'rapidash',
      'slowpoke',
      'slowbro',
      'magnemite',
      'magneton',
      'farfetchd',
      'doduo',
      'dodrio',
      'seel',
      'dewgong',
      'grimer',
      'muk',
      'shellder',
      'cloyster',
      'gastly',
      'haunter',
      'gengar',
      'onix',
      'drowzee',
      'hypno',
      'krabby',
      'kingler',
      'voltorb' ]
    const numero = parseInt(prompt('ingresa un numero'));
    for(let i = 0; i <= numero; i++){
        if(i % 5 == 0){
            console.log(pokemons[i])
        }
    }
}
pokemons()
//ejercicio 3
function mostrarSoloNumeros(lista){
    let array = lista;
    for(elemento of array){
        if(parseInt(elemento)/ 1 == elemento){
            console.log(parseInt(elemento))
        }
    }
}
mostrarSoloNumeros([4,'dos',8,'tres',5,9,1,'cero']);
