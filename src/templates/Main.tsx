/* eslint-disable tailwindcss/no-custom-classname */
import type { ReactNode } from "react";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full bg-black px-1 text-white antialiased">
    {props.meta}

    <div className="mx-auto max-w-screen-xl">
      <header>
        <div className="pt-16 pb-8">
          <h1 className="text-4xl font-bold">
            ETHDenver 2023 Buidlathon Bounties
          </h1>
          <h4 className="text-md pt-4">
            If this helped you, please check out my project{" "}
            <a
              href="https://meme.market"
              className="text-white underline hover:border-0"
            >
              Meme.Market
            </a>
          </h4>
          <h4 className="text-md">
            Follow{" "}
            <a
              href="https://twitter.com/0xTheBossDragon"
              className="text-white underline hover:border-0"
            >
              @0xTheBossDragon
            </a>
          </h4>
        </div>
      </header>

      <main className="content py-5 text-xl">{props.children}</main>
    </div>
  </div>
);

export { Main };
