const data: {
    [key: string]: {
        title: string;
        qa: {
            question: string;
            answer: string;
        }[]
    }[]
} = {
    generalQuestions: [
        {
            title: 'General Questions',
            qa: [
                {
                    question: 'Where are your offices located?',
                    answer: 'Our offices are located in Rio Grande Town Center, Plaza Fajardo, Palma Real Plaza in Humacao, and Plaza Centro in Caguas.'
                },
                {
                    question: 'Can I schedule an appointment online for an eye exam?',
                    answer: 'Yes, you can schedule an appointment online at any of our offices.'
                },
                {
                    question: 'What are your hours of operation?',
                    answer: 'Our hours vary by location: Rio Grande Town Center, Plaza Fajardo, and Plaza Palma Real in Humacao:       Monday to Saturday:  9:00 AM – 5:00 PM. Plaza Centro Mall in Caguas:       Monday to Saturday: 9:00 AM – 6:00 PM       Sunday:  11:00 AM – 6:00 PM'
                },
                {
                    question: 'When do I pay for my glasses?',
                    answer: 'Payment depends on your health insurance coverage. We require a 40% deposit upon ordering your glasses. This deposit may be fully or partially covered by your insurance. The remaining balance is due upon pickup. For example, if your insurance covers 30% of the cost of materials, you would pay 10% out of pocket upon ordering. The remaining 60% is due when the glasses are ready for pickup..'
                },
                {
                    question: 'How long does my glasses prescription last?',
                    answer: 'Prescription for glasses is valid for one year. We recommend an annual eye exam to keep your prescription up to date.'
                },
                {
                    question: 'What if I already have a valid prescription for glasses?',
                    answer: 'If you already have a valid current prescription, you can bring a copy of it with you. Our optometrists and eye care specialists are happy to help you find the right vision correction solution for your prescription.'
                },
                {
                    question: 'Do I need an appointment to see an optometrist?',
                    answer: 'For faster service, we recommend scheduling an appointment, however, we do accept walk-ins at all of our offices.'
                }
            ]
        },
    ],
    eyeHealth: [
        {
            title: 'Eye Problems',
            qa: [
                {
                    question: 'I think I may have an eye infection. What should I do?',
                    answer: 'Eye infections can be very serious and can have multiple causes that need to be treated differently. If you suspect you have an eye infection, call our office immediately for an appointment.'
                },
                {
                    question: 'My vision has changed suddenly. What should I do?',
                    answer: 'If your vision has changed in a sudden or dramatic way, there is a reason for it. While many of these reasons are benign, some reasons are sight-threatening. Please call us immediately, especially if you are experiencing any of the following: fogginess, veils, curtains, flashes of light or floaters.'
                },
                {
                    question: 'What is nearsightedness?',
                    answer: 'Nearsightedness (also called myopia) is a condition where objects up close appear clearly, while objects far away appear blurry.'
                },
                {
                    question: 'What is farsightedness?',
                    answer: 'Farsightedness (also called hyperopia) is a common type of refractive error where distant objects may be seen more clearly than objects that are near.'
                }
            ]
        },
        {
            title: 'Exams',
            qa: [
                {
                    question: 'How often should I have an eye exam?',
                    answer: 'We recommend that everyone over the age of five have a complete eye exam every year. If you\'re experiencing eye discomfort, vision loss, or blurry vision, you should schedule an eye exam even if your last eye exam was less than a year ago.'
                },
                {
                    question: 'What is included in a comprehensive eye exam?',
                    answer: 'In addition to your time with the optometrist, your eye exam includes several pre-tests including a Visual Acuity Test (also known as an eye chart), auto refraction which provides a base prescription, and a glaucoma screening. You will then meet with the optometrist where he or she will be able to evaluate your eyes with the latest in eye health technology and determine an accurate prescription.'
                },
                {
                    question: 'How much does an eye exam cost?',
                    answer: 'A standard eye exam costs $59.00. If you have vision insurance, your co-pay will depend on your provider and coverage. We’re happy to verify your benefits before your appointment.'
                },
                {
                    question: 'What is the difference between an eye exam and a contact lens evaluation?',
                    answer: 'A comprehensive eye exam consists of a series of tests to determine overall eye health and vision correction needs. A contact lens exam includes additional testing to fit the patient in the best contact lens for their eye and prescription.'
                },
                {
                    question: 'What are retinal photos and why do I need them?',
                    answer: 'The retina is the cellophane-thick layer in the back of the eye composed of rods and cones that is responsible for sending light images to the brain for processing what we experience as vision. Retinal photos allow your doctor to evaluate your retina the day of your exam and furthermore document its appearance for comparison at subsequent exams. This is crucial to maintaining lifelong vision health.'
                },
                {
                    question: 'Will my eyes be dilated during my exam?',
                    answer: 'Dilation is not necessary for every patient, every year. However, is largely dependent on the health of your eyes at the time of your visit.'
                },
                {
                    question: 'Can I drive if my eyes have been dilated?',
                    answer: 'Dilation usually affects near vision the most, leaving distance vision relatively unchanged. This means that with a good pair of sunglasses, most people are able to comfortably drive. If you are concerned about this, however, we suggest you bring someone with you to drive.'
                },
                {
                    question: 'Why do I need the puff or air test?',
                    answer: 'During a routine eye exam, we test your intraocular pressure (IOP), which measures your risk for several potentially blinding diseases such as glaucoma. This is done with an instrument known as a non-contact tonometer. This "puff of air" is an excellent way for patients to have this test, as it is quick and painless.'
                }
            ]
        },
        {
            title: 'Diabetic Eye Exams',
            qa: [
                {
                    question: 'How often should I have an eye exam?',
                    answer: 'We recommend that everyone over the age of five have a complete eye exam every year. If you\'re experiencing eye discomfort, vision loss, or blurry vision, you should schedule an eye exam even if your last eye exam was less than a year ago.'
                }
            ]
        }
    ],
    eyeWear: [
        {
            title: 'Glasses',
            qa: [
                {
                    question: 'What are single vision lenses?',
                    answer: 'These are the most common type of lenses, and feature a single field of vision, or one prescription power throughout the entire lens. These are used for correcting nearsightedness (myopia) or farsightedness (hyperopia) and are also used for reading glasses.'
                },
                {
                    question: 'When will my glasses be ready?',
                    answer: 'Thanks to our in-house lab, most single vision lenses can be ready within an hour or the same day. More complex prescriptions or lenses with special coatings may take up to a week. We’ll let you know as soon as your glasses are ready for pickup.'
                },
                {
                    question: 'What is a progressive lens?',
                    answer: 'Also called an "invisible bifocal," a progressive lens is an update on bifocal and trifocal lenses. They have multiple prescriptions in one pair of glasses, which allow you to see close-up, middle-distance, or distance viewing without needing to change your glasses. Because of this, many multi-focal patients prefer this kind of lens.'
                },
                {
                    question: 'What type of lenses do you offer?',
                    answer: 'All of our lenses are made from high-quality polycarbonate or high index materials, depending on your needs and preferences. We offer single vision lenses, bifocals, digital progressives, reading glasses, and prescription sunglasses. You can also customize your lenses with options like photochromic (light-adaptive) lenses and blue light filters for screen protection.'
                },
                {
                    question: 'What is a transitions or photochromatic lens?',
                    answer: 'Transitions or photochromatic lenses are lenses that automatically darken when exposed to sunlight and return to clear indoors. They offer the convenience of sunglasses and clear lenses in one, protecting your eyes from harmful UV rays and reducing glare. We currently offer these lenses in 8 different colors, so you can choose the one that best fits your style.'
                },
                {
                    question: 'How can I find a pair of glasses that looks good on me?',
                    answer: 'Finding the perfect glasses frames that highlight your best features is easier than you might think. When you visit our office, the highly trained staff will work with you to find the perfect pair that help you look and see your best.'
                },
                {
                    question: 'What happens if I break my glasses?',
                    answer: 'We offer glasses repairs and adjustments through our Diamond Warranty Plan available at all of our office locations.'
                },
                {
                    question: 'What is your return policy on glasses?',
                    answer: 'We offer glasses repairs and adjustments through our Diamond Warranty Plan available at all of our office locations.'
                }
            ]
        }
    ],
    contacts: [
        {
            title: 'Contacts',
            qa: [
                {
                    question: 'What is a contact lens?',
                    answer: 'Contact lenses are a method of correcting vision. It actually comes into "contact" with the eye and changes the way that light is focused in the eye. A contact lens is a thin, curved lens placed on the film of tears that covers the surface of your eye. Because contacts are a different distance from the eye than glasses, the prescription for contacts can be very different from that of glasses. This is one reason a separate contact lens evaluation is required.'
                },
                {
                    question: 'Do my prescription for glasses include a prescription for contact lenses?',
                    answer: 'No. A contact lens evaluation is a separate set of tests from an annual eye exam. Even if you have worn contacts previously, this evaluation is a requirement every year for the issuing of a contact lens prescription.'
                },
                {
                    question: 'Can a contact lens get lost behind my eye?',
                    answer: 'No, it\'s physically impossible for a contact lens to get lost behind your eye. In the worst-case scenario, if you rub your eye and dislodge the lens from its correct position, you might have trouble finding it under your upper eyelid. If this occurs, you can usually find the lens by adding a few contact lens rewetting drops to your eye and then gently massaging your eyelid with your eye closed. In most cases, the folded lens will move to a position on your eye where you can see it and remove it.'
                },
                {
                    question: 'What if my contacts aren\'t working for me?',
                    answer: 'Many people experience some difficulty when first trying contacts or when changing their prescription. We want to make sure that you are comfortable in the pair that you and your doctor select. If for any reason you are not satisfied with the fit of your contacts, please call us. We will work with you to make any necessary changes.'
                }
            ]
        }
    ],
    visionInsurance: [
        {
            title: 'Vision Insurance',
            qa: [
                {
                    question: 'What does vision insurance cover?',
                    answer: 'Vision insurance plans typically have benefits that help cover all or part of comprehensive eye health exams, as well as your eyeglass frames and lenses, contact lenses and even additional items like lens protection or non-glare coatings. Our eye care specialists will help you understand and maximize what your benefits cover so you can focus on selecting the best eye wear to fit your lifestyle.'
                },
                {
                    question: 'Can I purchase eye glasses and contacts with my insurance?',
                    answer: 'Vision insurance plans typically have benefits that help cover all or part of comprehensive eye health exams, as well as your eyeglass frames and lenses, contact lenses and even additional items like lens protection or non-glare coatings. Our eye care specialists will help you understand and maximize what your benefits cover so you can focus on selecting the best eye wear to fit your lifestyle.'
                },
                {
                    question: 'Does Eye Center Boutique accept my insurance?',
                    answer: 'We\'re proud to accept all types of vision insurance plans so you can receive affordable eye care and eye wear when you need it. To learn if your vision insurance plan is accepted, call us today and let our eye care specialists help you maximize your vision insurance plan and benefits. Don\'t have insurance benefits? We work with all budgets to provide you with the best vision care.'
                },
                {
                    question: 'How do I use my insurance at Eye Center Boutique?',
                    answer: 'It\'s simple. Provide us with your insurance information when you schedule your appointment. We will verify your insurance benefits prior to your appointment. At your appointment, our eye care specialists will help you understand and maximize your vision benefits.\n\nKeep in mind, your insurance plan may provide coverage for your eye health exam separate from your eye wear (materials).'
                }
            ]
        }
    ]
}

export default data;





// const data: {
//  [language: string]: {
//     [key: string]: {
//       title: string;
//       qa: {
//         question: string;
//         answer: string;
//       }[];
//     }[];
//   };
// } = {
//   en: {
//     generalQuestions: [
//     {
//       title: 'General Questions',
//       qa: [
//         {
//           question: 'Where are your offices located?',
//           answer: 'Our offices are located in Rio Grande Town Center, Plaza Fajardo, Palma Real Plaza in Humacao, and Plaza Centro in Caguas.'
//         },
//         {
//           question: 'Can I schedule an appointment online for an eye exam?',
//           answer: 'Yes, you can schedule an appointment online at any of our offices.'
//         },
//         {
//           question: 'What are your hours of operation?',
//           answer: 'Our hours vary by location: Rio Grande Town Center, Plaza Fajardo, and Plaza Palma Real in Humacao: Monday to Saturday: 9:00 AM – 5:00 PM. Plaza Centro Mall in Caguas: Monday to Saturday: 9:00 AM – 6:00 PM Sunday: 11:00 AM – 6:00 PM'
//         },
//         {
//           question: 'When do I pay for my glasses?',
//           answer: 'Payment depends on your health insurance coverage. We require a 40% deposit upon ordering your glasses. This deposit may be fully or partially covered by your insurance. The remaining balance is due upon pickup. For example, if your insurance covers 30% of the cost of materials, you would pay 10% out of pocket upon ordering. The remaining 60% is due when the glasses are ready for pickup..'
//         },
//         {
//           question: 'How long does my glasses prescription last?',
//           answer: 'Prescription for glasses is valid for one year. We recommend an annual eye exam to keep your prescription up to date.'
//         },
//         {
//           question: 'What if I already have a valid prescription for glasses?',
//           answer: 'If you already have a valid current prescription, you can bring a copy of it with you. Our optometrists and eye care specialists are happy to help you find the right vision correction solution for your prescription.'
//         },
//         {
//           question: 'Do I need an appointment to see an optometrist?',
//           answer: 'For faster service, we recommend scheduling an appointment, however, we do accept walk-ins at all of our offices.'
//         }
//       ]
//     },
//     {
//       title: 'Eye Problems',
//       qa: [
//         {
//           question: 'I think I may have an eye infection. What should I do?',
//           answer: 'Eye infections can be very serious and can have multiple causes that need to be treated differently. If you suspect you have an eye infection, call our office immediately for an appointment.'
//         },
//         {
//           question: 'My vision has changed suddenly. What should I do?',
//           answer: 'If your vision has changed in a sudden or dramatic way, there is a reason for it. While many of these reasons are benign, some reasons are sight-threatening. Please call us immediately, especially if you are experiencing any of the following: fogginess, veils, curtains, flashes of light or floaters.'
//         },
//         {
//           question: 'What is nearsightedness?',
//           answer: 'Nearsightedness (also called myopia) is a condition where objects up close appear clearly, while objects far away appear blurry.'
//         },
//         {
//           question: 'What is farsightedness?',
//           answer: 'Farsightedness (also called hyperopia) is a common type of refractive error where distant objects may be seen more clearly than objects that are near.'
//         }
//       ]
//     },
//     {
//       title: 'Exams',
//       qa: [
//         {
//           question: 'How often should I have an eye exam?',
//           answer: 'We recommend that everyone over the age of five have a complete eye exam every year. If you\'re experiencing eye discomfort, vision loss, or blurry vision, you should schedule an eye exam even if your last eye exam was less than a year ago.'
//         },
//         {
//           question: 'What is included in a comprehensive eye exam?',
//           answer: 'In addition to your time with the optometrist, your eye exam includes several pre-tests including a Visual Acuity Test (also known as an eye chart), auto refraction which provides a base prescription, and a glaucoma screening. You will then meet with the optometrist where he or she will be able to evaluate your eyes with the latest in eye health technology and determine an accurate prescription.'
//         },
//         {
//           question: 'How much does an eye exam cost?',
//           answer: 'A standard eye exam costs $59.00. If you have vision insurance, your co-pay will depend on your provider and coverage. We’re happy to verify your benefits before your appointment.'
//         },
//         {
//           question: 'What is the difference between an eye exam and a contact lens evaluation?',
//           answer: 'A comprehensive eye exam consists of a series of tests to determine overall eye health and vision correction needs. A contact lens exam includes additional testing to fit the patient in the best contact lens for their eye and prescription.'
//         },
//         {
//           question: 'What are retinal photos and why do I need them?',
//           answer: 'The retina is the cellophane-thick layer in the back of the eye composed of rods and cones that is responsible for sending light images to the brain for processing what we experience as vision. Retinal photos allow your doctor to evaluate your retina the day of your exam and furthermore document its appearance for comparison at subsequent exams. This is crucial to maintaining lifelong vision health.'
//         },
//         {
//           question: 'Will my eyes be dilated during my exam?',
//           answer: 'Dilation is not necessary for every patient, every year. However, is largely dependent on the health of your eyes at the time of your visit.'
//         },
//         {
//           question: 'Can I drive if my eyes have been dilated?',
//           answer: 'Dilation usually affects near vision the most, leaving distance vision relatively unchanged. This means that with a good pair of sunglasses, most people are able to comfortably drive. If you are concerned about this, however, we suggest you bring someone with you to drive.'
//         },
//         {
//           question: 'Why do I need the puff or air test?',
//           answer: 'During a routine eye exam, we test your intraocular pressure (IOP), which measures your risk for several potentially blinding diseases such as glaucoma. This is done with an instrument known as a non-contact tonometer. This "puff of air" is an excellent way for patients to have this test, as it is quick and painless.'
//         }
//       ]
//     },
//     {
//       title: 'Diabetic Eye Exams',
//       qa: [
//         {
//           question: 'How often should I have an eye exam?',
//           answer: 'We recommend that everyone over the age of five have a complete eye exam every year. If you\'re experiencing eye discomfort, vision loss, or blurry vision, you should schedule an eye exam even if your last eye exam was less than a year ago.'
//         }
//       ]
//     },
//     {
//       title: 'Glasses',
//       qa: [
//         {
//           question: 'What are single vision lenses?',
//           answer: 'These are the most common type of lenses, and feature a single field of vision, or one prescription power throughout the entire lens. These are used for correcting nearsightedness (myopia) or farsightedness (hyperopia) and are also used for reading glasses.'
//         },
//         {
//           question: 'When will my glasses be ready?',
//           answer: 'Thanks to our in-house lab, most single vision lenses can be ready within an hour or the same day. More complex prescriptions or lenses with special coatings may take up to a week. We’ll let you know as soon as your glasses are ready for pickup.'
//         },
//         {
//           question: 'What is a progressive lens?',
//           answer: 'Also called an "invisible bifocal," a progressive lens is an update on bifocal and trifocal lenses. They have multiple prescriptions in one pair of glasses, which allow you to see close-up, middle-distance, or distance viewing without needing to change your glasses. Because of this, many multi-focal patients prefer this kind of lens.'
//         },
//         {
//           question: 'What type of lenses do you offer?',
//           answer: 'All of our lenses are made from high-quality polycarbonate or high index materials, depending on your needs and preferences. We offer single vision lenses, bifocals, digital progressives, reading glasses, and prescription sunglasses. You can also customize your lenses with options like photochromic (light-adaptive) lenses and blue light filters for screen protection.'
//         },
//         {
//           question: 'What is a transitions or photochromatic lens?',
//           answer: 'Transitions or photochromatic lenses are lenses that automatically darken when exposed to sunlight and return to clear indoors. They offer the convenience of sunglasses and clear lenses in one, protecting your eyes from harmful UV rays and reducing glare. We currently offer these lenses in 8 different colors, so you can choose the one that best fits your style.'
//         },
//         {
//           question: 'How can I find a pair of glasses that looks good on me?',
//           answer: 'Finding the perfect glasses frames that highlight your best features is easier than you might think. When you visit our office, the highly trained staff will work with you to find the perfect pair that help you look and see your best.'
//         },
//         {
//           question: 'What happens if I break my glasses?',
//           answer: 'We offer glasses repairs and adjustments through our Diamond Warranty Plan available at all of our office locations.'
//         },
//         {
//           question: 'What is your return policy on glasses?',
//           answer: 'We offer glasses repairs and adjustments through our Diamond Warranty Plan available at all of our office locations.'
//         }
//       ]
//     },
//     {
//       title: 'Contacts',
//       qa: [
//         {
//           question: 'What is a contact lens?',
//           answer: 'Contact lenses are a method of correcting vision. It actually comes into "contact" with the eye and changes the way that light is focused in the eye. A contact lens is a thin, curved lens placed on the film of tears that covers the surface of your eye. Because contacts are a different distance from the eye than glasses, the prescription for contacts can be very different from that of glasses. This is one reason a separate contact lens evaluation is required.'
//         },
//         {
//           question: 'Do my prescription for glasses include a prescription for contact lenses?',
//           answer: 'No. A contact lens evaluation is a separate set of tests from an annual eye exam. Even if you have worn contacts previously, this evaluation is a requirement every year for the issuing of a contact lens prescription.'
//         },
//         {
//           question: 'Can a contact lens get lost behind my eye?',
//           answer: 'No, it\'s physically impossible for a contact lens to get lost behind your eye. In the worst-case scenario, if you rub your eye and dislodge the lens from its correct position, you might have trouble finding it under your upper eyelid. If this occurs, you can usually find the lens by adding a few contact lens rewetting drops to your eye and then gently massaging your eyelid with your eye closed. In most cases, the folded lens will move to a position on your eye where you can see it and remove it.'
//         },
//         {
//           question: 'What if my contacts aren\'t working for me?',
//           answer: 'Many people experience some difficulty when first trying contacts or when changing their prescription. We want to make sure that you are comfortable in the pair that you and your doctor select. If for any reason you are not satisfied with the fit of your contacts, please call us. We will work with you to make any necessary changes.'
//         }
//       ]
//     },
//     {
//       title: 'Vision Insurance',
//       qa: [
//         {
//           question: 'What does vision insurance cover?',
//           answer: 'Vision insurance plans typically have benefits that help cover all or part of comprehensive eye health exams, as well as your eyeglass frames and lenses, contact lenses and even additional items like lens protection or non-glare coatings. Our eye care specialists will help you understand and maximize what your benefits cover so you can focus on selecting the best eye wear to fit your lifestyle.'
//         },
//         {
//           question: 'Can I purchase eye glasses and contacts with my insurance?',
//           answer: 'Vision insurance plans typically have benefits that help cover all or part of comprehensive eye health exams, as well as your eyeglass frames and lenses, contact lenses and even additional items like lens protection or non-glare coatings. Our eye care specialists will help you understand and maximize what your benefits cover so you can focus on selecting the best eye wear to fit your lifestyle.'
//         },
//         {
//           question: 'Does Eye Center Boutique accept my insurance?',
//           answer: 'We\'re proud to accept all types of vision insurance plans so you can receive affordable eye care and eye wear when you need it. To learn if your vision insurance plan is accepted, call us today and let our eye care specialists help you maximize your vision insurance plan and benefits. Don\'t have insurance benefits? We work with all budgets to provide you with the best vision care.'
//         },
//         {
//           question: 'How do I use my insurance at Eye Center Boutique?',
//           answer: 'It\'s simple. Provide us with your insurance information when you schedule your appointment. We will verify your insurance benefits prior to your appointment. At your appointment, our eye care specialists will help you understand and maximize your vision benefits.\n\nKeep in mind, your insurance plan may provide coverage for your eye health exam separate from your eye wear (materials).'
//         }
//       ]
//     }
//   ]
// },

//   es: {
//     generalQuestions: [
//     {
//       title: 'Preguntas Generales',
//       qa: [
//         {
//           question: '¿Dónde están ubicadas sus oficinas?',
//           answer: 'Nuestras oficinas están ubicadas en Rio Grande Town Center, Plaza Fajardo, Palma Real Plaza en Humacao, y Plaza Centro en Caguas.'
//         },
//         {
//           question: '¿Puedo programar una cita en línea para un examen de la vista?',
//           answer: 'Sí, puede programar una cita en línea en cualquiera de nuestras oficinas.'
//         },
//         {
//           question: '¿Cuáles son sus horas de operación?',
//           answer: 'Nuestras horas varían según la ubicación: Rio Grande Town Center, Plaza Fajardo y Plaza Palma Real en Humacao: lunes a sábado: 9:00 AM – 5:00 PM. Plaza Centro Mall en Caguas: lunes a sábado: 9:00 AM – 6:00 PM domingo: 11:00 AM – 6:00 PM'
//         },
//         {
//           question: '¿Cuándo pago mis gafas?',
//           answer: 'El pago depende de la cobertura de su seguro de salud. Requerimos un depósito del 40% al ordenar sus gafas. Este depósito puede estar total o parcialmente cubierto por su seguro. El saldo restante se debe pagar al recogerlas. Por ejemplo, si su seguro cubre el 30% del costo de los materiales, usted pagaría el 10% de su bolsillo al ordenar. El 60% restante se paga cuando las gafas están listas para recoger.'
//         },
//         {
//           question: '¿Cuánto dura la receta para mis gafas?',
//           answer: 'La receta para gafas es válida por un año. Recomendamos un examen de la vista anual para mantener su receta actualizada.'
//         },
//         {
//           question: '¿Qué pasa si ya tengo una receta válida para gafas?',
//           answer: 'Si ya tiene una receta válida actual, puede traer una copia con usted. Nuestros optometristas y especialistas en cuidado de los ojos estarán encantados de ayudarle a encontrar la solución de corrección visual adecuada para su receta.'
//         },
//         {
//           question: '¿Necesito una cita para ver a un optometrista?',
//           answer: 'Para un servicio más rápido, recomendamos programar una cita, sin embargo, aceptamos pacientes sin cita en todas nuestras oficinas.'
//         }
//       ]
//     },
//     {
//       title: 'Problemas de los Ojos',
//       qa: [
//         {
//           question: 'Creo que puedo tener una infección ocular. ¿Qué debo hacer?',
//           answer: 'Las infecciones oculares pueden ser muy graves y tener múltiples causas que necesitan diferentes tratamientos. Si sospecha que tiene una infección ocular, llame a nuestra oficina inmediatamente para una cita.'
//         },
//         {
//           question: 'Mi visión ha cambiado repentinamente. ¿Qué debo hacer?',
//           answer: 'Si su visión ha cambiado de forma repentina o dramática, hay una razón para ello. Mientras muchas de estas razones son benignas, algunas pueden amenazar la vista. Por favor llámenos inmediatamente, especialmente si experimenta alguno de los siguientes síntomas: visión borrosa, velos, cortinas, destellos de luz o manchas flotantes.'
//         },
//         {
//           question: '¿Qué es la miopía?',
//           answer: 'La miopía (también llamada nearsightedness) es una condición donde los objetos cercanos se ven claramente, mientras que los objetos lejanos se ven borrosos.'
//         },
//         {
//           question: '¿Qué es la hipermetropía?',
//           answer: 'La hipermetropía (también llamada farsightedness) es un tipo común de error refractivo donde los objetos distantes pueden verse con más claridad que los objetos cercanos.'
//         }
//       ]
//     },
//     {
//       title: 'Exámenes',
//       qa: [
//         {
//           question: '¿Con qué frecuencia debo hacerme un examen de la vista?',
//           answer: 'Recomendamos que todas las personas mayores de cinco años se realicen un examen completo de la vista cada año. Si está experimentando molestias en los ojos, pérdida de visión o visión borrosa, debe programar un examen incluso si su último examen fue hace menos de un año.'
//         },
//         {
//           question: '¿Qué incluye un examen de la vista completo?',
//           answer: 'Además del tiempo con el optometrista, su examen incluye varias pruebas previas, incluyendo una prueba de agudeza visual (conocida como tabla de ojos), autorrefracción que proporciona una prescripción base, y un examen de glaucoma. Luego se reunirá con el optometrista, quien evaluará sus ojos con la tecnología más reciente y determinará una prescripción precisa.'
//         },
//         {
//           question: '¿Cuánto cuesta un examen de la vista?',
//           answer: 'Un examen de la vista estándar cuesta $59.00. Si tiene seguro de visión, su copago dependerá de su proveedor y cobertura. Estamos felices de verificar sus beneficios antes de su cita.'
//         },
//         {
//           question: '¿Cuál es la diferencia entre un examen de la vista y una evaluación de lentes de contacto?',
//           answer: 'Un examen de la vista completo consiste en una serie de pruebas para determinar la salud general de los ojos y las necesidades de corrección visual. Una evaluación de lentes de contacto incluye pruebas adicionales para ajustar al paciente con el mejor lente para su ojo y prescripción.'
//         },
//         {
//           question: '¿Qué son las fotos de retina y por qué las necesito?',
//           answer: 'La retina es una capa delgada en la parte posterior del ojo compuesta por bastones y conos, responsable de enviar imágenes luminosas al cerebro para procesar la visión. Las fotos de retina permiten al doctor evaluar la retina el día del examen y documentar su apariencia para comparación en futuros exámenes. Esto es crucial para mantener la salud visual durante toda la vida.'
//         },
//         {
//           question: '¿Me dilatarán los ojos durante el examen?',
//           answer: 'La dilatación no es necesaria para todos los pacientes cada año. Sin embargo, depende mucho de la salud de sus ojos en el momento de su visita.'
//         },
//         {
//           question: '¿Puedo conducir si me han dilatado los ojos?',
//           answer: 'La dilatación usualmente afecta más la visión cercana, dejando la visión lejana relativamente sin cambios. Esto significa que con unas buenas gafas de sol, la mayoría de las personas pueden conducir cómodamente. Si le preocupa esto, le sugerimos traer a alguien que pueda conducir.'
//         },
//         {
//           question: '¿Por qué necesito la prueba de aire o "puff"?',
//           answer: 'Durante un examen de rutina, medimos la presión intraocular (PIO), que indica su riesgo para enfermedades que pueden causar ceguera, como el glaucoma. Esto se hace con un instrumento llamado tonómetro de no contacto. Este "puff" de aire es una forma rápida e indolora de realizar esta prueba.'
//         }
//       ]
//     },
//     {
//       title: 'Exámenes para Diabéticos',
//       qa: [
//         {
//           question: '¿Con qué frecuencia debo hacerme un examen de la vista?',
//           answer: 'Recomendamos que todas las personas mayores de cinco años se realicen un examen completo de la vista cada año. Si está experimentando molestias en los ojos, pérdida de visión o visión borrosa, debe programar un examen incluso si su último examen fue hace menos de un año.'
//         }
//       ]
//     },
//     {
//       title: 'Gafas',
//       qa: [
//         {
//           question: '¿Qué son lentes de visión simple?',
//           answer: 'Estos son el tipo más común de lentes y tienen un solo campo de visión, o una sola prescripción en todo el lente. Se usan para corregir la miopía o hipermetropía y también para gafas de lectura.'
//         },
//         {
//           question: '¿Cuándo estarán listas mis gafas?',
//           answer: 'Gracias a nuestro laboratorio interno, la mayoría de las lentes de visión simple pueden estar listas en una hora o el mismo día. Las prescripciones más complejas o lentes con recubrimientos especiales pueden tardar hasta una semana. Le avisaremos tan pronto sus gafas estén listas para recoger.'
//         },
//         {
//           question: '¿Qué es un lente progresivo?',
//           answer: 'También llamado "bifocal invisible", un lente progresivo es una actualización de los lentes bifocales y trifocales. Tiene múltiples prescripciones en un solo par de gafas, lo que permite ver de cerca, a media distancia o de lejos sin cambiar las gafas. Por ello, muchos pacientes multifocales prefieren este tipo de lente.'
//         },
//         {
//           question: '¿Qué tipos de lentes ofrecen?',
//           answer: 'Todos nuestros lentes están hechos de policarbonato de alta calidad o materiales de alto índice, según sus necesidades y preferencias. Ofrecemos lentes de visión simple, bifocales, progresivos digitales, gafas para lectura y gafas de sol con prescripción. También puede personalizar sus lentes con opciones como lentes fotocromáticos (que cambian con la luz) y filtros de luz azul para proteger de pantallas.'
//         },
//         {
//           question: '¿Qué es un lente transitions o fotocromático?',
//           answer: 'Los lentes transitions o fotocromáticos se oscurecen automáticamente cuando se exponen a la luz solar y vuelven a ser transparentes en interiores. Ofrecen la conveniencia de gafas de sol y lentes claros en uno, protegiendo sus ojos de los rayos UV y reduciendo el deslumbramiento. Actualmente ofrecemos estos lentes en 8 colores diferentes para que elija el que mejor se adapte a su estilo.'
//         },
//         {
//           question: '¿Cómo puedo encontrar un par de gafas que me queden bien?',
//           answer: 'Encontrar las gafas perfectas que resalten sus mejores características es más fácil de lo que piensa. Cuando visite nuestra oficina, nuestro personal altamente capacitado trabajará con usted para encontrar el par perfecto que le ayude a lucir y ver lo mejor posible.'
//         },
//         {
//           question: '¿Qué pasa si rompo mis gafas?',
//           answer: 'Ofrecemos reparaciones y ajustes de gafas a través de nuestro Plan de Garantía Diamante disponible en todas nuestras oficinas.'
//         },
//         {
//           question: '¿Cuál es su política de devolución para gafas?',
//           answer: 'Ofrecemos reparaciones y ajustes de gafas a través de nuestro Plan de Garantía Diamante disponible en todas nuestras oficinas.'
//         }
//       ]
//     },
//     {
//       title: 'Lentes de Contacto',
//       qa: [
//         {
//           question: '¿Qué es un lente de contacto?',
//           answer: 'Los lentes de contacto son un método para corregir la visión. Realmente entran en "contacto" con el ojo y cambian la forma en que la luz se enfoca en el ojo. Un lente de contacto es un lente delgado y curvo que se coloca sobre la película de lágrimas que cubre la superficie del ojo. Debido a que los lentes están a una distancia diferente del ojo que las gafas, la prescripción para lentes de contacto puede ser muy diferente. Por eso se requiere una evaluación separada.'
//         },
//         {
//           question: '¿Mi receta para gafas incluye una receta para lentes de contacto?',
//           answer: 'No. La evaluación para lentes de contacto es un conjunto separado de pruebas que se requiere cada año para emitir una receta de lentes de contacto, incluso si ya ha usado lentes de contacto antes.'
//         },
//         {
//           question: '¿Un lente de contacto puede perderse detrás de mi ojo?',
//           answer: 'No, es físicamente imposible que un lente de contacto se pierda detrás de su ojo. En el peor de los casos, si se desplaza, podría estar debajo del párpado superior. Si esto ocurre, puede encontrarlo aplicando gotas para lentes de contacto y masajeando suavemente el párpado con el ojo cerrado. En la mayoría de los casos, el lente se moverá a una posición visible para retirarlo.'
//         },
//         {
//           question: '¿Qué hago si mis lentes de contacto no me funcionan?',
//           answer: 'Muchas personas experimentan dificultades al usar lentes por primera vez o al cambiar su prescripción. Queremos asegurarnos de que esté cómodo con los lentes que usted y su doctor elijan. Si no está satisfecho con el ajuste, por favor llámenos para hacer los cambios necesarios.'
//         }
//       ]
//     },
//     {
//       title: 'Seguro de Visión',
//       qa: [
//         {
//           question: '¿Qué cubre el seguro de visión?',
//           answer: 'Los planes de seguro de visión generalmente cubren total o parcialmente exámenes de salud ocular completos, así como monturas, lentes, lentes de contacto e incluso artículos adicionales como protección para lentes o recubrimientos antirreflejos. Nuestros especialistas le ayudarán a entender y aprovechar al máximo sus beneficios.'
//         },
//         {
//           question: '¿Puedo comprar gafas y lentes de contacto con mi seguro?',
//           answer: 'Los planes de seguro de visión suelen ayudar a cubrir todo o parte de exámenes completos de salud ocular, monturas, lentes, lentes de contacto y opciones adicionales como protección o recubrimientos para lentes. Nuestros especialistas le ayudarán a aprovechar sus beneficios para que pueda elegir la mejor opción para su estilo de vida.'
//         },
//         {
//           question: '¿Aceptan mi seguro en Eye Center Boutique?',
//           answer: 'Nos enorgullece aceptar todo tipo de planes de seguro de visión para que reciba atención y productos asequibles cuando los necesite. Para saber si aceptamos su seguro, llámenos y uno de nuestros especialistas le ayudará a maximizar sus beneficios. ¿No tiene seguro? Trabajamos con todos los presupuestos para ofrecerle la mejor atención visual.'
//         },
//         {
//           question: '¿Cómo uso mi seguro en Eye Center Boutique?',
//           answer: 'Es sencillo. Proporciónenos su información de seguro al programar su cita. Verificaremos sus beneficios antes de la cita. Durante su cita, nuestros especialistas le ayudarán a entender y aprovechar sus beneficios.\n\nRecuerde que su plan puede cubrir el examen de la vista separado de los materiales (gafas o lentes).'
//         }
//       ]
//     }
//   ]
// }
// };

// export default data;
