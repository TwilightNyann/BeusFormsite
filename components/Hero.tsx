'use client'

import { useCallback } from 'react'

export default function Hero() {
    useCallback(() => {
        const bookingSection = document.getElementById('booking')
        const header = document.querySelector('header')
        if (bookingSection && header) {
            const headerHeight = header.offsetHeight
            const bookingPosition = bookingSection.offsetTop - headerHeight
            window.scrollTo({
                top: bookingPosition,
                behavior: 'smooth'
            })
        }
    }, []);
    return (
        <section className="text-center py-20">
            <h1 className="text-5xl font-bold mb-4 text-pink-600">Чарівні святкові привітання</h1>
            <p className="text-xl mb-8 text-pink-700">Давайте разом створимо казку і подаруємо радість вашим близьким!</p>
            <div className="flex justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-center">
                    <p className="text-2xl font-bold text-pink-700 mb-2">10000+</p>
                    <p className="text-sm text-pink-600">Щасливих дітей</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-center">
                    <p className="text-2xl font-bold text-pink-700 mb-2">безліч</p>
                    <p className="text-sm text-pink-600">Чарівних програм</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg text-center">
                    <p className="text-2xl font-bold text-pink-700 mb-2">7</p>
                    <p className="text-sm text-pink-600">Років Досвіду</p>
                </div>
            </div>
        </section>
    )
}
