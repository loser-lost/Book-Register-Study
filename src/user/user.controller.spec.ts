import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller.js';

import { CreateUserUseCase } from './use-case/create-user.use-case.js';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [CreateUserUseCase],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
