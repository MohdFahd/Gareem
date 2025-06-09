// Global Language Management System for Taqseem App

class LanguageManager {
  constructor() {
    this.currentLang = localStorage.getItem("taqseem_language") || "ar";
    this.translations = {
      ar: {
        // Navigation
        home: "الرئيسية",
        groups: "المجموعات",
        requests: "الطلبات",
        wallet: "المحفظة",
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
        search: "بحث",
        filter: "تصفية",
        sort: "ترتيب",

        // App Title and Descriptions
        appTitle: "تقسيم",
        appSubtitle: "تقسيم ذكي للمصاريف",
        appDescription: "تطبيق ذكي لتقسيم المصاريف مع الأصدقاء والعائلة",
        welcome: "مرحباً بك في تقسيم!",
        welcomeDescription: "ابدأ بإنشاء مجموعة جديدة لتقسيم المصاريف",

        // Group Management
        newGroup: "مجموعة جديدة",
        myGroups: "مجموعاتي",
        activeGroups: "المجموعات النشطة",
        addExpense: "إضافة مصروف",
        createGroup: "إنشاء مجموعة",
        joinGroup: "انضم للمجموعة",
        recordExpense: "تسجيل مصروف",
        splitBill: "تقسيم الفاتورة",

        // Financial Terms
        currency: "ر.س",
        balance: "الرصيد",
        totalBalance: "الرصيد الكلي",
        yourShare: "حصتك",
        owedToYou: "مستحق لك",
        youOwe: "عليك دفع",
        totalExpenses: "إجمالي المصاريف",
        monthlyExpenses: "المصروفات الشهرية",
        pendingSettlement: "تحتاج تسوية",
        balanced: "متوازن",
        completed: "مكتملة",

        // Time References
        today: "اليوم",
        yesterday: "أمس",
        lastWeek: "الأسبوع الماضي",
        thisMonth: "هذا الشهر",
        lastMonth: "الشهر الماضي",
        lastUpdate: "آخر تحديث",
        recentActivity: "النشاط الأخير",

        // Status and States
        active: "نشطة",
        inactive: "غير نشطة",
        pending: "معلقة",
        success: "نجح",
        error: "خطأ",
        loading: "جاري التحميل...",
        empty: "فارغ",
        noResults: "لا توجد نتائج",

        // Authentication
        login: "تسجيل الدخول",
        register: "إنشاء حساب",
        logout: "تسجيل الخروج",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        confirmPassword: "تأكيد كلمة المرور",
        rememberMe: "تذكرني",
        forgotPassword: "نسيت كلمة المرور؟",

        // Profile & Settings
        personalInfo: "المعلومات الشخصية",
        preferences: "التفضيلات",
        notifications: "الإشعارات",
        language: "اللغة",
        defaultCurrency: "العملة الافتراضية",
        theme: "المظهر",
        privacy: "الخصوصية",
        security: "الأمان",

        // Reports & Analytics
        reports: "التقارير",
        analytics: "التحليلات",
        statistics: "الإحصائيات",
        monthlyReport: "التقرير الشهري",
        expensesByCategory: "المصاريف حسب الفئة",
        trends: "الاتجاهات",

        // Categories (Cultural context)
        food: "طعام وشراب",
        transportation: "مواصلات",
        accommodation: "إقامة",
        entertainment: "ترفيه",
        shopping: "تسوق",
        healthcare: "صحة",
        education: "تعليم",
        utilities: "خدمات",
        gifts: "هدايا",
        travel: "سفر",

        // Social Features
        invite: "دعوة",
        share: "مشاركة",
        participants: "المشاركون",
        members: "الأعضاء",
        admin: "مدير",
        moderator: "مشرف",
        viewer: "مشاهد",

        // Notifications
        newExpenseAdded: "تم إضافة مصروف جديد",
        memberJoined: "انضم عضو جديد",
        billSplit: "تم تقسيم الفاتورة",
        paymentReceived: "تم استلام دفعة",
        reminderSent: "تم إرسال تذكير",

        // Actions & Buttons
        createNewGroup: "إنشاء مجموعة جديدة",
        addQuickExpense: "مصروف سريع",
        requestMoney: "طلب أموال",
        sendReminder: "إرسال تذكير",
        viewDetails: "عرض التفاصيل",
        editGroup: "تعديل المجموعة",
        archiveGroup: "أرشفة المجموعة",
        deleteGroup: "حذف المجموعة",

        // Empty States
        noGroupsYet: "لا توجد مجموعات بعد",
        noExpensesYet: "لا توجد مصاريف بعد",
        noNotifications: "لا توجد إشعارات",
        createFirstGroup:
          "أنشئ مجموعة جديدة أو انضم لمجموعة موجودة لبدء تقسيم المصاريف",

        // Language Toggle
        switchToEnglish: "English",

        // Cultural Expressions
        goodMorning: "صباح الخير",
        goodEvening: "مساء الخير",
        thankYou: "شكراً لك",
        youAreWelcome: "أهلاً وسهلاً",
        blessed: "مبارك",

        // Numbers and Units
        people: "أشخاص",
        person: "شخص",
        lists: "قوائم",
        list: "قائمة",
        items: "عناصر",
        item: "عنصر",
        riyal: "ريال",
        riyals: "ريالات",

        // Search and Filters
        searchPlaceholder: "ابحث في المجموعات، المصاريف، أو الأشخاص...",
        filterBy: "تصفية حسب",
        sortBy: "ترتيب حسب",
        allGroups: "جميع المجموعات",
        recentGroups: "المجموعات الأخيرة",
        favoriteGroups: "المجموعات المفضلة",
      },

      en: {
        // Navigation
        home: "Home",
        groups: "Groups",
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
        search: "Search",
        filter: "Filter",
        sort: "Sort",

        // App Title and Descriptions
        appTitle: "Taqseem",
        appSubtitle: "Smart Expense Splitting",
        appDescription:
          "Smart app for splitting expenses with friends and family",
        welcome: "Welcome to Taqseem!",
        welcomeDescription: "Start by creating a new group to split expenses",

        // Group Management
        newGroup: "New Group",
        myGroups: "My Groups",
        activeGroups: "Active Groups",
        addExpense: "Add Expense",
        createGroup: "Create Group",
        joinGroup: "Join Group",
        recordExpense: "Record Expense",
        splitBill: "Split Bill",

        // Financial Terms
        currency: "SAR",
        balance: "Balance",
        totalBalance: "Total Balance",
        yourShare: "Your Share",
        owedToYou: "Owed to You",
        youOwe: "You Owe",
        totalExpenses: "Total Expenses",
        monthlyExpenses: "Monthly Expenses",
        pendingSettlement: "Needs Settlement",
        balanced: "Balanced",
        completed: "Completed",

        // Time References
        today: "Today",
        yesterday: "Yesterday",
        lastWeek: "Last Week",
        thisMonth: "This Month",
        lastMonth: "Last Month",
        lastUpdate: "Last Update",
        recentActivity: "Recent Activity",

        // Status and States
        active: "Active",
        inactive: "Inactive",
        pending: "Pending",
        success: "Success",
        error: "Error",
        loading: "Loading...",
        empty: "Empty",
        noResults: "No Results",

        // Authentication
        login: "Login",
        register: "Register",
        logout: "Logout",
        email: "Email",
        password: "Password",
        confirmPassword: "Confirm Password",
        rememberMe: "Remember Me",
        forgotPassword: "Forgot Password?",

        // Profile & Settings
        personalInfo: "Personal Information",
        preferences: "Preferences",
        notifications: "Notifications",
        language: "Language",
        defaultCurrency: "Default Currency",
        theme: "Theme",
        privacy: "Privacy",
        security: "Security",

        // Reports & Analytics
        reports: "Reports",
        analytics: "Analytics",
        statistics: "Statistics",
        monthlyReport: "Monthly Report",
        expensesByCategory: "Expenses by Category",
        trends: "Trends",

        // Categories
        food: "Food & Drinks",
        transportation: "Transportation",
        accommodation: "Accommodation",
        entertainment: "Entertainment",
        shopping: "Shopping",
        healthcare: "Healthcare",
        education: "Education",
        utilities: "Utilities",
        gifts: "Gifts",
        travel: "Travel",

        // Social Features
        invite: "Invite",
        share: "Share",
        participants: "Participants",
        members: "Members",
        admin: "Admin",
        moderator: "Moderator",
        viewer: "Viewer",

        // Notifications
        newExpenseAdded: "New expense added",
        memberJoined: "New member joined",
        billSplit: "Bill split completed",
        paymentReceived: "Payment received",
        reminderSent: "Reminder sent",

        // Actions & Buttons
        createNewGroup: "Create New Group",
        addQuickExpense: "Quick Expense",
        requestMoney: "Request Money",
        sendReminder: "Send Reminder",
        viewDetails: "View Details",
        editGroup: "Edit Group",
        archiveGroup: "Archive Group",
        deleteGroup: "Delete Group",

        // Empty States
        noGroupsYet: "No groups yet",
        noExpensesYet: "No expenses yet",
        noNotifications: "No notifications",
        createFirstGroup:
          "Create a new group or join an existing one to start splitting expenses",

        // Language Toggle
        switchToEnglish: "العربية",

        // Cultural Expressions
        goodMorning: "Good Morning",
        goodEvening: "Good Evening",
        thankYou: "Thank You",
        youAreWelcome: "You're Welcome",
        blessed: "Blessed",

        // Numbers and Units
        people: "people",
        person: "person",
        lists: "lists",
        list: "list",
        items: "items",
        item: "item",
        riyal: "riyal",
        riyals: "riyals",

        // Search and Filters
        searchPlaceholder: "Search groups, expenses, or people...",
        filterBy: "Filter by",
        sortBy: "Sort by",
        allGroups: "All Groups",
        recentGroups: "Recent Groups",
        favoriteGroups: "Favorite Groups",
      },
    };
  }

  init() {
    this.updatePageLanguage();
    this.addLanguageToggle();
  }

  switchLanguage() {
    this.currentLang = this.currentLang === "ar" ? "en" : "ar";
    localStorage.setItem("taqseem_language", this.currentLang);
    this.updatePageLanguage();
    this.updatePlaceholders();
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

    // Update page title
    const titleElement = document.querySelector("title");
    if (titleElement) {
      if (this.currentLang === "ar") {
        titleElement.textContent =
          titleElement.getAttribute("data-ar") || titleElement.textContent;
      } else {
        titleElement.textContent =
          titleElement.getAttribute("data-en") || titleElement.textContent;
      }
    }
  }

  updatePlaceholders() {
    // Update input placeholders
    const inputs = document.querySelectorAll(
      "input[data-ar-placeholder][data-en-placeholder]"
    );
    inputs.forEach((input) => {
      if (this.currentLang === "ar") {
        input.placeholder = input.getAttribute("data-ar-placeholder");
      } else {
        input.placeholder = input.getAttribute("data-en-placeholder");
      }
    });

    // Update textarea placeholders
    const textareas = document.querySelectorAll(
      "textarea[data-ar-placeholder][data-en-placeholder]"
    );
    textareas.forEach((textarea) => {
      if (this.currentLang === "ar") {
        textarea.placeholder = textarea.getAttribute("data-ar-placeholder");
      } else {
        textarea.placeholder = textarea.getAttribute("data-en-placeholder");
      }
    });
  }

  addLanguageToggle() {
    // Create language toggle button if it doesn't exist
    let langToggle = document.getElementById("langToggle");
    if (!langToggle) {
      langToggle = document.createElement("button");
      langToggle.id = "langToggle";
      langToggle.className =
        "fixed top-4 left-4 bg-white/80 backdrop-blur-md border border-white/30 rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 z-50";

      // Add icon
      const icon = document.createElement("i");
      icon.className = "fas fa-language mr-2 text-primary";
      langToggle.appendChild(icon);

      // Add text span
      const textSpan = document.createElement("span");
      textSpan.setAttribute("data-ar", "English");
      textSpan.setAttribute("data-en", "العربية");
      textSpan.textContent = this.currentLang === "ar" ? "English" : "العربية";
      langToggle.appendChild(textSpan);

      document.body.appendChild(langToggle);
    }

    // Add click event listener
    langToggle.addEventListener("click", () => {
      this.switchLanguage();
    });
  }

  // Enhanced translation function with fallback
  t(key, fallback = key) {
    const translation = this.translations[this.currentLang]?.[key];
    return translation || fallback;
  }

  // Get current language
  getCurrentLanguage() {
    return this.currentLang;
  }

  // Check if current language is RTL
  isRTL() {
    return this.currentLang === "ar";
  }

  // Format currency based on language
  formatCurrency(amount, currency = "SAR") {
    const formatter = new Intl.NumberFormat(
      this.currentLang === "ar" ? "ar-SA" : "en-US",
      {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 2,
      }
    );

    if (this.currentLang === "ar") {
      return `${amount.toFixed(2)} ر.س`;
    } else {
      return formatter.format(amount);
    }
  }

  // Format numbers based on language
  formatNumber(number) {
    return new Intl.NumberFormat(
      this.currentLang === "ar" ? "ar-SA" : "en-US"
    ).format(number);
  }

  // Format dates based on language
  formatDate(date, options = {}) {
    const defaultOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const finalOptions = { ...defaultOptions, ...options };

    return new Intl.DateTimeFormat(
      this.currentLang === "ar" ? "ar-SA" : "en-US",
      finalOptions
    ).format(date);
  }

  // Get relative time (e.g., "2 hours ago")
  getRelativeTime(date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) {
      return this.t("justNow", "الآن");
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return this.currentLang === "ar"
        ? `منذ ${minutes} دقيقة${minutes > 1 ? "" : ""}`
        : `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return this.currentLang === "ar"
        ? `منذ ${hours} ساعة${hours > 1 ? "" : ""}`
        : `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return this.currentLang === "ar"
        ? `منذ ${days} يوم${days > 1 ? "" : ""}`
        : `${days} day${days > 1 ? "s" : ""} ago`;
    }
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
