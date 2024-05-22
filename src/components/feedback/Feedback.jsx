import { useState } from 'react';
import './Feedback.scss'

function Feedback() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Действия по отправке формы, например, отправка данных на сервер
    console.log(formData);
    // Очистка формы
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };


  return (

    <div className="feedback-wrapper">
      <div className="feedback-container">
        <div className="feedback-title"><h1>Оставьте заявку</h1></div>
        <div className='feedback-block'>
          <div className="feedback-text"><p>Интересуетесь нашими продуктами или нуждаетесь в консультации? <br /> <br /> Заполните форму ниже, и наш специалист свяжется с вами в ближайшее время.</p></div>
          <div className='feedback-formWrapper'>
            <form onSubmit={handleSubmit} className='feedback-form'>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Имя" />
              <input type='number' name='phone' value={formData.phone} onChange={handleChange} placeholder='Телефон' />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
              <textarea className='feedback-textarea' name="message" value={formData.message} onChange={handleChange} placeholder="Сообщение"></textarea>
              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Feedback;
