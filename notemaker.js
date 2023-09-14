document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name');
    const noteInput = document.getElementById('note');
    const outputTextArea = document.getElementById('output');
    const generateButton = document.getElementById('generate-button');
    const copyButton = document.getElementById('copy-button');

    generateButton.addEventListener('click', function () {
        const name = nameInput.value.trim();
        const note = noteInput.value.trim();

        if (name && note) {
            const fullNote = `${name}'s Note:\n${note}`;
            outputTextArea.value = fullNote;
        } else {
            alert('Please enter both a name and a note.');
        }
    });

    copyButton.addEventListener('click', function () {
        outputTextArea.select();
        document.execCommand('copy');
        alert('Copied to clipboard');
    });
});
