import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-800 py-4 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Icon name="Camera" className="w-8 h-8" />
            <h1 className="text-2xl font-serif font-bold tracking-tight">КАСТИНГИ СПб</h1>
          </div>
          
          <nav className="text-sm font-medium">
            <ul className="flex flex-wrap gap-6 justify-center">
              <li><Link to="/" className="hover:underline">ГЛАВНАЯ</Link></li>
              <li><Link to="/castings" className="hover:underline">АКТУАЛЬНЫЕ КАСТИНГИ</Link></li>
              <li><Link to="/info" className="hover:underline">ИНФОРМАЦИЯ</Link></li>
              <li><Link to="/contacts" className="hover:underline">КОНТАКТЫ</Link></li>
            </ul>
          </nav>

          <div className="text-sm font-medium flex items-center gap-2">
            <Icon name="Send" className="w-4 h-4" />
            <a href="https://t.me/vocoders" className="hover:underline" target="_blank" rel="noopener noreferrer">
              t.me/vocoders
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;