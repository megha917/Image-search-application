const Jumbotron = ({ children }) => {
  return (
    <div
      className="bg-gray-900 flex items-center py-20"
      style={{ backgroundImage: 'url("cat_bg.jpg")', backgroundSize: "cover", backgroundRepeat:"no-repeat"}}
    >
      <div className="mx-w-md mx-auto w-full">
        <h1 className="text-white text-center text-2xl font-bold mb-5">
          {" "}
          Find Images
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Jumbotron;
