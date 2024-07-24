import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  ////DATA
  //initial state is that what is saved under the 'data' key in local storage,
  const [data, setData] = useState(() => JSON.parse(localStorage.getItem('data')));

  ////LOGIC
  //handle add new data
  const handleAddData = (newData) => {
    const newDataSet = { ...data, ...newData };
    setData(newDataSet);
    localStorage.setItem('data', JSON.stringify(newDataSet));
  };
  //clear data
  const clearData = () => {
    localStorage.removeItem('data');
    setData(null);
  };

  ////UI
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
//
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within FormProvider');
  }
  return context;
};
