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
