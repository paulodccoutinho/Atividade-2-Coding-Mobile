const API = 'https://www.gamerpower.com/api/giveaways?type=game';

async function carregarJogos() {
  const grid = document.querySelector('#games');

  try {
    const resposta = await fetch(API);

    if (!resposta.ok) {
      throw new Error('Erro ao acessar a API: ' + resposta.status);
    }

    const jogos = await resposta.json();

    console.log(jogos);

    grid.innerHTML = '';

    jogos.forEach(jogo => {
      grid.innerHTML += `
                    <article class="game">
                    <img src="${jogo.thumbnail}" alt="${jogo.title}" loading="lazy">
                        <h3>${jogo.title}</h3>
                    </article>
                `;
    });
  } catch (erro) {
    console.error('Erro ao carregar os jogos:', erro);

    grid.innerHTML = `
                <p>Não foi possível carregar os jogos.</p>
            `;
  }
}

carregarJogos();
