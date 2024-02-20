import React from 'react';
import Container from '../atoms/Container';
import Image from 'next/image';
import Headline from '../atoms/Headline';
import SubHeadline from '../atoms/SubHeadline';
import IconWithText from '../blocks/IconWithText';
import WorkspacePremium from '../icons/WorkspacePremium';
import DataTable from '../icons/DataTable';
import QueryStats from '../icons/QueryStats';
import Link from 'next/link';

const Government = () => {
  return (
    <section className="py-10 bg-light-gray">
      <Container>
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/homepage/goverment.jpg"
              alt=""
              className="w-full"
              width={552}
              height={640}
              priority
            />
          </div>

          <div className="col-span-2">
            <Headline className="mb-4 text-secondary">Government</Headline>

            <SubHeadline className="mb-4 text-gentle-black">
              Public Policy Services
            </SubHeadline>

            <p className="mb-10 text-gentle-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              dolores doloribus, voluptate rerum assumenda distinctio eligendi
              dolor accusantium laudantium consequatur excepturi ullam quasi
              tempore porro quisquam velit nihil commodi quod.
            </p>

            <div className="grid gap-10 lg:grid-cols-2">
              <IconWithText
                icon={<WorkspacePremium />}
                iconBg="bg-white"
                text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            tempora sed eum fugit dicta atque odio praesentium esse qui
            ipsum corporis facilis unde quod, accusamus ad suscipit,
            neque quo nisi.`}
              />

              <IconWithText
                icon={<DataTable />}
                iconBg="bg-white"
                text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            tempora sed eum fugit dicta atque odio praesentium esse qui
            ipsum corporis facilis unde quod, accusamus ad suscipit,
            neque quo nisi.`}
              />

              <IconWithText
                icon={<QueryStats />}
                iconBg="bg-white"
                text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            tempora sed eum fugit dicta atque odio praesentium esse qui
            ipsum corporis facilis unde quod, accusamus ad suscipit,
            neque quo nisi.`}
              />
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 font-bold text-white capitalize bg-secondary"
            >
              contact us
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Government;
