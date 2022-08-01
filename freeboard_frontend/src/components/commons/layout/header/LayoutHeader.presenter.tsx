// import { InnerWrapper, Wrapper } from "./LayoutHeader.styles";
// import { ILayoutHeaderProps } from "./LayoutHeader.types";

// export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
//   return (
//     <Wrapper>
//       Header
//       <InnerWrapper></InnerWrapper>
//     </Wrapper>
//   );
// }
/* This example requires Tailwind CSS v2.0+ */
import { Popover } from "@headlessui/react";
import { ILayoutHeaderProps } from "./LayoutHeader.types";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  return (
    <Popover className="relative bg-black">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-3 border-gray-100 py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="http://localhost:3000/mainpage">
              <img
                className="h-8 w-auto sm:h-10"
                src="https://c.opencritic.com/images/logo-light.png"
                alt=""
              />
            </a>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a
              href="http://localhost:3000/boards"
              className="text-base font-medium text-white hover:text-gray-900"
            >
              BOARD LIST
            </a>
            <a
              href="http://localhost:3000/#"
              className="text-base font-medium text-white hover:text-gray-900"
            >
              뭐하지
            </a>
            <a
              href="http://localhost:3000/openApi"
              className="text-base font-medium text-white hover:text-gray-900"
            >
              API
            </a>
            <a
              href="http://localhost:3000/#"
              className="text-base font-medium text-white hover:text-gray-900"
            >
              FIREBASE(안함)
            </a>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </Popover>
  );
}
