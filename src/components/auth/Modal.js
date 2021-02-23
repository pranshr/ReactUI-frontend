import './modal.css';

const Modal = ({ handleClose, show, children, headerClass, props }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <div class="modal-content">
      { headerClass !== null ?
        <div class="modal-header">
        <img src={`${process.env.PUBLIC_URL}/assets/images/modallogo.png`} alt="modallogo" />
         </div>
         
         : <div class="modal-header">
          <button type="button" class="close" onClick={handleClose}><i class="fa fa-times"></i></button>
         </div>
         }
        {children}
        </div>
      </section>
    </div>
  );
};
export default Modal