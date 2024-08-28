// Toggle Sidebar Visibility
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.querySelector('.sidebar');

if (sidebarToggle && sidebar) {
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });
}

// Handle Popup Open and Close
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

// Menggunakan event delegation untuk tombol detail
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('detail-button') && popup) {
        popup.classList.remove('hidden');
    }
});

if (closeBtn && popup) {
    closeBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });
}

function openModal(modalId) {
    document.querySelector('.modal-container').style.display = 'flex';
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.querySelector('.modal-container').style.display = 'none';
    document.getElementById(modalId).style.display = 'none';
}

// Menutup modal jika mengklik di luar modal
window.onclick = function(event) {
    if (event.target.classList.contains('modal-container')) {
        document.querySelector('.modal-container').style.display = 'none';
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    }
}

// Semua kode JavaScript untuk hide/show sidebar telah dihapus