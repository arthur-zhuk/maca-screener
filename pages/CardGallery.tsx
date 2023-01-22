import Image from "next/image";

export const mockCardData = {
  title: "Macadamia Nut",
  description: [
    "Macadamia nuts (Macadamia integrifolia and M. tetraphylla) are grown in subtropical and tropical regions and are valued for their delicate flavor, crunchy texture, and healthful oil profile. The highest quality kernels are cream colored, with 72 to 78% oil and 1.5% moisture.",
    "Nuts contain healthy fats.",
  ],
  image:
    "https://www.mac-nuts.com/wp-content/uploads/2021/08/20210819234129_2-In-Shell-Mac-Nuts-product-picture1-scaled.jpg",
  link: "https://en.wikipedia.org/wiki/Macadamia",
  tags: ["macadamia", "nut", "maca", "macadamia nut"],
};

export const CardGallery = () => {
  return (
    // layout for cards
    <div className="justify-around flex flex-wrap gap-4 p-4">
      {Array(9)
        .fill(mockCardData)
        .map((data, i) => {
          return (
            <div key={i} className="card">
              <Image
                className="w-full"
                src={data.image}
                alt={data.title}
                width={300}
                height={300}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{data.title}</div>
                <p className="text-gray-700 text-base">
                  {data.description[i % 2]}
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {data.tags.map((tag: string, i: number) => {
                  return (
                    <span
                      key={i}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CardGallery;
