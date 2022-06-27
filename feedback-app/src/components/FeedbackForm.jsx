import Card from "./shared/Card";
import { useState, useEffect } from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import {useContext} from 'react'
import FeedbackContext from "../context/FeedbackContext";


function FeedbackForm() {
 
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [warning, setwarning] = useState('');
  const [rating, setRating] = useState(10);

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
    if(feedbackEdit.edit === true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])


  const rater = (r) => {
    setRating(r)
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      if(text.trim().length > 10){
            const newFeedback= {
                text,
                rating
            }

        if(feedbackEdit.edit === true){
          updateFeedback(feedbackEdit.item.id, newFeedback)
        }
        
        else{
          addFeedback(newFeedback)  
        }
        
        setText('')
      }
      
  }

  const handleTextChange = (e) => {
    if(text === ''){
        setBtnDisabled(true)
        setwarning(null)
    }

    else if(text !== '' && text.trim().length <= 10){
        setBtnDisabled(true)
        setwarning('You must type at least 10 characters')
    }

    else{
        setBtnDisabled(false)
        setwarning(null)
    }

    setText(e.target.value);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate us?</h2>
        <RatingSelect select={rater} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
              Send
          </Button>
        </div>

        {warning && <div className="warning">{warning}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
