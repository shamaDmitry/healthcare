import React from 'react';
import Container from '../atoms/Container';
import Image from 'next/image';
import Headline from '../atoms/Headline';
import SubHeadline from '../atoms/SubHeadline';
import IconWithText from '../blocks/IconWithText';
import AttachMoney from '../icons/AttachMoney';
import Savings from '../icons/Savings';
import BrightnessAlert from '../icons/BrightnessAlert';
import WorkspacePremium from '../icons/WorkspacePremium';
import Link from 'next/link';

const PayerServices = () => {
  return (
    <section className="py-10 bg-light">
      <Container>
        <div className="grid gap-20 md:grid-cols-2 lg:grid-cols-3">
          <div className="order-2">
            <Image
              src="/images/homepage/goverment.jpg"
              alt=""
              className="w-full"
              width={552}
              height={640}
              priority
            />
          </div>

          <div className="lg:col-span-2">
            <Headline className="mb-4 text-secondary">Payer</Headline>

            <SubHeadline className="mb-4 text-gentle-black">
              Payer Services
            </SubHeadline>

            <p className="mb-10 text-gentle-black">
              We help healthcare payers manage costs and ensure payment
              accuracy.
            </p>

            <div className="grid gap-10 lg:grid-cols-2">
              <IconWithText
                icon={<AttachMoney />}
                text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            tempora sed eum fugit dicta atque odio praesentium esse qui
            ipsum corporis facilis unde quod, accusamus ad suscipit,
            neque quo nisi.`}
              />

              <IconWithText
                icon={<Savings />}
                text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            tempora sed eum fugit dicta atque odio praesentium esse qui
            ipsum corporis facilis unde quod, accusamus ad suscipit,
            neque quo nisi.`}
              />

              <IconWithText
                icon={<BrightnessAlert />}
                text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
            tempora sed eum fugit dicta atque odio praesentium esse qui
            ipsum corporis facilis unde quod, accusamus ad suscipit,
            neque quo nisi.`}
              />

              <IconWithText
                icon={<WorkspacePremium />}
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

export default PayerServices;
