/* eslint-disable radix */
/* eslint-disable import/no-extraneous-dependencies */
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

type IModalProps = {
  open: boolean;
  onClose: (status: boolean) => void;
  bounty: any;
};

const BountyModal = ({ open, onClose, bounty }: IModalProps) => {
  if (bounty) {
    return (
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-80 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
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
                <Dialog.Panel className="relative overflow-hidden rounded-lg bg-gray-800 px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-screen sm:max-w-screen-xl sm:p-6">
                  <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md text-white focus:outline-none"
                      onClick={() => onClose(false)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-left sm:mt-0 sm:ml-4">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold leading-6 text-white"
                      >
                        {bounty.name}
                      </Dialog.Title>
                      <div className="mt-6">
                        <label className="mb-2 text-lg font-medium text-gray-200">
                          Description
                        </label>
                        <p
                          className="text-base text-gray-400"
                          dangerouslySetInnerHTML={{
                            __html: bounty.description,
                          }}
                        />
                      </div>
                      <div className="mt-6">
                        <label className="mb-2 text-lg font-medium text-gray-200">
                          Acceptance Criteria
                        </label>
                        <p
                          className="text-base text-gray-400"
                          dangerouslySetInnerHTML={{
                            __html: bounty.acceptanceCriteria,
                          }}
                        />
                      </div>

                      <div className="mt-6">
                        <label className="mb-2 text-lg font-medium text-gray-200">
                          Reward
                        </label>
                        <p className="text-base text-gray-400">
                          Amount: $
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
                        </p>
                        <p className="text-base text-gray-400">
                          Token: {bounty.rewardToken}
                        </p>
                        <p className="text-base text-gray-400">
                          Chain: {bounty.rewardChain}
                        </p>
                      </div>

                      <div className="mt-6 flex w-full flex-col items-start justify-between sm:w-2/3 sm:flex-row sm:items-center">
                        <div className="flex flex-col items-start justify-start">
                          <label className="mb-2 text-lg font-medium text-gray-200">
                            Rewards
                          </label>
                          {bounty.rewards.map((reward: any, index: number) => (
                            <tr key={index}>
                              <td className="pr-4 text-gray-400">
                                Rank {reward.winnerRank + 1}
                              </td>
                              <td className="text-gray-400">
                                <span className="font-medium">
                                  ${reward.rewardAmountUsd}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex w-full flex-col items-start justify-between sm:w-2/3 sm:flex-row sm:items-center">
                        <div className="flex flex-col items-start justify-start">
                          <label className="mb-2 text-lg font-medium text-gray-200">
                            Resources
                          </label>
                          {bounty.resources.map(
                            (resource: any, index: number) => (
                              <a
                                key={index}
                                href={resource.resourceUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="break-normal text-gray-400 underline hover:border-0 hover:text-gray-300"
                              >
                                {resource.description}
                              </a>
                            )
                          )}
                        </div>
                        <div className="flex flex-col items-start justify-start pt-10 sm:pt-0">
                          <label className="mb-2 text-lg font-medium text-gray-200">
                            Judging Parameters
                          </label>

                          <table className="min-w-full max-w-screen-xl border-separate border-spacing-0">
                            <tbody>
                              {bounty.judgingParameters.map(
                                (parameter: any, index: number) => (
                                  <tr key={index}>
                                    <td className="pr-4 text-gray-400">
                                      {parameter.parameter}
                                    </td>
                                    <td className="text-gray-400">
                                      Max score:{" "}
                                      <span className="font-medium">
                                        {parameter.maxScore}
                                      </span>
                                    </td>
                                  </tr>
                                )
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm"
                      onClick={() => onClose(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }

  return <></>;
};

export { BountyModal };
