import { HERO_IMAGE, PROPERTYLISTINGSAMPLE } from '@/constants';
import Pill from '@/components/common/Pill';

const filters = ['Top Villa', 'Self Checkin', 'Free Parking', 'Pet Friendly'];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className='h-[60vh] bg-cover bg-center flex items-center'
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className='max-w-7xl mx-auto px-4 text-white'>
          <h1 className='text-4xl font-bold mb-4'>
            Find your favorite place here!
          </h1>
          <p className='text-lg'>
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </section>

      <section className='max-w-7xl mx-auto px-4 py-6 flex gap-3 flex-wrap'>
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      <section className='max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <div
            key={property.name}
            className='border rounded-lg overflow-hidden'
          >
            <img
              src={property.image}
              alt={property.name}
              className='h-48 w-full object-cover'
            />

            <div className='p-4'>
              <h3 className='font-semibold'>{property.name}</h3>
              <p className='text-sm text-gray-500'>
                {property.address.city}, {property.address.country}
              </p>

              <div className='flex justify-between mt-2 text-sm'>
                <span>${property.price}/night</span>
                <span>⭐ {property.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className='max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <div
            key={property.name}
            className='border rounded-lg overflow-hidden'
          >
            <img
              src={property.image}
              alt={property.name}
              className='h-48 w-full object-cover'
            />

            <div className='p-4'>
              <h3 className='font-semibold'>{property.name}</h3>
              <p className='text-sm text-gray-500'>
                {property.address.city}, {property.address.country}
              </p>

              <div className='flex justify-between mt-2 text-sm'>
                <span>${property.price}/night</span>
                <span>⭐ {property.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
