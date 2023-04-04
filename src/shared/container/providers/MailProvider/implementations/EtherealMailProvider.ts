import { injectable } from "tsyringe";
import { IMailProvider } from "../IMailProvider";
import nodemailer ,{ Transporter } from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";

@injectable()
class EtherealMailProvider implements IMailProvider{
  private client: Transporter;

  constructor() {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass
        }
      });
      this.client = transporter;
    }).catch(err => console.log(err));
  }
   async sendMail(to: string, subject: string, variables:any, path: string): Promise<void> {
    //tranforma o arquivo para toString
    const templateFileContent = fs.readFileSync(path).toString("utf8");
    //ele vai converter todas as variaveis que estiverem dentro do template 
    const templateParse = handlebars.compile(templateFileContent);
    // converte para forma q ele entenda
    const templateHTML = templateParse(variables);

    const message = await this.client.sendMail({
      to,
      from: "Rentalx <noreplay@rentalx.com.br>",
      subject,
      html: templateHTML,
    });
    console.log("Message sent: %s", message.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(message));
  }
      
}

export { EtherealMailProvider };
