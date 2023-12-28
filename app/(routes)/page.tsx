import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/container";
import React from "react";
export const revalidate = 0;
const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboards = await getBillboards(
    "965a64bd-7c0f-40ea-9248-d6e88f5b9314"
  );
  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboards} />
          <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
            <ProductList title="Featured products" items={products} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
