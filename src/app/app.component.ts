import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { SummaryComponent } from './summary/summary.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,  // Add CommonModule here
    SummaryComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string ='myresumeapp';
  currentSection: string = 'summary';

  showSection(section: string) {
    this.currentSection = section;
  }
}
