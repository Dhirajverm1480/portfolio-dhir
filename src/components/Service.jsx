import Title from "./Title";
import { servicesData } from "../constants/data";

const Service = () => {
  return (
    <section>
      <Title title={"Services"} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-4">
        {servicesData.services.map((item) => (
          <div
            key={item.id}
            className="border py-4 px-2 text-center mb-2 rounded-md backdrop-blur-xl cursor-pointer hover:-rotate-1"
          >
            <p>{item.icon.name}</p>
            <h2>{item.title}</h2>
            <div className="flex gap-1 justify-center items-center">
              {item.technologies?.map((tech) => (
                <div
                  key={tech.id}
                  className="text-xs px-1 my-2 border rounded-full"
                >
                  {tech.name?.slice(0, 1)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;


export const ServiceDetail = () => {
  return (
    <div>Service</div>
  )
}
