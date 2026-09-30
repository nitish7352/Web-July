export default function SearchFilters({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  categories,
}) {
  return (
    <div className="filters">
      <input
        className="input"
        type="search"
        placeholder="Search products by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        className="select"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="all">All categories</option>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        className="select"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="default">Sort: Default</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
    </div>
  );
}