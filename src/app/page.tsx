import Footer from "@/components/footer/footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#F3F4F6] ">
      <nav className="bg-[#9333EA] fixed relative top-0 text-white flex    justify-between   items-center flex-wrap px-0 px-[30px] py-[15px] ">
        <h1 className="text-white font-bold text-[25px]"> Assignment 3</h1>
        <div className="hidden md:flex justify-between items-center  m-[5px] md:gap-[10px] ">        
              <a className="hover:text-purple-400" href="">Home</a>       
              <a className="hover:text-purple-400"href="">About</a>        
              <a className="hover:text-purple-400" href="">Service</a>          
              <a className="hover:text-purple-400" href="">Contact</a>     
        </div>
        <button className="md:hidden">Menu</button>
      </nav>
      <div className="grid md:grid-cols-12 grid-cols-1 gap-4  m-[20px]">
        <div className="md:col-span-8 bg-[#BFDBFE] py-[20px] px-[20px] brorder rounded-lg shaddow-lg ">
          <h1 className="text-xl font-semibold mb-[10px]">Main Content Area</h1>
          <p className="mb-[10px]">
            This is the main content area, spanning 8 columns on medium screens
            and above.
          </p>
        </div>
        <div className="md:col-span-4 bg-[#BBF7D0] py-[20px] px-[20px] brorder rounded-lg shaddow-lg ">
          <h1 className="text-xl font-semibold mb-[10px]">Side Bar</h1>
          <p className="mb-[10px]">
            This is a sidebar area, spanning 4 columns on medium screens and
            above.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 m-[20px] gap-5">
        <div className="bg-[#FECACA] px-[20px] py-[15px] rounded-lg">
          <h1 className="font-semibold mb-[10px]"> Feature 1</h1>
          <p>This is a feature box that changes layout based on screen size.</p>
        </div>
        <div className="bg-[#FEF08A]  px-[20px] py-[15px] rounded-lg">
          <h1 className="font-semibold mb-[10px]"> Feature 1</h1>
          <p>This is a feature box that changes layout based on screen size.</p>
        </div>
        <div className="bg-[#BFDBFE]  px-[20px] py-[15px] rounded-lg ">
          <h1 className="font-semibold mb-[10px]"> Feature 1</h1>
          <p className="mb-[10px]">
            This is a feature box that changes layout based on screen size.
          </p>
        </div>
        <div className="bg-[#BBF7D0]  px-[20px] py-[15px] rounded-lg">
          <h1 className="font-semibold mb-[10px]"> Feature 1</h1>
          <p>This is a feature box that changes layout based on screen size.</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row m-[15px] gap-5">
        <div className="bg-[#C7D2FE] px-[20px] rounded-lg py-[20px]">
          <h1 className="font-semibold mb-[10px]">Item 1</h1>
          <p className="mb-[10px]">
            This is a flex item that will stack vertically on small screens and
            horizontally on medium screens and above.
          </p>
        </div>
        <div className="bg-[#FBCFE8] px-[20px] rounded-lg py-[20px]">
          <h1 className="font-semibold mb-[10px]">Item 2</h1>
          <p className="mb-[10px]">
            This is a flex item that will stack vertically on small screens and
            horizontally on medium screens and above.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-6 grid-cols-2 m-[15px] gap-5">
        <div className="flex justify-center items-center h-48  bg-[#FED7AA] rounded-lg text-xl font-bold">
          1
        </div>
        <div className="flex justify-center items-center h-48  bg-[#FED7AA] rounded-lg text-xl font-bold">
          2
        </div>
        <div className="flex justify-center items-center h-48  bg-[#FED7AA] rounded-lg text-xl font-bold">
          3
        </div>
        <div className="flex justify-center items-center h-48  bg-[#FED7AA] rounded-lg text-xl font-bold">
          4
        </div>
        <div className="flex justify-center items-center h-48  bg-[#FED7AA] rounded-lg text-xl font-bold">
          5
        </div>
        <div className="flex justify-center items-center h-48  bg-[#FED7AA] rounded-lg text-xl font-bold">
          6
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 m-[15px] ">
        <div className="col-span-2 bg-[#99F6E4] rounded-lg px-[15px] py-[15px] ">
          <h1 className="font-semibold mb-[15px]">Nested</h1>
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-[#5EEAD4] rounded-lg px-[10px] py-[10px]">
              <h1 className="font-semibold mt-[6px]">Nested Item 1</h1>
              <p className="mb-[6px] mt-[10px]">This is a nested item.</p>
            </div>
            <div className="bg-[#5EEAD4] rounded-lg px-[10px] py-[10px]">
              <h1 className="font-semibold mt-[6px]">Nested Item 2</h1>
              <p className="mb-[6px] mt-[10px]">This is a nested item.</p>
            </div>
          </div>   
        </div>
        <div className="bg-[#FEF08A] px-[20px] py-[10px]  rounded-lg">
            <h1 className="mb-[10px] mt-[10px]">Side Content</h1>
            <p className="mb-[15px]">This is some side content in the grid layout.</p>
          </div>
      </div>
      <div className="bg-[#E9D5FF] px-[20px] rounded-lg py-[20px] m-[20px]">
        <h1 className="font-semibold px-[20px] mt-[10px] mb-[20px]">Complex Responsive Grid</h1>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4 m-[20px]">  
        <div className="row-span-2 col-span-2 bg-[#FCA5A5] px-[20px] rounded-lg"><h1 className="text-semibold mt-[10px]">Item 1</h1></div>
        <div className="bg-[#86EFAC] px-[20px] rounded-lg py-[20px]"><h1>Item 2</h1></div>
        <div className="bg-[#93C5FD] px-[20px] rounded-lg py-[20px]"><h1>Item 3</h1></div>
        <div className="bg-[#FCA5A5] px-[20px] rounded-lg py-[20px]"><h1>Item 4</h1></div>
        <div className="bg-[#86EFAC] px-[20px] rounded-lg py-[20px]"><h1>Item 5</h1></div>
        <div className="bg-[#93C5FD] px-[20px] rounded-lg py-[20px]"><h1>Item 6</h1></div>
        <div className="bg-[#FCA5A5] px-[20px] rounded-lg py-[20px]"><h1>Item 7</h1></div>
        <div className="bg-[#86EFAC] px-[20px] rounded-lg py-[20px]"><h1>Item 8</h1></div>
        <div className="bg-[#93C5FD] px-[20px] rounded-lg py-[20px]"><h1>Item 9</h1></div>
        <div className="bg-[#FCA5A5] px-[20px] rounded-lg py-[20px]"><h1>Item 10</h1></div>
        <div className="bg-[#86EFAC] px-[20px] rounded-lg py-[20px]"><h1>Item 11</h1></div>
        <div className="bg-[#93C5FD] px-[20px] rounded-lg py-[20px]"><h1>Item 12</h1></div>  
      </div>

      </div>
      <Footer/>
    </div>
  );
}
