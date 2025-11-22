'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'AI・自動化技術',
      skills: [
        'ChatGPT API',
        'Claude API',
        'Power Automate',
        'Power Apps',
        'Power BI',
        'プロンプトエンジニアリング',
      ],
    },
    {
      title: 'ERPパッケージ',
      skills: [
        'mcframe',
        '要件定義',
        '基本設計',
        '詳細設計',
        'アドオン開発',
        '顧客折衝',
      ],
    },
    {
      title: '技術スキル',
      skills: ['Python', 'JavaScript', 'VBA', 'SQL', 'Git', 'Linux'],
    },
    {
      title: 'クラウド・インフラ',
      skills: [
        'AWS EC2',
        'Microsoft 365',
        'Azure',
        'Redmine',
        'Apache/Nginx',
      ],
    },
    {
      title: '業務スキル',
      skills: [
        'プロジェクト管理',
        'チームリーダーシップ',
        '業務分析',
        '製造業知識',
      ],
    },
  ]

  return (
    <section id="skills" className="section-container bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-600 rounded-full font-semibold text-sm mb-4">
          Skills
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          スキル・専門領域
        </h2>
      </motion.div>

      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: 0.3 + index * 0.1 + i * 0.05,
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-primary-50 to-purple-50 text-primary-600 rounded-full font-medium text-sm hover:bg-gradient-primary hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
