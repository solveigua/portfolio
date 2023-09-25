import burnoutWoman from "./images/burnout_woman.jpg";
import scan2 from "./images/scan2.JPG";
import scan3 from "./images/scan3.JPG";
import "./Gallery.css";

const callouts = [
  {
    name: "Prints",

    imageSrc: burnoutWoman,
    imageAlt: "burnout woman print",
    href: "#",
  },
  {
    name: "Scans",

    imageSrc: scan2,
    imageAlt: "Scan art",
    href: "#",
  },
  {
    name: "Other",
    imageSrc: scan3,
    imageAlt: "Scanart",
    href: "#",
  },
];

export default function Gallery() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-800">Gallery</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-md bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
