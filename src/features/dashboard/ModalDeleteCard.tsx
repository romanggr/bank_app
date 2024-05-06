import Modal from "../../ui/Modal.tsx";
import { FiMinus } from "react-icons/fi";
import Button from "../../ui/Button.tsx";

const ModalDeleteCard = () => {
    return (
        <Modal>
            <Modal.Open opens="add">
                <Button size={"medium"} color={"orange"}>Delete card <FiMinus/></Button>
            </Modal.Open>
            <Modal.Window name="add">
                <div>fast</div>
            </Modal.Window>
        </Modal>
    )

}

export default ModalDeleteCard