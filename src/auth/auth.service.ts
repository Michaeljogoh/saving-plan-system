import { Injectable , HttpException , HttpStatus } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User } from 'src/users/user.entity';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { ExistingUserDTO } from 'src/dto/exist-user.dto';

@Injectable()
export class AuthService {
  constructor( private userService:UsersService  , private jwtService:JwtService)  {}

  async userRegistration(userRegister: CreateUserDto) : Promise<User> {
    const user = new User();
    user.name = userRegister.name;
    user.email = userRegister.email;
    user.password = userRegister.password;

    return await user.save();
  }
  
  // User does Match
  async doesPasswordMatch(password : string, hashpassword : string) : Promise<Boolean>{
    return await bcrypt.compare(password , hashpassword)

  }


  // Validate User Credentials 
  async validateUser(email: string , password : string) : Promise<User | any>{

    const user = await this.userService.findByEmail(email);
    if (!user)
    throw new HttpException(
      'Email Does not exist',
      HttpStatus.BAD_REQUEST,
    ) 


    const doesPasswordMatch =  await  this.doesPasswordMatch(password , user.password);
    if (!doesPasswordMatch)
    throw new HttpException(
      'Password does not match',
      HttpStatus.BAD_REQUEST,
    );
  }



//  user token
  async userLogin(existingUser : ExistingUserDTO) : Promise<any> {

    const {email , password} = existingUser;

    const user = await this.validateUser(email, password);

    const jwt = await this.jwtService.signAsync({ user });
    return {token: jwt}
  }


}

