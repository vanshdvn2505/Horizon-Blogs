const Footer = () => {
  return (
    <>
      <div className="mt-8 w-full bg-[#808000] px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start md:justify-between text-lg md:text-md py-8 text-black">
        <div className="flex flex-col ">
          <p className="p-[1px]">Featured Blogs</p>
          <p className="p-[1px]">Most viewed</p>
          <p className="p-[1px]">Readers Choice</p>
        </div>

        <div className="flex flex-col ">
          <p className="p-[1px]">Forum</p>
          <p className="p-[1px]">Support</p>
          <p className="p-[1px]">Recent Posts</p>
        </div>

        <div className="flex flex-col ">
          <p className="p-[1px]">Privacy Policy</p>
          <p className="p-[1px]">About Us</p>
          <p className="p-[1px]">Terms & Conditions</p>
          <p className="p-[1px]">Terms of Service</p>
        </div>
      </div>
      <p className="p-4 text-center bg-[#808000] text-xl border-t-2 border-black">
        All rights reserved @Horizon Blogs 
      </p>
    </>
  );
};

export default Footer;
