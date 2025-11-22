'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  const floatingCards = [
    { icon: '🤖', text: 'AI活用', delay: 0 },
    { icon: '⚡', text: '業務自動化', delay: 0.2 },
    { icon: '☁️', text: 'クラウド', delay: 0.4 },
    { icon: '📊', text: 'DX推進', delay: 0.6 },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-primary-100 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-100 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">AI × DX</span>
              <br />
              Consultant
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 mb-4"
            >
              Power Platform スペシャリスト | ERPコンサルタント
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-gray-500 mb-8"
            >
              AIとデジタル技術を活用して、
              <br className="hidden sm:block" />
              企業のビジネス変革を支援します
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="#contact" className="btn-primary text-center">
                お問い合わせ
              </Link>
              <Link href="#projects" className="btn-secondary text-center">
                実績を見る
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Floating cards */}
          <div className="relative h-[500px] hidden lg:block">
            {floatingCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: card.delay,
                  type: 'spring',
                  stiffness: 100,
                }}
                className={`absolute card p-6 flex items-center gap-4 ${
                  index === 0 ? 'top-[10%] left-[10%]' :
                  index === 1 ? 'top-[30%] right-[10%]' :
                  index === 2 ? 'bottom-[30%] left-[5%]' :
                  'bottom-[10%] right-[15%]'
                } ${
                  index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
                }`}
              >
                <span className="text-4xl">{card.icon}</span>
                <span className="font-semibold text-gray-800">{card.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-sm">Scroll</span>
        <div className="w-0.5 h-10 bg-gradient-primary animate-pulse"></div>
      </motion.div>
    </section>
  )
}
