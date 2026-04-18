import { jobs } from './data.js';

// Function to render job cards
function renderRecentJobs() {
    const container = document.getElementById('recent-jobs-container');
    if (!container) return;

    // Show only the first 3 for recent jobs
    const displayJobs = jobs.slice(0, 3);

    container.innerHTML = displayJobs.map(job => `
        <div class="card">
            <div class="badge badge-primary mb-4">${job.category}</div>
            <h3 class="mb-4">${job.title}</h3>
            <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
                ${job.description}
            </p>
            <div class="flex justify-between items-center mt-auto">
                <span style="font-size: 0.875rem; color: var(--text-light); display: flex; align-items: center; gap: 0.25rem;">
                    📍 ${job.location}
                </span>
                <button class="btn btn-primary btn-sm" onclick="participate(${job.id})">Participar</button>
            </div>
        </div>
    `).join('');
}

// Global function for participation
window.participate = (id) => {
    const isLogged = localStorage.getItem('user_logged');
    
    if (!isLogged) {
        showToast("Você precisa estar logado para participar!", "error");
        setTimeout(() => {
            window.location.href = "/login.html";
        }, 1500);
        return;
    }

    let joinedJobs = JSON.parse(localStorage.getItem('joined_jobs') || '[]');
    if (!joinedJobs.includes(id)) {
        joinedJobs.push(id);
        localStorage.setItem('joined_jobs', JSON.stringify(joinedJobs));
        showToast("Inscrição realizada com sucesso! 💙");
        setTimeout(() => {
            window.location.href = "/perfil.html";
        }, 1500);
    } else {
        showToast("Você já está inscrito nesta vaga!", "info");
    }
};

// Toast notification system
function showToast(message, type = "success") {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    
    const icon = type === "error" ? "❌" : (type === "info" ? "ℹ️" : "💙");
    toast.style.borderLeftColor = type === "error" ? "var(--error)" : (type === "info" ? "var(--secondary)" : "var(--success)");
    
    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('nav-menu');
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderRecentJobs();
    setupMobileMenu();

    // Check if user is logged in (mock)
    const isLogged = localStorage.getItem('user_logged');
    if (isLogged) {
        const loginBtn = document.querySelector('a[href="/login.html"]');
        if (loginBtn) {
            loginBtn.innerText = 'Meu Perfil';
            loginBtn.href = '/perfil.html';
            loginBtn.classList.remove('btn-outline');
            loginBtn.classList.add('btn-primary');
        }
        const registerBtn = document.querySelector('a[href="/cadastro.html"]');
        if (registerBtn) {
            registerBtn.style.display = 'none';
        }
    }
});
