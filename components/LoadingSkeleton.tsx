import React from 'react';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="animate-pulse space-y-12">
          {/* Header Skeleton */}
          <div className="h-16 bg-slate-100 rounded-2xl w-64"></div>

          {/* Hero Skeleton */}
          <div className="space-y-6">
            <div className="h-16 bg-slate-100 rounded-2xl w-3/4"></div>
            <div className="h-16 bg-slate-100 rounded-2xl w-1/2"></div>
            <div className="h-12 bg-slate-100 rounded-2xl w-1/3"></div>
          </div>

          {/* Features Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-64 bg-slate-100 rounded-3xl"></div>
            ))}
          </div>

          {/* Solutions Skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-48 bg-slate-100 rounded-3xl"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
