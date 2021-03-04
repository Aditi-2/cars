import styled from "@emotion/styled";

export interface CardProps {
  manufacturer?: string;
  model?: string;
  vehicle?: string;
}

export const Card: React.FC<CardProps> = ({manufacturer, model, vehicle}) => {
  return (
    <CardStyle>
      {manufacturer && <p className="card-details">Manufacturer: <span>{manufacturer}</span></p>}
      {model && <p className="card-details">Model: <span>{model}</span></p>}
      {vehicle && <p className="card-details">Vehicle: <span>{vehicle}</span></p>}
    </CardStyle>
  );
};

const CardStyle = styled.div`
  padding: 1rem;
  margin: 1rem auto;
  border: 1px solid #dfdfdf;
  border-radius: 2px;
  text-align: left;
  width: 85%;
  @media only screen and (min-width: 1200px) {
    width: 30%;
  }
  & p {
    color: #7d7d7d;
    & span {
      color: #000000;
    }
  }
`;
