import { emailPattern, phonePattern } from './const';

export const emailRules = {
  pattern: {
    value: emailPattern,
    message: 'Must be a valid email according to RFC2822.',
  },
};

export const messageRules = {
  minLength: {
    message: 'Your message should contain min 20 characters',
    value: 20,
  },
};

export const phoneRules = {
  required: 'Phone is required',
  pattern: {
    message: 'Must be a valid phone',
    value: phonePattern,
  },
};

export const fullNameRules = {
  minLength: {
    message: 'Full name should contain min 5 characters',
    value: 5,
  },
};

export const requiredFieldRule = {
  required: 'Field is required',
};

export const capchaFieldRule = {
  minLength: {
    message: 'Should contain min 6 characters',
    value: 6,
  },
};
