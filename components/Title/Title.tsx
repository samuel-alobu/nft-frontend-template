import React from "react";

type TitleProps = {
  heading: string;
  paragraph: string;
};

export default function Title({ heading, paragraph }: TitleProps) {
    return (
      <div className="w-full">
        <div className="w-[80%] mx-auto min-[320px]:max-[425px]:w-[90%]">
          <h2
            className="
                text-[3rem] leading-0
                min-[320px]:max-[425px]:text-[1.8rem]
                min-[320px]:max-[425px]:leading-0
              "
          >
            {heading}
          </h2>
          <p>{paragraph}</p>
        </div>
      </div>
    );
}
