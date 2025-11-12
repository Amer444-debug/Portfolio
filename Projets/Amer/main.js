let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3'); 
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let Amer = document.querySelector('.Amer');
let mainSection = document.querySelector('.main');

window.onscroll = function () {
    let value = window.scrollY;

    // ===== حركة العناصر =====
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 0.5 + 'px';
    mountains4.style.top = value * 1.5 + 'px'; 
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';

    // ===== Amer =====
    let fontSize = Math.min(value, 67); // الحد الأقصى للحجم
    Amer.style.fontSize = fontSize + 'px';

    // حركة Amer مع القمر
    if (value >= 50) {
        Amer.style.opacity = 1;               // يظهر تدريجيًا
        Amer.style.top = 50 + value / 10 + 'px'; // يتحرك مع التمرير
    } else {
        Amer.style.opacity = 0;               // يختفي قبل الوصول
    }

    // تغيير وضع Amer إلى fixed بعد قيمة معينة
    if (value >= 67) {
        Amer.style.position = 'fixed';
        Amer.style.top = '50px';
    } else {
        Amer.style.position = 'absolute';
    }

    // ظهور / اختفاء Amer عند قيمة معينة
    if (value >= 478) {
        Amer.style.display = 'none';
    } else {
        Amer.style.display = 'block';
    }

    // تغيير خلفية main
    if (value >= 127) {
        mainSection.style.background = 'linear-gradient(#376281,#10001f)';
    } else {
        mainSection.style.background = 'linear-gradient(#200016,#10001f)';
    }
};