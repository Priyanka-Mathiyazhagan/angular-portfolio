import { Component } from '@angular/core';
import { PROJECTS } from '../../shared/projects.data';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [RouterLink, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
    projects = PROJECTS;
}
