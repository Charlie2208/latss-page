import ButtonTickets from './ButtonTickets'
import styles from './show.module.css'

const Dates = () => {
    const datesInfo = [
        {month: 'agosto', day: '10', place: 'scd Bellavista', city: 'santiago, chile', tickets:'tickets', url:'https://www.eventrid.cl/eventos/scdbellavista/los-animales-tambien-se-suicidan'},
        {month: 'agosto', day: '11', place: 'journal café', city: 'Viña del Mar, chile', tickets:'tickets', url:'https://www.eventrid.cl/eventos/lagartijarecords/los-animales-tambien-se-suicidan-en-vina-del-mar'},
        {month: 'agosto', day: '19', place: 'mitad del mundo', city: 'antofagasta, chile', tickets:'tickets', url:'https://www.eventrid.cl/eventos/lagartijarecords/los-animales-tambien-se-suicidan-en-la-sala-scd-bellavista'},
        {month: 'agosto', day: '26', place: 'rock y sicodelia', city: 'la serena, chile', tickets:'tickets', url:'https://www.eventrid.cl/eventos/lagartijarecords/los-animales-tambien-se-suicidan-en-la-serena'},
        {month: 'octubre', day: '28', place: 'vichama', city: 'lima, perú', tickets:'tickets', url:'/'},
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