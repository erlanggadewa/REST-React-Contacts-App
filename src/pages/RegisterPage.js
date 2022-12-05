import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/api";

function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(data) {
    const { error } = await register(data);
    if (!error) navigate("/");
  }

  return (
    <section className="register-page">
      <h2>Form Data Diri</h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        Kembali ke <Link to={"/"}>Masuk</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
