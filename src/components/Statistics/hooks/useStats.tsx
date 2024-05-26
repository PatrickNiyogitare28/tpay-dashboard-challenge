export default function useStats() {
  const incomeChartData = [
    {
      date: 'Jan 21',
      Performance: 4000,
    },
    {
      date: 'Feb 21',
      Performance: 4500,
    },
    {
      date: 'Mar 21',
      Performance: 2000,
    },
    {
      date: 'Apr 21',
      Performance: 2780,
    },
    {
      date: 'May 21',
      Performance: 1890,
    },
    {
      date: 'Jun 21',
      Performance: 2390,
    },
    {
      date: 'Jul 21',
      Performance: 3490,
    },
  ];
  const ordersChartData = [
    {
      date: 'Jan 21',
      Performance: 3200,
    },
    {
      date: 'Feb 21',
      Performance: 2700,
    },
    {
      date: 'Mar 21',
      Performance: 3100,
    },
    {
      date: 'Apr 21',
      Performance: 2200,
    },
    {
      date: 'May 21',
      Performance: 2500,
    },
    {
      date: 'Jun 21',
      Performance: 3000,
    },
    {
      date: 'Jul 21',
      Performance: 2600,
    },
  ];
  const customersChartData = [
    {
      date: 'Jan 21',
      Performance: 5000,
    },
    {
      date: 'Feb 21',
      Performance: 4800,
    },
    {
      date: 'Mar 21',
      Performance: 4500,
    },
    {
      date: 'Apr 21',
      Performance: 4200,
    },
    {
      date: 'May 21',
      Performance: 4700,
    },
    {
      date: 'Jun 21',
      Performance: 5200,
    },
    {
      date: 'Jul 21',
      Performance: 4900,
    },
  ];

  const statistics = [
    {
      title: 'Total Income',
      amount: '$59,690',
      rate: '12.4%',
      chartData: incomeChartData,
      color: 'indigo',
    },
    {
      title: 'Total Orders',
      amount: '4,865',
      rate: '9.1%',
      chartData: ordersChartData,
      color: 'indigo',
    },
    {
      title: 'Total Costomers',
      amount: '2,245',
      rate: '21.4%',
      chartData: customersChartData,
      color: 'indigo',
    },
  ];

  return {
    statistics,
    incomeChartData,
    ordersChartData,
    customersChartData,
  };
}
