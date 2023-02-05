import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { Saving } from './saving-plan/saving-plan.entity';
import { Invite} from './invite/invite.entity';
import { AuthModule } from './auth/auth.module';
import { SavingPlanModule } from './saving-plan/saving-plan.module';
import { InviteModule } from './invite/invite.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [User , Saving , Invite],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    SavingPlanModule,
    InviteModule,
  ],
})
export class AppModule {}
