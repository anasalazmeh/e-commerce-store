import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/Billboard";
import Container from "@/components/ui/container";
import Filter from "./_component/Filter";
import getProducts from "@/actions/get-products";
import NoResults from "@/components/ui/NoResults";
import ProductCard from "@/components/ui/ProductCard";
import ModalFilter from "./_component/ModalFilter";
interface CategoryPagePrors {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}
const CategoryPage = async ({ params, searchParams }: CategoryPagePrors) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);
  return (
    <div>
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 ms:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* Add mobile filter */}
            <ModalFilter sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Size" data={sizes} />
              <Filter valueKey="colorId" name="Color" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length == 0 && <NoResults />}
              <div className="grid grid-clos-1 sm:grid-cols-2 md:gird-cols-3 gap-4">
                {products.map((data) => (
                  <ProductCard key={data.id} data={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
