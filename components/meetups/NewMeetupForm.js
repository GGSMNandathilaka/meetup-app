import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    props.onAddMeetup(meetupData);
  }

  return (
    <form className="needs-validation m-5" noValidate onSubmit={submitHandler}>
      <div className="row g-3">
        <div className="col-6">
          <div className="col-12">
            <label htmlFor="meetupTitle" className="form-label">
              Meetup Title
            </label>
            <input
              type="text"
              className="form-control"
              id="meetupTitle"
              placeholder="A sample Meetup"
              required
              ref={titleInputRef}
            />
            <div className="invalid-feedback">
              Valid meetup title is required.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="meetupImage" className="form-label">
              Meetup Image
            </label>
            <input
              type="text"
              className="form-control"
              id="meetupImage"
              required
              ref={imageInputRef}
            />
            <div className="invalid-feedback">
              Valid meetup image is required.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
              required
              ref={addressInputRef}
            />
            <div className="invalid-feedback">Please enter your address.</div>
          </div>

          <div className="col-12">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              rows="5"
              required
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <button className="btn btn-primary btn-lg m-5" type="submit">
            Add Meetup
          </button>
        </div>
        <div className="col-6"></div>
      </div>
    </form>
  );
}

export default NewMeetupForm;
