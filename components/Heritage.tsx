import Image from "next/image";
import Button from "./Button";

const Heritage = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <h2 className="bold-40 lg:bold-64 text-center">Heritage Programming</h2>
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <p className="regular-16">
            Miami University Libraries has joined the Office of Institutional
            Diversity & Inclusion in celebrating history and heritage weeks,
            months, and special events. One of the primary ways the Libraries
            observe these occasions is through resource guides. Each history and
            heritage guide includes books, articles, movies, databases, and more
            in order to provide resources to engage with diverse cultures. In
            addition, the Libraries coordinate displays to showcase some of the
            materials in the Libraries' collection. More information on heritage
            programming, including a calendar of observances, can be found here.
          </p>
          <div className="flexStart w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="Office of Transformational and Inclusive Excellence"
              variant="btn_white_no_left_padding"
            />
            <Button
              type="button"
              title="More information"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default Heritage;
