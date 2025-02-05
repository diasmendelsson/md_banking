"use client"
import{ Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";

ChartJS.register( ArcElement, Tooltip, Legend);

export default function DoughnutChart({ accounts }) {
 
  const data = {
    datasets: [
      {
        label: 'Bancos',
        data: [1250, 2500, 3500],
        backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
      }
    ],
    labels: ['Banco 1', 'Banco 2','Banco 3']
  }
  return <Doughnut
  data={data}
  options={{
    cotout: '60%',
    plugins:{
        legend:{
            display:false
        }
    }
  }}
  />
  
} 
