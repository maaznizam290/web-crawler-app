import { Module } from '@nestjs/common';
import { CrawlerResolver } from './crawler.resolver';

@Module({
  providers: [CrawlerResolver],
})
export class CrawlerModule {}
