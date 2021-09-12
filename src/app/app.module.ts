import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/user/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule],
})
export class AppModule {}
