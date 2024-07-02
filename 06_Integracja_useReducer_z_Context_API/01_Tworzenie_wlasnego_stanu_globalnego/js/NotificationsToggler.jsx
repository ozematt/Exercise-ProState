export const NotificationsToggler = () => {
  return (
    <div>
      <h2>Notifications</h2>
      <div>
        <label htmlFor="on">On</label>
        <input type="radio" id="on" name="notifications" value="on" />
      </div>
      <div>
        <label htmlFor="off">Off</label>
        <input type="radio" id="off" name="notifications" value="off" />
      </div>
    </div>
  );
};
