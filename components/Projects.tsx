'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function Projects() {
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

  const projects = [
    {
      period: '2025年10月 - 現在',
      title: '顧客折衝・要件定義',
      company: '株式会社DTS - mcframeコンサルタント',
      description:
        '要件定義フェーズにて顧客との直接折衝を担当。業務フローの分析と課題抽出、システム要件の整理を実施。',
      tags: ['mcframe', '要件定義', '顧客折衝', '業務分析'],
    },
    {
      period: '2025年7月 - 9月',
      title: 'ライブラリ管理リーダー',
      company: '株式会社DTS - mcframeコンサルタント',
      description:
        'テストフェーズにてライブラリ管理チームのリーダーとして3名をマネジメント。リリース計画の策定と品質管理を実施し、作業時間を20%削減。',
      tags: ['mcframe', 'リーダー', 'リリース管理', '品質管理'],
      highlights: [
        { number: '20%', label: '作業時間削減' },
        { number: '3名', label: 'チームマネジメント' },
      ],
    },
    {
      period: '2025年1月 - 6月',
      title: '設計・開発担当',
      company: '株式会社DTS - mcframeコンサルタント',
      description:
        '要件定義から開発フェーズまで担当。標準機能調査からアドオンの基本設計・詳細設計、開発実装までを実施。',
      tags: ['mcframe', '基本設計', '詳細設計', 'アドオン開発'],
    },
    {
      period: '2024年9月 - 12月',
      title: '運用・リリース担当',
      company: '株式会社DTS - mcframeコンサルタント',
      description:
        '運用フェーズにてライブラリ管理のリリース担当。本番環境へのモジュールリリース作業とバージョン管理を実施。',
      tags: ['mcframe', 'リリース管理', '運用保守'],
    },
    {
      period: '継続中',
      title: 'Power Platform 業務自動化',
      company: '社内業務効率化プロジェクト',
      description:
        'Power Automateを活用した定型業務の自動化を実施。Excel、SharePoint、Teamsとの連携により業務効率を大幅に改善。',
      tags: ['Power Automate', 'Power Apps', 'SharePoint', 'Microsoft 365'],
    },
    {
      period: '個人プロジェクト',
      title: 'AWS EC2 × Redmine プロジェクト管理基盤構築',
      company: 'インフラ構築・運用',
      description:
        'AWS EC2（Linux）を使用したRedmineサーバーの構築。Linuxサーバーの初期設定からRedmineのインストール、カスタマイズまでを実施。',
      tags: ['AWS EC2', 'Linux', 'Redmine', 'インフラ構築'],
    },
  ]

  return (
    <section id="projects" className="section-container bg-gray-50" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-600 rounded-full font-semibold text-sm mb-4">
          Projects
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          実績・プロジェクト経験
        </h2>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center ${
                index % 2 === 0
                  ? 'md:flex-row'
                  : 'md:flex-row-reverse'
              } flex-col`}
            >
              {/* Timeline marker */}
              <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-white border-4 border-primary-600 rounded-full transform md:-translate-x-1/2 shadow-lg z-10"></div>

              {/* Content */}
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                } pl-20 md:pl-0`}
              >
                <div className="card p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <span className="inline-block px-4 py-1 bg-gradient-primary text-white rounded-full text-sm font-semibold mb-4">
                    {project.period}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-4">
                    {project.company}
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {project.highlights && (
                    <div className="flex gap-4 mb-4">
                      {project.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center p-3 bg-gray-50 rounded-lg"
                        >
                          <span className="text-2xl font-bold text-primary-600">
                            {highlight.number}
                          </span>
                          <span className="text-xs text-gray-600">
                            {highlight.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-primary-50 to-purple-50 text-primary-600 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
