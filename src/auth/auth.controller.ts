import {
  Body,
  Controller,
  HttpStatus,
  Post,
  ValidationPipe,
  HttpCode,
  UsePipes,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/users/user.entity';
import { ExistingUserDTO } from 'src/dto/exist-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async userRegisteration(
    @Body(
      new ValidationPipe({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      }),
    )
    userRegister: CreateUserDto,
  ): Promise<User> {
    return await this.authService.userRegistration(userRegister);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)
  login(@Body() existingUser: ExistingUserDTO): Promise<{ token: string }> {
    return this.authService.userLogin(existingUser);
  }
}
