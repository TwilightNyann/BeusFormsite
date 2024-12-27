import Image from 'next/image'

const animators = [
  { name: 'Олаф', role: '', image: '/IMG_6(109).jpg' },
  { name: 'Паті ведмедик', role: '', image: '/IMG_6(125).jpg' },
  { name: 'Котик', role: '', image: '/IMG_6(149).jpg' },
]

export default function AnimatorsInfo() {
  return (
    <section id="animators" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-pink-600">Наші чарівні друзі</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {animators.map((animator) => (
          <div key={animator.name} className="text-center bg-white/30 backdrop-blur-sm p-6 rounded-lg shadow-md">
            <Image
              src={animator.image}
              alt={animator.name}
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4 border-4 border-pink-400 object-cover"
            />
            <h3 className="text-xl font-semibold text-pink-800">{animator.name}</h3>
            <p className="text-pink-600">{animator.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

