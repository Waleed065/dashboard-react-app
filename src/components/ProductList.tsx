import { Grid } from "@material-ui/core";
import ShopProductCard from "./ProductCard";

// ----------------------------------------------------------------------

interface schema {
  products: {
    id: string;
    name: string;
    cover: string;
    price: number;
    colors: string[];
    status: string | undefined
    priceSale: number | null;

  }[];
}
export default function ProductList({ products, ...rest }: schema) {
  return (
    <Grid container spacing={3} {...rest}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
