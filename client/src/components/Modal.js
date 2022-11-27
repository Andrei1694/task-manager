import { useEffect, useState } from "react"

export default function Modal({ butt }) {
    const [isActive, setIsActive] = useState('')
    useEffect(() => {

        console.log()
    }, [])
    const openModal = () => {
        setIsActive('is-active')
    }
    const closeModal = () => {
        setIsActive('')
    }
    return (
        <>
            <button className="button is-primary" onClick={openModal}>Open Modal</button>
            <div id="modal-js-example is-active" className={`modal ${isActive}`}>
                <div className="modal-background"></div>

                <div className="modal-content">
                    <div className="box">
                        <p>Modal JS example</p>
                        sad
                    </div>
                </div>

                <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
            </div>
        </>
    )
}