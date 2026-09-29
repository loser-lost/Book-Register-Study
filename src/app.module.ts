import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserModule } from './user/user.module.js';
import { User } from './user/entities/user.entity.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
        useFactory: (): TypeOrmModuleOptions => ({
          type: 'better-sqlite3',
          database: ':memory:',
          entities: [User],
          synchronize: true, // Development only
        }),
      }),
    UserModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
