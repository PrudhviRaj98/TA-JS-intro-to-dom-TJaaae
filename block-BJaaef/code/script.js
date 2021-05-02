let header = document.querySelector('.header')
        let h1 = document.createElement('h1')
        h1.innerHTML = "👙 Peoples of Got"
        header.append(h1)



got.houses.forEach((elem) => {
    elem.people.forEach((peop) => {

        





        let allboxes = document.querySelector('.main');

        let article = document.createElement('div')
        article.classList.add('article')
        article.classList.add('article')

        let imgdiv = document.createElement('div')
        imgdiv.classList.add('imgdiv')

        let img = document.createElement('img')
        img.classList.add('img')
        img.src = peop.image


        let name = document.createElement('h2')
        name.innerHTML = peop.name
        name.classList.add('name')

        let desc = document.createElement('p')
        desc.innerHTML = peop.description
        desc.classList.add('desc')

        let link = document.createElement('a')
        link.href = peop.wikiLink
        link.classList.add('link')
        link.innerHTML = "Learn More"

        allboxes.append(article)
        article.append(imgdiv)

        imgdiv.append(img,name)

        article.append(desc)
        article.append(link)
    })
})