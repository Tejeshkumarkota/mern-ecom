import React, { Fragment,useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Plus,Trash2 } from "react-feather";

const FaqForm = () => {
    const [formValues, setFormValues] = useState([{ name: "", email : ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }
    return ( 
        <Fragment>
            {/* <Form className="cstm_sprt">
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Question ?</Form.Label>
                    <Form.Control type="email" placeholder="Add Question" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Answer</Form.Label>
                    <Form.Control type="email" placeholder="Write Answer" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="title">
                    <Form.Label className="add-more c-pointer"><Plus/> Add one more Q&A</Form.Label>
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button variant="primary"> Submit </Button>
                </div>
            </Form> */}

            <form  onSubmit={handleSubmit} className="cstm_sprt">
          {formValues.map((element, index) => (
            <div className="" key={index}>
              <div className="form-group mb-3">
              <label className="form-label">Question ?</label>
              <input type="text" name="name" placeholder="Add Question" className="form-control" value={element.name || ""} onChange={e => handleChange(index, e)} />
              </div>
              <div className="form-group mb-3 position-relative">
              <label className="form-label">Add Question</label>
              <input type="text" name="email" placeholder="Write Answer" className="form-control" value={element.email || ""} onChange={e => handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="text-danger p-0 d-flex align-items-center remove mob-remove" onClick={() => removeFormFields(index)}><Trash2 /></button> 
                : null
              }
              </div>
              
            </div>
          ))}
          <div className="form-group">
            <lable className="add add-more c-pointer" onClick={() => addFormFields()}><Plus/> Add one more Q&A </lable>
          </div>
          <div className="d-flex justify-content-end">
                    <Button variant="primary"> Submit </Button>
                </div>
           
      </form>

        </Fragment>
     );
}
 
export default FaqForm; 