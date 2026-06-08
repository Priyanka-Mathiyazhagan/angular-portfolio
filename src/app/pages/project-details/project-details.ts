import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PROJECTS } from '../../shared/projects.data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-details',
  imports: [RouterLink, CommonModule],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails {
    project: any;

  constructor(private route: ActivatedRoute) {

    const id = this.route.snapshot.paramMap.get('id');

    this.project = PROJECTS.find(p => p.id === id);

  }
}
