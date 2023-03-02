
import { Container } from "@azure/cosmos";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ResetPasswordUserUsecase } from "./resetPasswordUseCase";

class ResetPasswordUserController {
  async handle(request: Request, response: Response):Promise<Response> {
    const { token } = request.body;
    const { password } = request.body;

    const resetPasswordUserUsecase = container.resolve(ResetPasswordUserUsecase);
    await resetPasswordUserUsecase.execute({token: String(token), password: password});
    return response.send();

  }

}

export { ResetPasswordUserController };