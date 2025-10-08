import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  cards = [
    {
      title: 'Total Users',
      value: '1,234',
      subtitle: '+12% from last month',
      icon: 'people',
      color: '#3b82f6'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      subtitle: '+8% from last month',
      icon: 'attach_money',
      color: '#10b981'
    },
    {
      title: 'Active Projects',
      value: '42',
      subtitle: '5 completed this week',
      icon: 'work',
      color: '#f59e0b'
    },
    {
      title: 'Tasks',
      value: '89',
      subtitle: '23 pending',
      icon: 'assignment',
      color: '#8b5cf6'
    }
  ];
}
