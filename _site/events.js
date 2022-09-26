const timestamp = new Date()

const date0 = new Date()
date0.setDate(timestamp.getDate())
date0.setHours(0,0,0,0)

const date1 = new Date()
date1.setDate(timestamp.getDate() - 5)
date1.setHours(0,0,0,0)

const today = date0.getTime()
const fewdaysago = date1.getTime()

appendAllEventLists()

function appendAllEventLists() {
    const container = document.getElementById('events')

    var events = [{"title":"Halloween Kappy Hour","expire":"2022-10-28","date":"FRIDAY, OCTOBER 28, 2022 AT 5 PM","location":"San Francisco","link":"https://fb.me/e/2va8Zu8au"}]
    container.appendChild(eventsList(events, "KAPPY HOURS"))

    events = [{"title":"Friendsgiving (potluck)","expire":"2022-11-12","date":"SATURDAY, NOVEMBER 12, 2022 AT 5 PM","location":"South Bay","attendance":20,"link":"https://fb.me/e/2abEPnXku"},{"title":"2022 KAPS Annual Holiday Party ($50)","expire":"2022-12-10","date":"SATURDAY, DECEMBER 10, 2022 AT 5 PM","location":"San Francisco","attendance":100,"link":"https://fb.me/e/1GLYTZteS"}]
    container.appendChild(eventsList(events, "Flagship events"))

    events = null
    container.appendChild(eventsList(events, "Small group events"))

    events = null
    container.appendChild(eventsList(events, "Active lifestyle events"))

    events = null
    container.appendChild(eventsList(events, "Mental health events"))

    events = null
    container.appendChild(eventsList(events, "Professional development events"))

    events = null
    container.appendChild(eventsList(events, "Community service events"))

    events = null
    container.appendChild(eventsList(events, "Cultural events"))

    events = null
    container.appendChild(eventsList(events, "Other events"))
}

function eventsList(events, title) {
    const div = document.createElement('div')
    const header = document.createElement('h3')
    header.appendChild(document.createTextNode(title))
    div.appendChild(header)

    if (events != undefined) {
        const list = document.createElement('ol')
        list.className = 'smaller-line-height'
        div.appendChild(list)
        // Convert text date to comparable dates.
        events.forEach( event => {
            event.expireDate = new Date(event.expire).getTime()
        })
        events.sort( (a, b) => {
            return a.expireDate - b.expireDate
        })
        events.forEach( event => {
            if (event.expireDate < fewdaysago) {
                return
            }
            list.appendChild(eventListItem(event))
        })
    }
    return div
}

function eventListItem(event) {
    const item = document.createElement('li')
    const p = document.createElement('p')
    p.appendChild(ahref(event.title, event.link))
    if (event.expireDate === today) {
        p.appendChild(document.createTextNode(' TODAY!'))
    } else if (event.expireDate < today) {
        p.appendChild(document.createTextNode(' JUST MISSED THIS!'))
    }
    p.appendChild(br())
    p.appendChild(document.createTextNode(event.date))
    p.appendChild(br())
    p.appendChild(document.createTextNode(event.location))
    p.appendChild(br())
    if (event.attendance != undefined) {
        p.appendChild(document.createTextNode("Expected attendance: " + event.attendance + " people"))
        p.appendChild(br())
    }
    
    item.appendChild(p)
    return item
}

function ahref(text, url) {
    var a = document.createElement('a');
    a.href = url;
    a.innerText = text;
    a.target = '_blank'
    return a
}

function br() {
    return document.createElement('br')
}


var loadCounter = 0;
var loaded = function() {
    loadCounter += 1;
    if (loadCounter === 2) {
        $("iframe").attr("height", "500px");
        $(window).scrollTo(315,0)
    }
}