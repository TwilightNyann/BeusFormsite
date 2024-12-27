'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    date: '',
    address: '',
    details: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.address.length < 10) {
      toast.error('Будь ласка, вкажіть повну адресу (не менше 10 символів)')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Помилка під час надсилання форми')
      }

      const result = await response.json()

      if (result.success) {
        toast.success("Ура! Вашу заявку надіслано! Скоро наші чарівники зв'яжуться з вами!", {
          duration: 5000,
        })

        setFormData({
          fullName: '',
          phone: '',
          date: '',
          address: '',
          details: ''
        })
      } else {
        throw new Error(result.error || 'Сталася помилка під час надсилання заявки')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Сталася помилка під час надсилання заявки. Будь ласка, спробуйте знову.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
      <section id="booking" className="py-16">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-pink-800">Запросити чарівників</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <label htmlFor="fullName" className="block text-lg font-medium text-pink-800 mb-2">
                Як тебе звати?
              </label>
              <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Напиши своє ім'я"
                  required
                  className="w-full p-4 text-lg rounded-2xl border-2 border-pink-300 focus:border-pink-500 focus:ring-pink-500 bg-white/50"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <label htmlFor="phone" className="block text-lg font-medium text-pink-800 mb-2">
                Номер телефону батьків
              </label>
              <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+380(00)00-00-000"
                  required
                  className="w-full p-4 text-lg rounded-2xl border-2 border-pink-300 focus:border-pink-500 focus:ring-pink-500 bg-white/50"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <label htmlFor="date" className="block text-lg font-medium text-pink-800 mb-2">
                Коли ти хочеш зустрітися з чарівниками?
              </label>
              <Input
                  id="date"
                  name="date"
                  type="datetime-local"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full p-4 text-lg rounded-2xl border-2 border-pink-300 focus:border-pink-500 focus:ring-pink-500 bg-white/50"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <label htmlFor="address" className="block text-lg font-medium text-pink-800 mb-2">
                Куди прийти чарівникам?
              </label>
              <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Напиши свою адресу"
                  required
                  className="w-full p-4 text-lg rounded-2xl border-2 border-pink-300 focus:border-pink-500 focus:ring-pink-500 bg-white/50"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <label htmlFor="details" className="block text-lg font-medium text-pink-800 mb-2">
                Що б ти хотів(ла) від чарівників?
              </label>
              <Textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Розкажи нам про свої побажання"
                  className="w-full p-4 text-lg rounded-2xl border-2 border-pink-300 focus:border-pink-500 focus:ring-pink-500 bg-white/50"
              />
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-full text-xl transition duration-300 transform hover:-translate-y-1"
              >
                {isSubmitting ? 'Відправляємо...' : 'Надіслати чарівне запрошення'}
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </section>
  )
}

