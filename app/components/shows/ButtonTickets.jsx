import styles from './show.module.css'

const ButtonTickets = ({ text, url }) => {
    return (
      <a href={url} target='_blank'>
        {text}
      </a>
    );
  };
  
  export default ButtonTickets;