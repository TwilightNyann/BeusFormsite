import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AnimatorsInfo from '@/components/AnimatorsInfo'
import BookingForm from '@/components/BookingForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen text-pink-800 relative overflow-hidden bg-gradient-to-br from-pink-200 via-purple-300 to-pink-300">
      <div className="snow absolute inset-0 pointer-events-none z-0"></div>
      <div className="relative z-10">
        <Header />
        <main className="w-full px-0 py-8">
          <Hero />
          <AnimatorsInfo />
          <BookingForm />
        </main>
        <Footer />
      </div>
    </div>
  )
}

