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
// const nome = 'joao';
// const idade = 20;

// const usuario = {
//     nome,
//     idade,
//     empresa:'Rockeseat'
// };
// console.log(usuario);

//DAQUI PRA BAIXO WEBPACK SERVER

// import * as funcoes from '../funcoes';
// console.log(funcoes.soma(1,2));
// console.log(funcoes.sub(4,2));
// alert ('testando');

//ASYNC AWAiT \/ 
// const minhaPromise = () => new Promise ((resolve,reject) =>{
//     setTimeout(() => {resolve('OK')},2000);
// });

    //COM AWAIT
// async function executaPromise() {
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
    
//     //SEM AWAIT
//     // minhaPromise().then(response =>{
//     //     console.log(response);
//     // }),
//     // minhaPromise().then(response =>{
//     //     console.log(response);
//     // }),
//     // minhaPromise().then(response =>{
//     //     console.log(response);
//     // })

// }

    //ASYNC AWAIT com Arrow Function
// const executaPromise = async ()=>{
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());

// }
// executaPromise();

// import axios from 'axios';

// class Api {
//     static async getUserInfo(username){
//         try{
//         const response = await axios.get(`https://api.github.com/users/${username}`);
//         console.log(response);
//     }catch(err){
//         console.log('Erro na API');
//     }
//     }
// }
// Api.getUserInfo('Jv-Guedes')

// APLICAÇÂO COM ES6---INCOMPLETA 
import api from './api';

class App{
    constructor(){
        this.repositories = [];
        
        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository')
        this.listEl = document.getElementById('repo-list');
        

        this.registerHandlers();
    }
    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event);

    }

    setLoading(loading = true){
        if(loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'))
            loadingEl.setAttribute('id','loading');

            this.formEl.appendChild(loadingEl);
        }else{
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event){
        event.preventDefault();

        const repoInput = this.inputEl.value;

        if (repoInput.length === 0)
        return;

        this.setLoading();

        try{
        const response = await api.get(`/repos/${repoInput}`);
        
        const {name,description,html_url, owner:{avatar_url}} = response.data;

        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url,
        });

        this.inputEl.value = '';

        this.render();
        } catch(err){
            alert('O repositório não Existe!')
        }
    }
    render(){
        this.listEl.innerHTML = '';

        this.repositories.forEach(repo =>{
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src',repo.avatar_url);

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('target','_blank');
            linkEl.setAttribute('href',repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));

            let listItemEl = document.createElement('li');
            listItemEl.appendChild(imgEl);
            listItemEl.appendChild(titleEl);
            listItemEl.appendChild(descriptionEl);
            listItemEl.appendChild(linkEl);

            this.listEl.appendChild(listItemEl);

        });
    }
}
new App(); 