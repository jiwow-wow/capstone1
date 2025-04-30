// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { BoardModule } from './board/board.module';
// import { UsersModule } from './users/users.module';

// @Module({
//   imports: [BoardModule, UsersModule],
//   controllers: [AppController],
//   providers: [AppService],
// })

// export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { AnalyzeModule } from './analyze/analyze.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // ← 요 부분!
      synchronize: true, // dev 모드에서만 사용! 자동 테이블 생성
      logging: true,  // SQL 로그를 콘솔에 출력해줘
    }),
    UsersModule,
    AnalyzeModule,
  ],
})
export class AppModule {}