import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(userData: CreateUserDto): Promise<User> {
    const newUser = await this.usersRepository.create(userData);
    await this.usersRepository.save(newUser);
    if (newUser) throw new HttpException('User Created', HttpStatus.CREATED);
    return newUser;
  }

  async findByEmail(email: string) {
    const userEmail = await this.usersRepository.findOne({
      where: { email: email },
    });
    if (userEmail) {
      return userEmail;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }

  async delete(id: number) {
    const userId = await this.usersRepository.delete(id);
    if (userId) {
      return userId;
    }
    throw new HttpException(
      'User with this email does not exist',
      HttpStatus.NOT_FOUND,
    );
  }
}
