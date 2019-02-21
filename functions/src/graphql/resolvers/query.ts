import * as faker from "faker";
import { GalleryItem, QueryResolvers } from "../schema";

export const queryResolver: QueryResolvers.Resolvers = {
  gallery: (parent: any, args: any, context: any) => {
    const items: GalleryItem[] = [];
    for (let i = 0; i < 20; i++) {
      items.push({
        description: faker.hacker.phrase(),
        heading: faker.commerce.productName(),
        id: i,
        imageUrl: `${faker.image.image()}?${i}`
      });
    }
    return items;
  },
  me: (parent: any, args: any, context: any) => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName()
  })
};
