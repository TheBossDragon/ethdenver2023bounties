/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable prettier/prettier */
/* eslint-disable radix */

import { useState } from "react";

import { BountyModal } from "@/components/modal";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";

const Index = ({ bounties }: IndexProps) => {
  const [bountyModal, setBountyModal] = useState(null);
  const [bountyModalOpen, setBountyModalOpen] = useState(false);

  const sortedBounties = bounties.challenges;
  sortedBounties.sort((a: any, b: any) =>
    a.submittedByOrgName.localeCompare(b.submittedByOrgName)
  );

  return (
    <Main
      meta={<Meta title="ETHDenver 2023 Buidlathon Bounties" description="" />}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flow-root">
          <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle">
              <table className="hidden min-w-full max-w-screen-xl border-separate border-spacing-0 sm:block">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-white backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-white backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      By
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-white backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-white backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      Prices
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedBounties.map((bounty: any, index: number) => {
                    return (
                      <tr key={index}>
                        <td className="break-normal py-4 pl-4 pr-3 text-lg font-medium sm:pl-6 lg:pl-8">
                          {index + 1}
                        </td>
                        <td className="flex flex-row items-center justify-start space-x-4 py-4 pl-4 pr-3 text-lg font-medium sm:pl-6 lg:pl-8">
                          <div className="flex h-[2rem] w-[2rem] flex-row items-center">
                            <img
                              src={bounty.submittedByOrgLogo}
                              className="max-h-[2rem] max-w-[2rem]"
                              alt={bounty.submittedByOrgName}
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setBountyModal(bounty);
                              setBountyModalOpen(true);
                            }}
                            className="text-left underline"
                          >
                            {bounty.submittedByOrgName}
                          </button>
                        </td>
                        <td className="px-3 py-4 text-lg">
                          <button
                            type="button"
                            onClick={() => {
                              setBountyModal(bounty);
                              setBountyModalOpen(true);
                            }}
                            className="break-normal text-left underline"
                          >
                            {bounty.name}
                          </button>
                        </td>
                        <td className="flex justify-end whitespace-nowrap px-3 py-4 text-lg">
                          $
                          {bounty.rewardPool
                            ? parseInt(bounty.rewardPool).toLocaleString()
                            : bounty.rewards
                                .reduce(
                                  (
                                    sum: number,
                                    reward: { rewardAmountUsd: string }
                                  ) => sum + parseInt(reward.rewardAmountUsd),
                                  0
                                )
                                .toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <table className="block sm:hidden min-w-full max-w-screen border-separate border-spacing-0">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-white backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-white backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      By
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-white backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      Prices
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedBounties.map((bounty: any, index: number) => {
                    return (
                      <tr key={index}>
                        <td className="break-normal px-2 py-4 text-lg font-medium">
                          {index + 1}
                        </td>
                        <td className="py-4 px-2 text-lg font-medium">
                          <div className="flex flex-row items-center justify-start space-x-4 ">
                            <div className="flex h-[2rem] w-[2rem] flex-row items-center">
                              <img
                                src={bounty.submittedByOrgLogo}
                                className="max-h-[2rem] max-w-[2rem]"
                                alt={bounty.submittedByOrgName}
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                setBountyModal(bounty);
                                setBountyModalOpen(true);
                              }}
                              className="text-left underline"
                            >
                              {bounty.submittedByOrgName}
                            </button>
                          </div>
                        </td>
                        <td className="px-2 py-4 text-lg">
                          <div className="flex flex-row justify-end">
                            $
                            {bounty.rewardPool
                              ? parseInt(bounty.rewardPool).toLocaleString()
                              : bounty.rewards
                                  .reduce(
                                    (
                                      sum: number,
                                      reward: { rewardAmountUsd: string }
                                    ) => sum + parseInt(reward.rewardAmountUsd),
                                    0
                                  )
                                  .toLocaleString()}{" "}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <BountyModal
        open={bountyModalOpen}
        onClose={setBountyModalOpen}
        bounty={bountyModal}
      />
    </Main>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://cdn.meme.market/static/ethdenver2023/bounties.json"
  );
  const bounties = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      bounties,
    },
  };
}

interface IndexProps {
  bounties: any;
}

export default Index;
