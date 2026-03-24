// Sistema de folhas caindo (Simbolismo de Oxóssi)
function createLeaf() {
    const leaf = document.createElement('div');
    leaf.className = 'leaf-particle';
    
    const leaves = ['🍃', '🌿', '🌱', '🍂'];
    leaf.innerText = leaves[Math.floor(Math.random() * leaves.length)];
    
    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.top = '-20px';
    leaf.style.fontSize = Math.random() * 20 + 15 + 'px';
    leaf.style.opacity = Math.random() * 0.5 + 0.3;
    leaf.style.animationDuration = Math.random() * 5 + 7 + 's';
    
    document.body.appendChild(leaf);
    
    // Remove a folha após a animação para não pesar o site
    setTimeout(() => {
        leaf.remove();
    }, 10000);
}

// Inicia a chuva de folhas a cada 2 segundos
setInterval(createLeaf, 2000);

// Log de Boas-vindas místico no console (detalhe de desenvolvedor)
console.log("%c🌿 Reino de Oxóssi 🌿%c\nQue a flecha do caçador guie seu caminho.", 
            "color: #D4AF37; font-size: 20px; font-weight: bold; font-family: serif;", 
            "color: #38b000; font-size: 14px;");

<script>
function startCountdown(duration) {
    let timer = duration, minutes, seconds;

    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById("countdown").innerText =
            "⏳ Restam " + minutes + ":" + seconds + " para garantir sua consulta hoje";

        if (--timer < 0) timer = duration;
    }, 1000);
}

startCountdown(900); // 15 minutos
</script>

