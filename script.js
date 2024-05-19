document.getElementById('morumbiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário para demonstração

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const interest = document.getElementById('interest').value;

    if (name === '' || email === '' || date === '' || time === '' || interest === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    alert('Formulário enviado com sucesso!');
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
