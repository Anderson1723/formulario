document.getElementById('exampleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário para demonstração

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    // Se tudo estiver ok, envie o formulário ou faça o que for necessário
    alert('Formulário enviado com sucesso!');
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
