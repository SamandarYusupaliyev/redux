import { useNavigate } from "react-router-dom"

function SubmitBtn() {
    const navigation =useNavigate();
    const isSubmitting =navigation.state=="submitting"
  return (
    <button 
    type="submit"
    className="btn btn-primary btn-block"
    disabled={isSubmitting}
    >
    {isSubmitting}
    </button>
  )
}

export default SubmitBtn