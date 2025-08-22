import { createRouter, defineEventHandler, useBase } from "h3";
import { Product } from "../models/Product.schema";


const router = createRouter();

router.get(
  "/list",
  defineEventHandler(async () => {
    const products = await Product.find({}).lean();
    return {
      data: products,
    };
  })
);

router.get(
  "/:id",
  defineEventHandler(() => {
    return {
      message: "detail product",
    };
  })
);

router.post(
  "/create",
  defineEventHandler(() => "create product")
);

export default useBase("/api/products", router.handler);
