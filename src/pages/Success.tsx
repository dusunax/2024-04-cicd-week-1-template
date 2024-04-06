import { StBody } from "./Home";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <StBody>
      <div className="innerBody">
        <h1>🥚🐣 The code deployment seems to have been successful.🐥</h1>
        <Button text="back to Home" onClick={() => navigate(`/`)} />
      </div>
    </StBody>
  );
};

export default Success;
