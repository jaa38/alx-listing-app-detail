const Header: React.FC = () => {
  return (
    <header className='border-b bg-white'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center'>
        {/* Logo */}
        <h1 className='text-xl font-bold'>StayFinder</h1>

        {/* Navigation */}
        <nav className='hidden md:flex gap-6 text-sm'>
          <span>Rooms</span>
          <span>Mansion</span>
          <span>Countryside</span>
        </nav>

        {/* Actions */}
        <div className='flex gap-3'>
          <button className='text-sm'>Sign In</button>
          <button className='bg-black text-white px-4 py-2 rounded-md text-sm'>
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
