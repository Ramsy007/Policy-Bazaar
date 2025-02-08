import "react";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4 px-8 flex justify-between items-center shadow-md relative z-50">
      {/* Logo */}
      <h1 className="text-3xl font-bold">InsuranceWalle</h1>

      {/* Navigation Menu */}
      <nav className="flex-1">
        <ul className="flex justify-center gap-16 relative">
          {/* Insurance Products Dropdown */}
          <li className="relative group">
            <a href="#" className="hover:text-gray-300 transition text-lg font-semibold">Insurance Products</a>
            
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-50 w-[500px] p-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Column 1 */}
                <div>
                  <h3 className="text-blue-900 font-bold text-lg border-b pb-2 mb-2">Term Insurance</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="block px-4 py-2 hover:bg-blue-100 rounded-md">Life Insurance</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-blue-100 rounded-md">Best Term Insurance Plan</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-blue-100 rounded-md">Term Insurance for NRI</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-blue-100 rounded-md">1 Crore Term Insurance</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-blue-100 rounded-md">Term Insurance Calculator</a></li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div>
                  <h3 className="text-blue-900 font-bold text-lg border-b pb-2 mb-2">Other Insurance</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="block px-4 py-2 hover:bg-blue-100 rounded-md">Travel Insurance</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-blue-100 rounded-md">Health Insurance</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-blue-100 rounded-md">Car Insurance</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-blue-100 rounded-md">Fire Insurance</a></li>
                    <li><a href="#" className="block px-4 py-2 hover:bg-blue-100 rounded-md">Office Insurance</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          {/* Renew Policy Dropdown */}
          <li className="relative group">
            <a href="#" className="hover:text-gray-300 transition">Renew Your Policy</a>
            <ul className="absolute top-full left-0 min-w-[180px] bg-white text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-50">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Health Policy</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Car Policy</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Home Policy</a></li>
            </ul>
          </li>

          {/* Claim Dropdown */}
          <li className="relative group">
            <a href="#" className="hover:text-gray-300 transition">Claim</a>
            <ul className="absolute top-full left-0 min-w-[180px] bg-white text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-50">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">File a Claim</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Track Your Claim</a></li>
            </ul>
          </li>

          {/* Support Dropdown */}
          <li className="relative group">
            <a href="#" className="hover:text-gray-300 transition">Support</a>
            <ul className="absolute top-full left-0 min-w-[180px] bg-white text-black shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-50">
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">FAQs</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Customer Care</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Live Chat</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* Right-side Links */}
      <div className="flex gap-6">
        <a href="/" className="hover:text-gray-300 transition">Home</a>
        <a href="/login" className="hover:text-gray-300 transition">Login</a>
        <a href="#" className="hover:text-gray-300 transition">Products</a>
      </div>
    </header>
  );
};

export default Header;