import { useState } from "react";

function App() {
  const [items, setItems] = useState<string[]>([]);

  const [inputValue, setInputvalue] = useState<string>("");

  const handlesubmit = (event:React.FormEvent) => {
    event.preventDefault();
    setItems((prev) => [...prev, inputValue]);
    setInputvalue("");
  }; 
   const handledelete=(value:string)=>{
          setItems((prev)=>prev.filter((data)=> data !== value))
   } 
  return (
    <>
      <div className="w-full h-[600px]">
        <div className="w-full h-[500px] border-2 border-black  flex justify-center items-center ">
          <div className="w-[600px] h-[400px] border-2 border-black ">
            <form action="" onSubmit={handlesubmit}>
              <input
                type="text"
                value={inputValue}
                className="w-[250px] h-[30px] border-2 border-black"
                onChange={(event)=>setInputvalue(event.target.value)}
              />
              <br />
              <button
                type="submit"
                className="w-[150px] h-[50px] border-2 bg-red-800 rounded-lg text-white"
              >
                Add
              </button>
            </form>
            {items.map((data) => (
              <div key={data} className="w-[400px] h-[30px] bg-gray-400 flex justify-around">
                <p>{data}</p>
                <button onClick={()=>handledelete(data)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
