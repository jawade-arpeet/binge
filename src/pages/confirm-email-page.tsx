import Button from "../components/ui/button.tsx";

const ConfirmEmailPage = () => {
  return (
    <>
      <h4 className="mt-2 text-2xl leading-[0.95] font-semibold">
        Please verify your email account.
      </h4>
      <p className="mt-2 text-sm text-stone-500">
        We have sent you an email to verify your email address. Please check
        your inbox and click the link to verify your email address.
      </p>
      <Button className="mt-4">Resend Email</Button>
    </>
  );
};

export default ConfirmEmailPage;
