import { Query, Resolver } from '@nestjs/graphql';
import axios from 'axios';
import * as cheerio from 'cheerio';

class Mobile {
  name: string;
  price: string;
}

@Resolver()
export class CrawlerResolver {
  @Query(() => [Mobile])
  async getMobilePrices(): Promise<Mobile[]> {
    const url = 'https://www.telemart.pk/';
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const mobiles: Mobile[] = [];

    $('.product-price').each((_, element) => {
      const name = $(element).find('.product-name').text();
      const price = $(element).find('.price').text();

      mobiles.push({ name, price });
    });

    return mobiles;
  }
}
