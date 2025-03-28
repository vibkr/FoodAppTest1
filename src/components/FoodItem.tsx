import React from 'react';
    import { ChevronRight } from 'lucide-react';

    interface FoodItemProps {
      name: string;
      calories: number;
      imageUrl: string;
      mealType: string;
    }

    const FoodItem: React.FC<FoodItemProps> = ({ name, calories, imageUrl, mealType }) => {
      return (
        <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center space-x-3">
            <img
              src={imageUrl}
              alt={name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div>
              <p className="font-semibold text-gray-800">{name}</p>
              <p className="text-sm text-gray-500">{mealType} - {calories} kcal</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
      );
    };

    export default FoodItem;
