/**
 * Unified Auth Screen State Controller
 * Mengubah satu halaman form Auth menjadi dinamis (Login <=> Register)
 */
function toggleAuthSystemMode() {
    const title = document.getElementById('auth-title');
    const subtitle = document.getElementById('auth-subtitle');
    const nameField = document.getElementById('container-name-field');
    const submitBtn = document.getElementById('submit-auth-btn');
    const switchText = document.getElementById('auth-switch-text');
    const triggerLink = document.getElementById('auth-action-trigger');
    const nameInput = document.getElementById('login-email-name');

    if (nameField.style.display === 'none') {
        title.innerText = "Create Account";
        subtitle.innerText = "Daftarkan diri untuk kemudahan pelacakan bunga.";
        nameField.style.display = 'block';
        nameInput.setAttribute('required', 'true');
        submitBtn.innerText = "Register";
        switchText.innerText = "Sudah punya akun?";
        triggerLink.innerText = "Masuk";
    } else {
        title.innerText = "Welcome Back";
        subtitle.innerText = "Masuk untuk mengelola pesanan aransemen premium Anda.";
        nameField.style.display = 'none';
        nameInput.removeAttribute('required');
        submitBtn.innerText = "Sign In";
        switchText.innerText = "Belum punya akun?";
        triggerLink.innerText = "Daftar";
    }
}

/**
 * UI Chat Admin Handler Simulation
 * Menghubungkan input keyboard customer ke widget box real-time pratinjau
 */
document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.getElementById("send-customer-chat-btn");
    const chatInput = document.getElementById("customer-chat-input");
    const chatMessages = document.getElementById("customer-chat-messages");

    if(sendBtn && chatInput) {
        sendBtn.addEventListener("click", () => {
            const text = chatInput.value.trim();
            if(!text) return;

            const userBubble = document.createElement("div");
            userBubble.className = "msg-bubble-user";
            userBubble.innerText = text;
            chatMessages.appendChild(userBubble);
            
            chatInput.value = "";
            chatMessages.scrollTop = chatMessages.scrollHeight;

            console.log("Pesan disiapkan untuk Supabase pipeline stream: ", text);
        });

        chatInput.addEventListener("keypress", (e) => {
            if(e.key === 'Enter') sendBtn.click();
        });
    }
});