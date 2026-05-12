function changeTheme(theme) {
    // 1. Remove classes de temas antigos e adiciona a nova
    document.body.className = '';
    document.body.classList.add('theme-' + theme);

    // 2. Referências dos elementos que vão mudar
    const title = document.getElementById('main-title');
    const desc = document.getElementById('main-description');
    const img = document.getElementById('product-img');

    // 3. Lógica de conteúdo por gatilho
    if (theme === 'esportes') {
        title.innerText = "Supere seus Limites";
        desc.innerText = "Foco e performance para o seu treino. O empurrão que faltava.";
        img.src = "https://via.placeholder.com/300x500/e64a19/ffffff?text=LATINHA+ESPORTES";
    } else if (theme === 'fitness') {
        title.innerText = "Leveza e Equilíbrio";
        desc.innerText = "Zero açúcar, mas com toda a energia que você precisa para o dia.";
        img.src = "https://via.placeholder.com/300x500/2e7d32/ffffff?text=LATINHA+FITNESS";
    } else if (theme === 'lazer') {
        title.innerText = "A Noite é Sua";
        desc.innerText = "Misture sabores e celebre os melhores momentos com os amigos.";
        img.src = "https://via.placeholder.com/300x500/6a1b9a/ffffff?text=LATINHA+LAZER";
    } else {
        title.innerText = "Red Bull te dá asas.";
        desc.innerText = "O clássico que você já conhece, para qualquer hora do dia.";
        img.src = "https://via.placeholder.com/300x500/0b1b3f/ffffff?text=LATINHA+TRADICIONAL";
    }
}