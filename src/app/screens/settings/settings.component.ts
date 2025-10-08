import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-settings',
  imports: [
    CommonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    FormsModule
  ],
  template: `
    <div class="settings-container">
      <h1>Settings</h1>
      <p class="subtitle">Manage your application preferences</p>

      <mat-card class="settings-card">
        <mat-card-header>
          <mat-icon mat-card-avatar>notifications</mat-icon>
          <mat-card-title>Notifications</mat-card-title>
          <mat-card-subtitle>Configure notification preferences</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Email Notifications</div>
              <div class="setting-description">Receive notifications via email</div>
            </div>
            <mat-slide-toggle [(ngModel)]="settings.emailNotifications"></mat-slide-toggle>
          </div>
          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Push Notifications</div>
              <div class="setting-description">Receive push notifications</div>
            </div>
            <mat-slide-toggle [(ngModel)]="settings.pushNotifications"></mat-slide-toggle>
          </div>
          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Weekly Summary</div>
              <div class="setting-description">Get weekly activity summary</div>
            </div>
            <mat-slide-toggle [(ngModel)]="settings.weeklySummary"></mat-slide-toggle>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="settings-card">
        <mat-card-header>
          <mat-icon mat-card-avatar>palette</mat-icon>
          <mat-card-title>Appearance</mat-card-title>
          <mat-card-subtitle>Customize the look and feel</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Dark Mode</div>
              <div class="setting-description">Enable dark theme</div>
            </div>
            <mat-slide-toggle [(ngModel)]="settings.darkMode"></mat-slide-toggle>
          </div>
          <div class="setting-item">
            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Language</mat-label>
              <mat-select [(ngModel)]="settings.language">
                <mat-option value="en">English</mat-option>
                <mat-option value="es">Spanish</mat-option>
                <mat-option value="fr">French</mat-option>
                <mat-option value="de">German</mat-option>
              </mat-select>
            </mat-form-field>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="settings-card">
        <mat-card-header>
          <mat-icon mat-card-avatar>security</mat-icon>
          <mat-card-title>Privacy & Security</mat-card-title>
          <mat-card-subtitle>Manage your privacy settings</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Profile Visibility</div>
              <div class="setting-description">Make your profile visible to others</div>
            </div>
            <mat-slide-toggle [(ngModel)]="settings.profileVisible"></mat-slide-toggle>
          </div>
          <div class="setting-item">
            <div class="setting-info">
              <div class="setting-label">Activity Status</div>
              <div class="setting-description">Show when you're active</div>
            </div>
            <mat-slide-toggle [(ngModel)]="settings.activityStatus"></mat-slide-toggle>
          </div>
        </mat-card-content>
      </mat-card>

      <div class="action-buttons">
        <button mat-raised-button color="primary" (click)="saveSettings()">Save Changes</button>
        <button mat-button (click)="resetSettings()">Reset to Default</button>
      </div>
    </div>
  `,
  styles: [`
    .settings-container {
      max-width: 800px;
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

    .settings-card {
      margin-bottom: 24px;
    }

    .settings-card mat-card-header {
      margin-bottom: 16px;
    }

    .settings-card mat-icon[mat-card-avatar] {
      background: #3b82f6;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .setting-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 0;
      border-bottom: 1px solid #e2e8f0;
    }

    .setting-item:last-child {
      border-bottom: none;
    }

    .setting-info {
      flex: 1;
    }

    .setting-label {
      font-size: 16px;
      font-weight: 500;
      color: #1e293b;
      margin-bottom: 4px;
    }

    .setting-description {
      font-size: 14px;
      color: #64748b;
    }

    .full-width {
      width: 100%;
    }

    .action-buttons {
      display: flex;
      gap: 12px;
      margin-top: 32px;
    }
  `]
})
export class SettingsComponent {
  settings = {
    emailNotifications: true,
    pushNotifications: false,
    weeklySummary: true,
    darkMode: false,
    language: 'en',
    profileVisible: true,
    activityStatus: true
  };

  saveSettings() {
    console.log('Settings saved:', this.settings);
  }

  resetSettings() {
    this.settings = {
      emailNotifications: true,
      pushNotifications: false,
      weeklySummary: true,
      darkMode: false,
      language: 'en',
      profileVisible: true,
      activityStatus: true
    };
  }
}
