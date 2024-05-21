import CarouselBox from '../carousel/CarouselBox.jsx';
import './Rewievs.scss'

function Reviews() {
    return (
        <>
            <div>
                <div className='reviews-title'> <h2>Отзывы наших клиентов и успешные проекты</h2></div>



            </div>
            <CarouselBox>
                <div> Отзыв 1: "Благодаря сепаратору от InSystem, мы смогли оптимизировать процесс переработки и значительно сократить затраты." - ООО "ЭкоРесурс"</div>
                <div> Кейс-стади: "Проект 'Зеленый город': интеграция баллистического сепаратора InSystem в систему управления муниципальными отходами."</div>
                <div>Отзыв 3</div>
                <div>Отзыв 4</div>
                <div>Отзыв 5</div>
            </CarouselBox>

        </>
    );
}

export default Reviews;