import React from 'react';
import BankForm from '../components/BankForm.jsx';

const Bank = () => {
  return (
    <div className="md:p-20 p-5 w-full h-full">

      <div className="mt-8 mb-8">
        <h2 className="text-4xl font-semibold mb-10">Update Bank Details</h2>
        <p className='text-sm md:text-base'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          asperiores sequi eritatis amet quas saepe iusto nam nostrum vel ad sit
          accusamus harum ex hic, modi dolorem tempore doloremque placeat
          doloribus esse? Nostrum, laboriosam consequuntur! Non dolor
          repellendus vero aspernatur..
        </p>
      </div>

      <BankForm/>

      <div className="mt-8">
        <p className="text-center text-xs md:text-base">
          THE ABOVE DETAILS ARE FINAL AND WILL BE USED FOR PAYMENT. IF ANY OF
          THESE DETAILS ARE WRONG, PLEASE CONTACT YOUR MANAGER IMMEDIATELY! ALSO
          EMAIL THE SAME TO ACCOUNTS@EXAMBAZAAR.COM!
        </p>
        <hr className="mt-4" />
      </div>

    </div>
  );
};

export default Bank;
