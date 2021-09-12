import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UserResponseDto } from './dto/user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getAllUser(): Promise<User[]> {
    return this.usersRepository.find();
  }

  getOneUser(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async createUser(payload: CreateUserDto): Promise<UserResponseDto> {
    return await this.usersRepository.save({ ...payload });
  }

  async deleteUser(id: string): Promise<void> {
    try {
      await this.usersRepository.delete(id);
    } catch (error) {
      console.log('error: ', error);
    }
  }
}
