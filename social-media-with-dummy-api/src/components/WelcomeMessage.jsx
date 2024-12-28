const WelcomeMessage = ({handleDummyData}) => {
  return (
    <div className="empty-message">
      <p>No posts to display. Create a new post!</p>
      <button className="fetch-dummy-data-btn">
        Fetch Dummy Data From Server
      </button>
    </div>
  );
};

export default WelcomeMessage;
