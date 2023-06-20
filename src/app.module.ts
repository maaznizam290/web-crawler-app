import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CrawlerModule } from './crawler/crawler.module';

@Module({
  imports: [
    CrawlerModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
  ],
})
export class AppModule {}
