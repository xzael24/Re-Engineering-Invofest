import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Input } from '../ui/Input';
import { PasswordInput } from '../ui/PasswordInput';
import { Textarea } from '../ui/Textarea';
import { Select } from '../ui/Select';
import { Button } from '../ui/SubmitButton';
import { useAuthStore } from '../../stores/authStore';

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
  bio: string;
  event: string;
  nim: string;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const navigate = useNavigate();
  const { register: registerUser, isLoading, error, clearError } = useAuthStore();

  const onSubmit = async (data: RegisterFormValues) => {
    clearError();
    const success = await registerUser(data);
    if (success) {
      navigate('/login');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Registrasi</h2>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="NIM"
          name="nim"
          register={register}
          rules={{
            required: "NIM wajib diisi",
            pattern: {
              value: /^\d{8,}$/,
              message: "NIM harus berupa angka minimal 8 digit",
            },
          }}
          error={errors.nim?.message as string}
        />
        <Input
          label="Nama"
          name="name"
          register={register}
          rules={{
            required: "Nama wajib diisi",
            minLength: {
              value: 3,
              message: "Nama minimal 3 karakter",
            },
          }}
          error={errors.name?.message as string}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          register={register}
          rules={{
            required: "Email wajib diisi",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Format email tidak valid",
            },
          }}
          error={errors.email?.message as string}
        />
        <PasswordInput
          label="Password"
          name="password"
          register={register}
          rules={{
            required: "Password wajib diisi",
            minLength: {
              value: 8,
              message: "Password minimal 8 karakter",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
              message: "Password harus berisi huruf dan angka",
            },
          }}
          error={errors.password?.message as string}
        />
        <Textarea
          label="Bio (Opsional)"
          name="bio"
          register={register}
          error={errors.bio?.message as string}
        />
        <Select
          label="Event"
          name="event"
          register={register}
          rules={{ required: "Silakan pilih event" }}
          options={[
            { label: "IT Seminar", value: "IT Seminar" },
            { label: "IT Workshop", value: "IT Workshop" },
            { label: "IT Talkshow", value: "IT Talkshow" },
            { label: "IT Competition", value: "IT Competition" },
          ]}
          error={errors.event?.message as string}
        />
        <div className="mt-2 text-center">
          <Button type="submit" label={isLoading ? "Memproses..." : "Daftar"} />
        </div>
      </form>
    </div>
  );
}
