import type { IProduct } from "./iproduct";
import type { IProductQuickView } from "./product-quickview/iproduct-quickview";

// This is Functional Programming. We can also move this into products.service.ts.
export function getQuickViewsFromProducts(products: IProduct[]): IProductQuickView[] {
    return products.map((product: IProductQuickView) => {
        return {
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
        };
    });
}
