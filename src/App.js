import React from 'react'
import './index.css';
import EmojiButton from './EmojiButton'
import Header from './Header'
import PetCard from './PetCard'

const pets = [
  { id: 1, name: "Fezzik", image: "https://assets.aboutamazon.com/dims4/default/20fb77e/2147483647/strip/true/crop/2000x1127+0+661/resize/660x372!/format/webp/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fc2%2Ff9%2F5f14445748fab399dc00f2b1da22%2F20180108-dogsofamazon-043.jpg" },
  { id: 2, name: "Lucy", image: "https://emborapets.com/wp-content/uploads/2020/08/Why-Does-My-Springer-Spaniel-Smell-So-Bad_.jpg"},
  { id: 3, name: "Blaise", image: "https://www.thesprucepets.com/thmb/P8d4QM0bI4rJh1WygZDI8f8kNV4=/1000x1000/smart/filters:no_upscale()/GettyImages-870255568-8639765b08c6441dbe35ed72e2d8fb48.jpg" }
]

function App() {
  // lets make array of petCards
  const petCards = pets.map((petObj) => {
    return <PetCard key={petObj.id} name={petObj.name} image={petObj.image} />
  })
  console.log(petCards)
  return (
    <div>
      <Header />
      <main>
        {petCards}
      </main>
    </div>
  );
}

export default App
