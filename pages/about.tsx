const About = () => {
  const symbas = ['%', '*', '$', '^', '@'];
  return (
    <div className="max-w-screen-xl mx-auto pt-10">
      <div className="flex flex-col justify-center items-center pt-14">
        <div className="p-5 w-full border border-white rounded-md text-center">
          <h1 className="select-none cursor-default text-4xl">📝</h1>
          <h1 className="relative font-[Segoe UI] text-2xl font-bold flex flex-col">
            This is the about page
          </h1>
          <div className="font-[Roboto]">
            <p>This is where all the about stuff are placed in</p>
          </div>
        </div>
        <div className="grid grid-flow-col grid-rows-5 grid-cols-3 gap-10 items-center mt-10 justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );

  function Card() {
    return (
      <div className="border border-white rounded-md p-5">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nam
          corporis, repellendus cumque sint nostrum dolorem quidem, esse
          similique aut hic explicabo magnam fugit fuga eaque natus laboriosam
          et ducimus.
        </p>
        <span>
          <div className="float-right bg-white w-8 h-1"></div>
        </span>
      </div>
    );
  }
};

export default About;
