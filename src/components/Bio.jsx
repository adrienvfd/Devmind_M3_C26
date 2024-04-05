const Bio = ({ birthday, description, hobbies }) => (
    <div>
      <h1>Bio</h1>
      <div>
        <h5>Birthday: {birthday}</h5>
        <h5>Description: {description}</h5>
        <h5>Hobbies: {hobbies.join(', ')}</h5>
      </div>
    </div>
  );
export default Bio;