import { createRouter, defineEventHandler, useBase } from "h3";
import { Product } from "../../models/Product.schema";


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
  defineEventHandler(async (event) => {
    const id = getRouterParam(event, "id");

    const product = await Product.findById(id).lean();

    return {
      message: "detail product",
    };
  })
);

router.post(
  "/create",
  defineEventHandler(async (event) => {
    const body = await readBody(event);
    const product = await Product.create(body);
    return {
      message: "create product",
      data: product,
    };
  })
);

export default useBase("/api/products", router.handler);
