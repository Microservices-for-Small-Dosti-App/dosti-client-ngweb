import { IProduct } from "../iproduct";

export interface IProductQuickView {
    title: string;

    price: number;

    thumbnail: string;
}

export function getQuickViewsFromProducts(products: IProduct[]): IProductQuickView[] {
    return products.map((product: any) => {
        return {
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
        };
    });
}

// type IProductQuickView = Omit<IProduct, "name" | "age">;
// export type IProductQuickView = Omit<IProduct, "dummyData">;