// Add this script to handle the popup
document.querySelectorAll('.detail-button').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('popup').classList.remove('hidden');
    });
});

document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('popup').classList.add('hidden');
});
