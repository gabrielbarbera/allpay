
import React, { useState, useEffect, useRef } from 'react';
import { ResponsiveContainer, Area, AreaChart } from 'recharts';
import { motion, useScroll, useTransform } from 'framer-motion';

const data = [
  { time: '08:00', value: 400 },
  { time: '09:00', value: 600 },
  { time: '10:00', value: 850 },
  { time: '11:00', value: 1247 },
  { time: '12:00', value: 1100 },
  { time: '13:00', value: 1400 },
  { time: '14:00', value: 1600 },
  { time: '15:00', value: 1550 },
  { time: '16:00', value: 1750 },
  { time: '17:00', value: 1800 },
  ];

const DashboardMock: React.FC = () => {
  const [countedValues, setCountedValues] = useState({ processed: 0, transactions: 0, success: 0, processing: 0 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    const targets = {
      processed: 2.4,
      transactions: 1247,
      success: 98.7,
      processing: 1.2
    };

    Object.entries(targets).forEach(([key, target]) => {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current as keyof typeof countedValues) <= target) {
          setCountedValues(prev => ({ ...prev, [key]: Math.min(current, target) }));
        }
        if (current >= target) {
          clearInterval(timer);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    });

    hasAnimated.current = true;
  }, []);

  const { scrollY } = useScroll();
  const { rotateX, rotateY } = useTransform();
  return (
    <motion.div
      style={{
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: 'preserve-3d'
      }}
      className="relative w-full bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-3xl group"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        </div>
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Payment Analytics</div>
        <div className="w-6" /> {/* Spacer */}
      </div>

      <div className="p-8 relative min-h-[340px]">
        {/* Background Chart Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none">
          <ResponsiveContainer width="100%" height={340}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1570EF" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#1570EF" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#1570EF"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
                animationDuration={3000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 grid grid-cols-2 gap-y-12 gap-x-8">
          {/* Processed Today */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="space-y-1 text-center"
          >
            <p className="text-4xl font-extrabold text-slate-900 tracking-tight">${countedValues.processed.toFixed(1)}M</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">Processed Today</p>
          </motion.div>

          {/* Transactions */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="space-y-1 text-center"
          >
            <p className="text-4xl font-extrabold text-slate-900 tracking-tight">{Math.round(countedValues.transactions).toLocaleString()}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">Transactions</p>
          </motion.div>

          {/* Success Rate */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="space-y-1 text-center"
          >
            <p className="text-4xl font-extrabold text-slate-900 tracking-tight">{countedValues.success.toFixed(1)}%</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">Success Rate</p>
          </motion.div>

          {/* Avg Processing */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="space-y-1 text-center"
          >
            <p className="text-4xl font-extrabold text-slate-900 tracking-tight">{countedValues.processing.toFixed(1)}s</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">Avg Processing</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMock;
