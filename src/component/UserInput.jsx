const UserInput = ({ handleChange, userInput }) => {
  return (
    <>
      <div id="user-input">
        <form>
          <div className="input-group">
            <div>
              <label htmlFor="">Inıtıal Investment</label>
              <input
                type="number"
                required
                min={0}
                value={userInput.initialInvestment}
                onChange={(event) =>
                  handleChange("initialInvestment", event.target.value)
                }
              />
            </div>
            <div>
              <label htmlFor="">Annual Investment</label>
              <input
                type="number"
                required
                min={0}
                value={userInput.annualInvestment}
                onChange={(event) => handleChange("annualInvestment", event.target.value)}
              />
            </div>
          </div>
          <div className="input-group">
            <div>
              <label htmlFor="">Expected Return</label>
              <input
                type="number"
                required
                min={0}
                value={userInput.expectedReturn}
                onChange={(event) => handleChange("expectedReturn", event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Duration</label>
              <input
                type="number"
                required
                min={1}
                value={userInput.duration}
                onChange={(event) => handleChange("duration", event.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserInput;
