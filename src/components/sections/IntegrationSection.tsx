interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative">
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 mt-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export function IntegrationSection() {
  const steps = [
    {
      number: 1,
      title: 'Create Merchant Account',
      description: 'Quick signup process for accepting USDC payments'
    },
    {
      number: 2,
      title: 'Setup Coinbase Pay',
      description: 'Simple integration with your existing payment flow'
    },
    {
      number: 3,
      title: 'Start Accepting USDC',
      description: 'Begin receiving stable, fast-settling payments'
    }
  ];

  return (
    <section id="integration" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Easy Integration</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <StepCard key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
