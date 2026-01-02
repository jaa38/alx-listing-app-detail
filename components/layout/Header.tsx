const Header: React.FC = () => {
  return (
    <header className='w-full border-b bg-white'>
      <div className='max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
        {/* Logo */}
        <div className='text-2xl font-bold'>StayFinder</div>

        {/* Search */}
        <input
          type='text'
          placeholder='Search destinations'
          className='border rounded-md px-4 py-2 w-full md:w-64'
        />

        {/* Navigation */}
        <nav className='flex gap-4 text-sm'>
          <button>Rooms</button>
          <button>Mansion</button>
          <button>Countryside</button>
        </nav>

        {/* Auth */}
        <div className='flex gap-2'>
          <button className='text-sm'>Sign in</button>
          <button className='text-sm font-semibold'>Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
