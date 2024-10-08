import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminCred } from './entities/admin.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AdminCred,
    ]),
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule { }
