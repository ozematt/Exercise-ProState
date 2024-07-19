import { useForm } from 'react-hook-form';

export const StepOne = () => {
  const { register } = useForm();

  return (
    <>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <input type="text" placeholder="Imię" />
        <input type="text" placeholder="Nazwisko" />
        <input type="email" placeholder="Email" />
        <button>Dalej</button>
      </form>
    </>
  );
};
