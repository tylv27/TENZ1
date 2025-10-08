import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  template: `
    <div class="dashboard-container">
      <h1>Dashboard</h1>
      <p class="subtitle">Welcome to your dashboard</p>

      <div class="card-grid">
        @for (card of cards; track card.title) {
          <mat-card class="stat-card">
            <mat-card-content>
              <div class="card-header">
                <mat-icon class="card-icon" [style.color]="card.color">{{ card.icon }}</mat-icon>
                <span class="card-value">{{ card.value }}</span>
              </div>
              <div class="card-title">{{ card.title }}</div>
              <div class="card-subtitle">{{ card.subtitle }}</div>
            </mat-card-content>
          </mat-card>
        }
      </div>

      <mat-card class="content-card">
        <mat-card-header>
          <mat-card-title>Recent Activity</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p>This section can display recent activities, updates, or any customizable content.</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .dashboard-container {
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
      margin: 0 0 32px 0;
    }

    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }

    .stat-card {
      padding: 20px;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .stat-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }

    .card-icon {
      font-size: 32px;
      width: 32px;
      height: 32px;
    }

    .card-value {
      font-size: 28px;
      font-weight: 700;
      color: #1e293b;
    }

    .card-title {
      font-size: 14px;
      color: #64748b;
      margin-bottom: 4px;
    }

    .card-subtitle {
      font-size: 12px;
      color: #94a3b8;
    }

    .content-card {
      margin-top: 24px;
    }
  `]
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
