const ContactEmail = ({
  fullName = '',
  phone = '',
  email = '',
  message = '',
}) => {
  return (
    <div className="space-y-4">
      <p>
        <strong>Full Name:</strong> {fullName}
      </p>
      <p>
        <strong>Phone:</strong> {phone}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Message:</strong> {message}
      </p>
    </div>
  );
};

export default ContactEmail;
