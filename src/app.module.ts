import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CrawlerModule } from './crawler.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
@Module({
  imports: [
    CrawlerModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver, // Add this line
    }),
  ],
})
export class AppModule {}
