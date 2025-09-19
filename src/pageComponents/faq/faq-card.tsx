'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import styles from './faq.module.scss';
import cn from '@/utils/cn';

import caretCircleUpIcon from '@/assets/icons/caret_circle_up.svg';
import caretCircleDownIcon from '@/assets/icons/caret_circle_down.svg';

interface Props {
    title: string;
    data: {
        question: string;
        answer: string;
    }[]
}

const FAQCard: React.FC<Props> = ({
    title,
    data
}) => {
    const [openQuestion, setOpenQuestion] = useState<number | null>(1);
    return (
        <div className={cn(styles.faqCard, 'px_40 py_40')}>
            <div className={styles.titleContainer}>
                <p className={cn(styles.title, 'fs_24 fw_700')}>{title}</p>
            </div>
            <div style={{ flex: 1 }}>
                {data.map(({ question, answer }, i) => {
                    const index = i + 1;
                    const isOpen = index === openQuestion
                    return (
                        <div key={question}>
                            <div className={styles.questionContainer} onClick={() => {
                                        if (isOpen) {
                                            setOpenQuestion(null);
                                        } else {
                                            setOpenQuestion(index)
                                        }
                                    }}>
                                <div className={styles.qaContainer}>
                                    <p className={cn(styles.question, isOpen ? styles.openQuestion : '', 'fs_22')}>{question}</p>
                                    <div className={cn(styles.answerContainer, isOpen ? styles.openAnswer : styles.closedAnswer)}>
                                        <p className={cn(styles.answer, 'fs_20 mt_10')}>{answer}</p>
                                    </div>
                                </div>
                                <Image
                                    alt='icon'
                                    src={isOpen ? caretCircleUpIcon : caretCircleDownIcon}
                                    className={styles.openIcon}
                                    onClick={() => {
                                        if (isOpen) {
                                            setOpenQuestion(null);
                                        } else {
                                            setOpenQuestion(index)
                                        }
                                    }}
                                />
                            </div>
                            {index !== data.length && (
                                <div className={styles.horizontalLine} />
                            )}
                        </div>
                    )
                })}
                {/* <div className={styles.questionContainer}>
                    <div className={styles.qaContainer}>
                        <p className={cn(styles.question, 'fs_22 fw_700')}>My vision has changed suddenly. What should I do?</p>
                    </div>
                    <Image
                        alt='upIcon'
                        src={caretCircleDownIcon}
                        className={styles.closeIcon}
                    />
                </div> */}
                {/* <div className={styles.horizontalLine} /> */}
            </div>
        </div>
    )
}

export default FAQCard