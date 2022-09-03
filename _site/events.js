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

    var events = [{"title":"2022 Annual Bonfire at Ocean Beach ($40)","expire":"2022-9-24","date":"SATURDAY, SEPTEMBER 24, 2022 AT 4 PM – 9:30 PM","location":"Ocean Beach","attendance":50,"link":"https://fb.me/e/1GLYTZteS"},{"title":"Korean 10k Fun Run","expire":"2022-10-2","date":"SUNDAY, OCTOBER 2, 2022 AT 9 AM","location":"Hayes Valley","attendance":12,"link":"https://fb.me/e/pEKmcEc7i"},{"title":"Friendsgiving ($25)","expire":"2022-11-12","date":"SATURDAY, NOVEMBER 12, 2022 AT 5 PM","location":"South Bay","attendance":20,"link":"https://fb.me/e/2abEPnXku"},{"title":"2022 KAPS Annual Holiday Party ($50)","expire":"2022-12-10","date":"SATURDAY, DECEMBER 10, 2022 AT 5 PM","location":"San Francisco","attendance":100,"link":"https://fb.me/e/1GLYTZteS"},{"title":"Tahoe Trip for Volunteers and Officers (so sign up to be one!)","expire":"2023-1-8","date":"JAN 6, 2023 AT 5 PM – JAN 8, 2023 AT 10 PM","location":"Lake Tahoe","attendance":25,"link":"https://fb.me/e/23HWDdUJ4"}]
    container.appendChild(eventsList(events, "Flagship events"))

    events = [{"title":"KAPS Family Dinner (12 only, $20)","expire":"2022-9-9","date":"FRIDAY, SEPTEMBER 9, 2022 AT 7 PM","location":"Hayes Valley","attendance":12,"link":"https://fb.me/e/29SS6ExuU"},{"title":"New Google Campus Tour in South Bay","expire":"2022-9-30","date":"Friday, Sept 30 @ 11am (during working day)","location":"Mountain View","attendance":12,"link":"https://fb.me/e/2HgVrLyb0"}]
    container.appendChild(eventsList(events, "Small group events"))

    events = null
    container.appendChild(eventsList(events, "Active lifestyle events"))

    events = null
    container.appendChild(eventsList(events, "Mental health events"))

    events = null
    container.appendChild(eventsList(events, "Professional development events"))

    events = null
    container.appendChild(eventsList(events, "Volunteer events"))

    events = [{"title":"KAPS Friends go together to Chuseok Festival in Presidio","expire":"2022-9-10","date":"SATURDAY, SEPTEMBER 10, 2022 AT 11 AM","location":"Presidio Main Parade Lawn","link":"https://fb.me/e/2fQDgZfwN"},{"title":"KAPS Friends Bar Hopping after Chuseok Festival","expire":"2022-9-10","date":"SATURDAY, SEPTEMBER 10, 2022 AT 9 PM","location":"Start at \"Brass Tacks\" in Hayes Valley","link":"https://fb.me/e/1IzF6LFj3"},{"title":"KAPS in Koreatown LA - Oct 15","expire":"2022-10-15","date":"SATURDAY, OCTOBER 15, 2022 AT 6 PM","location":"Koreatown, LA","link":"https://fb.me/e/2lSfNW9qP"}]
    container.appendChild(eventsList(events, "Other events"))
}

function eventsList(events, title) {
    const div = document.createElement('div')
    const header = document.createElement('h3')
    header.appendChild(document.createTextNode(title))
    div.appendChild(header)

    if (events != undefined) {
        const list = document.createElement('ol')
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
    return a
}

function br() {
    return document.createElement('br')
}
