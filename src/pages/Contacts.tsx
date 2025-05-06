
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/Icon';

const Contacts = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="border-b-2 border-black pb-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold">КОНТАКТНАЯ ИНФОРМАЦИЯ</h1>
        <p className="text-lg mt-2 font-serif italic">
          Связь с порталом "КАСТИНГИ СПб"
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-serif font-bold mb-6">НАШИ КОНТАКТЫ</h2>
          
          <Card className="border border-gray-800 mb-6">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4 mb-4">
                <Icon name="Send" className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Telegram (основной способ связи)</h3>
                  <p className="text-lg">
                    <a href="https://t.me/vocoders" className="hover:underline" target="_blank" rel="noopener noreferrer">
                      t.me/vocoders
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 mb-4">
                <Icon name="Map" className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Город</h3>
                  <p className="text-lg">Санкт-Петербург</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Icon name="Clock" className="w-6 h-6 mt-1" />
                <div>
                  <h3 className="text-lg font-bold mb-1">Время работы</h3>
                  <p className="text-lg">Пн-Пт: 10:00 - 19:00</p>
                  <p className="text-lg">Сб-Вс: По договоренности</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-serif font-bold mb-4">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h2>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium mb-2">Как быстро вы отвечаете на сообщения?</h3>
              <p>
                В рабочее время мы стараемся отвечать на все сообщения в течение 1-2 часов. 
                В выходные дни и вечернее время ответ может занять больше времени.
              </p>
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium mb-2">Можно ли разместить информацию о своем кастинге на вашем сайте?</h3>
              <p>
                Да, мы размещаем проверенную информацию о кастингах. Напишите нам в Телеграм с подробным 
                описанием проекта, требованиями к участникам и условиями. После проверки мы разместим ваше объявление.
              </p>
            </div>
            
            <div className="mb-4">
              <h3 className="text-xl font-medium mb-2">Оказываете ли вы услуги по подготовке к кастингам?</h3>
              <p>
                Мы можем предоставить консультации по подготовке к кастингам и созданию портфолио. 
                Для получения подробной информации свяжитесь с нами через Телеграм.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-serif font-bold mb-6">НАПИШИТЕ НАМ</h2>
          
          <div className="prose prose-lg max-w-none mb-6">
            <p>
              Мы всегда рады помочь вам с любыми вопросами, связанными с кастингами и съемками в Санкт-Петербурге. 
              Напишите нам в Телеграм, и мы ответим вам в ближайшее время.
            </p>
          </div>
          
          <Card className="border border-gray-800 mb-8">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center p-4">
                <Icon name="Send" className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-bold mb-2">Наш Telegram</h3>
                <p className="text-xl mb-4">
                  <a href="https://t.me/vocoders" className="hover:underline" target="_blank" rel="noopener noreferrer">
                    t.me/vocoders
                  </a>
                </p>
                <p className="text-gray-600">
                  Это наш основной канал связи. Здесь вы можете задать любые вопросы 
                  и получить оперативный ответ от нашей команды.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-gray-100 p-6 border border-gray-800">
            <h3 className="text-xl font-serif font-bold mb-4">ДЛЯ ОРГАНИЗАТОРОВ КАСТИНГОВ</h3>
            <p className="mb-4">
              Если вы проводите кастинги и хотите разместить информацию на нашем сайте, свяжитесь с нами. 
              Мы поможем вам найти подходящих кандидатов для вашего проекта.
            </p>
            <p className="mb-4">
              При обращении, пожалуйста, предоставьте следующую информацию:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Название проекта</li>
              <li>Тип проекта (кино, реклама, фотосессия и т.д.)</li>
              <li>Требования к участникам</li>
              <li>Даты проведения кастинга</li>
              <li>Условия работы и оплаты</li>
              <li>Контактная информация для связи</li>
            </ul>
            <p>
              Контакт для организаторов: <a href="https://t.me/vocoders" className="font-medium hover:underline">t.me/vocoders</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Добавляем метатеги для SEO
document.title = "Контакты | КАСТИНГИ СПб";
const metaDescription = document.createElement('meta');
metaDescription.name = "description";
metaDescription.content = "Контактная информация портала КАСТИНГИ СПб. Свяжитесь с нами через Telegram t.me/vocoders для вопросов о кастингах в Санкт-Петербурге или размещения информации.";
document.head.appendChild(metaDescription);

const metaKeywords = document.createElement('meta');
metaKeywords.name = "keywords";
metaKeywords.content = "контакты кастинги СПб, связь с кастинг-порталом, разместить кастинг, вопросы о кастингах, телеграм кастинги";
document.head.appendChild(metaKeywords);

export default Contacts;
