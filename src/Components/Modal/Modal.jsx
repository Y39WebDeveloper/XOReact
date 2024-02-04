import { useContext } from 'react'
import { ModalContext } from '../../Context/ModalContext'
import './Modal.css'
import Restart from './Restart'
import Win from './Win'

function Modal() {

  const { show, modalMode } = useContext(ModalContext)

  return (
    <>
      {show && (
        <div className='modal'>
          <div className="modal-content">
            <div className="container">
              {modalMode === "winner" && <Win/>}
              {modalMode === "start" && <Restart/>}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal