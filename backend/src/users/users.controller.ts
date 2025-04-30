  // import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
  // import { UsersService } from './users.service';
  // import { CreateUserDto } from './dto/create-user.dto';
  // import { UpdateUserDto } from './dto/update-user.dto';

  // @Controller('users')
  // export class UsersController {
  //   constructor(private readonly usersService: UsersService) {}

  //   @Post('login')
  //   create(@Body() createUserDto: {name: string}){
  //     return this.usersService.create(createUserDto)
  //   }
  //   // login(@Body('name') name: string) {
  //   //   console.log('Received login name:', name);
  //   //   return { message: `Welcome, ${name}!` };
  //   // }


  //   // @Post()
  //   // create(@Body() createUserDto: CreateUserDto) {
  //   //   return this.usersService.create(createUserDto);
  //   // }

  //   @Get()
  //   findAll() {
  //     return this.usersService.findAll();
  //   }

  //   @Get(':id')
  //   findOne(@Param('id') id: string) {
  //     return this.usersService.findOne(+id);
  //   }

  //   @Patch(':id')
  //   update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //     return this.usersService.update(+id, updateUserDto);
  //   }

  //   @Delete(':id')
  //   remove(@Param('id') id: string) {
  //     return this.usersService.remove(+id);
  //   }
  // }

  import { Controller, Post, Body } from '@nestjs/common';
  import { UsersService } from './users.service';
  import { CreateUserDto } from './dto/create-user.dto'; // DTO import
  import { User } from './entities/user.entity'; // User 엔티티 import
  
  @Controller('users')
  export class UsersController {
    constructor(private readonly usersService: UsersService) {}
  
    @Post('login')
    async login(@Body('name') name: string) {
      const user: User = await this.usersService.findOrCreateByName(name);
  
      // 유저 정보를 JSON 형식으로 변환하여 반환
      const userDto: CreateUserDto = {
        name: user.name,
        createdAt: user.createdAt,
      };
  
      return {
        message: `Welcome, ${user.name}!`,
        user: userDto,  // DTO 형식으로 반환
      };
    }
  }
  