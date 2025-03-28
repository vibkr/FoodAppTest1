import React from 'react';
    import { Plus } from 'lucide-react';

    const AddButton: React.FC = () => {
      return (
        <button className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105">
          <Plus size={28} />
        </button>
      );
    };

    export default AddButton;
