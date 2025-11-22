'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function Services() {
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

  const services = [
    {
      icon: '🤖',
      title: 'AI活用コンサルティング',
      items: [
        'ChatGPT、Claude等のLLM活用支援',
        '生成AI導入・ガイドライン策定',
        'AI活用研修・ワークショップ',
        'カスタムAIソリューション企画',
      ],
    },
    {
      icon: '⚡',
      title: 'Power Platform 業務自動化',
      items: [
        'Power Automate 業務プロセス自動化',
        'Power Apps ローコードアプリ開発',
        'Power BI データ可視化・分析',
        'SharePoint 情報共有基盤構築',
      ],
    },
    {
      icon: '🏭',
      title: 'ERP・業務システム',
      items: [
        '製造業向けERPパッケージ導入',
        '要件定義・業務分析',
        'システム設計・開発支援',
        '運用保守体制構築',
      ],
    },
    {
      icon: '☁️',
      title: 'クラウドインフラ構築',
      items: [
        'AWS EC2 サーバー環境構築',
        'Linux サーバー設計・運用',
        'プロジェクト管理ツール導入',
        'クラウド移行・最適化',
      ],
    },
  ]

  return (
    <section
      id="services"
      className="section-container bg-gray-50"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-600 rounded-full font-semibold text-sm mb-4">
          Services
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          提供サービス
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="card p-6 hover:scale-105 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="text-5xl mb-6">{service.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {service.title}
            </h3>
            <ul className="space-y-3">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-600">
                  <span className="text-primary-600 mt-1">→</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
