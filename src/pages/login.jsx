import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayout title="Login">
      <FormLogin/>
    </AuthLayout>
  );
};

export default LoginPage;