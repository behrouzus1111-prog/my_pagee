// گرفتن دکمه
const nextPageBtn = document.getElementById('nextPageBtn');

// تابع برای رفتن به صفحه بعدی
function goToNextPage() {
    alert('در حال انتقال به صفحه سوم...');
    // در اینجا می‌توانید به صفحه سوم هدایت کنید
    // window.location.href = "page3.html";
    
    // برای نمونه، تغییر در صفحه فعلی
    document.querySelector('.persian-text').textContent = "آماده رفتن به صفحه سوم!";
    document.querySelector('.sub-text').textContent = "با کلیک مجدد روی دکمه، به صفحه بعد می‌روید";
    
    // یا اگر صفحه سوم وجود دارد:
    // window.location.href = "page3.html";
}

// رویداد کلیک دکمه
nextPageBtn.addEventListener('click', goToNextPage);

// رویداد بارگذاری صفحه
window.addEventListener('load', function() {
    console.log('صفحه دوم بارگذاری شد');
});