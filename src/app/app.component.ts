import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  path: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  template: `
    <div class="app-container">
      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav
          #sidenav
          mode="side"
          opened
          class="sidenav"
          [class.sidenav-expanded]="isExpanded"
          (mouseenter)="isExpanded = true"
          (mouseleave)="isExpanded = false">
          <div class="nav-list">
            @for (item of navItems; track item.path) {
              <a
                [routerLink]="item.path"
                routerLinkActive="active"
                class="nav-item"
                [matTooltip]="!isExpanded ? item.label : ''"
                matTooltipPosition="right">
                <mat-icon class="nav-icon">{{ item.icon }}</mat-icon>
                <span class="nav-label" [class.visible]="isExpanded">{{ item.label }}</span>
              </a>
            }
          </div>
        </mat-sidenav>

        <mat-sidenav-content class="main-content">
          <mat-toolbar color="primary" class="toolbar">
            <span>Angular App</span>
          </mat-toolbar>
          <div class="content-area">
            <router-outlet />
          </div>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
  styles: [`
    .app-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .sidenav-container {
      flex: 1;
      display: flex;
    }

    .sidenav {
      width: 60px;
      transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      background: #1e293b;
      border-right: none;
      overflow: hidden;
    }

    .sidenav-expanded {
      width: 240px;
    }

    .nav-list {
      display: flex;
      flex-direction: column;
      padding: 16px 0;
      gap: 4px;
    }

    .nav-item {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      color: #94a3b8;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.2s ease;
      white-space: nowrap;
      position: relative;
    }

    .nav-item:hover {
      background: rgba(255, 255, 255, 0.05);
      color: #fff;
    }

    .nav-item.active {
      background: rgba(59, 130, 246, 0.1);
      color: #3b82f6;
      border-right: 3px solid #3b82f6;
    }

    .nav-icon {
      min-width: 24px;
      width: 24px;
      height: 24px;
      font-size: 24px;
      margin-right: 16px;
    }

    .nav-label {
      opacity: 0;
      transition: opacity 0.2s ease;
      font-size: 14px;
      font-weight: 500;
    }

    .nav-label.visible {
      opacity: 1;
    }

    .main-content {
      display: flex;
      flex-direction: column;
      background: #f8fafc;
    }

    .toolbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .content-area {
      flex: 1;
      padding: 24px;
      overflow-y: auto;
    }
  `]
})
export class AppComponent {
  isExpanded = false;

  navItems: NavItem[] = [
    { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
    { path: '/analytics', icon: 'analytics', label: 'Analytics' },
    { path: '/settings', icon: 'settings', label: 'Settings' },
    { path: '/profile', icon: 'person', label: 'Profile' }
  ];
}
