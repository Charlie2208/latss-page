import ButtonTickets from './ButtonTickets'
import styles from './show.module.css'

const Dates = () => {
    const datesInfo = [
        {month: 'Agosto', day: '10', place: 'Scd Bellavista', city: 'Santiago, Chile', tickets:'Tickets', url:'https://www.eventrid.cl/eventos/scdbellavista/los-animales-tambien-se-suicidan'},
        {month: 'Agosto', day: '11', place: 'Journal Café', city: 'Viña del Mar, Chile', tickets:'Tickets', url:'https://www.eventrid.cl/eventos/lagartijarecords/los-animales-tambien-se-suicidan-en-vina-del-mar'},
        {month: 'Agosto', day: '19', place: 'Mitad del Mundo', city: 'Antofagasta, Chile', tickets:'Tickets', url:'https://www.eventrid.cl/eventos/lagartijarecords/los-animales-tambien-se-suicidan-en-la-sala-scd-bellavista'},
        {month: 'Agosto', day: '26', place: 'Rock y Sicodelia', city: 'La Serena, Chile', tickets:'Tickets', url:'https://www.eventrid.cl/eventos/lagartijarecords/los-animales-tambien-se-suicidan-en-la-serena'},
        {month: 'Octubre', day: '28', place: 'Vichama', city: 'Lima, Perú', tickets:'Tickets', url:'https://wa.me/525636360096'},
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