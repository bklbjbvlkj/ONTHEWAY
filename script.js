function showPage(pageId) {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('personalInfoPage').style.display = 'none';
    document.getElementById('orderDetailsPage').style.display = 'none';
    document.getElementById(pageId).style.display = 'block';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'fathalla' && password === '123') {
        showPage('personalInfoPage');
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة');
    }
}

// Function to load data from Local Storage
function loadData() {
    const pickupLocation = localStorage.getItem('pickupLocation') || "فرع النصر";
    const deliveryLocation = localStorage.getItem('deliveryLocation') || "شارع محمد فؤاد عمارة 33 الدور الاول";
    const deliveryTime = localStorage.getItem('deliveryTime') || "30 دقيقة";
    const orderCount = localStorage.getItem('orderCount') || "5";
    const orderValue = localStorage.getItem('orderValue') || "100 ج";
    const dailyTotal = localStorage.getItem('dailyTotal') || "500 ج";
    const totalOrdersValue = localStorage.getItem('totalOrdersValue') || "575 ج";
    const commission = localStorage.getItem('commission') || "75 ج";
    const totalMoney = localStorage.getItem('totalMoney') || "500 ج";

    document.getElementById('pickupLocation').innerText = `مكان استلام الاوردر: ${pickupLocation}`;
    document.getElementById('deliveryLocation').innerText = `مكان التسليم: ${deliveryLocation}`;
    document.getElementById('deliveryTime').innerText = `وقت التسليم: ${deliveryTime}`;
    document.getElementById('orderCount').innerText = `عدد الطلبات: ${orderCount}`;
    document.getElementById('orderValue').innerText = `قيمة الطلب: ${orderValue}`;
    document.getElementById('dailyTotal').innerText = `إجمالي الدفع اليومي: ${dailyTotal}`;
    document.getElementById('totalOrdersValue').innerText = `إجمالي قيمة الطلبات: ${totalOrdersValue}`;
    document.getElementById('commission').innerText = `إجمالي عمولة الطيار: ${commission}`;
    document.getElementById('totalMoney').innerText = `إجمالي أموالك: ${totalMoney}`;
}

// Function to refresh the page data without leaving the page
function refreshPage() {
    loadData(); // Reload data from Local Storage
}

// Load data on page load
document.addEventListener('DOMContentLoaded', loadData);

// دالة لتخزين البيانات الشخصية في Local Storage والانتقال إلى الصفحة التالية
function saveAndNavigate() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const address = document.getElementById('address').value;
    const licenseNumber = document.getElementById('licenseNumber').value;
    const vehicleType = document.getElementById('vehicleType').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // تخزين البيانات في Local Storage
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('address', address);
    localStorage.setItem('licenseNumber', licenseNumber);
    localStorage.setItem('vehicleType', vehicleType);
    localStorage.setItem('phoneNumber', phoneNumber);

    // الانتقال إلى صفحة تفاصيل الطلب
    showPage('orderDetailsPage');
}
