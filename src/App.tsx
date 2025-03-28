import React from 'react';
    import Header from './components/Header';
    import DailySummary from './components/SummaryCard';
    import FoodItem from './components/FoodItem';
    import AddButton from './components/AddButton';

    function App() {
      const todayMeals = [
        { id: 1, name: 'Oatmeal with Berries', calories: 350, imageUrl: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', mealType: 'Breakfast' },
        { id: 2, name: 'Grilled Chicken Salad', calories: 450, imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', mealType: 'Lunch' },
        { id: 3, name: 'Apple Slices', calories: 95, imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80', mealType: 'Snack' },
      ];

      return (
        <div className="min-h-screen bg-gray-50 pb-20"> {/* Added padding-bottom */}
          <Header />
          <DailySummary />

          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">Today's Meals</h2>
            <div className="space-y-3">
              {todayMeals.map((meal) => (
                <FoodItem
                  key={meal.id}
                  name={meal.name}
                  calories={meal.calories}
                  imageUrl={meal.imageUrl}
                  mealType={meal.mealType}
                />
              ))}
            </div>
          </div>

          <AddButton />
        </div>
      );
    }

    export default App;
