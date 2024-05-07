import React, { useState } from 'react';

import Input from './Input.jsx';
import { inputs } from '../constants/constant.jsx';

const BankForm = () => {
    const [inputDisabled, setInputDisabled] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setInputDisabled(true);
  };
  return (
    <div className="md:flex-row p-10 rounded-lg border border-gray-300">
      <form className="md:flex-col-2" onSubmit={(event) => onSubmitHandler(event)}>
        {inputs.map((item) => (
          <Input key={item.key} item={item} disabled={inputDisabled} />
        ))}

        <div className="mb-4 grid md:grid-cols-2">
          <label className="block text-gray-700 font-bold mb-2">CONSENT</label>
          <div
            className={` ${
              inputDisabled ? '' : 'flex'
            } w-full px-3 py-2 border border-gray-300 rounded-md `}
            rows={3}
          >
            {inputDisabled ? (
              ''
            ) : (
              <input
                type="checkbox"
                className="h-8 w-8"
                disabled={inputDisabled}
                required
              />
            )}

            <p className="mx-4 text-xs md:text-base text-gray-700">
              Lorem ipsum dolor sit amet consectetur. Cum perspiciatisn quisquam
              nam ullam nesciunt! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Eligendi, tenetur?
            </p>

            {inputDisabled ? (
              <p className="my-2 text-xs md:text-base font-bold mx-4 text-gray-800">
                FILLED ON FEB 9, 2023
              </p>
            ) : (
              ''
            )}
          </div>
        </div>

        {inputDisabled ? (
          ''
        ) : (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
            >
              Save
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default BankForm;
