"use strict";

// class Matematica {  //feature De Classe
//     static soma(a,b){
//         return a +b;
//     }
// }
// console.log(Matematica.soma(1,2));
//Constante não pode ter o seu valor Reatribuido
//EXemplo com CONST \/
// const usuario = {nome: 'joao'};
// usuario.nome = 'Cleyton';
// console.log(usuario)
//Exemplo com LET \/
// function teste(x){
//     let y = 2;
//     if(x>5){
//         let y = 4;
//         console.log(x,y);
//     }
// }
// teste(10);
// const teste = () => ({nome: 'Joao'}); //Arrow Function com Obj
// console.log(teste())
// const soma = (a = 3,b = 6)=> a + b;// Definindo Valores para Funções com Arrow Function
// console.log(soma(1));
// console.log(soma())
// const arr = [1,3,4,5,8,9];
// //Varre o Array Adicionando a cada iteração
// const newArr = arr.map(item => item * 2); //Arrow Function
// console.log(newArr);
// //varre o array somando cada iteração com 1 valor final somente
// const sum = arr.reduce(function(total,next){
//     return total + next;
// });
// console.log(sum);
// //varre o array retornando somente os numeros setados como TRUE
// const filter = arr.filter(function(item){
//     return item %2 ===0;
// })
// console.log(filter);
// //varre o array verificando o item passado pelo Return como existente
// const find = arr.find(function(item){
//     return item ===2;
// });
// console.log(find);
//Desestruturação \/
// const usuario = {
//     nome: "joao",
//     idade: 20,
//     endereco:{
//         cidade: 'rio do sul',
//         estado: 'SC',
//     },
// }
// const {nome,idade,endereco:{cidade}} = usuario;
// console.log(nome);
// console.log(idade);
// console.log(cidade);
// function mostraNome({nome,idade}){
//     console.log(nome,idade);
// }
// mostraNome(usuario)
//REST OPERATOR
// const usuario = {
//         nome: "joao",
//         idade: 20,
//         empresa: 'MeusPC'
// };
// const {nome,...resto} = usuario;
// console.log(nome);
// console.log(resto);
// const arr = [1,2,3,4];
// const [a, b, ...c] = arr;
// console.log(a);
// console.log(b);
// console.log(c);
// function soma(a,b,...params){
//     return params
// }
// console.log(soma(1,3,4));
//SPREAD 
// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = [...arr1,...arr2];
// console.log(arr3);
// const usuario ={
//     nome:'joao',
//     idade: 23,
//     empresa: 'MeusPC',
// };
// const usuario2 = {...usuario,nome:'Gabriel'};
// console.log(usuario2)
// //console Literals
// const nome = 'joao';
// const idade = 20;
// console.log('Meu nome é '+nome+ 'e tenho '+idade+' Anos.')
// console.log(`Meu nome é ${nome} e tenho ${idade} Anos.`)
//OBJECT Short Syntax. (SINTAXE CURTA de OBJETO)
var nome = 'joao';
var idade = 20;
var usuario = {
  nome: nome,
  idade: idade,
  empresa: 'Rockeseat'
};
console.log(usuario);
