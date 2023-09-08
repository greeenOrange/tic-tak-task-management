import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
// import { v4 as uuidv4 } from 'uuid';
function Modal({ showModal, setShowModal, formData, setFormData, setIsFormDataVisible }) {
    
    const [inProcess, setInProcess] = useState([]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(
            {    ...formData,
                [name]: value,
                 task: inProcess,
                completed: false, isEditiong: false,
                
            }
            )
            setIsFormDataVisible(true)
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
  const newCard = { ...formData, };
  const existingData = JSON.parse(localStorage.getItem('formData')) || [];
  const updatedData = [...existingData, newCard];
  localStorage.setItem('formData', JSON.stringify(updatedData));

  setShowModal(false);
    };

    return (
        <Transition.Root show={showModal} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setShowModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="mt-3 flex flex-col sm:gap-4 sm:ml-4 sm:mt-0 w-full">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                <input type="text"
                                                    placeholder="Type Title"
                                                    name="title"
                                                    value={formData?.title}
                                                    onChange={handleChange}
                                                    className="input input-bordered w-full" />
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <textarea
                                                    name="discription"
                                                    value={formData?.discription}
                                                    onChange={handleChange}
                                                    className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
                                            </div>
                                            <input type="date"
                                                name="date"
                                                value={formData?.date}
                                                onChange={handleChange} />
                                            <select
                                                name="priority"
                                                value={formData?.priority}
                                                onChange={handleChange}
                                                className="select select-bordered w-full max-w-xs">
                                                <option disabled selected>low</option>
                                                <option value="low">Low</option>
                                                <option value="medium">Medium</option>
                                                <option value="high">High</option>
                                                <option value="Now">Now!</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="submit"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto"
                                        >
                                            submit
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:w-auto"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Modal