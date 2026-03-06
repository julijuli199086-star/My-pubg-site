# My-pubg-site
Welcome to Ck Soe Gyi HOME - PUBG Style Website
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>S.M.A - PUBG Home</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="bg-container">
        <h1 id="bg-text">PUBG</h1>
    </div>

    <div class="main-content">
        <div class="dragon-wrapper">
            <div class="dragon dragon-1"></div>
            <div class="dragon dragon-2"></div>
            
            <h1 class="sma-text">S.M.A</h1>
        </div>

        <a href="home.html" class="open-btn">OPEN</a>
    </div>

    <script src="script.js"></script>
</body>
</html>* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #0a0a0a;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Arial Black', sans-serif;
    overflow: hidden;
}

/* PUBG နောက်ခံ */
.bg-container {
    position: absolute;
    z-index: 1;
}

#bg-text {
    font-size: 25vw;
    color: rgba(255, 255, 255, 0.03);
    font-weight: 900;
}

/* S.M.A နဲ့ နဂါး ပတ်ဝန်းကျင် */
.main-content {
    position: relative;
    z-index: 2;
    text-align: center;
}

.dragon-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
}

.sma-text {
    font-size: 8rem;
    color: #f1c40f; /* PUBG Yellow */
    text-shadow: 0 0 30px rgba(241, 196, 15, 0.5);
    z-index: 5;
}

/* နဂါး Animation ပုံစံ (အလင်းတန်းများဖြင့် ပတ်နေသလို လုပ်ထားသည်) */
.dragon {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 5px solid transparent;
    border-top: 5px solid #ff4d4d; /* နဂါးနီရောင်အလင်း */
    border-radius: 50%;
    animation: rotate 2s linear infinite;
}

.dragon-1 {
    width: 250px;
    height: 250px;
    border-bottom: 5px solid #ff4d4d;
    animation-duration: 3s;
}

.dragon-2 {
    width: 300px;
    height: 300px;
    border-right: 5px solid #f1c40f;
    animation-duration: 4s;
    animation-direction: reverse;
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Open Button */
.open-btn {
    display: inline-block;
    padding: 15px 60px;
    background: #f1c40f;
    color: black;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(241, 196, 15, 0.4);
    transition: 0.3s;
}

.open-btn:hover {
    background: white;
    transform: scale(1.1);
}document.addEventListener("mousemove", (e) => {
    const bgText = document.getElementById("bg-text");
    let x = (window.innerWidth / 2 - e.pageX) / 40;
    let y = (window.innerHeight / 2 - e.pageY) / 40;
    bgText.style.transform = `translateX(${x}px) translateY(${y}px)`;
});
