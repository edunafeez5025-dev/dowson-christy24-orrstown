

    const emo = document.getElementById('emo');
    const greeting = document.getElementById("greeting");
    
    const hour = new Date().getHours();

    let message = "";

    if (hour >= 5 && hour < 12) {
        message = "Good Morning";
    } else if (hour >= 12 && hour < 17) {
        message = "Good Afternoon";
    } else {
        message = "Good Evening";
    }

    greeting.textContent = `${message}, CHRISTY`;
    emo.addEventListener(('click'), (e) =>{
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    })
