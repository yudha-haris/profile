import IconMapper from "../Icons/mapper";

const ServiceItem = ({logo, title, description, tags}) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 mb-12">
      <div className="flex justify-center mb-4 hover:scale-110 hover:cursor-pointer text-sky-600 dark:text-white dark:hover:text-sky-600">
        {logo}
      </div>
      <h1 className="text-2xl font-bold text-sky-800 dark:text-white pb-4 pt-4">
        {title}
      </h1>
      <p className="dark:text-cyan-100">{description}</p>
      <div className="flex justify-center mt-6">
        {tags.map((item) => {
          return <div key={item}>{IconMapper(item)}</div>;
        })}
      </div>
    </div>
  );
};

export default ServiceItem;
