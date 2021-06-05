import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupData) {
    console.log(enteredMeetupData);
  }

  return (
    <div className="container">
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </div>
  );
}

export default NewMeetupPage;
