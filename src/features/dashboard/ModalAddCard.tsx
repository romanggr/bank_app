import Modal from "../../ui/Modal.tsx";
import { FiPlus } from "react-icons/fi";
import Button from "../../ui/Button.tsx";



const ModalAddCard = () => {
    return (
        <Modal>
            <Modal.Open opens="add">
                <Button size={"medium"} color={"purple"}>Add card <FiPlus/></Button>
            </Modal.Open>
            <Modal.Window name="add">
                <div>fast</div>
            </Modal.Window>
        </Modal>
    )

}

export default ModalAddCard