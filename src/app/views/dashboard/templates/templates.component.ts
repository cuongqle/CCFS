import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Template} from "../../../dtos/templateDTOs";

@Component({
  templateUrl: 'templates.component.html'
})
export class TemplatesComponent {
  templates: Template[];
  selectedTemplate: Template;

  constructor(private router: Router, private activatedRouter: ActivatedRoute) {
    this.templates = this.activatedRouter.snapshot.data['resolverGetTemplateList'];
  }

  selectTemplate(template: Template) {
    this.selectedTemplate = template;
  }
}
