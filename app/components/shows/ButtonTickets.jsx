import Link from "next/link";

const ButtonTickets = ({ text, url }) => {
    return (
      <a href={url} target='_blank'>
        {text}
      </a>
    );
  };
  
  export default ButtonTickets;