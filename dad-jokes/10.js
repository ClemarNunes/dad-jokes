const jokeEl = document.querySelector('#joke')
const jokeBtn = document.querySelector('#jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()


async function generateJoke(){
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }


  let response =  await fetch('https://icanhazdadjoke.com', config)
  let json = await response.json()
  
    jokeEl.innerHTML = json.joke

}