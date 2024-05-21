
import './Description.scss'

function Description() {
    return (
        <>
            <div>
                <div className="description-title">
                    <h2>Как это работает?</h2>
                </div>
                <div className='description-container'>
                    <div className='description-line'></div>
                    <div className='description-text'>
                        <p>Баллистический сепаратор InSystem использует уникальную технологию для разделения твердых отходов по плотности и форме. В процессе работы материалы подвергаются воздействию динамической сепарационной системы, которая эффективно разделяет их на фракции. Это позволяет значительно увеличить процент переработки материалов и снизить затраты на их утилизацию.</p>

                    </div>
                    <div className='description-image'>
                        <img src='100tons.png' alt='100tons'></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Description;