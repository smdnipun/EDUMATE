import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar, Pie } from 'react-chartjs-2'
import AdminNav from '../common/Navigation/AdminNav'

function UserReport() {
  const [userType, setUserType] = useState([])
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  )
  const loadData = () => {
    axios.get('/api/users/get/type').then((res) => {
      setUserType(res.data)
    })
  }
  useEffect(() => {
    loadData()
  }, [])

  const output = Object.entries(
    userType.reduce((prev, { type: type }) => {
      prev[type] = prev[type] ? prev[type] + 1 : 1
      return prev
    }, {})
  )
    .map(([type, count]) => ({ type: type, count }))
    .sort((a, b) => b.count - a.count)

  console.log(output)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Registered User Count',
      },
    },
  }
  const labels = output.map((sub) => sub.type)

  const data = {
    labels,
    datasets: [
      {
        label: output.map((sub) => sub.type),
        data: output.map((sub) => sub.count),
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
        ],
        // output.map((sub) => 'rgba(255, 99, 132, 0.2)'),
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)',
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <div>
      <AdminNav />
      <div className='container'>
        <div className='col-12 d-flex justify-content-center pt-5'>
          <div className='card shadow report-box'>
            <div className='card-header bg-light font-weight-bold text-gray-800 text-center'>
              User Report
            </div>
            <div className='card-body'>
              <Pie options={options} data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserReport
