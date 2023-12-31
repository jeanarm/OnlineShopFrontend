import "../../chats.css";

const UserChatComponent = () => {
  return (
    <>
      <input type="checkbox" id="check" />
      <label className="chat-btn" htmlFor="check">
      <span className="position-absolute top-1 start-10 translate-middle p-2 bg-success border border-light rounded-circle"></span>
        <i className="bi bi-chat-dots-fill comment"></i>
        <i className="bi bi-x-circle close"></i>
      </label>

      <div className="chat-wrapper">
        <div className="chat-header">
          <h6>Let's Chat-online</h6>
        </div>
        <div className="chat-form">
          <div className="cht-msg">
            {Array.from({ length: 20 }).map((_, id) => (
              <div key={id}>
                <p>
                  <b>You wrote:</b> Hello, world! This is a toast message.
                </p>
                <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                  <b>Support wrote:</b> Hello, congratulations for getting this
                  far.
                </p>
              </div>
            ))}
          </div>
          <textarea
            id="clientChatMsg"
            className="form-control"
            placeholder="Your Text Message"
          ></textarea>

          <button className="btn btn-success btn-block">Send</button>
        </div>
      </div>
    </>
  );
};
export default UserChatComponent;
