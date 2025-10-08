import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-analytics',
  imports: [CommonModule, MatCardModule, MatButtonModule, MatChipsModule, MatIconModule],
  template: `
    <div class="analytics-container">
      <h1>Analytics</h1>
      <p class="subtitle">Track your performance metrics</p>

      <div class="filter-section">
        <mat-chip-set aria-label="Time period selection">
          @for (period of timePeriods; track period) {
            <mat-chip [highlighted]="period === selectedPeriod" (click)="selectedPeriod = period">
              {{ period }}
            </mat-chip>
          }
        </mat-chip-set>
      </div>

      <div class="metrics-grid">
        @for (metric of metrics; track metric.title) {
          <mat-card class="metric-card">
            <mat-card-content>
              <div class="metric-header">
                <mat-icon [style.color]="metric.color">{{ metric.icon }}</mat-icon>
                <span class="metric-label">{{ metric.title }}</span>
              </div>
              <div class="metric-value">{{ metric.value }}</div>
              <div class="metric-change" [class.positive]="metric.change > 0" [class.negative]="metric.change < 0">
                <mat-icon>{{ metric.change > 0 ? 'trending_up' : 'trending_down' }}</mat-icon>
                {{ metric.change > 0 ? '+' : '' }}{{ metric.change }}%
              </div>
            </mat-card-content>
          </mat-card>
        }
      </div>

      <mat-card class="chart-card">
        <mat-card-header>
          <mat-card-title>Performance Overview</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="chart-placeholder">
            <mat-icon>show_chart</mat-icon>
            <p>Chart visualization would be displayed here</p>
          </div>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .analytics-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    h1 {
      font-size: 32px;
      font-weight: 600;
      margin: 0 0 8px 0;
      color: #1e293b;
    }

    .subtitle {
      color: #64748b;
      margin: 0 0 24px 0;
    }

    .filter-section {
      margin-bottom: 32px;
    }

    .metrics-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }

    .metric-card {
      padding: 20px;
    }

    .metric-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
    }

    .metric-header mat-icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }

    .metric-label {
      font-size: 14px;
      color: #64748b;
      font-weight: 500;
    }

    .metric-value {
      font-size: 32px;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 8px;
    }

    .metric-change {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
      font-weight: 600;
    }

    .metric-change mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
    }

    .metric-change.positive {
      color: #10b981;
    }

    .metric-change.negative {
      color: #ef4444;
    }

    .chart-card {
      margin-top: 24px;
    }

    .chart-placeholder {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 80px 20px;
      background: #f8fafc;
      border-radius: 8px;
      color: #94a3b8;
    }

    .chart-placeholder mat-icon {
      font-size: 64px;
      width: 64px;
      height: 64px;
      margin-bottom: 16px;
    }
  `]
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
