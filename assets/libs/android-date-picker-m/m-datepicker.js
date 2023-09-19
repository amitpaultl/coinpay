class DatePicker {
    constructor(input) {
        select('.m-datepicker-overlay').style.display = 'flex'

        const d = new Date()

        this.input = input;
        this.currentYear = d.getFullYear()
        this.currentMonth = d.getMonth()
        this.currentWeekDay = d.getDay()
        this.currentDate = d.getDate()
        this.monthX = this.currentMonth
        this.yearX = this.currentYear
        this.dayX = {date: null, month: null, year: null}

        this.__renderDatePicker()
    }

    __renderDatePicker() {
        select('.m-datepicker-body').innerHTML = ''
        select('.m-datepicker-body').innerHTML += `
            <div class="m-datepicker-options">
                <div class="m-datepicker-select-year">
                    <input type="checkbox" id="select-date">
                    <label for="select-date">
                        <span class="m-datepicker-month-status"></span>
                        <span class="m-datepicker-year-status"></span>
                    </label>
                </div>
                <div class="m-datepicker-month-arrows">
                    <p class="prev"><i class="ri-arrow-left-s-line"></i></p>
                    <p class="next"><i class="ri-arrow-right-s-line"></i></p>
                </div>
            </div>
            <div class="m-datepicker-mainContent">
                <div class="m-datepicker-weeks"></div>
                <div class="m-datepicker-days"></div>
            </div>
        `
        this.__renderWeeks()
        this.__renderDays(this.currentMonth)
        this.__handleMonthArrows()
        this.__handleDateOptionStatus()
        this.__handleMainDateStatus(this.dayX.date, this.monthX)
        this.__handleDatePicker()
        this.__handleDateOptionInput()
    }

    __handleDatePicker() {
        const datepicker_overlay = select('.m-datepicker-overlay')
        datepicker_overlay.onclick = (e) => {
            if(e.target.classList.contains('m-datepicker-overlay') || e.target.classList.contains('m-datepicker-cancel')) {
                datepicker_overlay.style.display = 'none'
            } else if(e.target.classList.contains('m-datepicker-ok')) {
                this.input.value = `${this.dayX.date || this.currentDate}/${this.monthX}/${this.yearX}`
                datepicker_overlay.style.display = `none`
            }
        }


        select('.m-datepicker-ok').onclick = (e) => {

        }


    }

    __renderWeeks() {
        weekdays.forEach((w, i) => {
            select('.m-datepicker-weeks').innerHTML += `
                    <p data-dayNum=${i} data-day=${w}>${w.substring(0, 1)}</p>
                `
            }
        )
    }

    __renderDays(month) {
        const days = select('.m-datepicker-days')
        days.innerHTML = ''
        
        for(let i = 0; i < weekdays.findIndex(wd => wd === getDay(this.yearX, this.monthX, 1)); i++) {
            days.innerHTML += `<p></p>`
        }
    
        for(let i = 0; i < daysInMonth(month, this.currentYear); i++) {
            days.innerHTML += `<p data-month=${this.monthX}>${i + 1}</p>`
        }

        this.__handleDays()
    }

    __handleDays() {
        const days = select(`.m-datepicker-days p[data-month]`, true)
        
        days.forEach(day => {
            if(parseInt(day.textContent) === this.currentDate && parseInt(day.dataset.month) === this.currentMonth) day.classList.add('currentDay')
            else if(day.textContent === this.dayX.date && day.dataset.month === this.dayX.month) day.classList.add('selectedDay') 
        })
    
        days.forEach(day => {
            day.onclick = () => {
                days.forEach(day2 => day2.classList.remove('selectedDay'))
                day.classList.add('selectedDay')
    
                this.dayX.date = day.textContent
                this.dayX.month = day.dataset.month

                this.__handleMainDateStatus(this.dayX.date, this.monthX)
            }
        })
    }

    __handleMonthArrows() {
        select('.m-datepicker-month-arrows p', true).forEach(arrow => {
            arrow.onclick = () => {
                if(arrow.classList.contains('prev')) {
                    this.monthX === 0 ? this.monthX = 11 : --this.monthX;
                    this.__renderDays(this.monthX)
                    this.__handleDateOptionStatus()
                } else {
                    this.monthX === 11 ? this.monthX = 0 : ++this.monthX;
                    this.__renderDays(this.monthX)
                    this.__handleDateOptionStatus()
                }
            }
        })
    }
    
    __handleDateOptionStatus() {
        select('.m-datepicker-month-status').innerHTML = months[this.monthX]
        select('.m-datepicker-year-status').innerHTML = this.yearX
    }

    __renderYears() {
        const mainContent = select('.m-datepicker-mainContent')
        mainContent.innerHTML = ''
        mainContent.innerHTML += `<div class="m-datepicker-years"></div>`

        for(let i = this.currentYear - 20; i < this.currentYear + 20; i++) {
            select('.m-datepicker-years').innerHTML += `<p>${i}</p>`
        }
    }

    __handleYears() {
        select('.m-datepicker-years p', true).forEach(y => {
            parseInt(y.textContent) === parseInt(this.yearX) ? y.classList.add('selectedYear') : y.classList.remove('selectedYear')

            y.onclick = () => {
                this.yearX = y.textContent
                
                this.__renderDatePicker()
            }
        })

        select('.m-datepicker-month-arrows').style.display = 'none'
    }

    __handleDateOptionInput() {
        select('#select-date').onchange = (e) => {
            if(e.target.checked) {
                this.__renderYears()
                this.__handleYears()
            } else {
                this.__renderDatePicker()
            }
        }
    }

    __handleMainDateStatus(d, m) {
        select('.m-datepicker-status').innerHTML = ''

        select('.m-datepicker-status').innerHTML += `
            <span>${getDay(this.yearX, this.monthX, this.dayX.date ? this.dayX.date : 1).substring(0, 3)}</span>,
            <span>${months[m]} ${d ? d : this.currentDate}</span>
        `
    }

}

// new DatePicker()