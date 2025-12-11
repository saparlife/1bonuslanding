"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const plans = [
  {
    name: "Starter",
    monthlyPrice: 19900,
    yearlyPrice: 14900,
    description: "Для микробизнеса",
    features: [
      "До 500 клиентов",
      "Бонусная система",
      "1 локация",
      "Базовая аналитика",
      "Email поддержка",
    ],
    popular: false,
  },
  {
    name: "Growth",
    monthlyPrice: 49900,
    yearlyPrice: 37400,
    description: "Для малого бизнеса",
    features: [
      "До 3 000 клиентов",
      "WhatsApp рассылки",
      "Бонусы на день рождения",
      "3 локации",
      "Приоритетная поддержка",
    ],
    popular: false,
  },
  {
    name: "Business",
    monthlyPrice: 99900,
    yearlyPrice: 74900,
    description: "Самый популярный",
    features: [
      "До 15 000 клиентов",
      "RFM-аналитика с AI",
      "WhatsApp + авторассылки",
      "До 10 локаций",
      "API доступ",
      "Персональный менеджер",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Для сетей и франшиз",
    features: [
      "Безлимит клиентов",
      "Безлимит локаций",
      "White-label решение",
      "Custom интеграции",
      "SLA 99.9%",
      "Выделенная поддержка 24/7",
    ],
    popular: false,
  },
];

function PricingSection() {
  const [isYearly, setIsYearly] = useState(true);

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <section id="тарифы" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm mb-6">
            Тарифы
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Прозрачное{" "}
            <span className="gradient-text">ценообразование</span>
          </h2>
          <p className="text-xl text-zinc-500 mb-10">
            14 дней бесплатно. Отмена в любой момент.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm transition-colors ${!isYearly ? "text-white" : "text-zinc-500"}`}>
              Помесячно
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-16 h-8 rounded-full bg-zinc-800 transition-colors hover:bg-zinc-700"
            >
              <motion.div
                className="absolute top-1 w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500"
                animate={{ left: isYearly ? "calc(100% - 28px)" : "4px" }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm transition-colors ${isYearly ? "text-white" : "text-zinc-500"}`}>
              Годовой
            </span>
            {isYearly && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full"
              >
                -25%
              </motion.span>
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-6 ${
                plan.popular
                  ? "bg-gradient-to-b from-violet-600/20 to-transparent border-2 border-violet-500/50 lg:scale-105"
                  : "glass"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full text-sm font-medium whitespace-nowrap">
                    Популярный
                  </span>
                </div>
              )}
              <div className="mb-5">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-zinc-500 text-sm">{plan.description}</p>
              </div>
              <div className="mb-6">
                {plan.monthlyPrice === 0 ? (
                  <div>
                    <span className="text-3xl font-bold">По запросу</span>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">
                        {formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
                      </span>
                      <span className="text-zinc-500">₸/мес</span>
                    </div>
                    {isYearly && (
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-zinc-600 line-through">
                          {formatPrice(plan.monthlyPrice)} ₸
                        </span>
                        <span className="text-xs text-green-400">экономия {formatPrice((plan.monthlyPrice - plan.yearlyPrice) * 12)} ₸/год</span>
                      </div>
                    )}
                    {!isYearly && (
                      <p className="text-xs text-zinc-600 mt-1">
                        или {formatPrice(plan.yearlyPrice)} ₸/мес при оплате за год
                      </p>
                    )}
                  </div>
                )}
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <svg className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="#demo"
                className={`block w-full py-3 rounded-xl text-center font-medium transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-lg hover:shadow-violet-500/25"
                    : "bg-zinc-800 hover:bg-zinc-700"
                }`}
              >
                {plan.monthlyPrice === 0 ? "Связаться" : "Начать бесплатно"}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-zinc-600 text-sm mt-8"
        >
          Все цены указаны без НДС. При годовой оплате — скидка 25%.
        </motion.p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030712] text-white noise">
      <div className="mesh-gradient" />
      <div className="grid-pattern fixed inset-0 pointer-events-none" />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="glass-strong rounded-2xl px-6 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-lg">
                  1B
                </div>
              </div>
              <span className="text-xl font-semibold tracking-tight">1Bonus</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {["Возможности", "Тарифы", "Кейсы"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="#demo"
                className="hidden sm:block px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Войти
              </Link>
              <Link
                href="#demo"
                className="btn-shine px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all"
              >
                Демо
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                  </span>
                  Новое поколение лояльности
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
              >
                Клиенты{" "}
                <span className="gradient-text-animated">возвращаются</span>
                <br />
                и платят больше
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg sm:text-xl text-zinc-400 leading-relaxed mb-10 max-w-xl"
              >
                Умная программа лояльности с AI-аналитикой, автоматическими триггерами
                и WhatsApp-маркетингом. Средний рост выручки — 40% за 3 месяца.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link
                  href="#demo"
                  className="btn-shine group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl text-lg font-semibold transition-all hover:shadow-2xl hover:shadow-violet-500/30 hover:-translate-y-0.5 text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Запустить бесплатно
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                <Link
                  href="#demo"
                  className="group px-8 py-4 rounded-2xl text-lg font-semibold border border-zinc-800 hover:border-zinc-700 hover:bg-white/5 transition-all text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Смотреть демо
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-8">
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-xs font-medium"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1,2,3,4,5].map((i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-zinc-500">500+ компаний доверяют</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              {/* Phone mockup */}
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[3rem] blur-3xl opacity-30" />
                <div className="relative glass-strong rounded-[2.5rem] p-3 shadow-2xl">
                  <div className="bg-zinc-900 rounded-[2rem] p-6 w-72">
                    {/* Phone header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <p className="text-zinc-500 text-xs mb-1">Добро пожаловать</p>
                        <p className="font-semibold">Алия К.</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
                    </div>

                    {/* Balance card */}
                    <div className="gradient-border rounded-2xl p-5 mb-4">
                      <p className="text-zinc-500 text-sm mb-2">Ваши бонусы</p>
                      <div className="flex items-baseline gap-2 mb-3">
                        <span className="text-4xl font-bold">12,450</span>
                        <span className="text-zinc-500">₸</span>
                      </div>
                      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "75%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                        />
                      </div>
                      <p className="text-xs text-zinc-500 mt-2">До Gold статуса: 7,550 ₸</p>
                    </div>

                    {/* Quick actions */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { icon: "💳", label: "Оплатить" },
                        { icon: "🎁", label: "Подарки" },
                        { icon: "📊", label: "История" },
                      ].map((action) => (
                        <div key={action.label} className="glass rounded-xl p-3 text-center hover:bg-white/10 transition-colors cursor-pointer">
                          <div className="text-xl mb-1">{action.icon}</div>
                          <p className="text-xs text-zinc-400">{action.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Notification */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 }}
                      className="glass rounded-xl p-4 border-l-2 border-green-500"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-green-500 mt-0.5">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-sm mb-1">+500 бонусов!</p>
                          <p className="text-xs text-zinc-500">Спасибо за покупку</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-8 top-20 glass-strong rounded-2xl p-4 animate-float-delayed"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">+47%</p>
                    <p className="text-xs text-zinc-500">Повторные визиты</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -right-8 bottom-32 glass-strong rounded-2xl p-4 animate-float"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-2xl">
                    💬
                  </div>
                  <div>
                    <p className="text-2xl font-bold">89%</p>
                    <p className="text-xs text-zinc-500">Open rate WhatsApp</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-16 px-6 border-y border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-zinc-600 text-sm mb-8 uppercase tracking-wider">Нам доверяют лидеры рынка</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-50">
            {["Chocofamily", "Sulpak", "Technodom", "Magnum", "Arbuz"].map((name) => (
              <div key={name} className="text-xl font-bold text-zinc-500 hover:text-zinc-300 transition-colors cursor-default">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Features */}
      <section id="возможности" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm mb-6">
              Возможности
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Всё для роста{" "}
              <span className="gradient-text">вашего бизнеса</span>
            </h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
              Не просто программа лояльности — полноценная платформа для увеличения LTV клиентов
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Large card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 lg:row-span-2 glass hover-card rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl transition-all group-hover:bg-violet-500/20" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">RFM-аналитика с AI</h3>
                <p className="text-zinc-400 mb-8 max-w-md">
                  Автоматическая сегментация клиентов. AI предсказывает отток и рекомендует персональные офферы для каждого сегмента.
                </p>
                {/* Mini dashboard preview */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Champions", value: "23%", color: "from-green-500 to-emerald-600" },
                    { label: "At Risk", value: "12%", color: "from-yellow-500 to-orange-600" },
                    { label: "Lost", value: "8%", color: "from-red-500 to-pink-600" },
                  ].map((segment) => (
                    <div key={segment.label} className="glass rounded-xl p-4">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${segment.color} mb-3`} />
                      <p className="text-2xl font-bold">{segment.value}</p>
                      <p className="text-xs text-zinc-500">{segment.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* WhatsApp card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass hover-card rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl transition-all group-hover:bg-green-500/20" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-6 text-2xl">
                  💬
                </div>
                <h3 className="text-xl font-bold mb-2">WhatsApp Marketing</h3>
                <p className="text-zinc-400 text-sm mb-4">
                  Рассылки с 89% открываемостью. Шаблоны, автоответы, очереди сообщений.
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-2 flex-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[89%] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />
                  </div>
                  <span className="text-sm font-medium text-green-400">89%</span>
                </div>
              </div>
            </motion.div>

            {/* Birthday card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass hover-card rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl transition-all group-hover:bg-pink-500/20" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center mb-6 text-2xl">
                  🎂
                </div>
                <h3 className="text-xl font-bold mb-2">Бонусы на ДР</h3>
                <p className="text-zinc-400 text-sm">
                  Автоматические поздравления и подарки. Клиенты празднуют у вас.
                </p>
              </div>
            </motion.div>

            {/* Multi-location card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass hover-card rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl transition-all group-hover:bg-blue-500/20" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Мультилокации</h3>
                <p className="text-zinc-400 text-sm">
                  Единая система для сети. Сравнение показателей филиалов.
                </p>
              </div>
            </motion.div>

            {/* Multilanguage card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 glass hover-card rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl transition-all group-hover:bg-indigo-500/20" />
              <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 text-2xl">
                  🌍
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Мультиязычность</h3>
                  <p className="text-zinc-400">
                    Приложение на языке ваших клиентов. Поддержка казахского, русского, английского и других языков.
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap md:ml-auto">
                  {["Қазақша", "Русский", "English"].map((lang) => (
                    <span key={lang} className="px-3 py-1.5 bg-zinc-800 rounded-lg text-sm text-zinc-400">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-12">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: "40%", label: "Рост выручки", sublabel: "В среднем за 3 месяца" },
                { value: "2.5x", label: "ROI", sublabel: "Возврат инвестиций" },
                { value: "89%", label: "Open rate", sublabel: "WhatsApp сообщений" },
                { value: "< 5 мин", label: "Интеграция", sublabel: "Быстрый старт" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="font-medium mb-1">{stat.label}</div>
                  <div className="text-sm text-zinc-500">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* Testimonials */}
      <section id="кейсы" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm mb-6">
              Отзывы
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold">
              Истории{" "}
              <span className="gradient-text">успеха</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "За 3 месяца средний чек вырос на 35%, а повторные визиты — на 47%. WhatsApp-рассылки дают конверсию в 5 раз выше email.",
                author: "Айгерим Т.",
                role: "Сеть кофеен «Wake Cup»",
                metric: "+47% повторных визитов",
              },
              {
                quote: "RFM-аналитика помогла выявить уходящих клиентов. Персональные офферы вернули 23% из них. Окупили систему за 2 недели.",
                author: "Марат К.",
                role: "Ресторан «Gastrobar»",
                metric: "ROI 340%",
              },
              {
                quote: "Раньше тратили 3 часа в день на ручные рассылки. Теперь всё автоматизировано — бонусы на ДР, напоминания, акции.",
                author: "Динара С.",
                role: "Салон красоты «Bloom»",
                metric: "- 3 часа работы в день",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass hover-card rounded-3xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 mb-6 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-zinc-500">{testimonial.role}</p>
                  </div>
                  <div className="px-3 py-1.5 bg-green-500/10 rounded-lg">
                    <span className="text-sm text-green-400 font-medium">{testimonial.metric}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

            <div className="relative p-12 sm:p-16 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Готовы увеличить продажи?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-xl mx-auto">
                Запустите программу лояльности за 5 минут. 14 дней бесплатно.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/77001234567?text=Хочу%20демо%201Bonus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-violet-600 rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-white/20 transition-all"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Получить демо в WhatsApp
                </a>
                <a
                  href="tel:+77001234567"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +7 700 123 45 67
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-xl flex items-center justify-center font-bold">
                1B
              </div>
              <span className="font-semibold">1Bonus</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <Link href="#" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
              <Link href="#" className="hover:text-white transition-colors">Условия использования</Link>
            </div>
            <div className="text-sm text-zinc-600">
              © 2024 1Bonus. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
