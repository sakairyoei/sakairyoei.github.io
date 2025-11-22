'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const valueProps = [
    {
      icon: '🎯',
      title: '技術とビジネスの橋渡し',
      description: '現場視点での実践的なソリューション提案',
    },
    {
      icon: '⚡',
      title: 'スピーディな実装',
      description: 'ローコード開発で素早く成果を実現',
    },
    {
      icon: '🤝',
      title: '伴走型支援',
      description: '要件定義から運用まで一貫サポート',
    },
  ]

  return (
    <section id="about" className="section-container bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-600 rounded-full font-semibold text-sm mb-4">
          About Me
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          自己紹介
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-start"
        >
          <div className="card p-8 flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-300">
            <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/profile.jpg" 
                alt="酒井了瑛" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">酒井 了瑛</h3>
            <p className="text-sm text-gray-600">Ryoei Sakai</p>
          </div>
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-2 space-y-6"
        >
          <p className="text-lg text-gray-800 leading-relaxed font-medium">
            東京通信大学情報マネジメント学部を卒業後、株式会社DTSにて製造業向けERPパッケージ「mcframe」のコンサルタントとして、要件定義から運用まで幅広いフェーズを経験してまいりました。
          </p>
          <p className="text-gray-600 leading-relaxed">
            現在は、<strong className="text-primary-600">AIを活用したDXコンサルティング</strong>を専門領域として、企業の業務効率化とデジタル変革を支援しています。特にPower Platformを用いた業務自動化やAI導入支援において、技術的知見とビジネス理解を兼ね備えた提案が強みです。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-xl">📍</span>
              <span>日本</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-xl">🎓</span>
              <span>東京通信大学</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-xl">💼</span>
              <span>株式会社DTS</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Value Propositions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {valueProps.map((prop, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            className="card p-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="text-4xl mb-4">{prop.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {prop.title}
            </h3>
            <p className="text-gray-600">{prop.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
