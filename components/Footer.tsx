'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
    const [showCredit, setShowCredit] = useState(false)

    return (
        <footer className="bg-pink-400 text-white py-8 relative overflow-hidden">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 Чарівні привітання. Всі права захищено.</p>
                <p className="mt-2">Давайте разом створювати казку!</p>
            </div>

            {/* Загнутий кут */}
            <motion.div
                className="absolute bottom-0 right-0 w-16 h-16 bg-pink-600 cursor-pointer"
                style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
                whileHover={{ scale: 1.1 }}
                onClick={() => setShowCredit(true)}
            />

            {/* Повідомлення про виконавця */}
            {showCredit && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    onClick={() => setShowCredit(false)}
                >
                    <div className="bg-white text-pink-600 p-6 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-bold mb-2">Про виконавця</h2>
                        <p>Сайт розроблено з любов&apos;ю для &quot;Беус Казкові&quot; <br></br>студентом 45 групи Юдіним Юрієм Олеговичем</p>
                    </div>
                </motion.div>
            )}
        </footer>
    )
}
