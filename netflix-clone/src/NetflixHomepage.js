import React, { useState } from 'react';
import './NetflixHomepage.css';

function navigateToPage(page) {
    window.location.href = page;
}

const NetflixHomepage = () => {
    const [isRussian, setIsRussian] = useState(false);

    const toggleLanguage = () => {
        setIsRussian(!isRussian);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailInput = document.querySelector('input[type="email"]');
        const email = emailInput.value;
        localStorage.setItem('email', email);
        navigateToPage('/Appp.html');
    };
    return (
        <div className="netflix-homepage">
                <div className="header">
                    <nav>
                        <img className="logo" src="logo.png" alt="logo" />
                        <div>
                            <button className="lang-btn" onClick={toggleLanguage}>
                                <i className="fa-solid fa-globe"></i>{' '}
                                {isRussian ? 'Русский' : 'English'}{' '}
                                <img src="down-icon.png" alt="down-icon" />
                            </button>
                            <button onClick={() => navigateToPage('/Appp.html')}>
                                {isRussian ? 'Войти' : 'Sign In'}
                            </button>
                        </div>
                    </nav>
                </div>
            <div className="rows"></div>
            <div className="header-content">
                <h1>{isRussian ? 'Бесконечное количество фильмов, сериалов и многое другое.' : 'Unlimited movies, TV shows and more.'}</h1>
                <h3>{isRussian ? 'Смотрите везде. Отмените в любое время.' : 'Watch anywhere. Cancel anytime.'}</h3>
                <p>{isRussian ? 'Готовы к просмотру? Введите свой адрес электронной почты для создания или перезапуска вашей подписки.' : 'Ready to watch? Enter your email to create or restart your membership.'}</p>
                <form action="#" className="email-signup" onSubmit={handleSubmit}>
                    <input type="email" placeholder={isRussian ? 'Адрес электронной почты' : 'Email address'} required />
                    <button type="submit" onClick={() => navigateToPage('/Appp.html')}>{isRussian ? 'Начать' : 'Get Started'}</button>
                </form>

            </div>

            <div className="features">
                <div className="row">
                    <div className="text-col">
                        <h2>{isRussian ? 'Смотрите на своем телевизоре.' : 'Enjoy on your TV.'}</h2>
                        <p>
                            {isRussian
                                ? 'Смотрите на смарт-телевизорах, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray плеерах и многих других устройствах.'
                                : 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'}
                        </p>
                    </div>
                    <div className="img-col">
                        <img src="feature-1.png" alt="feature-1" />
                    </div>

                </div>  <div className='rows'></div>

                <div className="row">
                    <div className="img-col">
                        <img src="feature-2.png" alt="feature-2" />
                    </div>

                    <div className="text-col">
                        <h2>{isRussian ? 'Загружайте шоу для оффлайн-просмотра.' : 'Download your shows to watch offline.'}</h2>
                        <p>
                            {isRussian
                                ? 'Сохраняйте свои любимые шоу и всегда найдете, что посмотреть.'
                                : 'Save your favorites easily and always have something to watch.'}
                        </p>
                    </div>
                </div>
                <div className='rows'></div>
                <div className="row">
                    <div className="text-col">
                        <h2>{isRussian ? 'Смотрите везде.' : 'Watch everywhere.'}</h2>
                        <p>
                            {isRussian
                                ? 'Стримьте неограниченное количество фильмов и сериалов на свой смартфон, планшет, ноутбук и телевизор.'
                                : 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'}
                        </p>
                    </div>
                    <div className="img-col">
                        <img src="feature-3.png" alt="feature-3" />
                    </div>
                </div>
                <div className='rows'></div>
                <div className="row">
                    <div className="img-col">
                        <img src="feature-4.png" alt="feature-4" />
                    </div>
                    <div className="text-col">
                        <h2>{isRussian ? 'Создавайте профили для детей.' : 'Create profiles for children.'}</h2>
                        <p>
                            {isRussian
                                ? 'Пошлите детей в путешествия с их любимыми персонажами в специально созданном для них месте – бесплатно с вашей подпиской.'
                                : 'Send children on adventures with their favorite characters in a space made just for them—free with your membership.'}
                        </p>
                    </div>
                </div>
            </div>
            <div className='rows'></div>
            <div className="faq">
                <h2>{isRussian ? 'Часто задаваемые вопросы' : 'Frequently Asked Questions'}</h2>

                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first" />
                        <label htmlFor="first">
                            {isRussian ? 'Что такое Netflix?' : 'What is Netflix?'}
                        </label>
                        <div className="content">
                            <p>
                                {isRussian
                                    ? 'Netflix - это потоковый сервис, предлагающий широкий выбор награжденных телешоу, фильмов, аниме, документальных фильмов и многого другого - на тысячах устройств, подключенных к интернету. Вы можете смотреть столько, сколько захотите, когда захотите, без рекламы - все это по одной низкой ежемесячной цене. Всегда есть что-то новое для открытия, и каждую неделю добавляются новые телешоу и фильмы!'
                                    : 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without ads, all for one low monthly price. There\'s always something new to discover, and new TV shows and movies are added every week!'}
                            </p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second" />
                        <label htmlFor="second">
                            {isRussian ? 'Сколько стоит Netflix?' : 'How much does Netflix cost?'}
                        </label>
                        <div className="content">
                            <p>
                                {isRussian
                                    ? 'Смотрите Netflix на своем смартфоне, планшете, Smart TV, ноутбуке или устройстве для потоковой передачи, все это по фиксированной месячной плате. Тарифы варьируются от ₹149 до ₹649 в месяц. Нет дополнительных затрат, нет договоров.'
                                    : 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.'}
                            </p>
                        </div>
                    </li>

                    <li>
                        <input type="radio" name="accordion" id="third" />
                        <label htmlFor="third">
                            {isRussian ? 'Где я могу смотреть?' : 'Where can I watch?'}
                        </label>
                        <div className="content">
                            <p>
                                {isRussian
                                    ? 'Смотрите где угодно, в любое время. Войдите в свою учетную запись Netflix, чтобы смотреть моментально на веб-сайте netflix.com с вашего персонального компьютера или на любом подключенном к интернету устройстве, которое предлагает приложение Netflix, включая смарт-телевизоры, смартфоны, планшеты, стриминговые медиаплееры и игровые консоли. Вы также можете загружать свои любимые шоу с помощью приложения iOS, Android или Windows 10. Используйте загрузки, чтобы смотреть, когда вы в пути и без интернет-соединения. Возьмите Netflix с собой везде.'
                                    : 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you\'re on the go and without an internet connection. Take Netflix with you anywhere.'}
                            </p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="fourth" />
                        <label htmlFor="fourth">
                            {isRussian ? 'Как отменить подписку?' : 'How do I cancel?'}
                        </label>
                        <div className="content">
                            <p>
                                {isRussian
                                    ? 'Netflix гибкий. Здесь нет навязчивых контрактов и обязательств. Вы можете легко отменить свою учетную запись онлайн двумя кликами. Нет платы за отмену – начните или остановите свою учетную запись в любое время.'
                                    : 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'}
                            </p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="fifth" />
                        <label htmlFor="fifth">
                            {isRussian ? 'Что можно посмотреть на Netflix?' : 'What can I watch on Netflix?'}
                        </label>
                        <div className="content">
                  <p>
                      {isRussian
                                ? 'Netflix предлагает обширную библиотеку художественных фильмов, документальных фильмов, телепередач, аниме, награжденных оригиналов Netflix и многое другое. Смотрите столько, сколько хотите, в любое удобное время.'
                                : 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
                      }
                  </p>
                </div>
            </li>
                    <li>
                        <input type="radio" name="accordion" id="sixth" />
                        <label htmlFor="sixth">
                            {isRussian ? 'Подходит ли Netflix для детей?' : 'Is Netflix good for Kids?'}
                        </label>
                        <div className="content">
                            <p>
                                {isRussian
                                    ? 'В опыте Netflix для детей предусмотрено включение родительского контроля, чтобы родители могли контролировать, как дети смотрят дружественные семейные телешоу и фильмы в своем собственном пространстве. Профили для детей имеют родительский контроль с кодом PIN, который позволяет ограничивать рейтинг зрелости просматриваемого детьми контента и блокировать определенные названия, которые вы не хотите, чтобы дети видели.'
                                    : 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'}
                            </p>
                        </div>
                    </li>
        </ul>

                <small>
                    {isRussian
                        ? 'Готовы смотреть? Введите свой адрес электронной почты, чтобы создать или перезапустить свою подписку.'
                        : 'Ready to watch? Enter your email to create or restart your membership.'}
                </small>

                <form action="#" className="email-signup">
                    <input type="email" placeholder={isRussian ? 'Адрес электронной почты' : 'Email address'} required />
                    <button type="submit">
                        {isRussian ? 'Начать' : 'Get Started'}
                    </button>
                </form>

            </div>


      <footer>
      <div class="footer">
          <h2>
              {isRussian
                  ? 'Есть вопросы? Звоните по номеру 000-000-000-0000'
                  : 'Questions? Call 000-000-000-0000'}
          </h2>

          <div class="row">
            <div class="col">
                <a href="#">
                    {isRussian ? 'Часто задаваемые вопросы' : 'FAQ'}
                </a>
                <a href="#">
                    {isRussian ? 'Взаимоотношения с инвесторами' : 'Investor Relations'}
                </a>
                <a href="#">
                    {isRussian ? 'Конфиденциальность' : 'Privacy'}
                </a>
                <a href="#">
                    {isRussian ? 'Скорость соединения' : 'Speed Test'}
                </a>
            </div>
            <div class="col">
                <a href="#">
                    {isRussian ? 'Центр помощи' : 'Help Centre'}
                </a>
                <a href="#">
                    {isRussian ? 'Вакансии' : 'Jobs'}
                </a>
                <a href="#">
                    {isRussian ? 'Предпочтения по файлам cookie' : 'Cookie Preferences'}
                </a>
                <a href="#">
                    {isRussian ? 'Юридические уведомления' : 'Legal Notices'}
                </a>
            </div>
            <div class="col">
                <a href="#">
                    {isRussian ? 'Учетная запись' : 'Account'}
                </a>
                <a href="#">
                    {isRussian ? 'Способы просмотра' : 'Ways to Watch'}
                </a>
                <a href="#">
                    {isRussian ? 'Корпоративная информация' : 'Corporate Information'}
                </a>
                <a href="#">
                    {isRussian ? 'Только на Netflix' : 'Only on Netflix'}
                </a>
            </div>
            <div class="col">
                <a href="#">
                    {isRussian ? 'Медиа-центр' : 'Media Centre'}
                </a>
                <a href="#">
                    {isRussian ? 'Условия использования' : 'Terms of Use'}
                </a>
                <a href="#">
                    {isRussian ? 'Свяжитесь с нами' : 'Contact Us'}
                </a>
            </div>
        </div>

          <button className="lang-btn" onClick={toggleLanguage}>
              <i className="fa-solid fa-globe"></i>{' '}
              {isRussian ? 'Русский' : 'English'}{' '}
              <img src="down-icon.png" alt="down-icon" />
          </button>

        <p class="copyright-text">Netflix </p>
    </div>
        <p>&copy; 2023 Netflix</p>
      </footer>
    </div>
  );
 };


export default NetflixHomepage;