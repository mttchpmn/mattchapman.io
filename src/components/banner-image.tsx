import Image from "next/image";

const Banner = () => {
  // TODO - host this properly
  const url =
    "https://images.unsplash.com/photo-1556878516-61356c874f03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80";

  return (
    <section>
      <div className="">
        <img
          className="object-cover object-center w-full h-48 md:h-96"
          src={url}
        />
      </div>
    </section>
  );
};

export default Banner;
