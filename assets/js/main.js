// ===== دليل الفعاليات - main.js =====

// فلترة الفعاليات بالبحث النصي (للصفحات التي تحتاجها)
document.getElementById("search")?.addEventListener("keyup", function () {
    let value = this.value.toLowerCase();
    document.querySelectorAll(".event-card").forEach(el => {
        el.style.display = el.textContent.toLowerCase().includes(value) ? "block" : "none";
    });
});

// التحقق من نموذج اتصل بنا وإظهار Bootstrap Alert
function validateForm() {
    const name    = document.getElementById("name")?.value.trim();
    const email   = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();
    const msgDiv  = document.getElementById("msg");

    // إخفاء رسائل الخطأ
    ["nameErr", "emailErr", "msgErr"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = "none";
    });

    let valid = true;

    if (!name) {
        const el = document.getElementById("nameErr");
        if (el) el.style.display = "block";
        valid = false;
    }

    if (!email || !email.includes("@")) {
        const el = document.getElementById("emailErr");
        if (el) el.style.display = "block";
        valid = false;
    }

    if (!message) {
        const el = document.getElementById("msgErr");
        if (el) el.style.display = "block";
        valid = false;
    }

    if (msgDiv) {
        if (valid) {
            msgDiv.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show">
                    <i class="bi bi-check-circle me-2"></i>
                    تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>`;
            document.getElementById("contactForm")?.reset();
        } else {
            msgDiv.innerHTML = `
                <div class="alert alert-danger alert-dismissible fade show">
                    <i class="bi bi-exclamation-circle me-2"></i>
                    يرجى تصحيح الأخطاء قبل الإرسال.
                    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                </div>`;
        }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
    return false;
}

// زر الرجوع للأعلى
window.addEventListener("scroll", function () {
    const btn = document.getElementById("scrollTop");
    if (btn) btn.style.display = window.scrollY > 300 ? "block" : "none";
});
