import { specialCategories } from "../Data/MockData";

function SpecialCategories() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-6 text-red-600">
        Special Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8  relative">
        {specialCategories.map((specialCat) => (
          <div
            key={specialCat.id}
            className="bg-white cursor-pointer bg-opacity-90 shadow-md rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-opacity-100"
          >
            <img
              src={specialCat.imageUrl}
              alt={specialCat.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 absolute  top-32 left-12">
              <h3 className="bg-white rounded-full px-5 text-2xl font-bold text-red-600 text-center">
                {specialCat.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpecialCategories;
