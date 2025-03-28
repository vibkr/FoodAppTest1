import React from 'react';
    import { Droplet, Zap, Flame } from 'lucide-react';

    interface SummaryCardProps {
      title: string;
      value: string;
      unit: string;
      icon: React.ElementType;
      color: string;
    }

    const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, unit, icon: Icon, color }) => {
      return (
        <div className={`p-4 rounded-lg shadow-md flex items-center space-x-3 bg-gradient-to-br ${color}`}>
          <div className="p-2 bg-white bg-opacity-30 rounded-full">
            <Icon size={20} className="text-white" />
          </div>
          <div>
            <p className="text-sm text-white font-medium">{title}</p>
            <p className="text-lg text-white font-bold">
              {value} <span className="text-xs font-normal">{unit}</span>
            </p>
          </div>
        </div>
      );
    };

    const DailySummary: React.FC = () => {
      return (
        <div className="grid grid-cols-3 gap-4 p-4">
          <SummaryCard
            title="Calories"
            value="1850"
            unit="kcal"
            icon={Flame}
            color="from-red-400 to-red-600"
          />
          <SummaryCard
            title="Protein"
            value="120"
            unit="g"
            icon={Zap}
            color="from-blue-400 to-blue-600"
          />
          <SummaryCard
            title="Water"
            value="1.5"
            unit="L"
            icon={Droplet}
            color="from-cyan-400 to-cyan-600"
          />
        </div>
      );
    };


    export default DailySummary;
