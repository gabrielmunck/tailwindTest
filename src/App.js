import "./input.css"

function App() {
  return (
    <div className="bg-zinc-900 h-full ">
      <div className="bg-amber-400 flex h-5"></div>
      <div className="flex items-center justify-center">
        <p className=" flex content-center justify-center bg-zinc-800 rounded-full m-5 p-8 text-yellow-400 text-5xl font-bold">Hello world!</p>
        <p className="flex content-center justify-center  bg-zinc-800 rounded-full m-5 p-8 text-yellow-400 text-5xl font-bold">Ola Mundo!</p>
        <p className="flex content-center justify-center bg-zinc-800 rounded-full m-5 p-8 text-yellow-400 text-5xl font-bold">Priviet sekai!</p>
      </div>

      <div className="flex flex-col items-center content-center justify-center">
        <div className="bg-amber-400 flex w-full h-5 "></div>
        <h1></h1>
        <article className="bg-zinc-800 rounded-lg m-5 p-8 px-40 text-slate-300 text-3xl flex justify-center">O aquecimento global e o El Niño são dois fenômenos climáticos que estão
          afetando o Brasil e o mundo. O aquecimento global é o aumento da
          temperatura média da Terra, causado pela emissão de gases de efeito
          estufa. O El Niño é um fenômeno climático que ocorre quando as
          temperaturas da superfície do oceano Pacífico equatorial se elevam
          anormalmente.</article>

        <div className="flex max-[900px]:row flex-col lg:flex-row content-center justify-center">
          <img className="flex h-auto rounded-full m-5 mr-12 shadow-lg dark:shadow-amber-500" src="https://img.freepik.com/fotos-premium/uma-imagem-de-um-planeta-com-fogo-e-a-terra-no-meio_579873-1198.jpg" alt="image description" />
          <div className="flex items-center justify-center bg-amber-400">
            <h3 className="flex content-center justify-center m-5 p-8 text-zinc-800 text-4xl font-bold">Aquecimento Global</h3>
            <p className="flex m-5 p-8 text-zinc-800 text-3xl">O aquecimento global está causando uma série de mudanças climáticas, incluindo:
              Aumento da temperatura média da Terra, Aumento do nível do mar, Mudanças nos padrões de precipitação,
              Aumento da frequência e intensidade de eventos climáticos extremos entre outros.</p>
          </div>
        </div>
      </div>
      {/* <div className="bg-zinc-900 flex w-full h-5 "></div> */}
      <h3 className="flex content-center justify-center m-5 p-8 text-yellow-400 text-4xl font-bold">Consequências a curto prazo</h3>
      <article className="bg-zinc-800 p-8 text-slate-300 text-2xl flex justify-center font-bold">As consequências a curto prazo do aquecimento global já estão sendo sentidas em todo o mundo.
        Alguns dos principais impactos incluem:</article>
        <ul className='bg-zinc-800 p-8 text-slate-300 text-2xl flex flex-col justify-center'>
          <li className='flex content-center m-3 px-32'>Aumento da temperatura média da Terra: O aumento da temperatura média da Terra está causando uma série de mudanças climáticas</li>
          <li className='flex content-center m-3 px-32'>Aumento do nível do mar: O aumento do nível do mar é uma das consequências mais graves do aquecimento global. O nível do mar está subindo em média 3,6 milímetros por ano, e esse ritmo está aumentando. O aumento do nível do mar pode levar a inundações e perda de terras costeiras em todo o mundo.</li>
          <li className='flex content-center m-3 px-32'>Mudanças nos padrões de precipitação: As mudanças nos padrões de precipitação estão causando secas em algumas regiões e inundações em outras. As secas podem levar a perdas de safras, escassez de água e incêndios florestais. As inundações podem causar danos à infraestrutura e perda de vidas.</li>
          <li className='flex content-center m-3 px-32'>Aumento da frequência e intensidade de eventos climáticos extremos: O aquecimento global está levando a um aumento da frequência e intensidade de eventos climáticos extremos, como ondas de calor, secas, inundações e furacões. Esses eventos podem causar danos significativos à infraestrutura, perda de vidas e interrupções na vida cotidiana.</li>
        </ul>
      <div className="bg-amber-400 flex w-full h-5 "></div>
      <h3 className="flex content-center justify-center m-5 p-8 text-yellow-400 text-4xl font-bold">Consequências a longo prazo</h3>
      <div className="bg-amber-400 flex w-full h-5 "></div>
      <article className="bg-zinc-800 p-8 px-44 text-slate-300 text-2xl flex justify-center font-bold">As consequências a longo prazo do aquecimento global podem ser ainda mais graves do que as consequências a curto prazo. Alguns dos principais impactos potenciais incluem:</article>
        <ul className='bg-zinc-800 p-8 text-slate-300 text-2xl flex flex-col justify-center'>
          <li className='flex content-center m-3 px-32'>Extinção de espécies: O aquecimento global está levando à extinção de espécies em todo o mundo. As mudanças climáticas estão tornando o habitat de muitas espécies inadequado para sua sobrevivência.</li>
          <li className='flex content-center m-3 px-32'>Redução da produção agrícola: O aquecimento global pode levar a uma redução da produção agrícola em algumas regiões do mundo. As mudanças climáticas podem causar secas, inundações e pragas, o que pode prejudicar a produção de alimentos.</li>
          <li className='flex content-center m-3 px-32'>Aumento do risco de conflitos: O aquecimento global pode levar a um aumento do risco de conflitos em todo o mundo. As mudanças climáticas podem causar escassez de água, alimentos e outros recursos, o que pode levar a tensões sociais e políticas.</li>
        </ul>
      <div className="bg-amber-400 flex w-full h-40 "></div>
    </div>
  )
}

export default App;

