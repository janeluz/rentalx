import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";
import { SendForgotPasswordMailUseCase } from "./sendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("send Forgot Mail", () => {
  beforeAll(async () => {
   usersRepositoryInMemory = new UsersRepositoryInMemory();
  usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory();
  dateProvider = new DayjsDateProvider();
  mailProvider = new MailProviderInMemory();
  
  sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
    usersRepositoryInMemory,
    usersTokensRepositoryInMemory,
    dateProvider,
    mailProvider
  );
  });

  it("should be able to send a forgot password mail to user", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendMail");

    await usersRepositoryInMemory.create({
      driver_license: "664522",
      email: "agdhadhka@dodod.br",
      name: "Blanche Curry",
      password: "1234",
    });
    await sendForgotPasswordMailUseCase.execute("agdhadhka@dodod.br");
    // eu espero que o sendMail seja chamado
    expect(sendMail).toHaveBeenCalled();
  });

  it("should not be able to send an email if user does not exists", async () => {
    await expect(
      sendForgotPasswordMailUseCase.execute("hag@noom.com")
    ).rejects.toEqual(new AppError("User does not exists!"));
});
it ("should be able to create an users token", async () => {
  const generateTokenMail = jest.spyOn(usersTokensRepositoryInMemory, "create");
  await usersRepositoryInMemory.create({
    driver_license: "787330",
    email: "afsn@rfomom.com",
    name: "Leo Parkins",
    password: "1234",

});
await sendForgotPasswordMailUseCase.execute("afsn@rfomom.com");

expect(generateTokenMail).toBeCalled(); 

});
});

