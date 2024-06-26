import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module'
import { CategoryModule } from './category/category.module'
import { CourseModule } from './course/course.module'
import { RequestBackCallModule } from './request-back-call/request-back-call.module'
import { LessonModule } from './lesson/lesson.module'
import { ProjectModule } from './project/project.module'
import { DirectionModule } from './direction/direction.module';
import { RequestInternshipModule } from './request-internship/request-internship.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UserModule,
    CategoryModule,
    CourseModule,
    RequestBackCallModule,
    LessonModule,
    ProjectModule,
    DirectionModule,
    RequestInternshipModule,
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
