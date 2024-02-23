'use client';

import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useRef, useState } from 'react';
import PlayArrow from '../icons/PlayArrow';

const beforeClasses =
  'before:pointer-events-none before:animation-delay-300 before:animate-ping before:border-white before:w-[110px] before:block before:h-[110px] before:absolute before:border before:rounded-full before:opacity-30';
const afterClasses =
  'after:pointer-events-none after:animate-ping before:animation-delay-400 after:border-white after:w-[130px] after:block after:h-[130px] after:absolute after:border after:rounded-full after:opacity-30';

const VideoModal = ({ video, videoWidth, videoHeight }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          setModalOpen(true);
        }}
        className="relative inline-flex items-center gap-10 p-5 outline-none cursor-pointer pointer-events-auto group"
      >
        <div
          className={`group-hover:opacity-50 transition duration-200 flex-shrink-0 border flex items-center justify-center border-white rounded-full w-[90px] h-[90px] bg-mask relative ${beforeClasses} ${afterClasses}`}
        >
          <PlayArrow />
        </div>
        <span className="pb-1 relative h-full font-bold text-white drop-shadow-lg before:w-0 before:h-[2px] before:absolute before:bottom-0 before:left-0 group-hover:before:w-full before:bg-white before:transition-all before:duration-300">
          Watch video
        </span>
      </button>

      <Transition
        show={modalOpen}
        as={Fragment}
        afterEnter={() => videoRef.current?.play()}
      >
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          {/* Modal backdrop */}
          <Transition.Child
            className="fixed inset-0 z-[1000] transition-opacity bg-black bg-opacity-50"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />

          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-[1000] flex p-6"
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <div className="flex items-center h-full max-w-5xl mx-auto">
              <Dialog.Panel className="w-full max-h-full overflow-hidden bg-black shadow-2xl rounded-3xl aspect-video">
                <video
                  ref={videoRef}
                  width={videoWidth}
                  height={videoHeight}
                  loop
                  controls
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
};

export default VideoModal;
