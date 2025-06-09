// Global Language Management System for Gharim App

class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem("gharim_language") || "ar";
    this.translations = {
      ar: {
        // Navigation
        home: "الرئيسية",
        requests: "الطلبات",
        wallet: "الموافقات",
        profile: "الملف الشخصي",

        // Common Actions
        add: "إضافة",
        edit: "تعديل",
        delete: "حذف",
        save: "حفظ",
        cancel: "إلغاء",
        back: "رجوع",
        next: "التالي",
        previous: "السابق",
        confirm: "تأكيد",

        // App Title and Descriptions
        appTitle: "غريم",
        appSubtitle: "تقسيم المصاريف",
        welcome: "مرحباً بك!",
        welcomeDescription: "ابدأ بإنشاء غريم جديد لتقسيم المصاريف",

        // Tricount Management
        newTricount: "غريم جديد",
        expenseLists: "المجموعات",
        addExpense: "إضافة مصروف",
        createExpenseList: "انشاء مجموعة جديدة",
        recordNewExpense: "تسجيل مصروف جديد",

        // Currency and Amounts
        currency: "ر.س",
        yourExpenses: "مصاريفك",
        owedToYou: "مستحق لك",
        youOwe: "عليك دفع",
        totalExpenses: "إجمالي المصاريف",

        // Time References
        today: "اليوم",
        yesterday: "أمس",
        lastUpdate: "آخر تحديث",

        // Authentication
        login: "تسجيل الدخول",
        register: "التسجيل",
        logout: "تسجيل الخروج",

        // Language Toggle
        switchToEnglish: "English",

        // Common Messages
        loading: "جاري التحميل...",
        error: "حدث خطأ",
        success: "تم بنجاح",

        // Profile
        personalInfo: "المعلومات الشخصية",
        preferences: "التفضيلات",
        notifications: "الإشعارات",
        language: "اللغة",
        defaultCurrency: "العملة الافتراضية",

        // Wallet
        currentBalance: "الرصيد الحالي",
        monthlyIncome: "الدخل الشهري",
        monthlyExpenses: "المصروفات الشهرية",
        recentTransactions: "المعاملات الأخيرة",

        // Requests
        moneyRequests: "طلبات الدفع",
        requestMoney: "طلب الأموال",
        recentRequests: "طلبات حديثة",

        // Numbers
        participants: "أشخاص",
        lists: "قوائم",
      },

      en: {
        // Navigation
        home: "Home",
        requests: "Requests",
        wallet: "Wallet",
        profile: "Profile",

        // Common Actions
        add: "Add",
        edit: "Edit",
        delete: "Delete",
        save: "Save",
        cancel: "Cancel",
        back: "Back",
        next: "Next",
        previous: "Previous",
        confirm: "Confirm",

        // App Title and Descriptions
        appTitle: "Gharim",
        appSubtitle: "Expense Splitting",
        welcome: "Welcome!",
        welcomeDescription: "Start by creating a new Gharim to split expenses",

        // Tricount Management
        newTricount: "New Tricount",
        expenseLists: "Expense Lists",
        addExpense: "Add Expense",
        createExpenseList: "Create expense list",
        recordNewExpense: "Record new expense",

        // Currency and Amounts
        currency: "SAR",
        yourExpenses: "Your expenses",
        owedToYou: "Owed to you",
        youOwe: "You owe",
        totalExpenses: "Total expenses",

        // Time References
        today: "Today",
        yesterday: "Yesterday",
        lastUpdate: "Last update",

        // Authentication
        login: "Login",
        register: "Register",
        logout: "Logout",

        // Language Toggle
        switchToEnglish: "العربية",

        // Common Messages
        loading: "Loading...",
        error: "An error occurred",
        success: "Success",

        // Profile
        personalInfo: "Personal Information",
        preferences: "Preferences",
        notifications: "Notifications",
        language: "Language",
        defaultCurrency: "Default Currency",

        // Wallet
        currentBalance: "Current Balance",
        monthlyIncome: "Monthly Income",
        monthlyExpenses: "Monthly Expenses",
        recentTransactions: "Recent Transactions",

        // Requests
        moneyRequests: "Money Requests",
        requestMoney: "Request Money",
        recentRequests: "Recent Requests",

        // Numbers
        participants: "people",
        lists: "lists",
      },
    };
  }

  init() {
    this.updatePageLanguage();
    this.addLanguageToggle();
  }

  switchLanguage() {
    this.currentLang = this.currentLang === "ar" ? "en" : "ar";
    localStorage.setItem("gharim_language", this.currentLang);
    this.updatePageLanguage();
  }

  updatePageLanguage() {
    const htmlRoot = document.documentElement;
    const body = document.body;

    // Update HTML attributes
    if (this.currentLang === "ar") {
      htmlRoot.setAttribute("lang", "ar");
      htmlRoot.setAttribute("dir", "rtl");
      body.classList.remove("font-english");
      body.classList.add("font-arabic");
    } else {
      htmlRoot.setAttribute("lang", "en");
      htmlRoot.setAttribute("dir", "ltr");
      body.classList.remove("font-arabic");
      body.classList.add("font-english");
    }

    // Update text content for elements with data attributes
    const elements = document.querySelectorAll("[data-ar][data-en]");
    elements.forEach((el) => {
      if (this.currentLang === "ar") {
        el.textContent = el.getAttribute("data-ar");
      } else {
        el.textContent = el.getAttribute("data-en");
      }
    });

    // Update placeholders
    const inputs = document.querySelectorAll(
      "[data-ar-placeholder][data-en-placeholder]"
    );
    inputs.forEach((input) => {
      if (this.currentLang === "ar") {
        input.placeholder = input.getAttribute("data-ar-placeholder");
      } else {
        input.placeholder = input.getAttribute("data-en-placeholder");
      }
    });

    // Update page title
    const titleElement = document.querySelector("title[data-ar][data-en]");
    if (titleElement) {
      if (this.currentLang === "ar") {
        titleElement.textContent = titleElement.getAttribute("data-ar");
      } else {
        titleElement.textContent = titleElement.getAttribute("data-en");
      }
    }

    // Update any elements with translate-key attribute
    const translateElements = document.querySelectorAll("[data-translate-key]");
    translateElements.forEach((el) => {
      const key = el.getAttribute("data-translate-key");
      if (
        this.translations[this.currentLang] &&
        this.translations[this.currentLang][key]
      ) {
        el.textContent = this.translations[this.currentLang][key];
      }
    });
  }

  addLanguageToggle() {
    // Check if language toggle already exists
    if (document.getElementById("langToggle")) {
      const langToggle = document.getElementById("langToggle");
      const toggleSpan = langToggle.querySelector("span[data-ar][data-en]");
      if (toggleSpan) {
        langToggle.addEventListener("click", () => this.switchLanguage());
      }
      return;
    }

    // Create language toggle button if it doesn't exist

    langToggle.addEventListener("click", () => this.switchLanguage());
    document.body.appendChild(langToggle);
  }

  t(key) {
    return this.translations[this.currentLang][key] || key;
  }

  getCurrentLanguage() {
    return this.currentLang;
  }

  isRTL() {
    return this.currentLang === "ar";
  }
}

// Global instance
const langManager = new LanguageManager();

// Auto-initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  langManager.init();
});

// Make available globally
window.langManager = langManager;
