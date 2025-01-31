import React from 'react'

const AddRecipe = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <h1> HOTEL MOONLIGHT </h1>
            <img src="https://phsengineersltd.co.uk/wp-content/uploads/2019/07/Hotel-Kitchen-Maintenance-Tips-1024x538.jpg" alt="" />

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
        <label htmlFor="" className="form-label">Recipe Title</label>
        <input type="text" className="form-control" />
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label htmlFor="" className="form-label">Recipe Creator</label>
    <input type="text" className="form-control" />
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label">Description</label>
        <textarea name="" id="" className="form-control"></textarea>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label">Upload Image</label>
        <input type="file" name="" id="" className="form-control" />
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label">Recipe Type</label>
        <select name="" id="" className="form-select">
            <option value="select any">select any</option>
            <option value="veg">veg</option>
            <option value="non veg">non veg</option>
        </select>
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label">Ingridients</label>
        <input type="text" className="form-control" />
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <button className="btn btn-primary">Submit</button>
    </div>
</div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default AddRecipe
