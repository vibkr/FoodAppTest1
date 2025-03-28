import React from 'react';
    import { Settings, Bell } from 'lucide-react';

    const Header: React.FC = () => {
      return (
        <header className="flex justify-between items-center p-4 bg-white shadow-sm">
          <div>
            <h1 className="text-xl font-bold text-gray-800">Hello User</h1>
            <p className="text-sm text-gray-500">Track your meals for today!</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <Bell size={24} />
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <Settings size={24} />
            </button>
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80"
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </header>
      );
    };

    export default Header;
