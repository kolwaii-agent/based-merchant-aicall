export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AI-Powered Merchant Outreach
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Experience how our AI agent helps merchants adopt USDC payments through Coinbase Pay
        </p>
        <button 
          onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Try Demo
        </button>
      </div>
    </section>
  );
}
