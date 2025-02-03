import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 pt-40">
    {/* Заголовок */}
    <h1 className="text-3xl font-bold text-glitterPink mb-6">Register</h1>

    {/* Контейнер для форми */}
    <div className="w-full max-w-lg bg-pink-100 p-6 rounded-lg shadow-lg">
      <RegisterForm />
    </div>
    </div>
  );
};

export default RegisterPage;
