let alarmTime;
let alarmTimeout;

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

    if (alarmTime && `${hours}:${minutes}` === alarmTime) {
        alert('Alarme! Hora de acordar!');
        clearTimeout(alarmTimeout);
        alarmTime = null; 
    }
}

document.getElementById('setAlarm').addEventListener('click', () => {
    const timeInput = document.getElementById('alarmTime').value;
    if (timeInput) {
        alarmTime = timeInput;
        document.getElementById('alarmMessage').textContent = `Alarme definido para ${alarmTime}.`;
    }
});

setInterval(updateClock, 1000);