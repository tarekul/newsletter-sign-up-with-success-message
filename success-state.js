const btnDismiss = document.querySelector(".btn-dismiss");
const emailDisplay = document.getElementById("emailDisplay");

function getEmailFromURL() {
    const queryString = window.location.href.split("?")[1];
    if (queryString) {
        const params = queryString.split('&'); 
        for (let param of params) {
            const [key, value] = param.split('='); 
            if (key === 'email') {
                return decodeURIComponent(value); 
            }
        }
    }
    return null; 
}

const email = getEmailFromURL();
if (email) {
    emailDisplay.textContent = email;
}

btnDismiss.addEventListener("click", (e) => {
    e.preventDefault(); 
    window.location.href = "index.html";
});