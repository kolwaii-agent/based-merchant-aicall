export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <p className="text-gray-300">
              Helping merchants adopt USDC payments through intelligent AI outreach
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">contact@kolwaii.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
