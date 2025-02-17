import { Conversation } from '../Conversation';

export function DemoSection() {
  return (
    <section id="demo" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Interactive Demo</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="min-h-[400px] bg-gray-50 rounded-lg p-4 mb-4">
            <div className="h-full flex flex-col items-center justify-center">
              <p className="text-gray-600 text-lg text-center mb-8">
                Experience how our AI agent helps merchants understand and adopt USDC payments
              </p>
              <Conversation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
