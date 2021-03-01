import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";


class AnswerController {

  // http://localhost:3333/answers/1?u=24d7226a-eade-4da4-922b-dd8f75e36074

  async execute(request: Request, response: Response) {
    const { value } = request.params
    const { u } = request.query
    
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

    let surveyUser = await surveysUsersRepository.findOne({
      id: String(u)
    })

    if (!surveyUser) {
      return response.status(400).json({
        error: "Survey User does not exists!",
      })
    }

    surveyUser.value = Number(value)

    await surveysUsersRepository.save(surveyUser)

    /*return response.json({
      message: "Agradecemos por responder!"
    })*/
    return response.json(surveyUser)
  }
}

export { AnswerController }