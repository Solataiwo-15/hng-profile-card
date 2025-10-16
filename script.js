
document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    function updateTime() {
        const currentTime = Date.now();
        timeElement.textContent = currentTime;
    }
    updateTime();

    setInterval(updateTime, 1000);
});