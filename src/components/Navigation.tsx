export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-xl font-bold text-blue-600">BASED.ai Call Agent</div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
            <a href="#demo" className="text-gray-700 hover:text-blue-600">Demo</a>
            <a href="#integration" className="text-gray-700 hover:text-blue-600">Integration</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
