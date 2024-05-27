import { FaStar } from 'react-icons/fa6';

const avatars = [
  'avatar-1.jpg',
  'avatar-3.avif',
  'avatar-4.jpg',
  'avatar-5.jpg',
];

export default function TotalOrders() {
  return (
    <div className="mt-8 shadow-md bg-switch rounded-md p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <div className="p-2 bg-white rounded-md">
          <FaStar size={28} color="#669bbc" />
        </div>
        <div>
          <h1 className="text-sm font-semibold text-primary">Total Orders</h1>
          <p className="text-xs text-gray-500">234 on 25 May, 2024</p>
        </div>
      </div>

      <div className="relative flex">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
            style={{
              position: 'relative',
              zIndex: avatars.length - index,
              marginLeft: index !== 0 ? '-10px' : '0',
            }}
          >
            <img
              src={`/assets/${avatar}`}
              alt={`Avatar ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
