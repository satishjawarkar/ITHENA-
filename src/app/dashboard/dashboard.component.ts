import { Component } from '@angular/core';
import { Chart } from 'chart.js';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedModule,FormsModule,ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  chart: any;
  // startDate = new Date(1990, 0, 1);
  startDate: string = '';
  endDate: string = '';
  constructor() {
  }
  ngOnInit(): void {
    this.updateChart()
  }
  //Select date function
  updateChart(){
    this.doughnutChart();
    this.stackedbarChart();
    this.bubleChart();
    
  }
  // doughnut
  doughnutChart(){
    this.chart = new Chart('canvasId', {
      type: 'doughnut',
      data: {
        labels: ['#75b265', '#fec846', '#709ad1'],
        datasets: [{
          data: [30, 40, 30],
          backgroundColor: ['#75b265', '#fec846', '#709ad1']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'top'
        }
      }
    });
  }
  // barchart
  stackedbarChart(){
    this.chart = new Chart("canvas", {
      type: 'bar',
   data: {
      labels: ['Standing costs', 'Running costs', 'Parking cost'], 
      datasets: [{
         label: 'Washing and cleaning',
         data: [0, 1, 3],
         backgroundColor: '#75b265'
      },
      {
         label: 'Tolls',
         data: [0, 1, 3],
         backgroundColor: '#fec846'
      }, 
      {
         label: 'Maintenance',
         data: [1, 1 ,3],
         backgroundColor: '#709ad1'
      }, 
    
    ]
   },
   options: {
      responsive: false,
      legend: {
         position: 'right'
      },
      scales: {
         xAxes: [{
            stacked: true
         }],
         yAxes: [{
            stacked: true 
         }]
      }
   }
    });
  }
// bublechart
  bubleChart(){
    this.chart = new Chart("MyChart", {
      type: 'bubble',
      data: {
        datasets: [{
          label: 'Population by Species',
          data: [
            { x: 1976, y: 1, r: 10.6,},    
            { x: 1978, y: 2, r: 14.6 },  
            { x: 1980, y: 3, r: 21.7 }, 
            { x: 1984, y: 1, r: 15.7 },    
            { x: 1986, y: 2, r: 17.5 },  
            { x: 1988, y: 3, r: 29.9 }, 
            { x: 1976, y: 1, r: 20.3 },    
            { x: 1986, y: 2, r: 20.4 },  
            { x: 1978, y: 3, r: 41.2 },  
          ],
          backgroundColor: ['#75b265', '#fec846', '#709ad1'],
          // borderColor: 'rgba(54, 162, 235, 1)', 
          // borderWidth: 2, 
        }]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: {
            display: true,
            text: 'Population by Species Over Time',
            font: { size: 6, weight: 'bold' },
          },
        },
        scales: {
          // xAxes: {
          //   type: 'linear',
          //   position: 'bottom',
          //   title: {
          //     display: false,
          //     text: 'Year',
          //     font: { size: 14, weight: 'bold' },
          //   },
          // },
          // yAxes: {
          //   type: 'linear',
          //   position: 'left',
          //   title: {
          //     display: true,
          //     text: 'Species',
          //     font: { size: 14, weight: 'bold' },
          //   },
          // },
        },
      }
    });
  }
}
