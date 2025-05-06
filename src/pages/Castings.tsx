
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Castings = () => {
  const castings = [
    {
      id: 1,
      title: "ГЛАВНЫЕ РОЛИ В ДРАМАТИЧЕСКОМ СЕРИАЛЕ",
      date: "06.05.2025",
      type: "Кино/ТВ",
      description: "Телеканал 'Культура СПб' ищет актеров для съемок в новом драматическом сериале. Требуются мужчины и женщины 25-45 лет на главные и второстепенные роли. Опыт работы в кино обязателен. Проект престижный, оплата достойная. Съемки с июня по октябрь 2025 года.",
      requirements: "Профессиональные актеры, опыт в кино/сериалах, готовность к плотному графику съемок.",
      contact: "t.me/vocoders"
    },
    {
      id: 2,
      title: "СЕМЕЙНАЯ ПАРА ДЛЯ РЕКЛАМЫ МЕБЕЛИ",
      date: "05.05.2025",
      type: "Реклама",
      description: "Рекламное агентство 'Невский кадр' приглашает на съемки рекламного ролика мебельного бренда. Нужна семейная пара (мужчина и женщина 30-40 лет). Съемки 1 день в студии. Оплата 15000 рублей каждому.",
      requirements: "Приятная внешность, опыт съемок в рекламе приветствуется, но не обязателен.",
      contact: "t.me/vocoders"
    },
    {
      id: 3,
      title: "МАССОВКА ДЛЯ ИСТОРИЧЕСКОГО ФИЛЬМА",
      date: "04.05.2025",
      type: "Массовка",
      description: "Для съемок исторического фильма о блокаде Ленинграда требуется массовка. Мужчины и женщины всех возрастов. Съемки в течение мая-июня в разных локациях Санкт-Петербурга. Оплата 2500 рублей за смену.",
      requirements: "Никаких особых требований, готовность к длительным съемкам.",
      contact: "t.me/vocoders"
    },
    {
      id: 4,
      title: "ДЕТИ 7-10 ЛЕТ ДЛЯ РЕКЛАМЫ ШКОЛЬНОЙ ФОРМЫ",
      date: "03.05.2025",
      type: "Детский кастинг",
      description: "Рекламное агентство ищет детей 7-10 лет для съемок в рекламе школьной формы. Съемки пройдут в одной из школ Санкт-Петербурга. Продолжительность - 1 день. Оплата 10000 рублей.",
      requirements: "Фотогеничные, общительные дети без страха перед камерой. Рост и внешность стандартные.",
      contact: "t.me/vocoders"
    },
    {
      id: 5,
      title: "МОДЕЛИ ДЛЯ ПОКАЗА ОДЕЖДЫ",
      date: "02.05.2025",
      type: "Модельный",
      description: "Модный дом 'Петербургский стиль' приглашает моделей для участия в показе новой коллекции. Девушки ростом от 175 см, размер 42-44. Показ состоится 15 мая в галерее современного искусства.",
      requirements: "Опыт работы на подиуме, портфолио, параметры, близкие к стандартным модельным.",
      contact: "t.me/vocoders"
    },
    {
      id: 6,
      title: "АКТЕРЫ НА РОЛИ ЗЛОДЕЕВ В ДЕТСКОМ ФИЛЬМЕ",
      date: "01.05.2025",
      type: "Кино/ТВ",
      description: "Студия 'Невафильм' ищет актеров для съемок в детском приключенческом фильме. Нужны харизматичные мужчины 30-50 лет на роли антагонистов. Съемки с июня по август, в основном в пригородах Санкт-Петербурга.",
      requirements: "Профессиональные актеры с опытом, яркая внешность, умение работать с юными актерами.",
      contact: "t.me/vocoders"
    },
    {
      id: 7,
      title: "ФОТОМОДЕЛИ ДЛЯ КАТАЛОГА ОДЕЖДЫ",
      date: "30.04.2025",
      type: "Фотосессия",
      description: "Интернет-магазин одежды ищет моделей для съемок нового каталога. Девушки 18-25 лет, размер 42-46. Съемка 1 день, 10 часов. Оплата 12000 рублей + фото для портфолио.",
      requirements: "Опыт участия в фотосессиях, ухоженная внешность, умение позировать.",
      contact: "t.me/vocoders"
    },
    {
      id: 8,
      title: "МУЗЫКАНТЫ ДЛЯ МУЗЫКАЛЬНОГО КЛИПА",
      date: "29.04.2025",
      type: "Музыкальный клип",
      description: "Для съемок музыкального клипа популярной группы требуются люди, умеющие играть на музыкальных инструментах (или имитировать игру). Возраст 20-35 лет. Играть не нужно, только изображать. Оплата 8000 рублей за день съемок.",
      requirements: "Творческие люди с хорошей внешностью, желательно с опытом игры на инструментах.",
      contact: "t.me/vocoders"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="border-b-2 border-black pb-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold">АКТУАЛЬНЫЕ КАСТИНГИ В САНКТ-ПЕТЕРБУРГЕ</h1>
        <p className="text-lg mt-2 font-serif italic">
          Обновлено: 06.05.2025
        </p>
      </div>

      <div className="mb-8">
        <p className="text-lg mb-4">
          На этой странице собраны актуальные предложения о кастингах в Санкт-Петербурге. 
          Мы тщательно проверяем все объявления перед публикацией, 
          чтобы вы могли быть уверены в их надежности.
        </p>
        <p className="text-lg mb-4">
          Если вы хотите разместить информацию о своем кастинге или у вас возникли вопросы, 
          свяжитесь с нами через Телеграм: <a href="https://t.me/vocoders" className="font-medium hover:underline">t.me/vocoders</a>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {castings.map((casting) => (
          <Card key={casting.id} className="border border-gray-800">
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <CardTitle className="font-serif">{casting.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm">
                  <span><strong>Дата:</strong> {casting.date}</span>
                  <span><strong>Тип:</strong> {casting.type}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{casting.description}</p>
              <p className="mb-4"><strong>Требования:</strong> {casting.requirements}</p>
              <Separator className="my-4" />
              <div className="text-sm">
                <p><strong>Контакт для связи:</strong> <a href={`https://${casting.contact}`} className="hover:underline" target="_blank" rel="noopener noreferrer">{casting.contact}</a></p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Добавляем метатеги для SEO
document.title = "Актуальные кастинги в Санкт-Петербурге | КАСТИНГИ СПб";
const metaDescription = document.createElement('meta');
metaDescription.name = "description";
metaDescription.content = "Полный список актуальных кастингов в Санкт-Петербурге: кино, реклама, ТВ-шоу, фотосессии. Проверенные предложения для актеров, моделей и статистов.";
document.head.appendChild(metaDescription);

const metaKeywords = document.createElement('meta');
metaKeywords.name = "keywords";
metaKeywords.content = "актуальные кастинги СПб, кино кастинги, реклама кастинги, массовка Санкт-Петербург, детские кастинги, модельные кастинги, работа для актеров";
document.head.appendChild(metaKeywords);

export default Castings;
