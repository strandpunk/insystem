import './Characters.scss'

function Characters() {
  return (
    <>
      <div className='characters-wrapper'>
        <div className='characters-container'>
          <div className="characters-title">
            <h2>Технические параметры</h2>
          </div>
          <div className='characters-text'>
            {/* <div className='characters-line'></div> */}
            <div>
              <ul>
                <li className='characters-li'>Габариты: 2800x1600x4200 мм.</li>
                <li className='characters-li'> Мощность двигателя: 10 кВт.</li>
                <li className='characters-li'>Производительность: до 6 тонн в час.</li>
                <li className='characters-li'>Материалы корпуса: прочная нержавеющая сталь, устойчивая к коррозии и износу.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='characters-image'>
          <img src='product-1.png' alt='product1'></img>
        </div>
      </div>
    </>
  );
}

export default Characters;