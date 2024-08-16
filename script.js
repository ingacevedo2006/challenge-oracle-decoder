document.getElementById('processButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const action = document.querySelector('input[name="action"]:checked').value;
    const outputText = document.getElementById('outputText');
    
    if (!/^[a-z\s]+$/.test(inputText)) {
        alert('El texto debe contener solo letras minúsculas y espacios.');
        return;
    }

    if (action === 'encrypt') {
        outputText.value = encrypt(inputText);
    } else {
        outputText.value = decrypt(inputText);
    }
});

document.getElementById('copyButton').addEventListener('click', function() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});

function encrypt(text) {
    // Ejemplo de encriptación simple (Cesar Cipher con desplazamiento de 3)
    return text.split('').map(char => {
        if (char === ' ') return char;
        const code = char.charCodeAt(0);
        return String.fromCharCode((code - 97 + 3) % 26 + 97);
    }).join('');
}

function decrypt(text) {
    // Ejemplo de desencriptación simple (Cesar Cipher con desplazamiento de 3)
    return text.split('').map(char => {
        if (char === ' ') return char;
        const code = char.charCodeAt(0);
        return String.fromCharCode((code - 97 - 3 + 26) % 26 + 97);
    }).join('');
}
