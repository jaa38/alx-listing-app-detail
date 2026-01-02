import { PropertyProps } from '@/interfaces/index';

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  return (
    <div className='container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8'>
      {/* LEFT CONTENT */}
      <div className='lg:col-span-2'>
        <h1 className='text-4xl font-bold'>{property.name}</h1>

        <div className='flex items-center space-x-2 mt-2'>
          <span className='text-yellow-500'>{property.rating} stars</span>
          <span>
            {property.address.city}, {property.address.country}
          </span>
        </div>

        {/* Image Grid */}
        <div className='grid grid-cols-2 gap-4 mt-6'>
          <img
            src={property.image}
            alt={property.name}
            className='col-span-2 w-full h-96 object-cover rounded-lg'
          />
        </div>

        {/* Description Tabs (simple version) */}
        <div className='mt-6'>
          <h2 className='text-2xl font-semibold'>Description</h2>
          <p className='mt-2 text-gray-600'>
            This is a beautiful property located in {property.address.city}.
            Enjoy comfort, luxury, and a memorable stay.
          </p>
        </div>

        {/* Amenities */}
        <div className='mt-6'>
          <h2 className='text-2xl font-semibold'>What this place offers</h2>
          <ul className='flex flex-wrap gap-3 mt-2'>
            {property.category.map((amenity, index) => (
              <li
                key={index}
                className='bg-gray-200 px-3 py-2 rounded-md text-sm'
              >
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT SIDE (Booking will go here later) */}
      <div>{/* BookingSection will be added */}</div>
    </div>
  );
};

export default PropertyDetail;
