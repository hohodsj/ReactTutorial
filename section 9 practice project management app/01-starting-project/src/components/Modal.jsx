import { forwardRef, useImperativeHandle, useRef } from "react";
import {createPortal} from 'react-dom';
import Button from "./Button";

const Modal = forwardRef(function Modal({children, buttonCaption}, ref) {
    const dialogRef = useRef();
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogRef.current.showModal();
            }
        }
    })
    return createPortal(
        <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"> {/* backdrop:bg-stone-900/90 is a Tailwind CSS class that applies a semi-transparent background to the modal */}
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button>{buttonCaption}</Button>
            </form>
        </dialog>, document.getElementById('modal-root')
    )
})

export default Modal;