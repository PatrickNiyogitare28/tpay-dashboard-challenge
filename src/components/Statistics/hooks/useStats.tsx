export default function useStats(){
    
const chartdata = [
    {
      date: 'Jan 21',
      Performance: 4000,
    },
    {
      date: 'Feb 21',
      Performance: 3000,
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
]
    const statistics = [
        {
            title: "Total Income",
            amount: "$59,690",
            rate: "12.4%",
        },
        {
            title: "Total Orders",
            amount: "4,865",
            rate: "9.1%",
        },
        {
            title: "Total Costomers",
            amount: "2,245",
            rate: "21.4%",
        }
    ]
    return {
        statistics,
        chartdata
    }
}