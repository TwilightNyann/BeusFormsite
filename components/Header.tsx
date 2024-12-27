import Image from "next/image";
import { Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-pink-400 text-white p-4 w-full">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Image
          src={'logoki.svg'}
          alt="Логотип компанії"
          width={200}
          height={200}
        />
        <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm py-2 px-4 rounded-full">
          <Phone className="h-5 w-5" />
          <span className="text-lg font-semibold">(099)531-62-65</span>
        </div>
      </div>
    </header>
  )
}

