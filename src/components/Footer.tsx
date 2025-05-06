import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-gray-800 py-6 px-4 md:px-8 mt-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">КАСТИНГИ СПб</h3>
            <p className="text-sm mb-4">
              Актуальная информация о кастингах и съемках в Санкт-Петербурге.
              Кино, реклама, ТВ-шоу, фотосессии и многое другое.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">РАЗДЕЛЫ</h3>
            <ul className="text-sm space-y-2">
              <li><Link to="/" className="hover:underline">Главная</Link></li>
              <li><Link to="/castings" className="hover:underline">Актуальные кастинги</Link></li>
              <li><Link to="/info" className="hover:underline">Информация</Link></li>
              <li><Link to="/contacts" className="hover:underline">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">КОНТАКТЫ</h3>
            <div className="flex items-center gap-2 text-sm mb-2">
              <Icon name="Send" className="w-4 h-4" />
              <a href="https://t.me/vocoders" className="hover:underline" target="_blank" rel="noopener noreferrer">
                t.me/vocoders
              </a>
            </div>
            <p className="text-sm">
              Санкт-Петербург<br />
              Часы работы: 10:00-19:00
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-6 pt-4 text-sm text-center">
          &copy; {currentYear} КАСТИНГИ СПб. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;