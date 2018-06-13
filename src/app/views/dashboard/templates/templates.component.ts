import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Template} from "../../../dtos/templateDTOs";
import {Http} from "@angular/http";
import {TemplateService} from "../../../services/template.service";

@Component({
  templateUrl: 'templates.component.html'
})
export class TemplatesComponent {
  templates: Template[];
  selectedTemplate: Template;
  templateContent: string = '';

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private templateService: TemplateService) {
    this.templates = this.activatedRouter.snapshot.data['resolverGetTemplateList'];
  }

  selectTemplate(template: Template) {
    this.selectedTemplate = template;
    this.templateService.getTemplateHtml(template.type.id).subscribe((data: any) => {
      this.templateContent = data;
    });
  }
}
