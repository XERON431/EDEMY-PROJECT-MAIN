import { useState } from "react";

const CourseCreateForm = ({
  handleSubmit,
  handleImage,
  handleChange,
  values,
  setValues,
  preview,
}) => {
  const [buttonValue, setButtonValue] = useState("Save & Continue");

  const handleCostChange = (e) => {
    setValues({ ...values, cost: parseInt(e.target.value) });
  };

  const handlePaidChange = (e) => {
    setValues({ ...values, paid: e.target.value == "paid", cost: 0 });
    setButtonValue(e.target.value == "paid" ? "Save & Continue" : "Submit");
  };

  const renderCostInput = () => {
    if (values.paid) {
      return (
        <div className="form-group d-flex align-items-center mb-3">
          <label htmlFor="cost" className="mr-2">Cost:</label>
          <select
            name="cost"
            className="form-control"
            value={values.cost}
            onChange={handleCostChange}
          >
            {[...Array(100)].map((_, index) => (
              <option key={index + 1} value={index * 100 + 99}>
                {index * 100 + 99}
              </option>
            ))}
          </select>
        </div>
      );
    }
    return null;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group mb-3">
        <textarea
          name="description"
          cols="7"
          rows="7"
          placeholder="Description"
          value={values.description}
          className="form-control"
          onChange={handleChange}
        ></textarea>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <div className="form-group">
            {/* Select input for paid/free */}
            <select
              name="paid"
              className="form-control"
              value={values.paid ? "paid" : "free"}
              onChange={handlePaidChange}
            >
              <option value="paid">Paid</option>
              <option value="free">Free</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          {renderCostInput()}
        </div>
      </div>
      <div className="form-group mb-3">
        <input
          type="text"
          name="category"
          className="form-control"
          placeholder="Category"
          value={values.category}
          onChange={handleChange}
        />
      </div>
      <div className="form-row mb-3">
        <div className="col">
          <div className="form-group">
            <label className="btn btn-outline-secondary btn-block text-left">
              {values.loading ? "Uploading" : "Image Upload"}
              <input
                type="file"
                name="image"
                onChange={handleImage}
                accept="image/*"
                hidden
              />
            </label>
          </div>
        </div>
        <div className="col">
          {preview && (
            <img src={preview} alt="Preview" style={{ width: '100px', height: 'auto' }} />
          )}
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button
            onClick={handleSubmit}
            disabled={values.loading || values.uploading}
            className="btn btn-primary"
            type="submit"
          >
            {values.loading ? "Saving..." : buttonValue}
          </button>
        </div>
      </div>
    </form>
  );
};

export default CourseCreateForm;
