export interface TemplateType {
  name: string;
  description: string;
}

export interface Template {
  id: string;
  name: string;
  type: TemplateType;
  status: string;
  content: string;
}
