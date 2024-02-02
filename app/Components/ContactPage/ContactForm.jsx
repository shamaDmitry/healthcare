'use client';

import { useState } from 'react';
import CustomButton from '../atoms/Button';
import LoadingDots from '../atoms/LoadingDots';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import {
  fullNameRules,
  requiredFieldRule,
  phoneRules,
  messageRules,
  capchaFieldRule,
  emailRules,
} from '@/helpers/validationRules';
import ErrorFormBlock from '../blocks/Forms/ErrorFormBlock';
import publicClient from '@/lib/api/client/public.client';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    setIsSubmitting(true);

    try {
      const response = await publicClient.post('/api/send-contact-email', data);

      if (response.succsess) {
        toast.success(response.message);
        reset();
      }
      console.log('response', response);
    } catch (err) {
      console.log('err', err);
      toast.error(err.response.data.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      noValidate
      className="bg-white shadow-lg px-9 text-gentle-black py-9"
      onSubmit={handleSubmit(onSubmit)}
    >
      <p className="mb-5 font-bold">Send us a message</p>

      <div
        className={classNames(
          'relative mb-7 space-y-7 before:absolute before:bg-white/80 before:w-full before:h-full before:left-0 before:top-0 before:opacity-0 before:pointer-events-none',
          {
            'before:opacity-100 before:pointer-events-auto cursor-progress':
              isSubmitting,
          }
        )}
      >
        <div className="flex flex-col">
          <label
            htmlFor="fullName"
            className="block mb-3 font-medium text-gentle-black"
          >
            Full name <sup className="text-red-500">*</sup>
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Full name"
            className={classNames('p-4 border outline-none border-separator', {
              'border-red-500 placeholder:text-red-500 text-red-500':
                errors.fullName,
            })}
            required
            {...register('fullName', {
              ...fullNameRules,
              ...requiredFieldRule,
            })}
          />
          {errors.fullName && (
            <ErrorFormBlock message={errors.fullName.message} />
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="block mb-3 font-medium text-gentle-black"
          >
            Mobile phone
            <sup className="text-red-500">*</sup>
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Mobile phone"
            className={classNames('p-4 border outline-none border-separator', {
              'border-red-500 placeholder:text-red-500 text-red-500':
                errors.phone,
            })}
            required
            {...register('phone', {
              ...requiredFieldRule,
              ...phoneRules,
            })}
          />
          {errors.phone && <ErrorFormBlock message={errors.phone.message} />}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="block mb-3 font-medium text-gentle-black"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email address"
            className={classNames('p-4 border outline-none border-separator', {
              'border-red-500 placeholder:text-red-500 text-red-500':
                errors.email,
            })}
            {...register('email', {
              ...emailRules,
            })}
          />

          {errors.email && <ErrorFormBlock message={errors.email.message} />}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="block mb-3 font-medium text-gentle-black"
          >
            Your message
            <sup className="text-red-500">*</sup>
          </label>

          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="Your message"
            required
            {...register('message', {
              ...requiredFieldRule,
              ...messageRules,
            })}
            className={classNames(
              'p-4 border outline-none border-separator min-h-40',
              {
                'border-red-500 placeholder:text-red-500 text-red-500':
                  errors.message,
              }
            )}
          />

          {errors.message && (
            <ErrorFormBlock message={errors.message.message} />
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="capcha"
            className="block w-full mb-3 font-medium text-gentle-black"
          >
            Capcha
            <sup className="text-red-500">*</sup>
          </label>

          <div className="flex flex-wrap gap-x-4">
            <input
              id="capcha"
              name="capcha"
              type="number"
              {...register('capcha', {
                ...requiredFieldRule,
                ...capchaFieldRule,
              })}
              placeholder="Your message"
              className={classNames(
                'p-4 border outline-none border-separator',
                {
                  'border-red-500 placeholder:text-red-500 text-red-500':
                    errors.capcha,
                }
              )}
            />

            <div className="flex items-center justify-center p-4 text-white bg-primary w-44">
              123456
            </div>

            {errors.capcha && (
              <div className="w-full">
                <ErrorFormBlock message={errors.capcha.message} />
              </div>
            )}
          </div>
        </div>

        <div className="p-4 text-sm bg-light-gray">
          *This contact form should be used for administrative contact only.
          Please do not include any identifiable health information in your
          message.
        </div>
      </div>

      <CustomButton
        type="submit"
        className="w-full text-white bg-secondary hover:bg-secondary/80 h-[58px]"
      >
        {isSubmitting ? <LoadingDots color="bg-white" /> : <span>SUBMIT</span>}
      </CustomButton>
    </form>
  );
};

export default ContactForm;
