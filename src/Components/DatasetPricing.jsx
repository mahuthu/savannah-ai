import React from 'react';
import { Check, Info } from 'lucide-react';

const DatasetPricing = ({ dataset, onSelectPlan }) => {
  const plans = Object.values(dataset.pricing);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">
          Access {dataset.title}
        </h3>
        <p className="text-neutral-400">
          Choose a plan that best fits your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="bg-neutral-900/50 rounded-xl p-6 flex flex-col border border-neutral-800 hover:border-orange-500 transition-colors"
          >
            {/* Plan Header */}
            <div className="text-center pb-6 border-b border-neutral-800">
              <h4 className="text-xl font-bold text-white mb-2">{plan.name}</h4>
              <div className="mb-4">
                <span className="text-3xl font-bold text-orange-300">
                  ${plan.price}
                </span>
                <span className="text-neutral-400">/month</span>
              </div>
              <p className="text-sm text-neutral-400">
                {plan.apiCalls ? `${plan.apiCalls.toLocaleString()} API calls/month` : 'Unlimited API calls'}
              </p>
            </div>

            {/* Features List */}
            <ul className="space-y-4 my-6 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start text-neutral-300">
                  <Check size={18} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Action Button */}
            <button
              onClick={() => onSelectPlan(plan)}
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-red-500 to-orange-300 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Get Started
            </button>

            {/* Max Users Info */}
            <div className="mt-4 flex items-center justify-center text-sm text-neutral-400">
              <Info size={14} className="mr-1" />
              {plan.maxUsers ? `Up to ${plan.maxUsers} users` : 'Unlimited users'}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="text-center text-sm text-neutral-400 mt-8">
        <p>All plans include access to the full dataset and basic API features.</p>
        <p className="mt-2">
          Need a custom solution?{' '}
          <a href="/contact" className="text-orange-300 hover:underline">
            Contact our sales team
          </a>
        </p>
      </div>
    </div>
  );
};

export default DatasetPricing;