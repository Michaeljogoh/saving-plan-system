import { IsNotEmpty, IsEmail, Length } from '@nestjs/class-validator';
import { Matches } from 'class-validator';
import { MESSAGE, REGEX } from 'src/app.utils';

export class CreateUserDto {
  id: number;
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 10)
  @Matches(REGEX.PASSWORD_RULE, {message: MESSAGE.PASSWORD_MESSAGE})
  password: string;
}
