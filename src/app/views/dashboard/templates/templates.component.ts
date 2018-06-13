import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Template} from "../../../dtos/templateDTOs";
import {Http} from "@angular/http";

@Component({
  templateUrl: 'templates.component.html'
})
export class TemplatesComponent {
  templates: Template[];
  selectedTemplate: Template;
  templateContent: string = '';

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private http: Http) {
    this.templates = this.activatedRouter.snapshot.data['resolverGetTemplateList'];
  }

  selectTemplate(template: Template) {
    this.selectedTemplate = template;
    this.http.get('/assets/templates/template_' + template.type.id + '.html').subscribe((data: any) => {
      this.templateContent = data._body;
    });
  }
}
