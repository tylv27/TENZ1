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
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
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
