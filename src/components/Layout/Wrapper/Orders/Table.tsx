import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';


interface Order {
  id: number;
  customer: {
    name: string;
    avatar: string;
  };
  order: string;
  cost: string;
  dueDate: string;
  rating: number;
  status: 'DELIVERED' | 'PENDING' | 'CANCELED';
}
const orders: Order[] = [
  {
    id: 1,
    customer: {
      name: 'Eric C',
      avatar: 'avatar-1.jpg',
    },
    order: '483434-CG',
    cost: '$12,000',
    dueDate: '5th July 2024',
    rating: 4,
    status: 'DELIVERED',
  },
  {
    id: 2,
    customer: {
      name: 'Alice B',
      avatar: 'avatar-5.jpg',
    },
    order: '483435-CG',
    cost: '$9,500',
    dueDate: '15th Aug 2024',
    rating: 5,
    status: 'PENDING',
  },
  {
    id: 3,
    customer: {
      name: 'John D',
      avatar: 'avatar-3.avif',
    },
    order: '483436-CG',
    cost: '$8,200',
    dueDate: '22nd June 2024',
    rating: 3,
    status: 'CANCELED',
  },
  {
    id: 4,
    customer: {
      name: 'Sara M',
      avatar: 'avatar-4.jpg',
    },
    order: '483437-CG',
    cost: '$15,300',
    dueDate: '12th Sept 2024',
    rating: 4,
    status: 'DELIVERED',
  },
];

const getStatusColor = (status: string, isText: boolean) => {
  switch (status) {
    case 'DELIVERED':
      return isText ? 'text-success' : 'bg-success';
    case 'PENDING':
      return isText ? 'text-warning' : 'bg-warning';
    case 'CANCELED':
      return isText ? 'text-danger' : 'bg-danger';
    default:
      return '';
  }
};

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <span key={i} className="text-yellow-500">
          ★
        </span>,
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-300">
          ★
        </span>,
      );
    }
  }
  return stars;
};

export function OrdersTable() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-light rounded-md text-xs text-gray-500 font-semibold">
            <TableCell className="text-center">Order ID</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell className="text-center">Order</TableCell>
            <TableCell className="text-center">Due Date</TableCell>
            <TableCell className="text-center">Rating</TableCell>
            <TableCell className="ml-4">Status</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody className="text-xs text-gray-600 font-semibold">
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="text-center">{order.id}</TableCell>
              <TableCell className="flex items-center">
                <img
                  src={`/assets/${order.customer.avatar}`}
                  alt={order.customer.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span>{order.customer.name}</span>
              </TableCell>
              <TableCell className="text-center">{order.order}</TableCell>
              <TableCell className="text-center">
                <label className="bg-gray-200 p-2 rounded-sm">
                  {order.dueDate}
                </label>
              </TableCell>
              <TableCell className="text-center">
                {renderStars(order.rating)}
              </TableCell>
              <TableCell
                className={`${getStatusColor(order.status, true)} flex gap-2 items-center`}
              >
                <div
                  className={`w-2 h-2 rounded-full ${getStatusColor(order.status, false)}`}
                />
                {order.status.charAt(0) + order.status.slice(1).toLowerCase()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
