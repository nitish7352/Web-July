import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/slices/productSlice";
import ProductGrid from "../components/ProductGrid";
import SearchFilters from "../components/SearchFilters";

export default function Products() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    if (status === "idle") dispatch(fetchProducts());
  }, [dispatch, status]);

  const categories = useMemo(
    () => [...new Set(items.map((product) => product.category))].sort(),
    [items]
  );

  const filteredProducts = useMemo(() => {
    const result = items.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "low") result.sort((a, b) => a.price - b.price);
    if (sort === "high") result.sort((a, b) => b.price - a.price);

    return result;
  }, [items, search, category, sort]);

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>All Products</h2>
            <p className="muted">Search, filter and sort products.</p>
          </div>
        </div>

        <SearchFilters
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
          categories={categories}
        />

        {status === "loading" && <div className="loading">Loading products...</div>}
        {status === "failed" && <div className="error">{error}</div>}
        {status === "succeeded" && <ProductGrid products={filteredProducts} />}
      </div>
    </section>
  );
}