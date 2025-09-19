'use client';

import React, { useState } from 'react'
import { BannerHeader } from '@/components'
import cn from '@/utils/cn'

import styles from './faq.module.scss';
import FAQCard from './faq-card';
import data from './data';

const tabs = [
    {
        key: 'generalQuestions',
        label: 'General Questions',
    },
    {
        key: 'eyeHealth',
        label: 'Eye Health',
    },
    // {
    //     key: 'exams',
    //     label: 'Exams',
    // },
    {
        key: 'eyeWear',
        label: 'Eye Wear',
    },
    {
        key: 'contacts',
        label: 'Contacts',
    },
    {
        key: 'visionInsurance',
        label: 'Vision Insurance',
    }
]

const FAQPage = () => {
    const [currentTab, setCurrentTab] = useState<string>('eyeHealth')
    return (
        <section className={styles.faqContainer}>
            <div className={cn(styles.heroBanner, "hero_banner ")}>

                <div className='inner_banner d-flex' style={{background:"#00000070", height:"100%"}}>

                <div className="container m-auto z-3">
                    <BannerHeader
                        primaryText='Frequently Asked Questions'
                        secondaryText={`Whether you need information about eye exams, eyeglass repairs, or sunglasses accessories, we’re here to provide clarity.`}
                    />
                </div>
                </div>
            </div>
            <div className="container py_80">
                <div className={styles.header}>
                    {tabs?.map(({ key, label }) => {
                        const isActive = key === currentTab;
                        return (
                            <button key={key} className={isActive ? styles.active : ''} onClick={() => setCurrentTab(key)}>{label}</button>
                        )
                    })}
                </div>
                <div className='mt_40 d-flex flex-column gap-4'>
                    {data?.[currentTab]?.map(({ title, qa }, index) => {
                        return (
                            <FAQCard
                                key={cn(title, String(index))}
                                title={title}
                                data={qa}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FAQPage


// 'use client';

// import React, { useEffect, useState } from 'react'
// import { BannerHeader } from '@/components'
// import cn from '@/utils/cn'
// import styles from './faq.module.scss';
// import FAQCard from './faq-card';
// import data from './data';
// import { RootState } from "@/redux/store/Store";
// import { useSelector } from "react-redux";

// const tabs = [
//   { key: 'generalQuestions', label: 'General Questions' },
//   { key: 'eyeHealth', label: 'Eye Health' },
//   { key: 'eyeWear', label: 'Eye Wear' },
//   { key: 'contacts', label: 'Contacts' },
//   { key: 'visionInsurance', label: 'Vision Insurance' },
// ]

// const FAQPage = () => {
//   const [currentTab, setCurrentTab] = useState<string>('eyeHealth');

//   const [currentFaqtLang, setCurrentFaqLang] = useState(data.en);
//   const { defaultLanguage } = useSelector(
//     (state: RootState) => state.commonSlice
//   );
//   useEffect(() => {
//     if (defaultLanguage === "English") {
//       setCurrentFaqLang(data.en);
//     } else {
//       setCurrentFaqLang(data.es);
//     }
//   }, [defaultLanguage]);

  

//   return (
//     <section className={styles.faqContainer}>
//       <div className={cn(styles.heroBanner, "hero_banner inner_banner d-flex")}>
//         <div className="container m-auto z-3">
//           <BannerHeader
//             primaryText={defaultLanguage === 'English' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
//             secondaryText={
//               lang === 'es'
//                 ? 'Ya sea que necesite información sobre exámenes oculares, reparaciones de anteojos o accesorios para gafas de sol, estamos aquí para brindar claridad.'
//                 : 'Whether you need information about eye exams, eyeglass repairs, or sunglasses accessories, we’re here to provide clarity.'
//             }
//           />
//         </div>
//       </div>
//       <div className="container py_80">
//         <div className={styles.header}>
//           {tabs?.map(({ key, label }) => {
//             const isActive = key === currentTab;
//             return (
//               <button key={key} className={isActive ? styles.active : ''} onClick={() => setCurrentTab(key)}>
//                 {lang === 'es' ? translateLabelToSpanish(label) : label}
//               </button>
//             )
//           })}
//         </div>
//         <div className='mt_40 d-flex flex-column gap-4'>
//           {tabContent.map(({ title, qa }, index) => (
//             <FAQCard
//               key={cn(title, String(index))}
//               title={title}
//               data={qa}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const translateLabelToSpanish = (label: string) => {
//   switch (label) {
//     case 'General Questions': return 'Preguntas Generales';
//     case 'Eye Health': return 'Salud Ocular';
//     case 'Eye Wear': return 'Lentes';
//     case 'Contacts': return 'Lentes de Contacto';
//     case 'Vision Insurance': return 'Seguro de Visión';
//     default: return label;
//   }
// }

// export default FAQPage;
