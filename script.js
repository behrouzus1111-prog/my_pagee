// رمز عبور صحیح
const CORRECT_PASSWORD = "1375";

// گرفتن عناصر DOM
const passwordInput = document.getElementById('passwordInput');
const errorMessage = document.getElementById('errorMessage');
const continueBtn = document.getElementById('continueBtn');

// وضعیت ورود
let isPasswordCorrect = false;

// تابع بررسی رمز عبور
function checkPassword() {
    const enteredPassword = passwordInput.value;
    
    // پاک کردن پیغام خطای قبلی
    errorMessage.textContent = "";
    errorMessage.classList.remove('show');
    
    // بررسی اگر رمز خالی است
    if (enteredPassword.length === 0) {
        isPasswordCorrect = false;
        updateContinueButton();
        return;
    }
    
    // بررسی اگر رمز 4 رقمی نیست
    if (enteredPassword.length !== 4) {
        showError("رمز باید 4 رقمی باشد");
        isPasswordCorrect = false;
        updateContinueButton();
        return;
    }
    
    // بررسی صحت رمز
    if (enteredPassword === CORRECT_PASSWORD) {
        // رمز صحیح
        passwordInput.style.borderColor = "#27ae60";
        passwordInput.style.boxShadow = "0 0 10px rgba(39, 174, 96, 0.5)";
        isPasswordCorrect = true;
        updateContinueButton();
    } else {
        // رمز نادرست
        showError("رمز اشتباه است");
        passwordInput.style.borderColor = "#e74c3c";
        passwordInput.style.boxShadow = "0 0 10px rgba(231, 76, 60, 0.5)";
        isPasswordCorrect = false;
        updateContinueButton();
    }
}

// تابع نمایش خطا
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
}

// تابع به‌روزرسانی وضعیت دکمه ادامه
function updateContinueButton() {
    continueBtn.disabled = !isPasswordCorrect;
}

// تابع هدایت به صفحه بعدی
// تابع هدایت به صفحه بعدی
function goToNextPage() {
    if (isPasswordCorrect) {
        // هدایت به صفحه دوم واقعی
        window.location.href = "page2.html";
    }
}
// رویدادهای ورودی رمز
passwordInput.addEventListener('input', checkPassword);

// رویداد کلیک دکمه ادامه
continueBtn.addEventListener('click', goToNextPage);

// رویداد کلید Enter
passwordInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && isPasswordCorrect) {
        goToNextPage();
    }
});

// رویداد focus و blur روی input
passwordInput.addEventListener('focus', function() {
    if (this.value.length === 0) {
        this.style.borderColor = "#3498db";
        this.style.boxShadow = "0 0 10px rgba(52, 152, 219, 0.5)";
    }
});

passwordInput.addEventListener('blur', function() {
    if (this.value.length === 0) {
        this.style.borderColor = "#ccc";
        this.style.boxShadow = "none";
    }
});

// مقداردهی اولیه
updateContinueButton();

// تمرکز خودکار روی فیلد رمز هنگام بارگیری صفحه
window.addEventListener('load', function() {
    passwordInput.focus();
});