import { AiOutlineSend } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact" className="my-10 text-background">
      <div className="container max-w-6xl mx-auto bg-textColor p-20 rounded-md shadow-2xl">
        <h2 className="text-4xl  uppercase font-semibold text-center">
          Contact us
        </h2>
        <p className="text-center text-base lg:text-lg mt-2 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          illum.
        </p>

        <form className="mt-5 flex flex-col lg:grid lg:grid-cols-3  lg:justify-center lg:items-end gap-5">
          <div className="flex flex-col">
            <label
              className="font-bold tracking-wider text-lg lg:text-2xl"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="border-2 px-4 py-2 rounded-md outline-none placeholder:text-textColor text-textColor font-semibold"
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              className="font-bold tracking-wider text-lg lg:text-2xl"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="border-2 px-4 py-2 rounded-md outline-none placeholder:text-textColor text-textColor font-semibold"
              type="email"
              name="email"
              id="email"
              placeholder="someone@gmail.com"
              required
            />
          </div>
          <button
            className="bg-accent text-background font-semibold tracking-wider p-3 rounded-md  w-full  uppercase text-center  hover:opacity-90"
            type="submit"
          >
            <span className="flex text-center justify-center items-center gap-4">
              Send <AiOutlineSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
