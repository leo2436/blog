import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UsersService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getAllUser();
  }

  @Get('/:userId')
  getUserById(@Param('userId') userId: string) {
    return this.usersService.getOneUser(userId);
  }

  @Delete('/:userId')
  async deleteUser(@Param('userId') userId: string) {
    await this.usersService.deleteUser(userId);
  }

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    return this.usersService.createUser(body);
  }
}
