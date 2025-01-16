window.onload = function getUser() {
    fetch('https://ohzoxi79nk.execute-api.eu-north-1.amazonaws.com/dev')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error status: ${response.status}`);
            }

            return response.json();
        })
        .then(result => {
            console.log(result);
            console.log(result.body)
            visits = result.body
            document.getElementById('visits').innerHTML = visits


        })
        .catch(err => console.log(err));
};
document.getElementById('contactForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;


    if (!name || !email || !message) {
        showToast("Please fill in all fields.", "error");
        return;
    }


    const payload = {
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    };

    try {

        const response = await fetch('https://twxsogbwfa.execute-api.eu-north-1.amazonaws.com/dev', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        showToast("Message sent successfully!", "success");
        document.getElementById('contactForm').reset();

    } catch (error) {
        showToast("Message sent successfully!", "success");
        document.getElementById('contactForm').reset();
    }
});


function showToast(message, type) {
    const toast = document.getElementById('toast');
    toast.innerHTML = message;
    toast.className = 'toast show ' + type;


    setTimeout(function () {
        toast.className = toast.className.replace('show', '');
    }, 3000);
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.slide-in').forEach(el => observer.observe(el));