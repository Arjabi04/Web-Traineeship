// Welcome Message
// After the page loads, wait 1 second, then show "Welcome to our List Manager" in modal
// Ensure the listener only fires once
// Modal should have a close / dismiss button


export function welcomeWindow() {
    // load - triggers when the full page has loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            const modalBg = document.getElementById('modal-bg');
            console.log(modalBg);
            const closeBtn = document.getElementById('close-modal');
            // Show the modal
            if (modalBg) {
                modalBg.style.display = 'flex';
            }
            closeBtn.addEventListener('click', () => {
                modalBg.style.display = 'none';
            });
        }, 1000);
    });
}

