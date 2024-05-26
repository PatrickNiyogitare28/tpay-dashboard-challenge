import useStats from "./hooks/useStats";
import { SparkAreaChart, SparkLineChart, SparkBarChart, AreaChart } from '@tremor/react';

export default function Statistics(){
    const { statistics, chartdata } = useStats(); // Assuming useStats returns both statistics and chartdata
    console.log(chartdata);
    
    return (
        <div className="w-full">
            {statistics.map((stat, index) => (
                <div key={index}>
                    <div>
                        <label>{stat.title}</label>
                        <p>{stat.amount}</p>
                    </div>
                    <div>
                        <SparkLineChart
                            data={chartdata} // Assuming chartdata is correctly formatted
                            index="date"
                            categories={['Performance']}
                            colors={['blue']}
                        /> 
                    </div>
                </div>
            ))}
        </div>
    );
}
