function updateTime() {
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    document.getElementById('currentTime').innerText = now.toLocaleTimeString([], options);
}

setInterval(updateTime, 1000);