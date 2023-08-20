function Modal({ handleShowModal }) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center w-full h-min-screen bg-black bg-opacity-50"
      onClick={handleShowModal}
    >
      <div className="fixed inset-0 bg-black opacity-25"></div>
      <div className="bg-white p-0 md:p-6 z-10 rounded-3xl">
        <div className="w-96 pb-56 md:w-88 md:pb-56 relative z-50">
          <div className="absolute w-full h-full">
            <iframe
              title="video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/jgCVkQhlScc"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
