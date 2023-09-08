import { useEffect, useState } from "react"
import Modal from "../Modal/Modal";

function ToDoCard({ formData, setFormData }) {
    const [showModal, setShowModal] = useState(false);
    const [isFormDataVisible, setIsFormDataVisible] = useState(false);
    const [formSubmissions, setFormSubmissions] = useState([]);
    const [cards, setCards] = useState([]);
    const storedFormData = localStorage.getItem('formData');

    console.log(storedFormData);
    const handleShowModal = () => {
        setShowModal(!showModal)
        console.log(!showModal);
    };

    const handleClearLocalStorage = () => {
        localStorage.removeItem('formData');
        setFormData({
            title: '',
            date: '',
            discription: '',
            priority: 'low',
        });
        setIsFormDataVisible(false);
      };

      const handleAddCard = () => {
        const newCard = { ...formData, id: Date.now() };
        setCards([...cards, newCard]);
        setFormData({
          title: '',
          date: '',
          description: '',
          priority: 'low',
        });
      };

      

    useEffect(() => {
        const storedFormData = localStorage.getItem('formData');
        if (storedFormData) {
            setFormData(JSON.parse(storedFormData));
            setIsFormDataVisible(true);
        }
    }, []);

    return (
        <section className="todo-list" >
            <div className="container">
                <div className="grid grid-cols-3 gap-8">
                    <div className="rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="card_title w-full rounded-md">
                            <h3 className="p-1 bg-black text-right text-white">In Processing</h3>
                            <button className="btn" onClick={handleShowModal}>open modal</button>
                            {showModal &&
                                <Modal showModal={showModal} setShowModal={setShowModal} setIsFormDataVisible={setIsFormDataVisible} formData={formData} setFormData={setFormData} formSubmissions={formSubmissions} setFormSubmissions={setFormSubmissions}/>
                            }

                            {isFormDataVisible && (
                            <div className="flex flex-cols align-center gap-2 space-between">
                                <div className="list-items w-full py-3 p-2 bg-teal-600 mb-2 flex align-center justify-between">
                                    <div
                                        key={formData?.id}
                                    >{formData?.title}</div>
                                    <div className="flex gap-2">
                                    <button className="" onClick={handleShowModal}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                    </button>
                                    <button
                                    onClick={handleClearLocalStorage}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>

                                    </button>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                        <button 
                        onClick={handleAddCard}
                        className="rounded hover:rounded-lg border-stone-900 bg-slate-600 p-2 hover:cursor-pointer">
                            + Add Card
                        </button>
                    </div>
                    <div className="rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg p-3">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta dolores repudiandae quam maxime doloremque quaerat. Aperiam dolores illum blanditiis. Quasi laborum quae, facere consequuntur placeat saepe alias accusantium. Suscipit!</p>
                    </div>
                    <div className="rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg p-3">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus dicta dolores repudiandae quam maxime doloremque quaerat. Aperiam dolores illum blanditiis. Quasi laborum quae, facere consequuntur placeat saepe alias accusantium. Suscipit!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ToDoCard