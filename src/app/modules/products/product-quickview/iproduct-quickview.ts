export interface IProductQuickView {
    title: string;

    price: number;

    thumbnail: string;
}

// type IProductQuickView = Omit<IProduct, "name" | "age">;
// export type IProductQuickView = Omit<IProduct, "dummyData">;