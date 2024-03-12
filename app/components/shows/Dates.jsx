import ButtonTickets from './ButtonTickets'
import styles from './show.module.css'

const Dates = () => {
    const datesInfo = [
        {month: 'Junio', day: '5', place: 'Foro Indie Rocks', city: 'CDMX, México', tickets:'Tickets', url:'https://www.passline.com/eventos/te-vi-en-un-planetario'},
    ]
    return(
        <div>
            {datesInfo.map((item, index)=>{
                return(
                    <div key={`dates-componente-${index}`} className={styles['dates-container']} >
                    <div className={styles['dates-month-day']}>
                        <div className={styles.month}>
                         {item.month}
                        </div>
                        <div className={styles.day}>
                         {item.day}
                        </div>
                    </div>
                    <div className={styles['place-city']}>
                        <div className={styles.place}>
                            {item.place}
                        </div>
                        <div className={styles.city}>
                            {item.city}
                        </div>
                    </div>
                    <div className={styles.button}>
                        <ButtonTickets text={item.tickets} url={item.url} />
                    </div>
                    </div>

                )
            })}
        </div>
    )
}

export default Dates