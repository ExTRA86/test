import React, { useState } from 'react';
import {nanoid} from 'nanoid';

function App() {
	let [name, setName] = useState('Рафаэль');
  let [surname, setSurname] = useState('Туишев');
  let [age, setAge] = useState(35);
  let [ban, setBan] = useState(false);
  let btn;


  // if (ban){
  //   btn = <button onClick={() => setBan(false)}>Разбанить</button>;
 
  // } else {
  //   btn = <button onClick={() => setBan(true)}>Забанить</button>;
 
  // }
  

// let btn =  ban ? <button onClick={() => setBan(false)}>Разбанить</button>: <button onClick={() => setBan(true)}>Забанить</button>;
  
	
	return <div>
		<span>{name}</span><br />
    <span>{surname}</span><br />
    <span>{age}</span><br />
    <span>Статус: {ban ? 'Забанин': 'Онлайн'}</span><br />
    <button onClick={() => setName('HHH')}>Имя</button>
    <button onClick={() => setSurname('NNN')}>Фамилия</button>
    <span>{btn =  ban ? <button onClick={() => setBan(false)}>Разбанить</button>: <button onClick={() => setBan(true)}>Забанить</button>}</span>
    <button onClick={() => setAge(age + 1)}>+</button>
    <button onClick={() => setAge(age - 1)}>-</button>
    {/* <button onClick={() => setBan(true)}>Бан</button>
    <button onClick={() => setBan(false)}>!Бан</button> */}
    {/* <button onClick={() => !ban ? setBan(true): setBan(false)}>Бан</button> */}

	</div>;
}

export default App;


function App() {
  const [value, setValue] = useState("");
  let date = new Date();

  // function dateBr (value) {
  //   return date.getFullYear() - value;
  // }

  function handleChange (event) {
    setValue(event.target.value);
  }

  function square (num) {
    return num ** 2;
  }

  const [value2, setValue2] = useState();

  function handleChange2 (event) {
    setValue2(event.target.value);
  }


	return <div>
  <span>Введите возраст пользователя: </span>
  <input  value={value} onChange={handleChange} /> <br/>
<span>Год рождения: {date.getFullYear() - value}</span>
  <p> {square(value)}</p>
  <p>{value.length}</p>

  <span>Введите температуру, C: </span>
  <input value={value2} onChange={handleChange2} />
  <span> Температура, F: </span> <span>{value2 == null ? null : value2 * 1.8 + 32}</span>
  <p>{value2}</p>
  
	</div>;
}


function App() {
const [value1, setValue1] = useState(0);
const [value2, setValue2] = useState(0);
const [value3, setValue3] = useState(0);
const [value4, setValue4] = useState(0);
const [value5, setValue5] = useState(0);


function handleChange1 (event) {
  setValue1(+event.target.value);
}

function handleChange2 (event) {
  setValue2(+event.target.value);
}

function handleChange3 (event) {
  setValue3(+event.target.value);
}

function handleChange4 (event) {
  setValue4(+event.target.value);
}

function handleChange5 (event) {
  setValue5(+event.target.value);
}

let arr = [
  value1,
  value2,
  value3,
  value4,
  value5,
];

let sum = 0;
for (let i=0; i < arr.length; i++){
sum += arr[i];
}

let result = sum / arr.length;

//   function average(nums) {
//     return nums.reduce((a, b) => (a + b)) / nums.length;
// }


return <div>
<input value={value1} onChange={handleChange1} />
<input value={value2} onChange={handleChange2} />
<input value={value3} onChange={handleChange3} />
<input value={value4} onChange={handleChange4} />
<input value={value5} onChange={handleChange5} />
{/* <p>{(value1 + value2 +  value3 +  value4 +  value5)}</p> */}
<p>{result}</p>
</div>;
}

// Даны два инпута, кнопка и абзац. Пусть в инпуты вводятся даты в формате 2025-12-31. По нажатию на кнопку найдите разницу между датами в днях и результат выведите в абзац.

function App() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState(0);

  // let date1 = value1;
  // let date1Arr = date1.split('-');
  // console.log(date1Arr);

  // let date2 = value2;
  // let date2Arr = date2.split('-');
  // console.log(date2Arr);

var date1 = new Date(value1);
var date2 = new Date(value2);
var daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
console.log(daysLag);


  // console.log(dateArr1);

  return <div>
    <input type="date" value={value1} onChange={event => setValue1(event.target.value)} />
    <input type="date" value={value2} onChange={event => setValue2(event.target.value)} />
    <button onClick={() => setResult((value1) + (value2))}>btn +</button>
    {/* <button onClick={() => setResult(Number(value1) * Number(value2))}>btn *</button> */}
    <p>Разница в днях: {daysLag}</p>
  </div>
}


// Модифицируйте предыдущую задачу так, чтобы по умолчанию в инпутах стояла текущая дата.
function App() {
  // Вариант1
  // var fullDateTime = new Date();

  // var getNormalDate = function(date){
  //     var day = date.getDate();
  //     var month = date.getMonth() + 1;
  //     var year = date.getFullYear();
  //     return year + "-" + month + "-" + day;
  //   };
  // let newD = getNormalDate(fullDateTime);

  // Вараинт 2
// var fullDateTime = new Date();
//   var getNormalDate = function(date){
//     return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
//   }
//   let newD = getNormalDate(fullDateTime);

  // Вариант 3
  let date = new Date();
  let newD = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  

  let [value1, setValue1] = useState(newD);
  let [value2, setValue2] = useState(newD);
  const [result, setResult] = useState(0);


let date1 = new Date(value1);
let date2 = new Date(value2);
let daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
console.log(daysLag);
console.log(value1);
console.log(value2)

  return <div>
    <input type="date" value={value1} onChange={event => setValue1(event.target.value)} />
    <input type="date" value={value2} onChange={event => setValue2(event.target.value)} />
    <button onClick={() => setResult((value1) + (value2))}>btn +</button>
    {/* <button onClick={() => setResult(Number(value1) * Number(value2))}>btn *</button> */}
    <p>Разница в днях: {daysLag}</p>
  </div>
}


// Дан инпут и абзац. В инпут вводится число. По потери фокуса выведите в абзац сумму цифр введенного числа
function App() {
  const [value1, setValue1] = useState("");
  const [result, setResult] = useState("");


function func (number) {
  var figures = "" + number
  var sum = 0

  for (var i = 0; i < figures.length; i++) 
    sum += +figures[i]

  return sum
}

 
  return <div>
    <input type="Number"  onBlur={() => setResult(func(value1))}  value={value1} onChange={event => setValue1(event.target.value)} />
    <p>{result}</p>
  </div>
}


// Пусть в textarea вводится текст. Сделайте так, чтобы в абзац выводился транслит вводимого текста.

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  function translit(word){
    var answer = '';
    var converter = {
      'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
      'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
      'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
      'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
      'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
      'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
      'э': 'e',    'ю': 'yu',   'я': 'ya',
   
      'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
      'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
      'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
      'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
      'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
      'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
      'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
    };
   
    for (var i = 0; i < word.length; ++i ) {
      if (converter[word[i]] == undefined){
        answer += word[i];
      } else {
        answer += converter[word[i]];
      }
    }
   
    return answer;
  }

  return <div>
    <textarea value={value} onChange={event => setValue(event.target.value)} onBlur={() => setResult(translit(value))} />
    <p>{result}</p>
  </div>
}

// Пусть в textarea на каждой строке вводятся числа. Сделайте так, чтобы по мере ввода в абзац выводилась сумма введенных чисел.

function App() {
  const [value, setValue] = useState("");

  let arr1 = value;
  let arr2 = arr1.split("");

  console.log(arr2);

  let sum = 0;
  for (let i=0; i < arr2.length; i++){
  sum += +arr2[i];
  }
  

  return <div>
    <textarea value={value} onChange={event => setValue(event.target.value)}  />
    <p>{sum}</p>
  </div>
}

// Дан чекбокс, кнопка и абзац. По клику на кнопку, если чекбокс отмечен, выведите в абзац текст приветствия с пользователем, а если не отмечен - текст прощания.
function App() {
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("");
  
  return <div>
    <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
    <button onClick= {() => checked ? setText('Привет!') : setText('Пока!')}>Отправить</button>
    <p>{text}</p>
  </div>
  }

//С помощью трех чекбоксов попросите пользователя выбрать языки, которые он знает: html, css и js. Результат выбора по каждому языку выводите в отдельные абзацы.

  function App() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    
    
    return <div>
      <p>Какой язык программирования Вы знаете?</p>
      <label>html:</label><input type="checkbox" checked={checked1} onChange={() => setChecked1(!checked1)} /><br />
      <label>css:</label><input type="checkbox" checked={checked2} onChange={() => setChecked2(!checked2)} /><br />
      <label>js:</label><input type="checkbox" checked={checked3} onChange={() => setChecked3(!checked3)} />
      <p>{checked1 ? 'Вы знаете: html' : ''}</p>
      <p>{checked2 ? 'Вы знаете: css' : ''}</p>
      <p>{checked3 ? 'Вы знаете: js' : ''}</p>
    </div>
    }

//Дан чекбокс. С помощью чекбокса спросите у пользователя, если ли ему уже 18 лет. Если чекбокс отмечен, покажите пользователю следующий блок кода:
    function App() {
      const [checked1, setChecked1] = useState(false);
      
      let message;
      if (checked1) {
        message = <div>
        <h2>Ура, вам уже есть 18</h2>
        <p>
          здесь расположен контент только для взрослых
        </p>
      </div>;
      } else {
        message = <div>
        <p>
          увы, вам еще нет 18 лет:(
        </p>
      </div>;
      }
      
      
      return <div>
       
        <label>Вамуже есть 18 лет?</label><input type="checkbox" checked={checked1} onChange={() => setChecked1(!checked1)} /><br />
      
        {/* <p>{checked1 ? 'сообщение 1' : ''}</p> */}
        <div>{message}</div>
      
      </div>
      }


// Дан чекбокс и абзац. Если чекбокс отмечен, пусть абзац будет видимым на экране, а если не отмечен - спрячьте его.
function App() {
  const [checked1, setChecked1] = useState(false);
  
  return <div>
   
   <input type="checkbox" checked={checked1} onChange={() => setChecked1(!checked1)} /><br />
   <p style={{ display: checked1 ? "block" : "none" }}>Message has been sent</p>
  </div>
  }

  //Работа с селектами в React
  function App() {
    const [value, setValue] = useState('');
    const texts = ['text1', 'text2', 'text3', 'text4'];
  
    const options = texts.map((text, index) => {
      return <option key={index} value={index}>{text}</option>;
    });
  
    return <div>
      <select value={value} onChange={event => setValue(event.target.value)}>
      {options}
      </select>
      <p>
        ваш выбор: {texts[value]}
      </p>
    </div>;
  }


  //С помощью радиокнопочек спросите у пользователя его любимый язык программирования. Выведите его выбор в абзац. Если выбран язык JavaScript, похвалите пользователя.
  function App() {
    const [value, setValue] = useState();
    
    function changeHandler(event) {
      setValue(event.target.value);
    }
    
    return <div>
    <p>Выберите ваш любимый язык программирования:</p>
      <label>PHP:</label><input
        type="radio"
        name="radio"
        value="PHP"
        checked={value === 'PHP' ? true : false}
        onChange={changeHandler}
      /><br />
      <label>Pyton:</label><input
        type="radio"
        name="radio"
        value="Pyton"
        checked={value === 'Pyton' ? true : false}
        onChange={changeHandler}
      /><br />
      <label>JavaScript:</label><input
        type="radio"
        name="radio"
        value="JavaScript"
        checked={value === 'JavaScript' ? true : false}
        onChange={changeHandler}
      /><br />
      <p>{value}</p>
      <p>{value == "JavaScript" ? "Молодец!!!" : ""}</p>
    </div>
  }

  //Реактивность массивов в React
  function App() {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
    
    
    const result = notes.map((note, index) => {
      return <p key={index}>{note}</p>;
    });
  
    let index = notes.length-1; 
  
  
    
    // Добавление
    // setNotes([...notes, 6]); // так правильно
  
  console.log(notes);
  
    return <div>
    <button value={notes} onClick={() => setNotes([...notes, notes.length + 1 ])}>+</button><br />
  
  <button value={notes} onClick={() => setNotes([...notes.slice(0, index), 
      ...notes.slice(index + 1)])}>-(v1)</button>
  
  <button value={notes} onClick={() => setNotes([...notes.slice(0, notes.length-1), 
      ...notes.slice((notes.length-1) + 1)])}>-(v2)</button>
  
  <button value={notes} onClick={() => setNotes([...notes.slice(0, notes.length-1)])}>-(v3)</button>
  
  <br /><button value={notes} onClick={() => setNotes([...notes.slice(0, index), 
    '!',...notes.slice(index + 1)])}>change</button>
  
  <br /><button value={notes} onClick={() => setNotes([...notes.sort()])}>sort(default)</button>
  
  <button value={notes} onClick={() => setNotes([...notes.sort((a, b) => b - a)])}>sort(function)</button>
  
       {result}
    </div>;
  }

  //Выведите элементы этого массива в виде списка ul. Добавьте инпут для добавления новых пунктов списка. Пусть добавление происходит по потери фокуса в инпуте.
  //Модифицируйте предыдущую задачу так, чтобы при добавлении новой li текст инпута очищался.

  function App() {
    const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
    const [value, setValue] = useState('');
    
    
    const result = notes.map((note, index) => {
      return <p key={index}>{note}</p>;
    });
  
  const list = notes.map((notes) => <li>{notes}</li>)

  console.log(notes);
  
    return <div>
    {result}
    <input value={value} onChange={event => setValue(event.target.value)} 
    onBlur={() => (setNotes([...notes, value]), setValue(''))}></input>
    <button onClick={() => setNotes([...notes, value])}>add</button>
    <ul>
      {list}
    </ul>
  
    </div>;
  }
  

  //Выведите элементы этого массива в виде списка ul. Сделайте так, чтобы в конце каждой li стояла кнопка для ее удаления.
  function App() {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
    
    const result = notes.map((note, index) => {
      return <p key={index} onClick={() => remItem(index)}>
        <li>{note} : <button onClick={() => remItem(index)}>del</button></li>
      </p>;
    });
    
    function remItem(index) {
      setNotes([...notes.slice(0, index), 
        ...notes.slice(index + 1)]); 
    }
    
    return <div>
    <ul>
      {result}
      </ul>
    </div>;
  }

  //Выведите на экран среднее арифметическое элементов этого массива. В цикле сделайте инпуты для редактирования элементов.
  
function getSum(arr) {
	let sum = 0;
	
	for (const elem of arr) {
		sum += +elem;
	}
	
	return sum;
}

function average(arr) {
  return getSum(arr) / arr.length;
}


function App() {
	const [notes, setNotes] = useState([1, 2, 3]);
	
	function changeHandler(index, event) {
		setNotes([...notes.slice(0, index), 
			event.target.value, ...notes.slice(index + 1)]); 
	}
	
	const result = notes.map((note, index) => {
		return <input
			key={index}
			value={note}
			onChange={event => changeHandler(index, event)}
		/>;
	});
	
	return <div>
		{result}
    <p><label>Сумма: </label>{getSum(notes)}</p>
		<p><label>Cреднее арифметическое: </label>{average(notes)}</p>
	</div>;
}

//Выведите элементы этого массива в виде списка ul. Под списком реализуйте инпут для редактирования пунктов списка. Пусть в конце каждой li стоит кнопка, по нажатию на которую будет начинаться редактирование этой li.
//Модифицируйте предыдущую задачу так, чтобы при потере фокуса в инпуте его текст очищался.
function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [editNum, setEditNum] = useState(null);
	
	const result = notes.map((note, index) => {
		return <p key={index}>
			<li>{note} : <button onClick={() => setEditNum(index)}>edit</button></li>
		</p>;
	});
	
	function changeItem(event) {
		setNotes([...notes.slice(0, editNum), 
			event.target.value, ...notes.slice(editNum + 1)]); 
	}
	
	return <div>
		<ul>{result}</ul>
		<input value={editNum ? notes[editNum] 
			: ''} onChange={changeItem} onBlur = {() => setEditNum('')} /> 
	</div>;
}

//Выведите элементы этого массива в виде списка ul. Под списком реализуйте инпут для редактирования существующих и добавления новых пунктов списка. Решите задачу тремя описанными подходами.
function App() {
	const [notes, setNotes] = useState(['a', 'b', 'c', 'd', 'e']);
	const [editNum, setEditNum] = useState(null);
	
	const result = notes.map((note, index) => {
		return <li key={index} onClick={() => startEdit(index)}>{note}</li>; 
	});
	
	function startEdit(index) {
		setEditNum(index);
	}
	function editItem(event) {
		setNotes([...notes.slice(0, editNum), 
			event.target.value,...notes.slice(editNum + 1)]); 
	}
	function createItem() {
		if (!editNum) {
			const res = [...notes, ''];
			setNotes(res);
			setEditNum(res.length - 1);
		}
	}
	function stopEdit() {
		setEditNum(null);
	}
	
	return <div>
	<ul>
		{result}
		<input
			value={editNum ? notes[editNum] : ''}
			onChange={editItem}
			onFocus={createItem}
			onBlur={stopEdit}
		/>
		</ul>
	</div>;
}

//Сделайте 3 кнопки. Пусть первая кнопка изменяет значение свойства prop1, вторая - prop2, а третья - prop3.
function App() {
	const [obj, setObj] = useState({
		prop1: 'value1',
		prop2: 'value2',
		prop3: 'value3',
	});
	
	return <div>
	<button onClick={() => setObj({...obj, ...{prop1: '!'}})}>edit prop1</button>
	<button onClick={() => setObj({...obj, ...{prop2: '!'}})}>edit prop2</button>
	<button onClick={() => setObj({...obj, ...{prop3: '!'}})}>edit prop3</button>
		<ul>
		<li>{obj.prop1}</li>
		<li>{obj.prop2}</li>
		<li>{obj.prop3}</li>
		</ul>
	</div>;
}

//Привязка инпутов к объекту в React
const initObj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
}


function App() {
	const [obj, setObj] = useState(initObj);
  
	function handleChange(prop, event) {
		setObj({...obj, ...{[prop]: event.target.value}});
	}
	
	
	return <div>
		<input value={obj.prop1} onChange={event => handleChange('prop1', event)} /> 
		<input value={obj.prop2} onChange={event => handleChange('prop2', event)} /> 
		<input value={obj.prop3} onChange={event => handleChange('prop3', event)} /> 
		
		<br />
		{obj.prop1}-{obj.prop2}-{obj.prop3}
	</div>;
}


//Выведите в абзаце год, месяц и день из даты, хранящейся в стейте, а также день недели, соответствующий ей.
//Модифицируйте предыдущую задачу, добавив три инпута для редактирования даты.
const initDate = {
	year:  2025,
	month: 12,
	day:   31,
}


function App() {
	const [obj, setObj] = useState(initDate);
	function handleChange(prop, event) {
		setObj({...obj, ...{[prop]: event.target.value}});
	}

	var days = [
		'Воскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота'
	  ];
	  var d = new Date(obj.year, obj.month-1, obj.day);
	  var n = d.getDay();
	  console.log(days[n]);
	  console.log(d);
	  console.log(n);
	
	
	return <div>
		<input value={obj.year} onChange={event => handleChange('year', event)} /> 
		<input value={obj.month} onChange={event => handleChange('month', event)} /> 
		<input value={obj.day} onChange={event => handleChange('day', event)} /> 
		
		<br />
		{obj.year}/{obj.month}/{obj.day} - {days[n]}
	</div>;
}

//Реактивность массива объектов в React

const initNotes = [
	{
		id: 'GYi9G_uC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
];

const data1 = {
	id: 'IWSpfBPSV3SXgRF87uO74',
	prop1: 'value21 !',
	prop2: 'value22 !',
	prop3: 'value23 !',
};

const data2 = [
	{
	id: 'IWSpfBPSV3SXgRF87uO74',
	prop1: 'value21 !',
	prop2: 'value22 !',
	prop3: 'value23 !',
},
{
	id: 'JAmjRlfQT8rLTm5tG2m1L',
	prop1: 'value31 !',
	prop2: 'value32 !',
	prop3: 'value33 !',	
},
];

function App() {
	const [notes, setNotes] = useState(initNotes);
	const [newNotes, setNewNotes] = useState();
	
	const result = notes.map(note => {
		return <p key={note.id}>
			<span>{note.prop1}</span>,
			<span>{note.prop2}</span>,
			<span>{note.prop3}</span>
		</p>;
	});

	const newElem = {
		id: nanoid(),
		prop1: 'value41',
		prop2: 'value42',
		prop3: 'value43',
	};

	const id = 'JAmjRlfQT8rLTm5tG2m1L';
	const prop = 'prop2';
	const prop2 = 'prop3';
	const value = '!';

	const id2 = 'IWSpfBPSV3SXgRF87uO74';

	//Получение элемента
	const result2 = notes.reduce((res, note) => note.id 
	=== id2 ? note : res, {}); 

	//Получение значение свойства элемента
	const result3 = notes.reduce((res, note) => note.id 
	=== id ? note[prop] : res, '');  


	
console.log(notes);
console.log(result2);
console.log(result3);

	return <div>
		{result}
		<button onClick={() =>
		 setNotes(notes.filter(note => note.id !== 'GYi9G_uC4gBF1e2SixDvu'))}
		 >Удалить по id</button>
		<button onClick={() => setNotes([...notes, newElem])}
		 >Добавить элемент с новым id</button>
		<button onClick={() =>
		 setNotes(notes.map(note => note.id === data1.id ? data1 : note))}
		 >Заменить по id</button>
		<button onClick={() =>
		 setNotes(notes.map(note => note.id === data2[1].id ? data2[1] : note))}
		 >Заменить по id (из массива)</button>
<br />
		<button onClick={() =>
		 setNotes(notes.map(note => {
			if (note.id === id) {
				return {...note, [prop]: note[prop] + value, [prop2]: note[prop2] + value};
			} else {
			return note;
			}
			}))}>Заменение свойств</button>
		<button onClick={() =>
		 setNotes(notes.map(note => 
		 note.id === id ? {...note, [prop]: note[prop] + value} : note))}
		>Заменение свойств (терн-ый оператор)</button>

<br />
		<button onClick={() =>
		 setNewNotes(result3)}
		 >Получить значение свойств</button>

		 <p>{newNotes}</p>
		

		
	</div>;
}

//Редактирование тега появляющимся инпутом в React
//Дан абзац и две кнопки. Пусть по клику на первую кнопку абзац переходит в режим редактирования, а по клику на вторую - в режим показа. Реализуйте описанное.
function App() {
	const [value, setValue] = useState('text');
	const [isEdit, setIsEdit] = useState(false);
	//Вариант 1
	let elem;
	if (!isEdit) {
		elem = <span onClick={() => setIsEdit(true)}>
			{value}
		</span>;
	} else {
		elem = <input
			value={value}
			onChange={event => setValue(event.target.value)}
			onBlur={() => setIsEdit(false)}
		/>;
	}

	return <p>
		{elem}
	</p>;

    //Варинт 2 (с кнопками)
	if (!isEdit) {
	elem = <span >{value}</span>;
	} else {
	elem = <input value={value}
		onChange={event => setValue(event.target.value)}/>;
	}

return <p>
	{elem}
	<button onClick={() => setIsEdit(true)}>1</button>
	<button onClick={() => setIsEdit(false)}>2</button>
</p>;
}

//Редактирование элементов списка появляющимся инпутом в React
const initNotes = [
	{text: 'note1', isEdit: false},
	{text: 'note2', isEdit: false},
	{text: 'note3', isEdit: false},
];

function App() {
	const [notes, setNotes] = useState(initNotes);
	
	function startEdit(index) {
		const copy = Object.assign([], notes);
		copy[index].isEdit = true;
		setNotes(copy);
	}
	
	function endEdit(index) {
		const copy = Object.assign([], notes);
		copy[index].isEdit = false;
		setNotes(copy);
	}
	
	function changeNote(index, event) {
		const copy = Object.assign([], notes);
		copy[index].text = event.target.value;
		setNotes(copy);
	}
	
	const result = notes.map((note, index) => {
		let elem;
		
		if (!note.isEdit) {
			elem = <span onClick={() => startEdit(index)}>
				{note.text}
			</span>;
		} else {
			elem = <input
				value={note.text}
				onChange={event => changeNote(index, event)}
				onBlur={() => endEdit(index)}
			/>;
		}
		
		return <li key={index}>{elem}</li>;
	});

	return <ul>
		{result}
	</ul>;
}

//Дан массив. Выведите его в виде списка ul. В конце каждой li сделайте кнопку для редактирования. Пусть по первому нажатию на эту кнопку в тексте li появляется инпут для редактирования, а по второму нажатию - появляется измененный текст.

const initNotes = [
	{text: 'note1', isEdit: false},
	{text: 'note2', isEdit: false},
	{text: 'note3', isEdit: false},
];

function App() {
	const [notes, setNotes] = useState(initNotes);
	
	function startEdit(index) {
		const copy = Object.assign([], notes);
		copy[index].isEdit = true;
		setNotes(copy);
	}
	
	function endEdit(index) {
		const copy = Object.assign([], notes);
		copy[index].isEdit = false;
		setNotes(copy);
	}
	
	function changeNote(index, event) {
		const copy = Object.assign([], notes);
		copy[index].text = event.target.value;
		setNotes(copy);
	}
	
	const result = notes.map((note, index) => {
		let elem ;

		
		if (!note.isEdit) {
			elem = <span>
				{note.text}
			</span>;
		} else {
			elem = <input
				value={note.text}
				onChange={event => changeNote(index, event)}
			/>;
		}
		
		return <li key={index}>{elem}
		 <button onClick={!note.isEdit ? () => startEdit(index) : () => endEdit(index)}>{!note.isEdit ? 'edit' : 'save'}</button>
		</li>;
	});

	return <ul>
		{result}
	</ul>;
}

//Редактирование ячеек таблицы появляющимся инпутом в React
const initNotes = [
	{
		id: nanoid(),
		fields: [
			{name: 'prop1', value: 'value11', isEdit: false},
			{name: 'prop2', value: 'value12', isEdit: false},
			{name: 'prop3', value: 'value13', isEdit: false},
		]
	},
	{
		id: nanoid(),
		fields: [
			{name: 'prop1', value: 'value21', isEdit: false},
			{name: 'prop2', value: 'value22', isEdit: false},
			{name: 'prop3', value: 'value23', isEdit: false},
		]
	},
	{
		id: nanoid(),
		fields: [
			{name: 'prop1', value: 'value31', isEdit: false},
			{name: 'prop2', value: 'value32', isEdit: false},
			{name: 'prop3', value: 'value33', isEdit: false},
		]
	},
];

function App() {
	const [notes, setNotes] = useState(initNotes);
	
	const rows = notes.map(note => {
		const cells = note.fields.map(field => {
			let elem;
			
			if (!field.isEdit) {
				elem = <span onClick={() => cell(note.id, field.name, true)}>
					{field.value}
				</span>;
			} else {
				elem = <input
					value={field.value}
					onChange={(event) => cell(note.id, 
						field.name, true, event)} 
					onBlur={() => cell(note.id, field.name, false)}
				/>;
			}
			
			return <td key={field.name}  style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>{elem}</td>;
		});
		
		return <tr key={note.id}>{cells}</tr>;
	});

	function cell (id, name, switcher, event) {
		setNotes(notes.map(note => {
			if (note.id === id) {
				const fields = note.fields.map(field => {
					if (field.name === name) {
						return switcher ? 
						!field.isEdit ? {...field, isEdit: true} : {...field, value: event.target.value}
						 : {...field, isEdit: false}
					} else {
						return field;
					}
				});
				
				return {id, fields};
			} else {
				return note;
			}
		}));
	}
	
	return <div>
		<table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
			<tbody>
				{rows}
			</tbody>
		</table>
	</div>;
}

// todolist
import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import data from './data.json';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
	const [ toDoList, setToDoList ] = useState(data);

	const handleToggle = (id) => {
		let mapped = toDoList.map(task => {
		  return task.id == id ? { ...task, complete: !task.complete } : { ...task};
		});
		setToDoList(mapped);
	  }

	  const handleFilter = () => {
		let filtered = toDoList.filter(task => {
		  return !task.complete;
		});
		setToDoList(filtered);
	  }


 return (
   <div className="App">
	  <Header />
	  <ToDoList toDoList={toDoList}/>
	  <ToDoForm />
   </div>
 );
}
export default App;