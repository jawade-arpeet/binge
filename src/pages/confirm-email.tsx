import Logo from "../components/logo.tsx";
import Button from "../components/button.tsx";

function ConfirmEmailPage() {
  return (
    <>
      <Logo />
      <h4 className="text-3xl font-semibold leading-[0.95] mt-2">
        Please verify your email account.
      </h4>
      <p className="text-sm mt-2 text-stone-500 font-medium">
        We've sent a confirmation email to {""}. Click the link to verify your
        account ownership and continue with the application.
      </p>
      <Button className="mt-4">Resend Email</Button>
    </>
  );
}

export default ConfirmEmailPage;
