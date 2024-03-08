# project_weather-widget / Виджет с прогнозом погоды

**Для запуска проекта выполнить действия:**

- клонировать репозиторий на свой ПК: git clone https://github.com/Ivan-ISS/project_weather-widget.git;<br>
- последовательно выполнить команды в терминале: npm install ==> npm run start;<br>

---

## Цель:
***Создать виджет с прогнозом погоды***

## Описание проекта
__Проект *Виджет с прогнозом погоды*__ - это виджет, который сообщает пользователю о погоду в его локации или любом другом населённом пункте.<br>

__Проект *Виджет с прогнозом погоды*__ представлен в виде приложения, которое позволяет:
- Получать информацию о погоде в любом городе по запросу (запрос вводится в поле *"Поиска"*);
- Получать информацию о погоде по текущей геолокации пользователя (кнопка *"Геолокация"*);
- Выбрать, на какой период получить и отобразить информацию о погоде: на текущее время или на ближайшие 5 дней.<br>

**Все данные о погоде собираются из OpenWeatherMap по API**
**Проект написан на React**

__Интерфейс приложения__ представлен элементами:
- *"Поле поиска"*, - поисковая строка для ввода города или населенного пункта;
- кнопка *"Поиск"* - при клике отправляется запрос на поиск информации о погоде;
- кнопка *"Геолокация"* - для получения текущей геолокации пользователя и выполнения запроса о погоде по текущей геолокации;
- кнопка *"Показать погоду на 5 суток / Показать погоду сейчас"* - переключатель для выбора, какие данные получить. Текущую погоду или прогноз на 5 дней.<br>

## Технологии:
<img src="https://img.shields.io/badge/HTML5-red?logo=html5&logoColor=white" alt="HTML5"/>&nbsp;
<img src="https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white" alt="CSS3"/>&nbsp;
<img src="https://img.shields.io/badge/-Sass-DB7093?logo=sass&logoColor=white" alt="SASS"/>&nbsp;
<img src="https://img.shields.io/badge/-JavaScript-f0db4f?logo=javaScript&logoColor=black" alt="JS"/>&nbsp;
<img src="https://img.shields.io/badge/-React-000000?logo=React&logoColor=#00fff" alt="React"/>&nbsp;

## В проекте реализованы функциональные требования:
&nbsp; :heavy_check_mark: Можно вводить вручную местоположение в строку поиска<br>
&nbsp; :heavy_check_mark: Можно получать текущую геопозицию пользователя<br>
&nbsp; :heavy_check_mark: По текущей геопозиции или вручную введенному местоположению можно получать информацию о погоде из OpenWeatherMap<br>
&nbsp; :heavy_check_mark: Можно получать 2 вида информации о погоде — прогноз на 5 дней или только на сегодня<br>

## В проекте реализованы технические требования:
&nbsp; :heavy_check_mark: Книжный магазин реализован по принципу SPA (все действия пользователя: подгрузка книг, переключение категории — происходят без перезагрузки страницы)<br>
&nbsp; :heavy_check_mark: JS-файлы в проекте разделены на ES6-модули<br>
&nbsp; :heavy_check_mark: Для создания проекта используется npm<br>

&nbsp; :heavy_check_mark: К проекту подключен Webpack:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - CSS-файлы является частью сборки<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - CSS подключается отдельным файлом<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - JS и CSS-файлы минифицируются в процессе сборки<br>

&nbsp; :heavy_check_mark: Использованы инструменты оптимизации разработки:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Методология БЭМ<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - CSS-препроцессор Sass<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Webpack Dev Server<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Линтер<br>

## В проекте реализованы требования к верстке, CSS и др.:
&nbsp; :heavy_check_mark: Приложение должно корректно отображаться на различных разрешениях<br>
&nbsp; :heavy_check_mark: Отзывчивая и адаптивная верстка (десктоп, планшет и мобильные телефоны)<br>
&nbsp; :heavy_check_mark: Соблюдение семантической верстки<br>
&nbsp; :heavy_check_mark: Использование осмысленных имен для всех переменных, классов и функций<br>
&nbsp; :heavy_check_mark: Соблюдение правил написания кода – кодстайла<br>

---

**Для запуска проекта выполнить действия:**

&nbsp; :heavy_check_mark: клонировать репозиторий на свой ПК: git clone https://github.com/Ivan-ISS/project_book-store.git;<br>
&nbsp; :heavy_check_mark: поставить пакеты: npm install;<br>
&nbsp; :heavy_check_mark: выполнить команду: npm run build;<br>
&nbsp; :heavy_check_mark: открыть index.html в браузере из папки src

**Ссылка для просмотра проекта:** *временно отсутствует*