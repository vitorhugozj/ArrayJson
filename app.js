// const manipulandoArrayJson = function(){

// let contato = {nome: 'José da Silva', telefone: '2894374343', email: 'jose@gmail.com'};
// let contato2 = {nome: 'Ana maria', telefone: '343433343', email: 'maria@gmail.com'};
// let contato3 = {nome: 'Gustavo', telefone: '34343432', email: 'gustavo@gmail.com'};

// contato.celular = 'iphono'
// contato2.celular = 'samsungo'
// contato3.celular = 'motorolo'

// contato.dataNasc = '2000-10-05'
// contato2.dataNasc = '2000-06-10'
// contato3.dataNasc = '2000-01-11'

// let arrayContatos = [contato, contato2, contato3];

// console.log('Nome: ' + arrayContatos[1].nome)
// console.log('telefone: ' + arrayContatos[1].telefone)
// console.log('Email: ' + arrayContatos[1].email)
// console.log('Celular: ' + arrayContatos[1].celular)

// contato.celular = 'iphono'
// contato2.celular = 'samsungo'
// contato3.celular = 'motorolo'

// contato.dataNasc = '2000-10-05'
// contato2.dataNasc = '2000-06-10'
// contato3.dataNasc = '2000-01-11'



// let arrayContatos = [contato, contato2, contato3];

// arrayContatos.forEach(function(dadosContato){

//     console.log('Nome: ' + dadosContato.nome)
//     console.log('telefone: ' + dadosContato.telefone)
//     console.log('Email: ' + dadosContato.email)
//     if(dadosContato.celular != undefined)
//         console.log('Celular: ' + dadosContato.celular);
//     console.log('Celular: ' + dadosContato.celular)
//     if(dadosContato.dataNasc != undefined)
//         console.
//     console.log('################################# \n')
//     })
// }


// manipulandoArrayJson();

const listandoArrayJson = function(){
    let arrayProdutos = [];
    let jsonProdutos = {};
        let listaDeMarcas =     [
                                    {id: 1, nome_marca: 'Dell'},
                                    {id: 2, nome_marca: 'Iphone'},
                                    {id: 3, nome_marca: 'Samsung'},
                                    {id: 4, nome_marca: 'Motorola'},
                                    {id: 5, nome_marca: 'Lenovo'},
                                    {id: 6, nome_marca: 'Razer'},
                                    {id: 7, nome_marca: 'Positivo'},
                                    {id: 8, nome_marca: 'Playstation'}
                                ];

        let listaDeCategorias =  [
                                    {id: 1, nome_categoria: 'Periférico', descricao_categoria: 'Periféricos de computadores'},
                                    {id: 2, nome_categoria: 'Hardware', descricao_categoria: 'Hardware para montar computadores'},
                                    {id: 3, nome_categoria: 'Computador', descricao_categoria: 'Computadores completos'},
                                    {id: 4, nome_categoria: 'Games', descricao_categoria: 'Acessórios para jogos e jogos'},
                                    {id: 5, nome_categoria: 'Celulares', descricao_categoria: 'Linha de Celulares'},
                                    {id: 6, nome_categoria: 'Consoles', descricao_categoria: 'Consoles para jogos'}
                                 ];
        let listaDeSituacao =  [
                                    {id: 1, situacao: 'Novo'},
                                    {id: 2, situacao: 'Semi-novo'},
                                    {id: 3, situacao: 'Indisponivel'}
                               ];

        let listaDeCores =     [
                                {id: 1, nome_cor: 'Branco'},
                                {id: 2, nome_cor: 'Preto'},
                                {id: 3, nome_cor: 'Cinza'},
                                {id: 4, nome_cor: 'Vermelho'},
                                {id: 5, nome_cor: 'Azul'},
                                {id: 6, nome_cor: 'Roxo'},
                                {id: 7, nome_cor: 'Verde'},
                               ];
        let produto = {
                            nome: 'Mouse',
                            descricao: 'Mouse Optico com fio',
                            quantidade: 50,
                            valor: 60.00,
                            marca: listaDeMarcas[0],
                            categoria: listaDeCategorias[0],
                            cor: [
                                listaDeCores[2],
                                listaDeCores[4],
                                listaDeCores[3],
                                listaDeCores[1]
                            ]
                       }
         let produto2 = {
                            nome: 'Teclado',
                            descricao: 'Teclado de Membrana básico',
                            quantidade: 170,
                            valor: 110.00,
                            marca: listaDeMarcas[0],
                            categoria: listaDeCategorias[0],
                            cor: [
                                listaDeCores[1],
                                listaDeCores[4],
                                listaDeCores[2],
                                listaDeCores[3],
                                listaDeCores[5]
                            ]
                        }

        let produto3 = {
                            nome: 'Celular',
                            descricao: 'Iphone 11 128gb',
                            quantidade: 0,
                            valor: 2799.00,
                            marca: listaDeMarcas[1],
                            categoria: listaDeCategorias[4],
                            situacao: listaDeSituacao[2],
                            cor: [
                                listaDeCores[1], 
                                listaDeCores[5],
                                listaDeCores[3],
                                listaDeCores[0]
                            ]
               }
               let produto4 = {
                            nome: 'Console',
                            descricao: 'Ps5 - Acompanha Ea24',
                            quantidade: 6,
                            valor: 4399.99,
                            marca: listaDeMarcas[7],
                            categoria: listaDeCategorias[0],
                            situacao: listaDeSituacao[0],
                            cor: [
                                listaDeCores[1],
                                listaDeCores[0],
                            ]
           };
           let produto5 = {
                            nome: 'Teclado Gamer Razer',
                            descricao: 'Teclado Mecânico com Switch Otemu Blue',
                            quantidade: 309,
                            valor: 799.00,
                            marca: listaDeMarcas[5],
                            categoria: listaDeCategorias[0],
                            situacao: listaDeSituacao[1],
                            cor: [
                                listaDeCores[0],
                                listaDeCores[1],
                                listaDeCores[2],
                                listaDeCores[3],
                                listaDeCores[4],
                                listaDeCores[5],
                                listaDeCores[6],
                            ]
                          }
           

    arrayProdutos.push(produto)
    arrayProdutos.push(produto3)      
    
    jsonProdutos.lisa_produtos = arrayProdutos;
    jsonProdutos.count = arrayProdutos.length;
    console.log(jsonProdutos);
    }
listandoArrayJson();
 /**
     * [] --> representa um array
     * {} --> represena um JSON
        Ex: { atributo: valor} 
                {nome: 'José', telefone: '11997324185'}
*/     
