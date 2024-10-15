import React, { useState } from 'react';

interface PricingPlan {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

const monthlyPlans: PricingPlan[] = [
  {
    name: 'Intro',
    price: 20,
    features: [
      'All limited links',
      'Own analytics platform',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
    ],
  },
  {
    name: 'Base',
    price: 50,
    features: [
      'All limited links',
      'Own analytics platform',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
    ],
  },
  {
    name: 'Pro',
    price: 100,
    features: [
      'All limited links',
      'Own analytics platform',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 200,
    features: [
      'All limited links',
      'Own analytics platform',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
    ],
  },
];

const yearlyPlans: PricingPlan[] = [
  {
    name: 'Intro',
    price: 200,
    features: [
      'All limited links',
      'Own analytics platform',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
    ],
  },
  {
    name: 'Base',
    price: 500,
    features: [
      'All limited links',
      'Own analytics platform',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
    ],
  },
  {
    name: 'Pro',
    price: 800,
    features: [
      'All limited links',
      'Own analytics platform',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 990,
    features: [
      'All limited links',
      'Own analytics platform',
      'Chat support',
      'Optimize hashtags',
      'Unlimited users',
    ],
  },
];

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'Month' | 'Year'>('Month');
  const [plans, setPlans] = useState<PricingPlan[]>(monthlyPlans);

  const handleBillingCycleChange = (cycle: 'Month' | 'Year') => {
    setBillingCycle(cycle);
    if (cycle === 'Month') {
      setPlans(monthlyPlans);
    } else {
      setPlans(yearlyPlans);
    }
  };

  return (
    <div className="py-16 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing</h2>
      <p className="text-lg text-gray-600 mb-8">No contracts. No surprise fees.</p>

      <div className="flex mb-10 gap-4">
        <button
          className={`py-2 px-6 text-xl font-medium rounded-full ${billingCycle === 'Month' ? 'bg-[#004B9C] text-white' : 'bg-gray-100 text-gray-700'
            }`}
          onClick={() => handleBillingCycleChange('Month')}
        >
          Monthly
        </button>
        <button
          className={`py-2 px-6 text-xl font-medium rounded-full ${billingCycle === 'Year' ? 'bg-[#004B9C] text-white' : 'bg-gray-100 text-gray-700'
            }`}
          onClick={() => handleBillingCycleChange('Year')}
        >
          Yearly
        </button>
      </div>

      <div className="grid grid-cols-1 items-end md:grid-cols-4 gap-8 max-w-6xl">
        {plans.map((plan, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`p-6 w-[250px] rounded-3xl ${plan.popular
                ? 'bg-[#004B9C] text-white transform shadow-2xl shadow-[#cecaee]'
                : 'bg-white text-gray-900'
                }`}
            >
              {plan.popular && (
                <p className="text-sm uppercase font-bold">Most Popular</p>
              )}
              <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
              <p className="text-5xl font-bold mb-6">
                ${plan.price}
                <span className="text-lg">{billingCycle}</span>
              </p>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 font-semibold rounded-full ${plan.popular
                  ? 'bg-white text-[#004B9C] hover:bg-blue-200'
                  : 'bg-[#004B9C] text-white hover:bg-[#004B9C]/80'
                  }`}
              >
                Choose plan
              </button>
            </div>
            {plan.popular && (
              <div className="w-[250px] h-10">
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
