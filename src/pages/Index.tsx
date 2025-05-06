
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  // Добавление метатегов через React Helmet отсутствует здесь, но в реальном проекте
  // было бы хорошо использовать его или аналогичную библиотеку для управления head

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      {/* Главный заголовок в газетном стиле */}
      <div className="border-b-2 border-black pb-4 mb-8">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-center">КАСТИНГИ САНКТ-ПЕТЕРБУРГА</h1>
        <p className="text-lg text-center mt-2 font-serif italic">
          Ваш путеводитель в мире кино, телевидения и рекламы
        </p>
      </div>

      {/* Приветственный блок */}
      <section className="mb-12">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-serif font-bold mb-4">Добро пожаловать на портал "КАСТИНГИ СПб"</h2>
          <p className="text-lg mb-4">
            Мы собираем все актуальные предложения для актеров, моделей и талантливых людей Санкт-Петербурга. 
            Наш сайт — это надежный источник информации о кастингах в фильмах, рекламных роликах, 
            телевизионных проектах и фотосессиях, проводимых в городе на Неве.
          </p>
          <p className="text-lg mb-4">
            Независимо от вашего опыта — профессиональный вы актер или только начинаете свой путь — 
            мы поможем найти подходящий проект для реализации творческого потенциала.
          </p>
          <div className="flex justify-center mt-6">
            <Button asChild size="lg" className="font-medium">
              <Link to="/castings">СМОТРЕТЬ ВСЕ КАСТИНГИ</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Срочные кастинги - в газетном стиле */}
      <section className="mb-12">
        <h2 className="text-2xl font-serif font-bold border-b-2 border-black pb-2 mb-6">
          СРОЧНЫЕ КАСТИНГИ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border border-gray-800">
            <CardHeader>
              <CardTitle className="font-serif">ТРЕБУЮТСЯ АКТЕРЫ ДЛЯ ИСТОРИЧЕСКОГО ФИЛЬМА</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2"><strong>Дата публикации:</strong> 06.05.2025</p>
              <p className="mb-4">
                Кинокомпания "Невский экран" объявляет набор актеров и статистов для съемок исторического фильма о Петровской эпохе. 
                Требуются мужчины и женщины 20-60 лет. Опыт не обязателен. Оплата от 3000 руб./смена.
              </p>
              <p className="text-sm italic">Для связи: t.me/vocoders</p>
            </CardContent>
          </Card>

          <Card className="border border-gray-800">
            <CardHeader>
              <CardTitle className="font-serif">МОДЕЛИ ДЛЯ РЕКЛАМЫ КОСМЕТИКИ</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-2"><strong>Дата публикации:</strong> 05.05.2025</p>
              <p className="mb-4">
                Рекламное агентство приглашает моделей для съемок в рекламе новой линейки косметики. 
                Девушки 18-35 лет с хорошей кожей. Опыт съемок желателен. Оплата 5000-7000 руб./смена.
              </p>
              <p className="text-sm italic">Для связи: t.me/vocoders</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Информационный блок */}
      <section className="mb-12">
        <h2 className="text-2xl font-serif font-bold border-b-2 border-black pb-2 mb-6">
          КАК ПОПАСТЬ НА КАСТИНГ В САНКТ-ПЕТЕРБУРГЕ
        </h2>
        
        <div className="prose prose-lg max-w-none">
          <p className="mb-4">
            Санкт-Петербург — один из главных центров кинопроизводства и рекламы в России. Здесь регулярно проходят 
            кастинги для самых разных проектов: от блокбастеров до независимых фильмов, от федеральной рекламы до фотосессий.
          </p>
          
          <h3 className="text-xl font-serif font-bold mt-6 mb-3">С чего начать?</h3>
          <ol className="list-decimal pl-6 mb-6">
            <li className="mb-2">Подготовьте качественное портфолио с разноплановыми фотографиями</li>
            <li className="mb-2">Составьте профессиональное резюме, указав свои параметры и опыт</li>
            <li className="mb-2">Регулярно мониторите наш сайт — мы публикуем только проверенные предложения</li>
            <li className="mb-2">Подпишитесь на наш телеграм-канал для мгновенных уведомлений о новых кастингах</li>
            <li>Не бойтесь пробовать — даже известные актеры когда-то начинали с маленьких ролей</li>
          </ol>
          
          <div className="bg-gray-100 p-4 border-l-4 border-gray-800 mb-6">
            <p className="italic">
              "В Санкт-Петербурге сейчас наблюдается рост кинопроизводства. Только за последний год количество 
              проектов увеличилось на 30%. Это отличное время для начинающих актеров."
            </p>
          </div>
          
          <p>
            Следите за обновлениями на нашем сайте и не упустите свой шанс. Все вопросы вы можете задать, 
            связавшись с нами через Телеграм: <a href="https://t.me/vocoders" className="font-medium">t.me/vocoders</a>
          </p>
        </div>
      </section>

      {/* Блок с преимуществами */}
      <section>
        <h2 className="text-2xl font-serif font-bold border-b-2 border-black pb-2 mb-6">
          ПОЧЕМУ ВЫБИРАЮТ "КАСТИНГИ СПб"
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-800 p-6">
            <h3 className="text-xl font-serif font-bold mb-3">АКТУАЛЬНОСТЬ</h3>
            <p>Мы ежедневно обновляем базу кастингов и публикуем только проверенные предложения от надежных компаний.</p>
          </div>
          
          <div className="border border-gray-800 p-6">
            <h3 className="text-xl font-serif font-bold mb-3">РАЗНООБРАЗИЕ</h3>
            <p>У нас вы найдете кастинги для актеров всех возрастов и типажей, моделей, детей, статистов и многих других.</p>
          </div>
          
          <div className="border border-gray-800 p-6">
            <h3 className="text-xl font-serif font-bold mb-3">ПОДДЕРЖКА</h3>
            <p>Наша команда всегда готова помочь советом и ответить на ваши вопросы о подготовке к кастингам.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Добавляем метатеги для SEO
// В реальном проекте следует использовать React Helmet или аналог
document.title = "Кастинги в Санкт-Петербурге | Актуальные предложения для актеров и моделей";
const metaDescription = document.createElement('meta');
metaDescription.name = "description";
metaDescription.content = "Актуальные кастинги Санкт-Петербурга для актеров, моделей и статистов. Ежедневное обновление базы вакансий для съемок в кино, рекламе и ТВ-шоу.";
document.head.appendChild(metaDescription);

const metaKeywords = document.createElement('meta');
metaKeywords.name = "keywords";
metaKeywords.content = "кастинги СПб, кастинги Санкт-Петербург, актерские кастинги, кастинги для моделей, массовка СПб, съемки в рекламе, съемки в кино, кастинг-агентства";
document.head.appendChild(metaKeywords);

export default Index;
