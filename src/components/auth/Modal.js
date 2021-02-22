import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <div class="modal-content">
         <div class="modal-header">
        <button type="button" class="close" onClick={handleClose}><i class="fa fa-times"></i></button>
       
      </div>
        {children}
        </div>
      </section>
    </div>
  );
};
export default Modal