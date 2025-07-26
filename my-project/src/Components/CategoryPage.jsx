import { useParams } from 'react-router-dom';
import data from '../data/dummy_data.json'; // import your generated JSON
import React from 'react';
function CategoryPage() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);

  // Find category by name
  const categoryData = data.find(
    (cat) => cat.category.toLowerCase() === decodedName.toLowerCase()
  );

  if (!categoryData) return <p className="p-4">Category not found.</p>;

  return (
    <div className="p-4">
      <h2 className="text-3xl font-semibold mb-4">{categoryData.category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryData.items.map((item, index) => (
          <div key={index} className="border rounded p-4 shadow hover:shadow-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded mb-3"
            />
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{item.description}</p>
            <p className="text-xs text-gray-400">
              By {item.author} on {item.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;