# Contributing to Gharim | المساهمة في غريم

We welcome contributions to make Gharim better! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

نرحب بالمساهمات لجعل غريم أفضل! سواء كنت تصلح الأخطاء أو تضيف ميزات أو تحسن التوثيق، فإن مساعدتك موضع تقدير.

## How to Contribute | كيفية المساهمة

### 1. Fork the Repository | انسخ المستودع

- Click the "Fork" button on GitHub
- Clone your fork locally

### 2. Set Up Development Environment | إعداد بيئة التطوير

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/gharim-expense-splitting.git
cd gharim-expense-splitting

# Install dependencies (optional)
npm install

# Start development server
npm run dev
```

### 3. Make Changes | إجراء التغييرات

- Create a new branch for your feature: `git checkout -b feature/amazing-feature`
- Make your changes
- Test your changes thoroughly
- Ensure both Arabic and English translations work
- Test on mobile devices

### 4. Submit a Pull Request | تقديم طلب دمج

- Commit your changes: `git commit -m "Add amazing feature"`
- Push to your branch: `git push origin feature/amazing-feature`
- Open a Pull Request on GitHub

## Development Guidelines | إرشادات التطوير

### Code Style | نمط الكود

- Use semantic HTML5 elements
- Follow Tailwind CSS conventions
- Maintain consistent Arabic/English translations
- Ensure mobile-first responsive design
- Use Font Awesome icons consistently

### Language Support | دعم اللغات

When adding new text:

- Add both Arabic and English versions
- Use `data-ar` and `data-en` attributes
- Update `lang.js` translations if needed
- Test language switching functionality

### File Structure | هيكل الملفات

```
gharim-expense-splitting/
├── index.html          # Homepage
├── login.html          # Authentication
├── register.html       # Registration
├── tricount.html       # Tricount details
├── add-expense.html    # Add expense
├── new-tricount.html   # Create tricount
├── requests.html       # Money requests
├── wallet.html         # Wallet features
├── profile.html        # User profile
├── lang.js             # Language management
├── package.json        # Project config
└── README.md           # Documentation
```

### Testing | الاختبار

Before submitting:

- Test on different screen sizes
- Verify Arabic RTL layout
- Check English LTR layout
- Test language switching
- Validate forms work correctly
- Ensure OAuth integration doesn't break

## Feature Requests | طلبات الميزات

- Open an issue with the "enhancement" label
- Describe the feature in both Arabic and English
- Explain the use case and benefits

## Bug Reports | تقارير الأخطاء

When reporting bugs:

- Use the bug report template
- Include browser and device information
- Specify the language when the bug occurred
- Provide steps to reproduce

## Questions? | أسئلة؟

- Open a discussion on GitHub
- Check existing issues first
- Be respectful and constructive

## Code of Conduct | مدونة السلوك

- Be respectful to all contributors
- Use inclusive language
- Help newcomers get started
- Provide constructive feedback

Thank you for contributing! | شكراً لمساهمتك!
