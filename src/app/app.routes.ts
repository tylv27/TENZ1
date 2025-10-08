import { Routes } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { AnalyticsComponent } from './screens/analytics/analytics.component';
import { SettingsComponent } from './screens/settings/settings.component';
import { ProfileComponent } from './screens/profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: ProfileComponent }
];
