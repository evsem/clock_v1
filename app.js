function goClock() {
  const hourArrow = document.querySelector('.hours')
  const minuteArrow = document.querySelector('.minutes')
  const secondArrow = document.querySelector('.seconds')
  //6 потому что сам по себе циферблат 360 градусов, соответсвенно делим 360 на 60(количество секунд/минут)
  const deg = 6

  setInterval(() => {
    //Получаем локальное время на ПК пользователя
    const localTime = new Date()

    //На 30 потому что стрелку нужно передвинуть на одно деление(одно деление равно 30 градусам)
    const localHours = localTime.getHours() * 30
    const localMinutes = localTime.getMinutes() * deg
    const localSeconds = localTime.getSeconds() * deg

    let forHours = localMinutes / 12

    hourArrow.style.transform = `rotateZ(${localHours + forHours}deg)`
    minuteArrow.style.transform = `rotateZ(${localMinutes}deg)`
    secondArrow.style.transform = `rotateZ(${localSeconds}deg)`
  }, 0)
}
goClock()
