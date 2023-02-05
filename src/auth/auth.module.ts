import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import {JwtModule} from '@nestjs/jwt';
import { JwtGuard } from 'src/auth/jwt/jwt.guard';
import { JwtStrategy } from 'src/auth/jwt/jwt.strategy';
import {PassportModule} from '@nestjs/passport'



@Module({
  imports:[
    UsersModule,
    PassportModule,
    JwtModule.register({
    
        secret: 'secret',
        signOptions: { expiresIn: '3600s' },
      
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService , JwtGuard , JwtStrategy]
})
export class AuthModule {}
