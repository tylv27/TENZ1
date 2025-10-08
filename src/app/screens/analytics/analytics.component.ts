import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-analytics',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, MatIconModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {
  selectedPeriod = 'Last 7 days';
  timePeriods = ['Last 7 days', 'Last 30 days', 'Last 3 months', 'Last year'];

  metrics = [
    {
      title: 'Page Views',
      value: '24,567',
      change: 12.5,
      icon: 'visibility',
      color: '#3b82f6'
    },
    {
      title: 'Unique Visitors',
      value: '8,945',
      change: 8.2,
      icon: 'person_outline',
      color: '#10b981'
    },
    {
      title: 'Bounce Rate',
      value: '32.4%',
      change: -5.3,
      icon: 'exit_to_app',
      color: '#f59e0b'
    },
    {
      title: 'Avg. Session',
      value: '4m 32s',
      change: 15.7,
      icon: 'schedule',
      color: '#8b5cf6'
    }
  ];
}
