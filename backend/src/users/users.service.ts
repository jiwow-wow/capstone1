// import { Injectable } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// @Injectable()
// export class UsersService {
//   create(createUserDto: CreateUserDto) {
//     return 'This action adds a new user';
//   }

//   findAll() {
//     return `This action returns all users`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} user`;
//   }

//   update(id: number, updateUserDto: UpdateUserDto) {
//     return `This action updates a #${id} user`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} user`;
//   }
// }

// users.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  // 이름으로 유저를 찾고, 없으면 새로 생성하는 메서드
  async findOrCreateByName(name: string): Promise<User> {
    let user = await this.usersRepo.findOne({ where: { name } });

    if (!user) {
      user = this.usersRepo.create({ name });
      await this.usersRepo.save(user); // DB에 저장
    }

    return user;
  }

  // 여기에 다른 서비스 로직도 있을 수 있음
}
