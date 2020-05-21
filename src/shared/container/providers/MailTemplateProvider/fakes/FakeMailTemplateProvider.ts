import IParseMailTemplateProvider from '@shared/container/providers/MailTemplateProvider/dtos/IParseMaiTemplateDTO';
import IMailTemplateProvider from '../models/IMailTemplateProvider';

export default class FakeMailTemplateProvider implements IMailTemplateProvider {
  public async parse({
    template,
  }: IParseMailTemplateProvider): Promise<string> {
    return template;
  }
}
