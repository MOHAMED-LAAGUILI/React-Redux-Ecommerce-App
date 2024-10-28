import {
  services,
} from "../Data/MockData";

function Services() {
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mb-6 text-red-600">
        Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white shadow-md rounded-lg p-4 flex items-center"
          >
            <span className="text-red-600 text-3xl mr-4">{service.icon}</span>
            <div>
              <h4 className="font-semibold text-lg">{service.title}</h4>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

        </div>
    );
}

export default Services;