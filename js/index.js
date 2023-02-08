console.log ('Tabela da Copa')

let tabelaJogos = document.querySelector('.tabelaJogos')
console.log(tabelaJogos)

// Ler o arquivo json
fetch('jogos-fase1.json')
.then( response => response.json())
.then( data => 
    data.forEach( jogo => {
        let linha = document.createElement('tr')    
        tabelaJogos.appendChild(linha)
        linha.innerHTML = `
        <td>${jogo.diaSemana}</td>
        <td>${jogo.data}</td>
        <td>${jogo.hora}</td>
        <td>${jogo.grupo}</td>
        <td class='centralizar'>
        
            <img class='imagemP' src='./images/bandeiras/${jogo.mandante}' />
            
            <span class='gols'>${jogo.gols_mandante}</span>

            <span class='partida'>${jogo.partida}</span>

            <span class='gols'>${jogo.gols_mandante}</span>
            
            <img class='imagemP' src='./images/bandeiras/${jogo.visitante}' />
        </td>
        <td class='esquerda'>${jogo.estadio}</td>
        `
}))

// Ler os arquivos .json das classificações

let tabelaClassificacao = document.querySelector('.tabelaClassificacao')

function exibirTabelaClassificacao (letraGrupo) {

    document.querySelector('.letra').innerHTML = letraGrupo

    fetch(`classificacaoGrupo${letraGrupo}.json`)
    .then( response => response.json())
    .then( dados => {
        dados.sort(function compararNumeros(a, b) {
            return a.posicao - b.posicao;
        })
        
        dados.forEach( selecao =>  {
        //console.log(dados)
        console.log(selecao)

        let linha = document.createElement('tr')  

        tabelaClassificacao.appendChild(linha)

        linha.innerHTML =`
            <td>${selecao.posicao}</td> 
            <td>${selecao.selecao}</td> 
            <td>${selecao.pontos}</td> 
            <td>${selecao.jogos}</td> 
            <td>${selecao.vitorias}</td> 
            <td>${selecao.empates}</td> 
            <td>${selecao.derrotas}</td> 
            <td>${selecao.gols_pro}</td> 
            <td>${selecao.gols_contra}</td> 
            <td>${selecao.saldo_de_gols}</td> 
        `
        })
    }
    )
}

exibirTabelaClassificacao('G')