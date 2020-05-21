import handlebars from 'handlebars';

import IParseMailTemplateProvider from '@shared/container/providers/MailTemplateProvider/dtos/IParseMaiTemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

export default class HandlebarsMailTemplateProvider
  implements IMailTemplateProvider {
  public async parse({
    template,
    variables,
  }: IParseMailTemplateProvider): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}
