import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationModule } from './modules/organization/organization.module';
import { UsersModule } from './modules/users/users.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { SitesModule } from './modules/sites/sites.module';
import { SamplesModule } from './modules/samples/samples.module';
import { SampleResultsModule } from './modules/sample-results/sample-results.module';
import { DiseaseModule } from './modules/disease/disease.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_URI'),
      }),
    }),
    OrganizationModule, UsersModule, ProjectsModule, SitesModule, SamplesModule, SampleResultsModule, DiseaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
