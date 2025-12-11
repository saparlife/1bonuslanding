import Link from "next/link";

// Icons as components
const GiftIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const MessageIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const CakeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Bonus</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Возможности</Link>
              <Link href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors">Как работает</Link>
              <Link href="#pricing" className="text-gray-600 hover:text-indigo-600 transition-colors">Тарифы</Link>
              <Link href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Контакты</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="#contact" className="hidden sm:block text-gray-600 hover:text-indigo-600 transition-colors">
                Войти
              </Link>
              <Link
                href="#contact"
                className="px-5 py-2.5 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/25"
              >
                Попробовать
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
                Более 500+ компаний уже с нами
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Программа лояльности, которая
                <span className="gradient-text"> увеличивает продажи</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Превратите разовых покупателей в постоянных клиентов. RFM-аналитика,
                автоматические бонусы и WhatsApp-рассылки — всё в одном приложении.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="#contact"
                  className="px-8 py-4 bg-indigo-600 text-white rounded-full font-semibold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/30 text-center"
                >
                  Начать бесплатно
                </Link>
                <Link
                  href="#how-it-works"
                  className="px-8 py-4 bg-gray-100 text-gray-700 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors text-center"
                >
                  Как это работает?
                </Link>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span>Бесплатный период</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span>Без карты</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon />
                  <span>Настройка за 5 минут</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-60"></div>
              <div className="relative bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 shadow-2xl animate-float">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-500 text-sm">Ваши бонусы</span>
                    <span className="text-emerald-500 text-sm font-medium">+12%</span>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">2,450 <span className="text-xl text-gray-400">баллов</span></div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-white">
                    <div className="text-2xl font-bold">+40%</div>
                    <div className="text-white/80 text-sm">Повторные покупки</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur rounded-xl p-4 text-white">
                    <div className="text-2xl font-bold">85%</div>
                    <div className="text-white/80 text-sm">Открытие сообщений</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Компаний" },
              { value: "1M+", label: "Клиентов" },
              { value: "40%", label: "Рост продаж" },
              { value: "24/7", label: "Поддержка" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Всё для роста вашего бизнеса
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мощные инструменты для привлечения и удержания клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <GiftIcon />,
                title: "Бонусная система",
                description: "Гибкая настройка начисления и списания бонусов. Кэшбэк, накопительные скидки, бонусы за покупки."
              },
              {
                icon: <ChartIcon />,
                title: "RFM-аналитика",
                description: "Автоматическая сегментация клиентов по частоте и сумме покупок. Выявляйте лучших и уходящих клиентов."
              },
              {
                icon: <MessageIcon />,
                title: "WhatsApp рассылки",
                description: "Массовые рассылки с 85% открываемостью. Персонализированные сообщения, шаблоны, очереди."
              },
              {
                icon: <CakeIcon />,
                title: "Бонусы на день рождения",
                description: "Автоматическое начисление бонусов именинникам. Повышайте лояльность без усилий."
              },
              {
                icon: <UsersIcon />,
                title: "База клиентов",
                description: "Полная история покупок и коммуникаций. Быстрый поиск, фильтры, экспорт данных."
              },
              {
                icon: <LocationIcon />,
                title: "Мультилокации",
                description: "Управляйте несколькими точками из одного аккаунта. Единая база клиентов и аналитика."
              },
            ].map((feature, i) => (
              <div key={i} className="feature-card bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Начните за 5 минут
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Простая настройка без технических знаний
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Регистрация",
                description: "Создайте аккаунт и добавьте информацию о вашей компании"
              },
              {
                step: "02",
                title: "Настройка",
                description: "Настройте правила начисления бонусов и подключите WhatsApp"
              },
              {
                step: "03",
                title: "Запуск",
                description: "Добавляйте клиентов и отслеживайте рост продаж"
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-7xl font-bold text-indigo-100 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-12 right-0 translate-x-1/2 text-indigo-200">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Простые и понятные тарифы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите план, который подходит вашему бизнесу
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Старт",
                price: "9 900",
                period: "/ месяц",
                description: "Для малого бизнеса",
                features: [
                  "До 500 клиентов",
                  "Бонусная система",
                  "1 локация",
                  "Email поддержка",
                ],
                popular: false,
              },
              {
                name: "Бизнес",
                price: "29 900",
                period: "/ месяц",
                description: "Для растущего бизнеса",
                features: [
                  "До 5 000 клиентов",
                  "Бонусная система",
                  "RFM-аналитика",
                  "WhatsApp рассылки",
                  "До 3 локаций",
                  "Приоритетная поддержка",
                ],
                popular: true,
              },
              {
                name: "Премиум",
                price: "59 900",
                period: "/ месяц",
                description: "Для крупного бизнеса",
                features: [
                  "Безлимит клиентов",
                  "Все функции",
                  "Безлимит локаций",
                  "API интеграции",
                  "Персональный менеджер",
                  "SLA 99.9%",
                ],
                popular: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl p-8 ${
                  plan.popular
                    ? "border-2 border-indigo-500 shadow-xl scale-105"
                    : "border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-500 text-white text-sm font-medium rounded-full">
                    Популярный
                  </div>
                )}
                <div className="text-lg font-semibold text-gray-900 mb-2">{plan.name}</div>
                <div className="text-gray-500 text-sm mb-4">{plan.description}</div>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">тг{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckIcon />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className={`block w-full py-3 rounded-xl font-semibold text-center transition-colors ${
                    plan.popular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  Выбрать план
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Нам доверяют
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Отзывы наших клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Алия Касымова",
                role: "Владелец кофейни",
                text: "За 3 месяца повторные визиты выросли на 45%. WhatsApp рассылки работают отлично — 90% клиентов читают наши сообщения.",
              },
              {
                name: "Марат Сулейменов",
                role: "Сеть ресторанов",
                text: "Наконец-то понимаем кто наши лучшие клиенты. RFM-аналитика помогла выстроить правильную коммуникацию с каждым сегментом.",
              },
              {
                name: "Динара Омарова",
                role: "Салон красоты",
                text: "Бонусы на день рождения — это гениально! Клиенты приходят праздновать к нам и приводят друзей. Лучшая инвестиция в маркетинг.",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-bg rounded-3xl p-8 sm:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Готовы увеличить продажи?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Начните бесплатный период прямо сейчас. Без карты, без обязательств.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/77001234567?text=Здравствуйте!%20Хочу%20узнать%20больше%20о%201Bonus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Написать в WhatsApp
              </a>
              <a
                href="tel:+77001234567"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/30 transition-colors backdrop-blur"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +7 700 123 45 67
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Bonus</span>
              </div>
              <p className="text-gray-600 text-sm">
                Программа лояльности для современного бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link href="#features" className="hover:text-indigo-600 transition-colors">Возможности</Link></li>
                <li><Link href="#pricing" className="hover:text-indigo-600 transition-colors">Тарифы</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Интеграции</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">О нас</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Блог</Link></li>
                <li><Link href="#contact" className="hover:text-indigo-600 transition-colors">Контакты</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Помощь</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">Документация</Link></li>
                <li><Link href="#" className="hover:text-indigo-600 transition-colors">API</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © 2024 1Bonus. Все права защищены.
            </div>
            <div className="flex gap-6 text-gray-500 text-sm">
              <Link href="#" className="hover:text-indigo-600 transition-colors">Политика конфиденциальности</Link>
              <Link href="#" className="hover:text-indigo-600 transition-colors">Условия использования</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
