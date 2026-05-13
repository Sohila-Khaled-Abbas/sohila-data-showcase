import React, { useState } from 'react';

const content = {
  en: {
    title: "Data & BI Project Inquiry",
    desc: "Please provide the details below to help me understand your data infrastructure and business objectives.",
    sec1: "1. Client Identity",
    lblName: "Full Name & Job Title *",
    lblEmail: "Work Email Address *",
    lblCompany: "Company Name & Industry",
    sec2: "2. Data Infrastructure",
    lblDataLoc: "Where does your data currently reside?",
    chkSheet: "Spreadsheets (Excel / Google Sheets)",
    chkDb: "Relational DBs (SQL, Cloud ERPs)",
    sec3: "3. Project Scope",
    lblProblem: "Describe the core business problem you are trying to solve: *",
    sec4: "4. Logistics",
    lblBudget: "Estimated Budget Range",
    btnSubmit: "Submit Inquiry",
    btnProcessing: "Processing...",
    errNetwork: "Failed to submit. Please try again.",
    succTitle: "Inquiry Received",
    succDesc: "Thank you. I will review your submission and contact you shortly.",
    budgetOptions: [
      { val: "", text: "Select range (USD)" },
      { val: "$500 - $1,500", text: "$500 - $1,500" },
      { val: "$1,500 - $5,000", text: "$1,500 - $5,000" },
      { val: "$5,000+", text: "$5,000+" }
    ]
  },
  ar: {
    title: "طلب استشارة وبناء أنظمة بيانات",
    desc: "يرجى تقديم التفاصيل أدناه لمساعدتي في فهم البنية التحتية لبياناتك وأهدافك التجارية.",
    sec1: "١. بيانات العميل",
    lblName: "الاسم بالكامل والمسمى الوظيفي *",
    lblEmail: "البريد الإلكتروني للعمل *",
    lblCompany: "اسم الشركة والمجال",
    sec2: "٢. البنية التحتية للبيانات",
    lblDataLoc: "أين تحتفظ ببياناتك حالياً؟",
    chkSheet: "جداول البيانات (Excel / Google Sheets)",
    chkDb: "قواعد البيانات أو الأنظمة السحابية (SQL / ERP)",
    sec3: "٣. نطاق المشروع",
    lblProblem: "صف المشكلة الأساسية التي تواجهها في تحليل بياناتك: *",
    sec4: "٤. التفاصيل اللوجستية",
    lblBudget: "الميزانية التقديرية للمشروع",
    btnSubmit: "إرسال الطلب",
    btnProcessing: "جاري الإرسال...",
    errNetwork: "فشل الإرسال. يرجى المحاولة مرة أخرى.",
    succTitle: "تم استلام طلبك",
    succDesc: "شكراً لك. سأقوم بمراجعة التفاصيل والتواصل معك في أقرب وقت.",
    budgetOptions: [
      { val: "", text: "اختر الميزانية (جنيه مصري)" },
      { val: "1000 - 5000 EGP", text: "1,000 - 5,000 جنيه" },
      { val: "5000 - 15000 EGP", text: "5,000 - 15,000 جنيه" },
      { val: "15000+ EGP", text: "أكثر من 15,000 جنيه" }
    ]
  }
};

export default function IntakeForm() {
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzoGEjhGmeppcE31Us5U2xVd8fJah4ZiobkhDSZvBpHnRpmHB9kEfRosdMKcA4Jibse/exec';

  const [lang, setLang] = useState('en');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    dataLocation: [] as string[],
    problem: '',
    budget: ''
  });

  const t = content[lang as keyof typeof content];
  const isRTL = lang === 'ar';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return { ...prev, dataLocation: [...prev.dataLocation, value] };
      } else {
        return { ...prev, dataLocation: prev.dataLocation.filter((item) => item !== value) };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const payload = {
      ...formData,
      dataLocation: formData.dataLocation.join(', '),
      languagePreference: lang === 'en' ? 'English' : 'Arabic'
    };
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        setStatus('success');
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('error');
    }
  };

  return (
    <div
      className="bg-slate-50 text-slate-800 font-sans min-h-screen py-12 px-4 sm:px-6 lg:px-8 transition-all"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-3xl mx-auto">

        {/* Language Toggle */}
        <div className={`flex mb-4 ${isRTL ? 'justify-start' : 'justify-end'}`}>
          <div className="bg-white rounded-lg p-1 shadow-sm border border-slate-200 inline-flex">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                lang === 'en' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setLang('ar')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                lang === 'ar' ? 'bg-slate-100 text-slate-900' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              العربية
            </button>
          </div>
        </div>

        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">{t.title}</h1>
          <p className="mt-4 text-lg text-slate-600">{t.desc}</p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100">

          {status === 'success' ? (
            <div className="p-10 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t.succTitle}</h3>
              <p className="text-slate-600 max-w-md mx-auto">{t.succDesc}</p>
              <button
                onClick={() => { setStatus('idle'); setFormData({fullName: '', email: '', company: '', dataLocation: [], problem: '', budget: ''}); }}
                className="mt-8 text-blue-600 hover:text-blue-800 font-medium"
              >
                {lang === 'en' ? 'Submit another inquiry' : 'إرسال طلب آخر'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-12">

              {/* SECTION 1 */}
              <div>
                <div className="border-b border-slate-200 pb-4 mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">{t.sec1}</h2>
                </div>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">{t.lblName}</label>
                    <input type="text" name="fullName" required value={formData.fullName} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-slate-300 px-4 py-3 border outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">{t.lblEmail}</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-slate-300 px-4 py-3 border outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-slate-700">{t.lblCompany}</label>
                    <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-slate-300 px-4 py-3 border outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white" />
                  </div>
                </div>
              </div>

              {/* SECTION 2 */}
              <div>
                <div className="border-b border-slate-200 pb-4 mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">{t.sec2}</h2>
                </div>
                <div className="space-y-6">
                  <fieldset>
                    <legend className="block text-sm font-medium text-slate-700 mb-3">{t.lblDataLoc}</legend>
                    <div className="space-y-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
                      <label className="flex items-start cursor-pointer">
                        <input type="checkbox" name="dataLocation" value="Spreadsheets" checked={formData.dataLocation.includes('Spreadsheets')} onChange={handleCheckboxChange} className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                        <div className={`text-sm text-slate-600 ${isRTL ? 'mr-3' : 'ml-3'}`}>{t.chkSheet}</div>
                      </label>
                      <label className="flex items-start cursor-pointer">
                        <input type="checkbox" name="dataLocation" value="Databases" checked={formData.dataLocation.includes('Databases')} onChange={handleCheckboxChange} className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                        <div className={`text-sm text-slate-600 ${isRTL ? 'mr-3' : 'ml-3'}`}>{t.chkDb}</div>
                      </label>
                    </div>
                  </fieldset>
                </div>
              </div>

              {/* SECTION 3 */}
              <div>
                <div className="border-b border-slate-200 pb-4 mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">{t.sec3}</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">{t.lblProblem}</label>
                    <textarea name="problem" rows={4} required value={formData.problem} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-slate-300 px-4 py-3 border outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white" />
                  </div>
                </div>
              </div>

              {/* SECTION 4 */}
              <div>
                <div className="border-b border-slate-200 pb-4 mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">{t.sec4}</h2>
                </div>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">{t.lblBudget}</label>
                    <select name="budget" value={formData.budget} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-slate-300 px-4 py-3 border outline-none bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                      {t.budgetOptions.map((opt, idx) => (
                        <option key={idx} value={opt.val} disabled={idx === 0}>{opt.text}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between">
                {status === 'error' && (
                  <div className="text-red-500 text-sm mb-4 sm:mb-0">{t.errNetwork}</div>
                )}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`inline-flex justify-center rounded-md bg-blue-600 py-3 px-8 text-sm font-medium text-white hover:bg-blue-800 transition-colors w-full sm:w-auto ${isRTL ? 'sm:mr-auto' : 'sm:ml-auto'} disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t.btnProcessing}
                    </span>
                  ) : (
                    t.btnSubmit
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
