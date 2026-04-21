import { useForm } from "react-hook-form";
import { Input } from "../atoms/Input";
import { PasswordInput } from "../atoms/PasswordInput";
import { Textarea } from "../atoms/Textarea";
import { Select } from "../atoms/Select";
import { Button } from "../atoms/Button";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Registrasi</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="Nama"
          name="name"
          register={register}
          error={errors.name?.message as string}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          register={register}
          error={errors.email?.message as string}
        />
        <PasswordInput
          label="Password"
          name="password"
          register={register}
          error={errors.password?.message as string}
        />
        <Textarea
          label="Bio"
          name="bio"
          register={register}
          error={errors.bio?.message as string}
        />
        <Select
          label="Event"
          name="event"
          register={register}
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
