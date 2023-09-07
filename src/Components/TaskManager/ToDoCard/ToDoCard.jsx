import { useState } from "react"
import Modal from "../Modal/Modal";

function ToDoCard() {
    const [value, setValue] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(!showModal)
        console.log(!showModal);
    };
    const handleTitle = (e) => {
        e.preventDefault()
        console.log(value);
    }
    return (
        <section className="todo-list" >
            <div className="container">
                <div className="grid grid-cols-3 gap-8">
                    <div className="rounded-lg bg-white text-left shadow-xl sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="card_title w-full rounded-md">
                            <h3 className="p-1 bg-black text-right text-white">In Processing</h3>
                            <button className="btn" onClick={handleShowModal}>open modal</button>
                            {showModal &&
                                <Modal showModal={showModal} setShowModal={setShowModal}/>
                            }
                        </div>
                        <button className="rounded hover:rounded-lg border-stone-900 bg-slate-600 p-2 hover:cursor-pointer">
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