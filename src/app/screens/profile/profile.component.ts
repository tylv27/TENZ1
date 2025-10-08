import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatChipsModule,
    FormsModule
  ],
  template: `
    <div class="profile-container">
      <h1>Profile</h1>
      <p class="subtitle">Manage your personal information</p>

      <div class="profile-layout">
        <mat-card class="profile-card">
          <mat-card-content>
            <div class="avatar-section">
              <div class="avatar">
                <mat-icon>person</mat-icon>
              </div>
              <button mat-raised-button color="primary">Change Photo</button>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="info-card">
          <mat-card-header>
            <mat-card-title>Personal Information</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <div class="form-grid">
              <mat-form-field appearance="outline">
                <mat-label>First Name</mat-label>
                <input matInput [(ngModel)]="profile.firstName">
              </mat-form-field>

              <mat-form-field appearance="outline">
                <mat-label>Last Name</mat-label>
                <input matInput [(ngModel)]="profile.lastName">
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Email</mat-label>
                <input matInput type="email" [(ngModel)]="profile.email">
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Phone</mat-label>
                <input matInput [(ngModel)]="profile.phone">
              </mat-form-field>

              <mat-form-field appearance="outline" class="full-width">
                <mat-label>Bio</mat-label>
                <textarea matInput rows="4" [(ngModel)]="profile.bio"></textarea>
              </mat-form-field>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <mat-card class="skills-card">
        <mat-card-header>
          <mat-card-title>Skills</mat-card-title>
          <mat-card-subtitle>Add or remove your skills</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <mat-chip-set aria-label="Skills">
            @for (skill of profile.skills; track skill) {
              <mat-chip (removed)="removeSkill(skill)">
                {{ skill }}
                <button matChipRemove>
                  <mat-icon>cancel</mat-icon>
                </button>
              </mat-chip>
            }
          </mat-chip-set>
          <div class="add-skill-section">
            <mat-form-field appearance="outline">
              <mat-label>Add a skill</mat-label>
              <input matInput [(ngModel)]="newSkill" (keyup.enter)="addSkill()">
            </mat-form-field>
            <button mat-raised-button color="primary" (click)="addSkill()">Add</button>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card class="social-card">
        <mat-card-header>
          <mat-card-title>Social Links</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <div class="social-grid">
            <mat-form-field appearance="outline">
              <mat-label>LinkedIn</mat-label>
              <input matInput [(ngModel)]="profile.social.linkedin">
              <mat-icon matPrefix>link</mat-icon>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Twitter</mat-label>
              <input matInput [(ngModel)]="profile.social.twitter">
              <mat-icon matPrefix>link</mat-icon>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>GitHub</mat-label>
              <input matInput [(ngModel)]="profile.social.github">
              <mat-icon matPrefix>link</mat-icon>
            </mat-form-field>
          </div>
        </mat-card-content>
      </mat-card>

      <div class="action-buttons">
        <button mat-raised-button color="primary" (click)="saveProfile()">Save Changes</button>
        <button mat-button>Cancel</button>
      </div>
    </div>
  `,
  styles: [`
    .profile-container {
      max-width: 1000px;
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

    .profile-layout {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 24px;
      margin-bottom: 24px;
    }

    @media (max-width: 768px) {
      .profile-layout {
        grid-template-columns: 1fr;
      }
    }

    .profile-card {
      height: fit-content;
    }

    .avatar-section {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    .avatar {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
    }

    .avatar mat-icon {
      font-size: 80px;
      width: 80px;
      height: 80px;
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    @media (max-width: 768px) {
      .form-grid {
        grid-template-columns: 1fr;
      }
    }

    .full-width {
      grid-column: 1 / -1;
    }

    .skills-card,
    .social-card {
      margin-bottom: 24px;
    }

    .add-skill-section {
      display: flex;
      gap: 12px;
      align-items: center;
      margin-top: 16px;
    }

    .add-skill-section mat-form-field {
      flex: 1;
    }

    .social-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 16px;
    }

    .action-buttons {
      display: flex;
      gap: 12px;
      margin-top: 32px;
    }
  `]
})
export class ProfileComponent {
  newSkill = '';

  profile = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8900',
    bio: 'Full-stack developer with a passion for creating elegant solutions to complex problems.',
    skills: ['Angular', 'TypeScript', 'Node.js', 'Python', 'SQL'],
    social: {
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
      github: 'https://github.com/johndoe'
    }
  };

  addSkill() {
    if (this.newSkill.trim()) {
      this.profile.skills.push(this.newSkill.trim());
      this.newSkill = '';
    }
  }

  removeSkill(skill: string) {
    const index = this.profile.skills.indexOf(skill);
    if (index >= 0) {
      this.profile.skills.splice(index, 1);
    }
  }

  saveProfile() {
    console.log('Profile saved:', this.profile);
  }
}
