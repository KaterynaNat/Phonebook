import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 pt-40">
    {/* Заголовок */}
    <h1 className="text-3xl font-bold text-glitterPink mb-6">Log In</h1>

    {/* Контейнер для форми */}
    <div className="w-full max-w-lg bg-pink-100 p-6 rounded-lg shadow-lg">
      <LoginForm />
    </div>
    </div>
  );
};

export default LoginPage;

