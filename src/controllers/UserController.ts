import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { UserRepository } from '../repositories/UsersRepository'

class UserController {

  async create(request: Request, response: Response) {
    const { name, email} = request.body

    //console.log(body)

    const userRepository = getCustomRepository(UserRepository)

    const userAlreadyexists = await userRepository.findOne({
      email
    })

    if (userAlreadyexists) {
      return response.status(400).json({
        error: "User already exists!",
      })
    }

    const user = userRepository.create({
      name,
      email,
    })

    await userRepository.save(user)

    return response.json(user)
  }
}

export { UserController }
