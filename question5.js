function card()
{
    let name = document.querySelector('#name').value
    let city = document.querySelector('#city').value
    let age = document.querySelector('#age').value
    let img = document.querySelector('#img').value

    console.log(name,city,age,img);

    let d = `<section id="card">
            <div>
                <img src="${img}" alt="">
            </div>
            <div>
                <h1>${name}</h1>
                <h3>${city}</h3>
                <h3>${age}</h3>
            </div>
        </section>`;

    document.querySelector('#output').innerHTML = d;
    document.querySelector('form').style.display = "none";

    return false;
}