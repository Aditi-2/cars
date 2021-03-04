import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { Toast } from "../../redux/slice/toast";
import { useEffect } from "react";

export interface ToastMessageProps {
  message: string;
}

export const ToastMessage: React.FC<ToastMessageProps> = ({ message }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(Toast.actions.removeError()), 2000)
  }, []);

  const clearMessage = () => {
    dispatch(Toast.actions.removeError());
  };

  return (
    <ToastMessageStyle>
      <div className="toast-message">
        <div className={"message message-error"}>
          <p>{message}</p>
          <FontAwesomeIcon
            icon={faTimes}
            className="close-icon"
            onClick={clearMessage}
          />
        </div>
      </div>
    </ToastMessageStyle>
  );
};

const ToastMessageStyle = styled.div`
  position: absolute;
  bottom: 2rem;
  width: 100%;

  & .toast-message {
    width: 90%;
    margin: 0 auto;

    @media only screen and (min-width: 1200px) {
      width: 25%;
    }
    & .message {
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;
      border-radius: 5px;
      -webkit-box-shadow: 1px 2px 9px 1px rgb(0 0 0 / 27%);
      box-shadow: 1px 2px 9px 1px rgb(0 0 0 / 27%);
      animation: fadeIn ease 2s;
      -webkit-animation: fadeIn ease 2s;

      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      & .close-icon {
        margin-top: 1.1rem;
        padding-left: 12px;
      }
    }

    & .message-error {
      background-color: #ea462f;
      color: #fff;
    }
  }
`;
