import house2 from "../images/house2.png";
import house3 from "../images/house3.png";
import burnoutWoman from "../images/burnout_woman.jpg";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import Cart from "./Cart";

const prints = [
  {
    id: 1,
    name: "wonky house #2",
    src: house2,
    href: "#",
    price: "kr 89",
    inStock: true,
  },
  {
    id: 2,
    name: "wonky house #3",
    src: house3,
    href: "#",
    price: "kr 89",
    inStock: true,
  },
  {
    id: 3,
    name: "burnout woman",
    src: burnoutWoman,
    href: "#",
    price: "kr 250",
    inStock: false,
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Shop() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [cart, setCart] = useState([]);

  const cancelButtonRef = useRef(null);

  function addToCart(printName) {
    const updatedCart = cart.concat(printName);
    setCart(updatedCart);
  }

  return (
    <>
      <div className="m-12 p-16 flex flex-col">
        <h2 className="text-2xl font-bold  pb-12">Shop prints :)</h2>
        <Cart cart={cart}></Cart>
        <div className="grid grid-cols-2 gap-4">
          {prints.map((print) => (
            <div className="">
              <div
                className={classNames(
                  print.inStock ? "hover:opacity-100 opacity-75" : "opacity-100"
                )}
              >
                <img
                  src={print.src}
                  alt={print.name}
                  className="h-3/6 w-3/6 md:object-cover"
                  onClick={() => {
                    setOpen(true);
                    setSelected(print.name);
                  }}
                ></img>
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{print.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {print.price}
              </p>
              <p
                className={classNames(
                  print.inStock ? "hidden" : "text-md font-bold text-red-700 "
                )}
              >
                Sold out
              </p>
              <Transition.Root show={open} as={Fragment}>
                <Dialog
                  as="div"
                  className="relative z-10"
                  initialFocus={cancelButtonRef}
                  onClose={setOpen}
                >
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                  </Transition.Child>

                  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <Dialog.Title
                                  as="h3"
                                  className="text-base font-semibold leading-6 text-gray-900"
                                >
                                  Add to Cart?
                                </Dialog.Title>
                                <div className="mt-2">
                                  <p className="text-sm text-gray-500">
                                    Add {selected} to cart?
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                              type="button"
                              className="inline-flex w-full justify-center rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                              onClick={() => addToCart(selected)}
                            >
                              Add to cart
                            </button>
                            <button
                              type="button"
                              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                              onClick={() => setOpen(false)}
                              ref={cancelButtonRef}
                            >
                              Cancel
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition.Root>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;
