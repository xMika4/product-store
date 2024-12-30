import { useProductStore } from "@/store/product";
import { useEffect } from "react";
import { Container, VStack, Text, Link, SimpleGrid } from "@chakra-ui/react";
import ProductCard from "@/components/ProductCard";

function Homepage() {
  const { fetchProducts, products } = useProductStore();
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log(products);
  return (
    <Container maxW={"xl"} py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"3xl"}
          fontWeight={"bold"}
          bgGradient={"to-r"}
          gradientFrom={"teal.300"}
          gradientTo={"blue.500"}
          bgClip={"text"}
          textAlign={"center"}
          _light={{ gradientFrom: "teal.500" }}
        >
          Current Products 🚀
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>
        {products.length === 0 && (
          <Text
            fontSize={"xl"}
            textAlign={"center"}
            fontWeight={"bold"}
            color={"gray.500"}
          >
            No products found 😢{" "}
            <Link
              pt={8}
              href="/create"
              color={"blue.500"}
              _hover={{ textDecoration: "underline" }}
            >
              Create a product
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
}

export default Homepage;
