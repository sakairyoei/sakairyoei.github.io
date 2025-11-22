'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function Contact() {
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

  const challenges = [
    'AIを業務に活用したいが、何から始めればいいかわからない',
    '定型業務を自動化して生産性を上げたい',
    'ERPシステムの導入・改善を検討している',
    'DX推進を進めたいが、社内にノウハウがない',
  ]

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: '💻',
      title: 'GitHub',
      value: '@yourusername',
      link: 'https://github.com/yourusername',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'プロフィールを見る',
      link: 'https://linkedin.com/in/yourprofile',
    },
    {
      icon: '🐦',
      title: 'Twitter',
      value: '@yourhandle',
      link: 'https://twitter.com/yourhandle',
    },
  ]

  return (
    <section id="contact" className="section-container bg-white" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-600 rounded-full font-semibold text-sm mb-4">
          Contact
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          お問い合わせ
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            こんな課題をお持ちの企業様へ
          </h3>

          <ul className="space-y-4 mb-8">
            {challenges.map((challenge, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary-600 font-bold mt-1">✓</span>
                <span className="text-gray-600">{challenge}</span>
              </li>
            ))}
          </ul>

          <div className="space-y-4 card p-6">
            <div>
              <strong className="text-primary-600 block mb-2">
                初回相談
              </strong>
              <p className="text-gray-600">無料（30分-1時間程度）</p>
            </div>
            <div>
              <strong className="text-primary-600 block mb-2">
                対応範囲
              </strong>
              <p className="text-gray-600">
                リモート対応：全国可能
                <br />
                訪問対応：応相談
              </p>
            </div>
            <div>
              <strong className="text-primary-600 block mb-2">
                営業時間
              </strong>
              <p className="text-gray-600">
                平日 9:00-18:00
                <br />
                （土日祝は要相談）
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right side - Contact methods */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={
                method.link.startsWith('http')
                  ? 'noopener noreferrer'
                  : undefined
              }
              whileHover={{ scale: 1.02, x: 10 }}
              className="card p-6 flex items-center gap-4 hover:bg-gradient-primary hover:text-white transition-all duration-300 group"
            >
              <div className="text-4xl">{method.icon}</div>
              <div>
                <h4 className="text-lg font-bold mb-1 group-hover:text-white">
                  {method.title}
                </h4>
                <p className="text-gray-600 group-hover:text-white/90">
                  {method.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-16"
      >
        <p className="text-gray-600 mb-6">
          お気軽にお問い合わせください。まずは無料相談から始めましょう。
        </p>
        <a
          href="mailto:your.email@example.com"
          className="btn-primary inline-block"
        >
          メールでお問い合わせ
        </a>
      </motion.div>
    </section>
  )
}
