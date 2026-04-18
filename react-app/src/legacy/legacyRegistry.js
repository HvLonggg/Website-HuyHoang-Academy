import aboutHsinchuBody from "./generated/about_hsinchu.body.html?raw";
import aboutHsinchuCss from "./generated/about_hsinchu.css?raw";
import aboutTaiwanBody from "./generated/about_taiwan.body.html?raw";
import aboutTaiwanCss from "./generated/about_taiwan.css?raw";
import aboutUsBody from "./generated/about_us.body.html?raw";
import aboutUsCss from "./generated/about_us.css?raw";
import affiliateBody from "./generated/Affiliate_Partner.body.html?raw";
import affiliateCss from "./generated/Affiliate_Partner.css?raw";
import commitmentBody from "./generated/Commitment_page.body.html?raw";
import commitmentCss from "./generated/Commitment_page.css?raw";
import contactBody from "./generated/contact.body.html?raw";
import contactCss from "./generated/contact.css?raw";
import industryBody from "./generated/Industry_selection_consulting.body.html?raw";
import industryCss from "./generated/Industry_selection_consulting.css?raw";
import newsBody from "./generated/news-events.body.html?raw";
import newsCss from "./generated/news-events.css?raw";
import programBody from "./generated/ProgramPage.body.html?raw";
import programCss from "./generated/ProgramPage.css?raw";
import registerConsultBody from "./generated/register-consultation.body.html?raw";
import registerConsultCss from "./generated/register-consultation.css?raw";
import registrationProcBody from "./generated/Registration_procedure.body.html?raw";
import registrationProcCss from "./generated/Registration_procedure.css?raw";
import scholarship14Body from "./generated/scholarship1plus4.body.html?raw";
import scholarship14Css from "./generated/scholarship1plus4.css?raw";
import staffBody from "./generated/staff.body.html?raw";
import staffCss from "./generated/staff.css?raw";
import studyAbroadConsultBody from "./generated/study_abroad_consulting.body.html?raw";
import studyAbroadConsultCss from "./generated/study_abroad_consulting.css?raw";
import studyConditionsBody from "./generated/study_abroad_condititions.body.html?raw";
import studyConditionsCss from "./generated/study_abroad_condititions.css?raw";
import taiwanFullBody from "./generated/Taiwan_full_scholarship.body.html?raw";
import taiwanFullCss from "./generated/Taiwan_full_scholarship.css?raw";
import visaBody from "./generated/visa.body.html?raw";
import visaCss from "./generated/visa.css?raw";
import workStudyBody from "./generated/work-study_scholarship.body.html?raw";
import workStudyCss from "./generated/work-study_scholarship.css?raw";

import schoolChanghuaBody from "./generated/about_changhua.body.html?raw";
import schoolChanghuaCss from "./generated/about_changhua.css?raw";
import schoolKainanBody from "./generated/about_kainan.body.html?raw";
import schoolKainanCss from "./generated/about_kainan.css?raw";
import schoolKunshanBody from "./generated/about_kunshan.body.html?raw";
import schoolKunshanCss from "./generated/about_kunshan.css?raw";
import schoolMingchuanBody from "./generated/about_Mingchuan.body.html?raw";
import schoolMingchuanCss from "./generated/about_Mingchuan.css?raw";
import schoolNtBody from "./generated/about_nationalTaiwan.body.html?raw";
import schoolNtCss from "./generated/about_nationalTaiwan.css?raw";
import schoolQuoclapBody from "./generated/about_quoclap.body.html?raw";
import schoolQuoclapCss from "./generated/about_quoclap.css?raw";
import schoolTsinghuaBody from "./generated/about_Tsinghua.body.html?raw";
import schoolTsinghuaCss from "./generated/about_Tsinghua.css?raw";

/** mode: undefined | 'aos' | 'program' | 'staff' */
export const LEGACY_BY_PATH = {
  "/about": { pageKey: "about_us", bodyHtml: aboutUsBody, cssText: aboutUsCss, mode: "aos" },
  "/staff": { pageKey: "staff", bodyHtml: staffBody, cssText: staffCss, mode: "staff" },
  "/affiliate-partner": { pageKey: "affiliate", bodyHtml: affiliateBody, cssText: affiliateCss },
  "/commitment": { pageKey: "commitment", bodyHtml: commitmentBody, cssText: commitmentCss },
  "/about-taiwan": { pageKey: "about_taiwan", bodyHtml: aboutTaiwanBody, cssText: aboutTaiwanCss },
  "/programs": { pageKey: "programs", bodyHtml: programBody, cssText: programCss, mode: "program" },
  "/study-abroad-conditions": { pageKey: "study_conditions", bodyHtml: studyConditionsBody, cssText: studyConditionsCss },
  "/registration-procedure": { pageKey: "registration", bodyHtml: registrationProcBody, cssText: registrationProcCss },
  "/visa": { pageKey: "visa", bodyHtml: visaBody, cssText: visaCss },
  "/scholarship-1-4": { pageKey: "scholarship14", bodyHtml: scholarship14Body, cssText: scholarship14Css },
  "/work-study-scholarship": { pageKey: "work_study", bodyHtml: workStudyBody, cssText: workStudyCss },
  "/taiwan-full-scholarship": { pageKey: "taiwan_full", bodyHtml: taiwanFullBody, cssText: taiwanFullCss },
  "/news-events": { pageKey: "news", bodyHtml: newsBody, cssText: newsCss, mode: "news" },
  "/industry-selection-consulting": { pageKey: "industry", bodyHtml: industryBody, cssText: industryCss },
  "/study-abroad-consulting": { pageKey: "study_consult", bodyHtml: studyAbroadConsultBody, cssText: studyAbroadConsultCss },
  "/contact": { pageKey: "contact", bodyHtml: contactBody, cssText: contactCss },
  "/register-consultation": { pageKey: "register", bodyHtml: registerConsultBody, cssText: registerConsultCss },
  "/about-hsinchu": { pageKey: "hsinchu", bodyHtml: aboutHsinchuBody, cssText: aboutHsinchuCss },
};

export const LEGACY_BY_SCHOOL_SLUG = {
  about_changhua: { pageKey: "school_changhua", bodyHtml: schoolChanghuaBody, cssText: schoolChanghuaCss },
  about_kainan: { pageKey: "school_kainan", bodyHtml: schoolKainanBody, cssText: schoolKainanCss },
  about_kunshan: { pageKey: "school_kunshan", bodyHtml: schoolKunshanBody, cssText: schoolKunshanCss },
  about_Mingchuan: { pageKey: "school_mingchuan", bodyHtml: schoolMingchuanBody, cssText: schoolMingchuanCss },
  about_nationalTaiwan: { pageKey: "school_ntu", bodyHtml: schoolNtBody, cssText: schoolNtCss },
  about_quoclap: { pageKey: "school_quoclap", bodyHtml: schoolQuoclapBody, cssText: schoolQuoclapCss },
  about_Tsinghua: { pageKey: "school_tsinghua", bodyHtml: schoolTsinghuaBody, cssText: schoolTsinghuaCss },
};
