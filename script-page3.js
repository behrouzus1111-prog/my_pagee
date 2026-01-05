// گرفتن عناصر DOM
const audioElement = document.getElementById('audioElement');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const volumeSlider = document.getElementById('volumeSlider');
const progressBar = document.getElementById('progressBar');
const progressContainer = document.querySelector('.progress-container');

// رویداد پخش
playBtn.addEventListener('click', () => {
    audioElement.play();
});

// رویداد توقف موقت
pauseBtn.addEventListener('click', () => {
    audioElement.pause();
});

// رویداد توقف کامل
stopBtn.addEventListener('click', () => {
    audioElement.pause();
    audioElement.currentTime = 0;
    progressBar.style.width = '0%';
});

// کنترل حجم صدا
volumeSlider.addEventListener('input', () => {
    audioElement.volume = volumeSlider.value / 100;
});

// به‌روزرسانی نوار پیشرفت
audioElement.addEventListener('timeupdate', () => {
    if (audioElement.duration) {
        const progress = (audioElement.currentTime / audioElement.duration) * 100;
        progressBar.style.width = `${progress}%`;
    }
});

// کلیک روی نوار پیشرفت برای رفتن به زمان خاص
progressContainer.addEventListener('click', (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    if (audioElement.duration) {
        audioElement.currentTime = clickPosition * audioElement.duration;
    }
});

// تنظیم حجم اولیه
audioElement.volume = volumeSlider.value / 100;

// بارگذاری اولیه
window.addEventListener('load', () => {
    // تلاش برای بارگذاری فایل صوتی
    audioElement.load();
});