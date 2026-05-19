import { useForm } from "react-hook-form";
import { Input } from '../ui/Input';
import { PasswordInput } from '../ui/PasswordInput';
import { Textarea } from '../ui/Textarea';
import { Select } from '../ui/Select';
import { Button } from '../ui/SubmitButton';

type RegisterFormValues = {
  name: string;
  email: string;
  password: string;
  bio: string;
  event: string;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormValues>();

  const onSubmit = (data: RegisterFormValues) => {
    console.log(data);
    reset();
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Registrasi</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
          label="Bio"
          name="bio"
          register={register}
          rules={{
            required: "Bio wajib diisi",
            minLength: {
              value: 20,
              message: "Bio minimal 20 karakter",
            },
          }}
          error={errors.bio?.message as string}
        />
        <Select
          label="Event"
          name="event"
          register={register}
          rules={{ required: "Silakan pilih event" }}
          options={[
            { label: "Invofest", value: "invofest" },
            { label: "Workshop AI", value: "ai" },
          ]}
          error={errors.event?.message as string}
        />
        <div className="mt-2 text-center">
          <Button type="submit" label="Daftar" />
        </div>
      </form>
    </div>
  );
}
