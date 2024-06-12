import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "★", href: "/", highlight: true },
  { name: "About", href: "/about", highlight: false },
  { name: "Projects", href: "/projects", highlight: false },
  /* { name: "Shop", href: "#", highlight: false }, */
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="white">
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center"></div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.highlight
                          ? "bg-gray-400 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md ma-0 px-3 py-2 text-md font-bold"
                      )}
                      aria-current={item.highlight ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
