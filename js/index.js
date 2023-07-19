let piace = document.getElementById('piace'),
    user_count = document.getElementById('user_count'),
    user_status = document.getElementById('user_status'),
    clicks = localStorage.getItem('USER-CLICKS'),
    playerStatus = [{score: 10,status: ' &#128519 Первопроходец &#128519 ' },{score: 100,status: ' &#129398  Железо &#8547  &#129398' },{score: 200,status: ' &#129398  Железо &#8546  &#129398 ' },{score: 300,status: ' &#129398  Железо &#8545  &#129398  ' },{score: 400,status: ' &#129398  Железо &#8544  &#129398  ' },{score: 500,status: '&#129322  Бронза &#8547  &#129322 ' },{score: 600,status: ' &#129322  Бронза &#8546  &#129322 ' },{score: 700,status: '&#129322  Бронза &#8545  &#129322 ' },{score: 800,status: ' &#129322  Бронза &#8544  &#129322 ' },{score: 900,status: '&#129488  Серебро &#8547  &#129488 ' },{score: 5000,status: ' &#128126  Лорд &#8544  &#128126' },{score: 5555, status: 'max'}];
const getPlayerStatus = (i, status)=>{
	localStorage.getItem('USER-CLICKS') > i ? localStorage.setItem('USER-STATUS', status) : null;
	localStorage.getItem('USER-CLICKS') > i ? user_status.innerHTML = status : null;
}
const setCookieImg = (i,img)=>{(localStorage.getItem('USER-CLICKS') > i) ? piace.src = img :null;}
const checkUserStatus = (userClick)=>{
    let userStauses = [...JSON.parse(localStorage.getItem('userStatuses'))]
    userStauses.map(item =>{
        (userClick >= item.score) ? localStorage.setItem('USER-STATUS', item.status):null;
        (userClick >= item.score) ? user_status.innerHTML = item.status :null;
        if(userClick >= item.score) return item.status;
    })
}
window.onload = ()=>{
    user_count.innerHTML = clicks;
	(localStorage.getItem('USER-CLICKS') <= 10) ? localStorage.setItem('USER-STATUS', 'новичок') : null;
	(localStorage.getItem('USER-CLICKS') <= 10) ? localStorage.setItem('userStatuses', JSON.stringify(playerStatus)) : null;
    user_status.innerHTML = localStorage.getItem('USER-STATUS')
	setCookieImg(400,'img/rang2.png')
	setCookieImg(800,'img/rang3.png')
	setCookieImg(1400,'img/rang4.png')
	setCookieImg(2199,'img/rang5.png')
}
piace.onclick = ()=>{
	clicks++;
	localStorage.setItem('USER-CLICKS', clicks)	
	user_count.innerHTML = localStorage.getItem('USER-CLICKS');
    checkUserStatus(localStorage.getItem('USER-CLICKS'))
}