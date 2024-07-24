import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  //initial state is that what is in local storage
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem('data')));
  //handle add new data
  const handleAddData = (newData) => {
    const newDataSet = { ...data, ...newData };
    setData(newDataSet);
    localStorage.setItem('data', JSON.stringify(newDataSet));
  };

  const clearData = () => {
    localStorage.removeItem('data');
    setData(null);
  };

  return (
    <FormContext.Provider
      value={{
        handleAddData,
        clearData,
        data,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within FormProvider');
  }
  return context;
};
