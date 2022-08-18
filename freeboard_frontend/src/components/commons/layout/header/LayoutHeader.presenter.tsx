import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ILayoutHeaderProps } from "./LayoutHeader.types";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  PencilAltIcon,
  ClipboardCheckIcon,
  CreditCardIcon,
} from "@heroicons/react/outline";
import router from "next/router";
import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      userPoint {
        amount
      }
    }
  }
`;
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const solutions = [
  {
    name: "상품등록",
    // description:
    //   "Get a better understanding of where your traffic is coming from.",
    href: "http://localhost:3000/products/new",
    icon: PencilAltIcon,
  },
  {
    name: "상품목록",
    // description: "Speak directly to your customers in a more meaningful way.",
    href: "http://localhost:3000/products/",
    icon: ClipboardCheckIcon,
  },
  {
    name: "상품결제",
    // description: "상품결제",
    href: "http://localhost:3000/payment",
    icon: CreditCardIcon,
  },
];
export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  const [accessToken] = useRecoilState(accessTokenState);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const onClickMoveLogin = () => {
    router.push("/login/");
  };
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
              className="text-base font-medium text-white hover:text-yellow-200"
            >
              BOARD LIST
            </a>
            {/* <a
              href="http://localhost:3000/#"
              className="text-base font-medium text-white hover:text-yellow-200"
            >
              FIREBASE(안함)
            </a> */}

            <a
              href="http://localhost:3000/openApi"
              className="text-base font-medium text-white hover:text-yellow-200"
            >
              API
            </a>
            <a
              href="http://localhost:3000/mypage"
              className="text-base font-medium text-white hover:text-yellow-200"
            >
              MyPage
            </a>
          </Popover.Group>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={classNames(
                    open ? "text-yellow-200" : "text-white",
                    "group bg-black rounded-md inline-flex items-center text-base font-medium hover: white focus:outline-none focus:ring-offset-2 focus:white"
                  )}
                >
                  <span>Product</span>
                  <ChevronDownIcon
                    className={classNames(
                      open ? "text-gray-600" : "text-white",
                      "ml-2 h-5 w-5 group-hover:text-gray-500"
                    )}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-44 max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-indigo-600"
                              aria-hidden="true"
                            />
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                {item.name}
                              </p>
                              {/* <p className="mt-1 text-sm text-gray-500">
                                {item.description}
                              </p> */}
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="/basket/"
              className=" 
              ml-8 whitespace-nowrap 
              inline-flex 
              items-center 
              justify-center 
              px-4 py-2 border border-transparent
              rounded-md shadow-sm text-base 
              font-medium text-white hover:bg-indigo-700 hover:text-white"
            >
              Cart
            </a>
            {/* <a
              href="/login/sign-in/"
              className=" 
              ml-8 whitespace-nowrap 
              inline-flex 
              items-center 
              justify-center 
              px-4 py-2 border border-transparent
              rounded-md shadow-sm text-base 
              font-medium text-white hover:bg-indigo-700 hover:text-white"
            >
              Sign in
            </a> */}
            {accessToken ? (
              <div style={{ color: "white" }}>
                {data?.fetchUserLoggedIn.name}님
              </div>
            ) : (
              <div style={{ color: "white" }} onClick={onClickMoveLogin}>
                로그인
              </div>
            )}
            <a
              href="/login/sign-up/"
              className="
              ml-8 whitespace-nowrap 
              inline-flex 
              items-center 
              justify-center 
              px-4 py-2 border border-transparent
              rounded-md shadow-sm text-base 
              font-medium text-white hover:bg-indigo-700  hover:text-white"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </Popover>
  );
}
