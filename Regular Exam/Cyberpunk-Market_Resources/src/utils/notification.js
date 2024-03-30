export function displayError(message) {
    const errorBox = document.getElementById('errorBox');
    const errorMsg = errorBox.querySelector('.msg');
    errorMsg.textContent = message; 
    errorBox.style.display = 'block'; 

    setTimeout(() => {
        errorBox.style.display = 'none';
    }, 3000);
    return;
}